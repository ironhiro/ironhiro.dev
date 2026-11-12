import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PageHeading } from './PageHeading';

describe('PageHeading', () => {
  it('renders crumbs, prefix, title and count', () => {
    render(<PageHeading crumbs={[{ label: 'tags', href: '/tags/' }, { label: 'blog' }]} prefix="#" title="blog" count={3} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('#blog3');
    expect(screen.getByRole('link', { name: 'tags' })).toBeTruthy();
  });
});
