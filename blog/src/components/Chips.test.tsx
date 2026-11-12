import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Chips } from './Chips';

describe('Chips', () => {
  it('renders plain and linked chips with optional counts', () => {
    render(<Chips label="태그" items={[{ label: 'C#' }, { label: '#blog', href: '/tags/blog/', count: 3 }]} />);
    expect(screen.getByRole('list', { name: '태그' })).toBeTruthy();
    expect(screen.getByText('C#').tagName).toBe('SPAN');
    expect(screen.getByRole('link', { name: /^#blog\s*3$/ }).getAttribute('href')).toBe('/tags/blog/');
  });

  it('renders nothing for an empty list', () => {
    const { container } = render(<Chips items={[]} />);
    expect(container.innerHTML).toBe('');
  });
});
