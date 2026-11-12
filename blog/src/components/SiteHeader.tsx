import { GITHUB_URL, RESUME_URL, SITE_TITLE } from '../consts';
import { useScrolled } from '../hooks/useScrolled';
import { cx } from '../utils/cx';
import { GithubIcon, RssIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';
import styles from './SiteHeader.module.css';

export type NavSection = 'posts' | 'tags' | null;

export interface SiteHeaderProps {
  current: NavSection;
  wide?: boolean;
}

export function SiteHeader({ current, wide = false }: SiteHeaderProps) {
  const scrolled = useScrolled();
  return (
    <header className={cx(styles.bar, scrolled && styles.scrolled)}>
      <div className={cx('wrap', wide && 'wide', styles.inner)}>
        <a className={styles.brand} href="/">
          <span className={styles.led} aria-hidden="true" />
          {SITE_TITLE}
        </a>
        <nav className={styles.nav} aria-label="사이트">
          <a href="/" className={cx(current === 'posts' && styles.on)} aria-current={current === 'posts' ? 'page' : undefined}>Posts</a>
          <a href="/tags/" className={cx(current === 'tags' && styles.on)} aria-current={current === 'tags' ? 'page' : undefined}>Tags</a>
          <a href={RESUME_URL}>About</a>
          <a className={styles.icon} href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub"><GithubIcon /></a>
          <a className={styles.icon} href="/rss.xml" aria-label="RSS"><RssIcon /></a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
