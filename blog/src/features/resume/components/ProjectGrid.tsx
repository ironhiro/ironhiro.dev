import { Chips } from '../../../components/Chips';
import type { Project } from '../../../types/resume';
import styles from './ProjectGrid.module.css';

export interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  project: Project;
}

/** A card whose title link covers the whole card; secondary links and chips sit above it. */
function ProjectCard({ project }: ProjectCardProps) {
  const { tag, title, subtitle, href, description, links, stack } = project;
  return (
    <li className={styles.card} data-reveal>
      <div className={styles.top}>
        <span className={styles.tag}>{tag}</span>
        {href && <span className={styles.go} aria-hidden="true">↗</span>}
      </div>
      <h3 className={styles.title}>
        {href ? <a href={href} target="_blank" rel="noopener">{title}</a> : title}
        {subtitle && <span className={styles.sub}>{subtitle}</span>}
      </h3>
      <p className={styles.desc}>{description}</p>
      {links && (
        <div className={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener">{l.label}</a>
          ))}
        </div>
      )}
      <Chips items={stack.map((s) => ({ label: s }))} />
    </li>
  );
}
