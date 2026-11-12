import type { TagCount } from '../types/post';
import styles from './TagChips.module.css';

export interface TagChipsProps {
  /** Plain names, or names with a post count shown beside them. */
  tags: (string | TagCount)[];
  label?: string;
}

export function TagChips({ tags, label }: TagChipsProps) {
  if (tags.length === 0) return null;
  return (
    <ul className={styles.list} aria-label={label}>
      {tags.map((t) => {
        const { name, count } = typeof t === 'string' ? { name: t, count: undefined } : t;
        return (
          <li key={name}>
            <a className={styles.chip} href={`/tags/${name}/`}>
              #{name}
              {count !== undefined && <span className={styles.count}>{count}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
