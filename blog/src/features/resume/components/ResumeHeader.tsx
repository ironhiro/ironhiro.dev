import { TopBar, TopBarLink } from '../../../components/TopBar';
import { useActiveSection } from '../../../hooks/useActiveSection';
import type { SectionLink } from '../../../types/resume';
import styles from './ResumeHeader.module.css';

export interface ResumeHeaderProps {
  sections: SectionLink[];
}

export function ResumeHeader({ sections }: ResumeHeaderProps) {
  const { active, pin } = useActiveSection(sections.map((s) => s.id));
  return (
    <TopBar brand="ironhiro.dev" width="mid">
      <nav className={styles.nav} aria-label="섹션" data-section-nav>
        {sections.map((s, i) => (
          <TopBarLink key={s.id} href={`#${s.id}`} active={i === active} onClick={() => pin(i)}>
            {s.label}
          </TopBarLink>
        ))}
      </nav>
    </TopBar>
  );
}
