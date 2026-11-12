import styles from './Chips.module.css';

export interface ChipItem {
  label: string;
  href?: string;
  count?: number;
}

export interface ChipsProps {
  items: ChipItem[];
  /** Accessible name for the list. */
  label?: string;
}

/** Small mono tags. Linked chips sit above stretched card links (z-index 1). */
export function Chips({ items, label }: ChipsProps) {
  if (items.length === 0) return null;
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map(({ label: text, href, count }) => {
        const content = (
          <>
            {text}
            {count !== undefined && <span className={styles.count}>{count}</span>}
          </>
        );
        return (
          <li key={text}>
            {href ? <a className={`${styles.chip} ${styles.linked}`} href={href}>{content}</a> : <span className={styles.chip}>{content}</span>}
          </li>
        );
      })}
    </ul>
  );
}
