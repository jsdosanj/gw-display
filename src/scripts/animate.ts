// Small vanilla animation toolkit: a View Transition wrapper, an
// IntersectionObserver-based reveal-on-view helper, and delegated tap-ripple
// feedback. No dependencies — kiosk hardware and the PWA's offline bundle
// budget don't justify a library for fades/staggers/ripples.

export type TransitionType = 'view' | 'selection' | 'none';

let reducedMotionQuery: MediaQueryList | null = null;

function motionQuery(): MediaQueryList {
  if (!reducedMotionQuery) {
    reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  }
  return reducedMotionQuery;
}

export function prefersReducedMotion(): boolean {
  return motionQuery().matches;
}

// Marks the document as animation-capable so CSS can safely hide
// [data-reveal] elements before their entrance plays. If this module never
// loads (script error, disabled JS), the class is absent and content stays
// visible at full opacity — never a broken, permanently-hidden page.
document.documentElement.classList.add('js-anim');

/**
 * Runs `mutate` (a synchronous DOM update — typically kiosk.ts's render
 * body) inside document.startViewTransition() when available and motion
 * isn't reduced; otherwise calls it directly. Returns whether the native
 * API actually ran, so callers can skip a legacy fallback animation instead
 * of double-animating.
 */
export function transitionRender(mutate: () => void, type: TransitionType = 'view'): boolean {
  const supportsViewTransitions = typeof document.startViewTransition === 'function';

  if (!supportsViewTransitions || type === 'none' || prefersReducedMotion()) {
    mutate();
    return false;
  }

  document.documentElement.dataset.vtType = type;
  const transition = document.startViewTransition(mutate);
  transition.finished.finally(() => {
    delete document.documentElement.dataset.vtType;
  });
  return true;
}

let revealObserver: IntersectionObserver | null = null;

/**
 * (Re)observes every [data-reveal] element under `root` so it gains an
 * `.in-view` class the first time it scrolls into view, staggered via a
 * `--i` custom property scoped to its nearest [data-reveal-group]. Safe to
 * call after every render() — a fresh observer replaces the last one since
 * a full innerHTML rebuild invalidates prior observations anyway.
 */
export function observeReveals(root: HTMLElement): void {
  revealObserver?.disconnect();

  if (typeof IntersectionObserver === 'undefined') {
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        entry.target.classList.add('in-view');
        revealObserver?.unobserve(entry.target);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
  );

  const groupCounters = new Map<Element, number>();
  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const group = el.closest('[data-reveal-group]') ?? document.body;
    const index = groupCounters.get(group) ?? 0;
    groupCounters.set(group, index + 1);
    el.style.setProperty('--i', String(index));
    revealObserver?.observe(el);
  });
}

let pressFeedbackReady = false;

/**
 * One delegated pointerdown listener (mirrors kiosk.ts's delegated click
 * handler) that spawns a tap ripple inside the nearest [data-ripple]
 * ancestor of the touch point. Document-level, so it survives every
 * innerHTML rebuild without needing to be re-attached per render.
 */
export function initPressFeedback(): void {
  if (pressFeedbackReady) {
    return;
  }
  pressFeedbackReady = true;

  document.addEventListener(
    'pointerdown',
    (event) => {
      if (prefersReducedMotion()) {
        return;
      }

      // Some pointerdown handlers elsewhere (e.g. waking the kiosk from the
      // attract screen) synchronously rebuild the DOM in response to this
      // same event, which would detach event.target before this listener's
      // turn. Deferring one frame and re-resolving by coordinates makes the
      // ripple robust to that instead of silently appending to an orphaned
      // node — it lands on whatever [data-ripple] element (if any) actually
      // ends up at that point once the dust settles.
      const x = event.clientX;
      const y = event.clientY;
      requestAnimationFrame(() => {
        const target = document.elementFromPoint(x, y)?.closest<HTMLElement>('[data-ripple]');
        if (!target) {
          return;
        }

        const rect = target.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'tap-ripple';
        ripple.style.left = `${x - rect.left}px`;
        ripple.style.top = `${y - rect.top}px`;
        ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
        target.appendChild(ripple);
      });
    },
    { passive: true },
  );
}
