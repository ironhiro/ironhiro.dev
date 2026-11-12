import type { PostLink } from '../types/post';
import styles from './Pager.module.css';

export interface PagerProps {
  older?: PostLink;
  newer?: PostLink;
}

export function Pager({ older, newer }: PagerProps) {
  if (!older && !newer) return null;
  return (
    <nav className={styles.pager} aria-label="다른 글">
      {older ? (
        <a className={styles.link} href={`/posts/${older.id}/`}>
          <span className={styles.label}>← prev</span>
          <span className={styles.title}>{older.title}</span>
        </a>
      ) : (
        <span />
      )}
      {newer && (
        <a className={`${styles.link} ${styles.next}`} href={`/posts/${newer.id}/`}>
          <span className={styles.label}>next →</span>
          <span className={styles.title}>{newer.title}</span>
        </a>
      )}
    </nav>
  );
}
