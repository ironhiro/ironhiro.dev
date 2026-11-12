import type { PostSummary } from '../types/post';
import { fmtDate } from '../utils/date';
import { TagChips } from './TagChips';
import styles from './PostHeader.module.css';

export interface PostHeaderProps {
  post: PostSummary;
}

export function PostHeader({ post }: PostHeaderProps) {
  const { title, pubDate, updatedDate, minutes, tags } = post;
  return (
    <header className={styles.head}>
      <a className={styles.back} href="/">← posts</a>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.meta}>
        <time dateTime={pubDate}>{fmtDate(pubDate)}</time>
        {updatedDate && <span>수정 {fmtDate(updatedDate)}</span>}
        <span>{minutes}분 읽기</span>
      </p>
      <TagChips tags={tags} />
    </header>
  );
}
