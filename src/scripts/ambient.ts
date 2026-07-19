// Canvas starfield for the ambient "digital darbar" backdrop (#ambient-layer
// in index.astro, outside kiosk.ts's re-rendered mount points so this module
// only ever needs to be initialized once). The CSS-only drifting blobs and
// grain overlay live in global.css; this handles just the twinkling particle
// field, since that needs a render loop.

import { prefersReducedMotion } from './animate';

const PARTICLE_COUNT = 140;
const MAX_DPR = 1.5;

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
}

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let sprite: HTMLCanvasElement | null = null;
let particles: Particle[] = [];
let rafId = 0;
let mode: 'attract' | 'active' = 'attract';
let width = 0;
let height = 0;

// Default matches --color-gold-300's base value; retinted per-theme via
// retintForTheme() below so the starfield's color follows the active
// occasion theme instead of always being the default gold.
let spriteRgb = { r: 247, g: 217, b: 137 };

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) {
    return null;
  }
  const value = parseInt(match[1], 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

// A single pre-rendered radial-gradient dot, reused for every particle via
// drawImage() every frame instead of re-running createRadialGradient() (or
// worse, shadowBlur) per particle per frame — the classic canvas-perf trap
// on modest kiosk GPUs. Rebuilt (cheap, one-off) whenever the theme changes.
function buildSprite(): HTMLCanvasElement {
  const size = 24;
  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = size;
  spriteCanvas.height = size;
  const sctx = spriteCanvas.getContext('2d');
  if (sctx) {
    const { r, g, b } = spriteRgb;
    const gradient = sctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.95)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    sctx.fillStyle = gradient;
    sctx.fillRect(0, 0, size, size);
  }
  return spriteCanvas;
}

function resize(): void {
  if (!canvas || !ctx) {
    return;
  }
  const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = Math.max(1, Math.floor(width * dpr));
  canvas.height = Math.max(1, Math.floor(height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function seedParticles(): void {
  particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 0.6 + Math.random() * 1.6,
    speed: 0.015 + Math.random() * 0.045,
    drift: (Math.random() - 0.5) * 0.02,
    phase: Math.random() * Math.PI * 2,
  }));
}

function tick(time: number): void {
  if (!ctx || !canvas || !sprite) {
    return;
  }
  ctx.clearRect(0, 0, width, height);

  // Full speed on the attract screen; a slower, dimmer pass once the kiosk
  // is awake. Alpha is kept modest even in 'attract' mode — the attract
  // screen's glass panel covers most of the viewport, and backdrop-blur
  // samples whatever sits behind it, so a bright starfield reads as haze
  // through the glass rather than a crisp background effect.
  const speedFactor = mode === 'attract' ? 1 : 0.35;
  const baseAlpha = mode === 'attract' ? 0.45 : 0.3;

  for (const particle of particles) {
    particle.y -= particle.speed * speedFactor;
    particle.x += particle.drift * speedFactor;
    if (particle.y < -10) {
      particle.y = height + 10;
      particle.x = Math.random() * width;
    }
    if (particle.x < -10) {
      particle.x = width + 10;
    } else if (particle.x > width + 10) {
      particle.x = -10;
    }

    const twinkle = 0.5 + 0.5 * Math.sin(time / 900 + particle.phase);
    ctx.globalAlpha = baseAlpha * twinkle;
    const drawSize = particle.radius * 12;
    ctx.drawImage(sprite, particle.x - drawSize / 2, particle.y - drawSize / 2, drawSize, drawSize);
  }
  ctx.globalAlpha = 1;

  rafId = requestAnimationFrame(tick);
}

function stop(): void {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
}

function start(): void {
  if (rafId || !ctx || document.hidden || prefersReducedMotion()) {
    return;
  }
  rafId = requestAnimationFrame(tick);
}

/**
 * One-time setup — call once at module init (kiosk.ts owns the call site,
 * mirroring initPressFeedback()). No-ops safely if the canvas or 2D context
 * is unavailable so a broken/unsupported environment just shows the CSS-only
 * blob layer with no starfield, never a thrown error.
 */
export function initAmbient(): void {
  canvas = document.getElementById('ambient-canvas') as HTMLCanvasElement | null;
  if (!canvas) {
    return;
  }
  ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  sprite = buildSprite();
  resize();
  seedParticles();
  start();

  window.addEventListener('resize', () => {
    resize();
    seedParticles();
  });

  // Hard-stop off-screen/backgrounded tabs and honor a live reduced-motion
  // preference change — a kiosk left running for days shouldn't burn cycles
  // animating a starfield nobody can see or has asked not to see.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
    if (prefersReducedMotion()) {
      stop();
    } else {
      start();
    }
  });
}

/** Called from kiosk.ts's render() on every awake/asleep transition. */
export function setAmbientMode(next: 'attract' | 'active'): void {
  mode = next;
}

/**
 * Rebuilds the starfield sprite in the active theme's gold tone. Cheap
 * (one 24x24 canvas draw) and only runs on theme change, not per frame, so
 * it's safe to call from kiosk.ts's applyDocumentTheme() every time. No-ops
 * before initAmbient() has run or if the resolved color can't be parsed.
 */
export function retintForTheme(goldHex: string): void {
  const rgb = hexToRgb(goldHex);
  if (!rgb) {
    return;
  }
  spriteRgb = rgb;
  if (canvas) {
    sprite = buildSprite();
  }
}
