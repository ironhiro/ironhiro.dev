import { describe, expect, it } from 'vitest';
import { cx } from './cx';
import { wrapClass } from './wrap';

describe('cx / wrapClass', () => {
  it('joins truthy class names', () => {
    expect(cx('a', false, null, undefined, 'b')).toBe('a b');
  });

  it('adds the width modifier except for the default width', () => {
    expect(wrapClass()).toBe('wrap');
    expect(wrapClass('wide', 'x')).toBe('wrap wide x');
  });
});
