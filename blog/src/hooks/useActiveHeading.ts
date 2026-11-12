import { useEffect, useState } from 'react';

/** Index of the last heading whose top has scrolled above `offset`, or -1. */
export function useActiveHeading(ids: string[], offset = 120): number {
  const [active, setActive] = useState(-1);
  const key = ids.join('\n');
  useEffect(() => {
    const heads = ids.map((id) => document.getElementById(id));
    const onScroll = () => {
      let current = -1;
      heads.forEach((h, i) => {
        if (h && h.getBoundingClientRect().top <= offset) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // ids is captured through `key` so a new array with the same contents does not re-subscribe
  }, [key, offset]);
  return active;
}
