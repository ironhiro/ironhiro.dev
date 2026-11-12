import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { education } from '../data';
import { EducationList } from './EducationList';

describe('EducationList', () => {
  it('renders each entry and its notes', () => {
    render(<EducationList items={education} />);
    expect(screen.getByText('금오공과대학교')).toBeTruthy();
    expect(screen.getByText('JLPT N1')).toBeTruthy();
    expect(screen.getByText('교내 C/C++ 멘토링 활동')).toBeTruthy();
  });
});
