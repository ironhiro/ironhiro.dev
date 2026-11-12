import type { PostSummary } from '../types/post';
import { fmtMonthDay, yearOf } from '../utils/date';
import { TagChips } from './TagChips';
import styles from './PostList.module.css';

export interface PostListProps {
  posts: PostSummary[];
}

const groupByYear = (posts: PostSummary[]): [number, PostSummary[]][] => {
  const byYear = new Map<number, PostSummary[]>();
  for (const p of posts) {
    const y = yearOf(p.pubDate);
    byYear.set(y, [...(byYear.get(y) ?? []), p]);
  }
  return [...byYear];
};

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) return <p className={styles.empty}>아직 글이 없습니다.</p>;
  return (
    <>
      {groupByYear(posts).map(([year, list]) => (
        <section key={year} className={styles.year}>
          <h2 className={styles.yearHead}>
            <span>{year}</span>
            <span className={styles.yearCount}>{list.length}</span>
          </h2>
          <ol className={styles.list}>
            {list.map((post) => (
              <li key={post.id} className={styles.row}>
                <time className={styles.date} dateTime={post.pubDate}>{fmtMonthDay(post.pubDate)}</time>
                <div>
                  <h3 className={styles.title}>
                    <a href={`/posts/${post.id}/`}>{post.title}</a>
                    {post.draft && <span className={styles.draft}>draft</span>}
                  </h3>
                  <p className={styles.desc}>{post.description}</p>
                  <div className={styles.foot}>
                    <span className={styles.minutes}>{post.minutes} min</span>
                    <TagChips tags={post.tags} />
                  </div>
                </div>
                <span className={styles.go} aria-hidden="true">→</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </>
  );
}
