import { GITHUB_URL, RESUME_URL } from '../consts';
import { cx } from '../utils/cx';
import styles from './SiteFooter.module.css';

export interface SiteFooterProps {
  wide?: boolean;
}

export function SiteFooter({ wide = false }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={cx('wrap', wide && 'wide', styles.inner)}>
        <span>© {new Date().getFullYear()} 조용현</span>
        <span className={styles.links}>
          <a href={RESUME_URL}>ironhiro.dev</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener">github</a>
          <a href="/rss.xml">rss</a>
        </span>
      </div>
    </footer>
  );
}
