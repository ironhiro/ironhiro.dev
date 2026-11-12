import type { ReactNode } from 'react';
import { Kicker } from '../../../components/Kicker';
import type { Profile, SpecItem } from '../../../types/resume';
import { SpecSheet } from './SpecSheet';
import styles from './Hero.module.css';

export interface HeroProps {
  profile: Profile;
  spec: SpecItem[];
  /** Contact links, rendered between the intro and the spec sheet. */
  children?: ReactNode;
}

export function Hero({ profile, spec, children }: HeroProps) {
  const { kicker, name, nameEn, role, lead } = profile;
  return (
    <section className={styles.hero}>
      <Kicker crumbs={[{ label: kicker }]} />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.en}>{nameEn}</p>
      <p className={styles.role}>{role}</p>
      <p className={styles.lead}>{lead}</p>
      {children}
      <SpecSheet items={spec} />
    </section>
  );
}
