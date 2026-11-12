import { useThemeToggle } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from './Icons';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const toggle = useThemeToggle();
  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label="밝은/어두운 테마 전환" title="테마 전환">
      <MoonIcon className={styles.moon} />
      <SunIcon className={styles.sun} />
    </button>
  );
}
