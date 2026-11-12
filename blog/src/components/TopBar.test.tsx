import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { scrollWindowTo } from '../test/helpers';
import { TopBar, TopBarLink } from './TopBar';

describe('TopBar', () => {
  it('shows the brand, its children and the theme toggle', () => {
    render(
      <TopBar brand="ironhiro.log">
        <TopBarLink href="/" active>Posts</TopBarLink>
      </TopBar>,
    );
    expect(screen.getByRole('link', { name: 'ironhiro.log' }).getAttribute('href')).toBe('/');
    expect(screen.getByRole('link', { name: 'Posts' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('button', { name: /테마 전환/ })).toBeTruthy();
  });

  it('gains a bottom border once the page scrolls', () => {
    render(<TopBar brand="b" />);
    const bar = screen.getByRole('banner');
    expect(bar.classList.contains('scrolled')).toBe(false);
    scrollWindowTo(40);
    expect(bar.classList.contains('scrolled')).toBe(true);
  });

  it('opens external links in a new tab', () => {
    render(<TopBarLink href="https://github.com" external label="GitHub">x</TopBarLink>);
    const link = screen.getByRole('link', { name: 'GitHub' });
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener');
  });
});
