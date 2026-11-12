import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteFooter } from './SiteFooter';

describe('SiteFooter', () => {
  it('renders the copyright year and links', () => {
    render(<SiteFooter year={2026} links={[{ label: 'rss', href: '/rss.xml' }, { label: 'github', href: 'https://github.com', external: true }]} />);
    expect(screen.getByText('© 2026 조용현')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'rss' }).getAttribute('target')).toBeNull();
    expect(screen.getByRole('link', { name: 'github' }).getAttribute('target')).toBe('_blank');
  });
});
