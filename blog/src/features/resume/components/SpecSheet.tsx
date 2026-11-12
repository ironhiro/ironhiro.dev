import type { SpecItem } from '../../../types/resume';
import styles from './SpecSheet.module.css';

export interface SpecSheetProps {
  items: SpecItem[];
}

/** At-a-glance facts laid out like a data sheet. */
export function SpecSheet({ items }: SpecSheetProps) {
  return (
    <dl className={styles.sheet}>
      {items.map(({ label, value }) => (
        <div key={label} className={styles.cell}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
