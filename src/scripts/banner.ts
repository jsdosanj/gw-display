// Crossfade slide rotator for the attract screen and Home hero — the
// "museum wall label" cadence (slow, dignified fades between painted
// heritage imagery) rather than a slide/swipe carousel, which reads more
// "e-commerce" than "digital darbar". No dependencies: compositor-only CSS
// opacity/scale transitions driven by toggling a `data-active` attribute.

import { prefersReducedMotion } from './animate';

export interface RotatorOptions {
  container: HTMLElement;
  dwellMs: number;
  slideSelector?: string;
  dotSelector?: string;
}

export interface Rotator {
  start(): void;
  stop(): void;
  pause(): void;
  resume(): void;
  destroy(): void;
  goTo(index: number): void;
  isPaused(): boolean;
}

/**
 * Builds a rotator over slides/dots already present under `container`
 * (rendered by the caller's template string). The caller owns the DOM
 * lifecycle — since kiosk.ts fully rebuilds its mount points on every
 * render(), every rotator must be destroy()ed before its container's
 * innerHTML is replaced, and a fresh one created afterward if still needed.
 */
export function createRotator(options: RotatorOptions): Rotator {
  const { container, dwellMs } = options;
  const slides = Array.from(container.querySelectorAll<HTMLElement>(options.slideSelector ?? '[data-rotator-slide]'));
  const dots = Array.from(container.querySelectorAll<HTMLElement>(options.dotSelector ?? '[data-rotator-dot]'));

  let index = 0;
  let timer: ReturnType<typeof setInterval> | null = null;
  let paused = false;
  let destroyed = false;

  function applyActive(): void {
    slides.forEach((slide, i) => {
      slide.dataset.active = String(i === index);
    });
    dots.forEach((dot, i) => {
      dot.dataset.active = String(i === index);
    });
  }

  function stopTimer(): void {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  function advance(): void {
    if (slides.length === 0) {
      return;
    }
    index = (index + 1) % slides.length;
    applyActive();
  }

  function start(): void {
    if (destroyed || paused || slides.length <= 1 || prefersReducedMotion()) {
      return;
    }
    stopTimer();
    timer = setInterval(advance, dwellMs);
  }

  function stop(): void {
    stopTimer();
  }

  function pause(): void {
    paused = true;
    container.dataset.paused = 'true';
    stopTimer();
  }

  function resume(): void {
    if (destroyed) {
      return;
    }
    paused = false;
    container.dataset.paused = 'false';
    start();
  }

  function destroy(): void {
    destroyed = true;
    stopTimer();
  }

  function goTo(i: number): void {
    if (i < 0 || i >= slides.length) {
      return;
    }
    index = i;
    applyActive();
  }

  // The container's data-paused attribute is left as the caller rendered it
  // (or as a later pause()/resume() call sets it) — creating a rotator must
  // not silently un-pause a container the caller already marked paused.
  applyActive();

  return { start, stop, pause, resume, destroy, goTo, isPaused: () => paused };
}
