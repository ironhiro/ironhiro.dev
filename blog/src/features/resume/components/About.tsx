import type { ReactNode } from 'react';
import { Chips } from '../../../components/Chips';
import type { SkillGroup } from '../../../types/resume';
import styles from './About.module.css';

export interface AboutProps {
  paragraphs: ReactNode[];
  skills: SkillGroup[];
}

export function About({ paragraphs, skills }: AboutProps) {
  return (
    <>
      <div className={styles.prose}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <dl className={styles.skills}>
        {skills.map(({ label, items }) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd>
              <Chips items={items.map((s) => ({ label: s }))} />
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
