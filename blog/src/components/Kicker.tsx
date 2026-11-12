import { Fragment } from 'react';
import styles from './Kicker.module.css';

export interface Crumb {
  label: string;
  href?: string;
}

export interface KickerProps {
  crumbs: Crumb[];
}

/** Small mono label above a heading; crumbs are joined with " / ". */
export function Kicker({ crumbs }: KickerProps) {
  return (
    <p className={styles.kicker}>
      {crumbs.map((c, i) => (
        <Fragment key={`${c.label}-${i}`}>
          {i > 0 && <span className={styles.sep}>/</span>}
          {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
        </Fragment>
      ))}
    </p>
  );
}
