import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { jobs } from '../data';
import { Timeline } from './Timeline';

describe('Timeline', () => {
  it('renders every job with its period and stack', () => {
    render(<Timeline jobs={jobs} />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(jobs.length);
    expect(screen.getByText('2023.09 — 2026.04')).toBeTruthy();
    expect(screen.getAllByText('CUDA').length).toBeGreaterThan(0);
  });

  it('puts details in a collapsed disclosure only where there are any', () => {
    const { container } = render(<Timeline jobs={jobs} />);
    const details = container.querySelectorAll('details');
    expect(details).toHaveLength(jobs.filter((j) => j.details).length);
    expect(details[0].open).toBe(false);
    expect(details[0].querySelectorAll('h4').length).toBe(jobs[0].details?.length);
  });
});
