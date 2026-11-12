import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { About } from './About';

describe('About', () => {
  it('renders paragraphs and a skill table', () => {
    render(<About paragraphs={[<>hello <strong>world</strong></>]} skills={[{ label: 'Core', items: ['C#', 'WPF'] }]} />);
    expect(screen.getByText('world').tagName).toBe('STRONG');
    expect(screen.getByRole('term').textContent).toBe('Core');
    expect(screen.getByText('WPF')).toBeTruthy();
  });
});
