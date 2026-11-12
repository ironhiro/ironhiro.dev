import { useEffect } from 'react';

/**
 * Fades `[data-reveal]` elements in as they scroll into view (styles in styles/base.css).
 * Items already on screen are shown before the hiding class is added, so nothing flickers,
 * and without JS nothing is ever hidden.
 */
export function useRevealOnScroll(selector = '[data-reveal]'): void {
  useEffect(() => {
    const items = [...document.querySelectorAll<HTMLElement>(selector)];
    if (!('IntersectionObserver' in window)) return;

    const inView = (el: HTMLElement) => el.getBoundingClientRect().top < window.innerHeight;
    items.filter(inView).forEach((el) => el.classList.add('in'));
    document.documentElement.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.filter((el) => !el.classList.contains('in')).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
