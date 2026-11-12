import type { ReactNode } from 'react';

export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  lead: string;
  kicker: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export type SocialIcon = 'github' | 'blog' | 'mail';

export interface SocialLink {
  label: string;
  icon: SocialIcon;
  href: string;
  external?: boolean;
}

/** Address kept in two parts so it never appears whole in the HTML. */
export interface EmailParts {
  user: string;
  domain: string;
}

export interface SectionLink {
  id: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface DetailBlock {
  title: string;
  period?: string;
  context?: ReactNode;
  points: ReactNode[];
}

export interface Job {
  period: string;
  title: string;
  meta: string;
  summary: ReactNode;
  points?: ReactNode[];
  stack: string[];
  details?: DetailBlock[];
}

export interface Project {
  tag: string;
  title: string;
  subtitle?: string;
  href?: string;
  description: string;
  links?: { label: string; href: string }[];
  stack: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  issuer: string;
  notes?: string[];
}
