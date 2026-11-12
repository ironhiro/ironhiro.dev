import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ResumeSection } from './ResumeSection';

describe('ResumeSection', () => {
  it('is a labelled region with an anchor id', () => {
    render(
      <ResumeSection id="about" index="01" title="About">
        <p>body</p>
      </ResumeSection>,
    );
    const region = screen.getByRole('region', { name: /^01\s*About$/ });
    expect(region.id).toBe('about');
    expect(screen.getByText('body')).toBeTruthy();
  });
});
