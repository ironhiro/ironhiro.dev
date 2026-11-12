import type { ReactNode } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { cx } from '../utils/cx';
import { wrapClass, type WrapWidth } from '../utils/wrap';
import { ThemeToggle } from './ThemeToggle';
import styles from './TopBar.module.css';

export interface TopBarProps {
  brand: string;
  brandHref?: string;
  width?: WrapWidth;
  /** Navigation shown before the theme toggle. */
  children?: ReactNode;
}

/** Sticky top bar shared by the blog and the resume: brand, navigation, theme toggle. */
export function TopBar({ brand, brandHref = '/', width = 'default', children }: TopBarProps) {
  const scrolled = useScrolled();
  return (
    <header className={cx(styles.bar, scrolled && styles.scrolled)}>
      <div className={wrapClass(width, styles.inner)}>
        <a className={styles.brand} href={brandHref}>
          <span className={styles.led} aria-hidden="true" />
          {brand}
        </a>
        <div className={styles.right}>
          {children}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export interface TopBarLinkProps {
  href: string;
  active?: boolean;
  external?: boolean;
  /** Accessible name, needed when the link only shows an icon. */
  label?: string;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function TopBarLink({ href, active = false, external = false, label, icon = false, className, onClick, children }: TopBarLinkProps) {
  return (
    <a
      href={href}
      className={cx(styles.link, icon && styles.iconLink, active && styles.active, className)}
      aria-current={active ? 'page' : undefined}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
