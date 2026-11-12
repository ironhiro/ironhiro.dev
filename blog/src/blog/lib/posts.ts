import { getCollection, type CollectionEntry } from 'astro:content';
import type { PostLink, PostSummary, TagCount } from '../../types/post';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getTags(posts: Post[]): TagCount[] {
  const counts = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

// Korean prose reads at roughly 500 characters a minute; code blocks count less.
export function readingMinutes(body = ''): number {
  const text = body.replace(/```[\s\S]*?```/g, (m) => m.slice(0, m.length / 3)).replace(/\s+/g, '');
  return Math.max(1, Math.round(text.length / 500));
}

export function toSummary(post: Post): PostSummary {
  const { title, description, pubDate, updatedDate, tags, draft } = post.data;
  return {
    id: post.id,
    title,
    description,
    pubDate: pubDate.toISOString(),
    updatedDate: updatedDate?.toISOString(),
    tags,
    draft,
    minutes: readingMinutes(post.body),
  };
}

export const toLink = (post: Post | undefined): PostLink | undefined =>
  post && { id: post.id, title: post.data.title };
