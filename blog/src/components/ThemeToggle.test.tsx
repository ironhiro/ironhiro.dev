import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { mockMatchMedia } from '../test/helpers';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => mockMatchMedia(false)); // system prefers dark

  it('switches from the system theme to the other one and remembers it', () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button', { name: /테마 전환/ }));
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('flips an explicitly chosen theme back', () => {
    document.documentElement.dataset.theme = 'light';
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button'));
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
