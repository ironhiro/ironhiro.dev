import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GithubIcon, MailIcon, MoonIcon, PenIcon, RssIcon, SunIcon } from './Icons';

describe('Icons', () => {
  it.each([GithubIcon, RssIcon, PenIcon, MailIcon, MoonIcon, SunIcon])('renders a decorative svg (%#)', (Icon) => {
    const { container } = render(<Icon className="x" />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('aria-hidden')).toBe('true');
    expect(svg?.getAttribute('class')).toBe('x');
  });
});
