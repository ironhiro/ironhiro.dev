import { Chips } from '../../../components/Chips';
import type { TagCount } from '../../../types/post';

export interface TagChipsProps {
  /** Plain names, or names with a post count shown beside them. */
  tags: (string | TagCount)[];
  label?: string;
}

export function TagChips({ tags, label }: TagChipsProps) {
  const items = tags.map((t) => {
    const { name, count } = typeof t === 'string' ? { name: t, count: undefined } : t;
    return { label: `#${name}`, href: `/tags/${name}/`, count };
  });
  return <Chips items={items} label={label} />;
}
