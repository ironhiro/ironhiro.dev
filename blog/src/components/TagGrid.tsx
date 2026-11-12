import type { TagCount } from '../types/post';
import styles from './TagGrid.module.css';

export interface TagGridProps {
  tags: TagCount[];
}

export function TagGrid({ tags }: TagGridProps) {
  return (
    <ul className={styles.grid}>
      {tags.map(({ name, count }) => (
        <li key={name}>
          <a className={styles.tile} href={`/tags/${name}/`}>
            <span><span className={styles.hash}>#</span>{name}</span>
            <span className={styles.count}>{count}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
