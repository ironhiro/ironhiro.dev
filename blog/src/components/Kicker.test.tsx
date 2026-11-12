import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Kicker } from './Kicker';

describe('Kicker', () => {
  it('links crumbs that have an href and separates them', () => {
    const { container } = render(<Kicker crumbs={[{ label: 'tags', href: '/tags/' }, { label: 'csharp' }]} />);
    expect(screen.getByRole('link', { name: 'tags' }).getAttribute('href')).toBe('/tags/');
    expect(container.textContent).toBe('tags/csharp');
  });
});
