import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TagGrid } from './TagGrid';

describe('TagGrid', () => {
  it('renders a tile per tag with its count', () => {
    render(<TagGrid tags={[{ name: 'blog', count: 4 }]} />);
    const link = screen.getByRole('link', { name: /^#\s*blog\s*4$/ });
    expect(link.getAttribute('href')).toBe('/tags/blog/');
  });
});
