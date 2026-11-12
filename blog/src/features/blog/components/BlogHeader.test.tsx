import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BlogHeader } from './BlogHeader';

describe('BlogHeader', () => {
  it('marks the current section and links to the resume, GitHub and RSS', () => {
    render(<BlogHeader current="tags" />);
    expect(screen.getByRole('link', { name: 'Tags' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('link', { name: 'Posts' }).getAttribute('aria-current')).toBeNull();
    expect(screen.getByRole('link', { name: 'About' }).getAttribute('href')).toBe('https://ironhiro.dev');
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'RSS' }).getAttribute('href')).toBe('/rss.xml');
  });
});
