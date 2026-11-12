import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProjectGrid } from './ProjectGrid';

describe('ProjectGrid', () => {
  it('links cards that have a URL and leaves the rest plain', () => {
    render(
      <ProjectGrid
        projects={[
          { tag: '2026', title: 'Linked', href: 'https://a.dev', description: 'd', links: [{ label: 'GitHub ↗', href: 'https://g' }], stack: ['React'] },
          { tag: '2024', title: 'Plain', subtitle: 'sub', description: 'd', stack: [] },
        ]}
      />,
    );
    expect(screen.getByRole('link', { name: 'Linked' }).getAttribute('href')).toBe('https://a.dev');
    expect(screen.getByRole('link', { name: 'GitHub ↗' })).toBeTruthy();
    expect(screen.queryByRole('link', { name: /Plain/ })).toBeNull();
    expect(screen.getByText('sub')).toBeTruthy();
  });
});
