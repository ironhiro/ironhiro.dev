import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ResumeHeader } from './ResumeHeader';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
];

// the section nav is display:none below 860px, which is what jsdom reports
describe('ResumeHeader', () => {
  it('links to each section and marks a clicked one active', () => {
    render(<ResumeHeader sections={sections} />);
    const projects = screen.getByRole('link', { name: 'Projects', hidden: true });
    expect(projects.getAttribute('href')).toBe('#projects');
    fireEvent.click(projects);
    expect(projects.getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('link', { name: 'About', hidden: true }).getAttribute('aria-current')).toBeNull();
  });
});
