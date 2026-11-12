import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HomeHero } from './HomeHero';

describe('HomeHero', () => {
  it('renders the blog title and author link', () => {
    render(<HomeHero />);
    expect(screen.getByRole('heading', { level: 1, name: '소프트웨어와 하드웨어 사이의 기록' })).toBeTruthy();
    expect(screen.getByRole('link', { name: '조용현' }).getAttribute('href')).toBe('https://ironhiro.dev');
  });
});
