import { render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { SocialLinks } from './SocialLinks';

const links = [{ label: 'GitHub', icon: 'github' as const, href: 'https://github.com/x', external: true }];
const email = { user: 'someone', domain: 'example.com' };

describe('SocialLinks', () => {
  it('keeps the address out of the server-rendered HTML', () => {
    expect(renderToString(<SocialLinks links={links} email={email} />)).not.toContain('someone@example.com');
  });

  it('builds the mailto link in the browser', () => {
    render(<SocialLinks links={links} email={email} />);
    expect(screen.getByRole('link', { name: 'Email' }).getAttribute('href')).toBe('mailto:someone@example.com');
    expect(screen.getByRole('link', { name: 'GitHub' }).getAttribute('target')).toBe('_blank');
  });
});
