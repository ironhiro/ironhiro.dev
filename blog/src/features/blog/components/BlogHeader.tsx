import { GithubIcon, RssIcon } from '../../../components/Icons';
import { TopBar, TopBarLink } from '../../../components/TopBar';
import type { WrapWidth } from '../../../utils/wrap';
import { GITHUB_URL, RESUME_URL, SITE_TITLE } from '../consts';
import styles from './BlogHeader.module.css';

export type NavSection = 'posts' | 'tags' | null;

export interface BlogHeaderProps {
  current: NavSection;
  width?: WrapWidth;
}

export function BlogHeader({ current, width = 'default' }: BlogHeaderProps) {
  return (
    <TopBar brand={SITE_TITLE} width={width}>
      <nav className={styles.nav} aria-label="사이트">
        <TopBarLink href="/" active={current === 'posts'}>Posts</TopBarLink>
        <TopBarLink href="/tags/" active={current === 'tags'}>Tags</TopBarLink>
        <TopBarLink href={RESUME_URL}>About</TopBarLink>
        <TopBarLink href={GITHUB_URL} external icon label="GitHub" className={styles.extra}><GithubIcon /></TopBarLink>
        <TopBarLink href="/rss.xml" icon label="RSS" className={styles.extra}><RssIcon /></TopBarLink>
      </nav>
    </TopBar>
  );
}
