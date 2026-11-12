import type { EducationItem } from '../../../types/resume';
import styles from './EducationList.module.css';

export interface EducationListProps {
  items: EducationItem[];
}

export function EducationList({ items }: EducationListProps) {
  return (
    <ul className={styles.rows}>
      {items.map(({ period, title, issuer, notes }) => (
        <li key={title} className={styles.row}>
          <span className={styles.when}>{period}</span>
          <div>
            <strong>{title}</strong>
            <span className={styles.issuer}>{issuer}</span>
            {notes && (
              <ul className={styles.notes}>
                {notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
