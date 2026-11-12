import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TagChips } from './TagChips';

describe('TagChips', () => {
  it('links each tag to its tag page', () => {
    render(<TagChips tags={['csharp', { name: 'wpf', count: 2 }]} />);
    expect(screen.getByRole('link', { name: '#csharp' }).getAttribute('href')).toBe('/tags/csharp/');
    expect(screen.getByRole('link', { name: /^#wpf\s*2$/ }).getAttribute('href')).toBe('/tags/wpf/');
  });
});
