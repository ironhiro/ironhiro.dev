import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SpecSheet } from './SpecSheet';

describe('SpecSheet', () => {
  it('renders each label with its value', () => {
    render(<SpecSheet items={[{ label: 'Core', value: 'C#' }]} />);
    expect(screen.getByRole('term').textContent).toBe('Core');
    expect(screen.getByRole('definition').textContent).toBe('C#');
  });
});
