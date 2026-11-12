import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { scrollWindowTo } from '../../../test/helpers';
import { Toc } from './Toc';

const headings = [
  { depth: 2, slug: 'one', text: '첫 번째' },
  { depth: 3, slug: 'two', text: '두 번째' },
];

// the TOC is display:none below 1120px, which is what jsdom reports, so queries include hidden nodes
describe('Toc', () => {
  it('links to each heading', () => {
    render(<Toc headings={headings} />);
    expect(screen.getByRole('link', { name: '첫 번째', hidden: true }).getAttribute('href')).toBe('#one');
    expect(screen.getByRole('link', { name: '두 번째', hidden: true }).closest('li')?.className).toContain('sub');
  });

  it('highlights the last heading that has scrolled past the top', () => {
    const tops: Record<string, number> = { one: -200, two: 50 };
    for (const id of Object.keys(tops)) {
      const el = document.createElement('h2');
      el.id = id;
      el.getBoundingClientRect = () => ({ top: tops[id] }) as DOMRect;
      document.body.append(el);
    }
    render(<Toc headings={headings} />);
    scrollWindowTo(300);
    expect(screen.getByRole('link', { name: '두 번째', hidden: true }).className).toContain('active');
    expect(screen.getByRole('link', { name: '첫 번째', hidden: true }).className).not.toContain('active');
  });
});
