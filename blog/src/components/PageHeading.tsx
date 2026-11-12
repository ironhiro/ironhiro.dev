import { Kicker, type Crumb } from './Kicker';
import styles from './PageHeading.module.css';

export interface PageHeadingProps {
  crumbs: Crumb[];
  title: string;
  /** Mint prefix before the title, e.g. "#" on a tag page. */
  prefix?: string;
  count?: number;
}

export function PageHeading({ crumbs, title, prefix, count }: PageHeadingProps) {
  return (
    <header className={styles.head}>
      <Kicker crumbs={crumbs} />
      <h1 className={styles.title}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        {title}
        {count !== undefined && <span className={styles.count}>{count}</span>}
      </h1>
    </header>
  );
}
