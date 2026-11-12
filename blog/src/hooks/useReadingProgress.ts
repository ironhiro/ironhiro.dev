import { useEffect, type RefObject } from 'react';

/**
 * Writes how far `selector` has been read (0–1) into the `--p` custom property of `target`.
 * Updates the DOM directly so scrolling does not re-render React.
 */
export function useReadingProgress(target: RefObject<HTMLElement | null>, selector = 'article'): void {
  useEffect(() => {
    const el = document.querySelector(selector);
    const bar = target.current;
    if (!el || !bar) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      bar.style.setProperty('--p', String(p));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [target, selector]);
}
