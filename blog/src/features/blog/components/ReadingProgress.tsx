import { useRef } from 'react';
import { useReadingProgress } from '../../../hooks/useReadingProgress';
import styles from './ReadingProgress.module.css';

export interface ReadingProgressProps {
  /** Element whose scroll progress is shown. */
  selector?: string;
}

export function ReadingProgress({ selector = 'article' }: ReadingProgressProps) {
  const bar = useRef<HTMLDivElement>(null);
  useReadingProgress(bar, selector);
  return <div ref={bar} className={styles.bar} aria-hidden="true" />;
}
