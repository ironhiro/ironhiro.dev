import { Chips } from '../../../components/Chips';
import type { DetailBlock, Job } from '../../../types/resume';
import styles from './Timeline.module.css';

export interface TimelineProps {
  jobs: Job[];
}

/** Work history drawn as a trace with a node per job; the newest node is lit. */
export function Timeline({ jobs }: TimelineProps) {
  return (
    <ol className={styles.timeline}>
      {jobs.map((job) => (
        <JobItem key={job.period} job={job} />
      ))}
    </ol>
  );
}

interface JobItemProps {
  job: Job;
}

function JobItem({ job }: JobItemProps) {
  const { period, title, meta, summary, points, stack, details } = job;
  return (
    <li className={styles.job} data-reveal>
      <div className={styles.when}>{period}</div>
      <h3 className={styles.title}>
        {title}
        <span className={styles.sub}>{meta}</span>
      </h3>
      <p className={styles.summary}>{summary}</p>
      {points && (
        <ul className={styles.points}>
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
      <Chips items={stack.map((s) => ({ label: s }))} />
      {details && <Details blocks={details} />}
    </li>
  );
}

interface DetailsProps {
  blocks: DetailBlock[];
}

function Details({ blocks }: DetailsProps) {
  return (
    <details className={styles.details}>
      <summary>
        <span className={styles.openLabel}>상세 보기</span>
        <span className={styles.closeLabel}>접기</span>
      </summary>
      <div className={styles.detailBody}>
        {blocks.map(({ title, period, context, points }) => (
          <div key={title}>
            <h4>
              {title}
              {period && <span className={styles.period}>{period}</span>}
            </h4>
            {context && <p className={styles.ctx}>{context}</p>}
            <ul>
              {points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}
