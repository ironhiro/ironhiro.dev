import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { scrollWindowTo } from '../../../test/helpers';
import { ReadingProgress } from './ReadingProgress';

describe('ReadingProgress', () => {
  it('writes how far the article has been read into --p', () => {
    const article = document.createElement('article');
    let top = 0;
    article.getBoundingClientRect = () => ({ top, height: window.innerHeight + 1000 }) as DOMRect;
    document.body.append(article);

    const { container } = render(<ReadingProgress />);
    const bar = container.firstElementChild as HTMLElement;
    expect(bar.style.getPropertyValue('--p')).toBe('0');

    top = -500;
    scrollWindowTo(500);
    expect(bar.style.getPropertyValue('--p')).toBe('0.5');
  });
});
