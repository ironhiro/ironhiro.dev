import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Pager } from './Pager';

describe('Pager', () => {
  it('links to the older and newer posts', () => {
    render(<Pager older={{ id: 'old', title: '이전' }} newer={{ id: 'new', title: '다음' }} />);
    expect(screen.getByRole('link', { name: /이전/ }).getAttribute('href')).toBe('/posts/old/');
    expect(screen.getByRole('link', { name: /다음/ }).getAttribute('href')).toBe('/posts/new/');
  });

  it('renders nothing for a lone post', () => {
    const { container } = render(<Pager />);
    expect(container.innerHTML).toBe('');
  });
});
