import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { makePost } from '../../../test/helpers';
import { PostList } from './PostList';

describe('PostList', () => {
  it('groups posts by year, newest first as given', () => {
    render(
      <PostList
        posts={[
          makePost({ id: 'b', title: 'B', pubDate: '2026-03-05T12:00:00.000Z' }),
          makePost({ id: 'a', title: 'A', pubDate: '2025-12-24T12:00:00.000Z', draft: true }),
        ]}
      />,
    );
    const years = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(years).toEqual(['20261', '20251']);
    expect(screen.getByRole('link', { name: 'B' }).getAttribute('href')).toBe('/posts/b/');
    expect(screen.getByText('03.05')).toBeTruthy();
    const older = screen.getByRole('link', { name: 'A' }).closest('li') as HTMLElement;
    expect(within(older).getByText('draft')).toBeTruthy();
    expect(within(older).getByRole('link', { name: '#blog' })).toBeTruthy();
  });

  it('says so when there are no posts', () => {
    render(<PostList posts={[]} />);
    expect(screen.getByText('아직 글이 없습니다.')).toBeTruthy();
  });
});
