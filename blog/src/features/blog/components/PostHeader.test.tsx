import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { makePost } from '../../../test/helpers';
import { PostHeader } from './PostHeader';

describe('PostHeader', () => {
  it('shows title, dates, reading time and tags', () => {
    render(
      <PostHeader
        post={makePost({ pubDate: '2026-10-08T12:00:00.000Z', updatedDate: '2026-11-01T12:00:00.000Z', minutes: 4, tags: ['csharp'] })}
      />,
    );
    expect(screen.getByRole('heading', { level: 1, name: '블로그를 시작합니다' })).toBeTruthy();
    expect(screen.getByText('2026.10.08').getAttribute('datetime')).toBe('2026-10-08T12:00:00.000Z');
    expect(screen.getByText('수정 2026.11.01')).toBeTruthy();
    expect(screen.getByText('4분 읽기')).toBeTruthy();
    expect(screen.getByRole('link', { name: '#csharp' })).toBeTruthy();
  });
});
