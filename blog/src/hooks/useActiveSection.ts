import { useCallback, useEffect, useRef, useState } from 'react';

export interface ActiveSection {
  /** Index into `ids` of the section in view, or -1 above the first one. */
  active: number;
  /** Marks a section active after a nav click; it stays until the user scrolls by hand. */
  pin: (index: number) => void;
}

/**
 * Tracks which section is in view for an in-page nav. Interactions inside an element
 * marked `data-section-nav` do not release a pin, so clicking another nav item works.
 */
export function useActiveSection(ids: string[]): ActiveSection {
  const [active, setActive] = useState(-1);
  const pinned = useRef(false);
  const key = ids.join('\n');

  useEffect(() => {
    const sections = key.split('\n').map((id) => document.getElementById(id));
    const update = () => {
      if (pinned.current) return;
      const doc = document.documentElement;
      // at the bottom the last sections can never reach the top, so pick the last one
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        setActive(sections.length - 1);
        return;
      }
      let current = -1;
      sections.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.3) current = i;
      });
      setActive(current);
    };
    const release = (e: Event) => {
      if (!(e.target instanceof Element) || !e.target.closest('[data-section-nav]')) pinned.current = false;
    };
    const releaseOn = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const;

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    releaseOn.forEach((t) => window.addEventListener(t, release, { passive: true }));
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      releaseOn.forEach((t) => window.removeEventListener(t, release));
    };
  }, [key]);

  const pin = useCallback((index: number) => {
    pinned.current = true;
    setActive(index);
  }, []);

  return { active, pin };
}
