import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { FakeIntersectionObserver, mockIntersectionObserver } from '../../../test/helpers';
import { RevealOnScroll } from './RevealOnScroll';

const item = (top: number) => {
  const el = document.createElement('div');
  el.dataset.reveal = '';
  el.getBoundingClientRect = () => ({ top }) as DOMRect;
  document.body.append(el);
  return el;
};

describe('RevealOnScroll', () => {
  beforeEach(() => mockIntersectionObserver());

  it('shows on-screen items at once and the rest as they come into view', () => {
    const visible = item(10);
    const below = item(window.innerHeight + 500);
    render(<RevealOnScroll />);

    expect(document.documentElement.classList.contains('reveal-ready')).toBe(true);
    expect(visible.classList.contains('in')).toBe(true);
    expect(below.classList.contains('in')).toBe(false);

    const io = FakeIntersectionObserver.instances[0];
    expect([...io.observed]).toEqual([below]);
    io.intersect(below);
    expect(below.classList.contains('in')).toBe(true);
  });
});
