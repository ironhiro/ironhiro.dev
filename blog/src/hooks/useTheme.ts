import { useCallback } from 'react';

export type Theme = 'light' | 'dark';

const currentTheme = (): Theme => {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

/**
 * Flips whatever theme is showing and remembers it. The saved theme is applied
 * before first paint by an inline script in Base.astro, so icons are CSS-driven
 * and nothing here needs to render differently on the server.
 */
export function useThemeToggle(): () => void {
  return useCallback(() => {
    const next: Theme = currentTheme() === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // storage can be unavailable (private mode); the toggle still works for this page
    }
  }, []);
}
