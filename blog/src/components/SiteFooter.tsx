import { wrapClass, type WrapWidth } from '../utils/wrap';
import styles from './SiteFooter.module.css';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteFooterProps {
  links: FooterLink[];
  width?: WrapWidth;
  /** Year shown in the copyright line; defaults to the build year. */
  year?: number;
}

export function SiteFooter({ links, width = 'default', year = new Date().getFullYear() }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={wrapClass(width, styles.inner)}>
        <span>© {year} 조용현</span>
        <span className={styles.links}>
          {links.map(({ label, href, external }) => (
            <a key={href} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}>{label}</a>
          ))}
        </span>
      </div>
    </footer>
  );
}
