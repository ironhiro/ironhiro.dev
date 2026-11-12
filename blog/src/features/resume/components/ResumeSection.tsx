import type { ReactNode } from 'react';
import styles from './ResumeSection.module.css';

export interface ResumeSectionProps {
  id: string;
  /** Two-digit index shown before the title, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
}

export function ResumeSection({ id, index, title, children }: ResumeSectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className="wrap mid">
        <h2 id={`${id}-title`} className={styles.label}>
          <span className={styles.index}>{index}</span>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
