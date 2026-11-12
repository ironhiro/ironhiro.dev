import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { profile, spec } from '../data';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the name, role, children and spec sheet', () => {
    render(
      <Hero profile={profile} spec={spec}>
        <a href="#x">contact</a>
      </Hero>,
    );
    expect(screen.getByRole('heading', { level: 1, name: '조용현' })).toBeTruthy();
    expect(screen.getByText(profile.role)).toBeTruthy();
    expect(screen.getByRole('link', { name: 'contact' })).toBeTruthy();
    expect(screen.getByText('5년차')).toBeTruthy();
  });
});
