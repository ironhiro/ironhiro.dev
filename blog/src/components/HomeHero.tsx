import { RESUME_URL, SITE_DESCRIPTION } from '../consts';
import { Kicker } from './Kicker';
import styles from './HomeHero.module.css';

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <Kicker crumbs={[{ label: 'software ⇄ hardware' }]} />
      <h1 className={styles.title}>소프트웨어와 하드웨어 사이의 기록</h1>
      <p className={styles.desc}>{SITE_DESCRIPTION}</p>
      <p className={styles.by}>
        by <a href={RESUME_URL}>조용현</a> · 키오스크 풀스택 개발자
      </p>
    </section>
  );
}
