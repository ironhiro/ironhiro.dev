import { useActiveHeading } from '../hooks/useActiveHeading';
import type { TocHeading } from '../types/post';
import { cx } from '../utils/cx';
import styles from './Toc.module.css';

export interface TocProps {
  headings: TocHeading[];
}

/** Sticky table of contents (wide screens only); hydrated to follow the heading in view. */
export function Toc({ headings }: TocProps) {
  const active = useActiveHeading(headings.map((h) => h.slug));
  return (
    <aside className={styles.toc} aria-label="목차">
      <p className={styles.heading}>목차</p>
      <ol className={styles.list}>
        {headings.map((h, i) => (
          <li key={h.slug} className={cx(h.depth === 3 && styles.sub)}>
            <a href={`#${h.slug}`} className={cx(i === active && styles.active)}>{h.text}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
