import { useEffect, useState } from 'react';
import { GithubIcon, MailIcon, PenIcon } from '../../../components/Icons';
import type { EmailParts, SocialIcon, SocialLink } from '../../../types/resume';
import styles from './SocialLinks.module.css';

export interface SocialLinksProps {
  links: SocialLink[];
  /** Joined into a mailto link only in the browser, so the address is not in the HTML. */
  email?: EmailParts;
}

const icons: Record<SocialIcon, typeof GithubIcon> = { github: GithubIcon, blog: PenIcon, mail: MailIcon };

export function SocialLinks({ links, email }: SocialLinksProps) {
  const [mailHref, setMailHref] = useState('#');
  useEffect(() => {
    if (email) setMailHref(`mailto:${email.user}@${email.domain}`);
  }, [email]);

  const all: SocialLink[] = email ? [...links, { label: 'Email', icon: 'mail', href: mailHref }] : links;
  return (
    <ul className={styles.list}>
      {all.map(({ label, icon, href, external }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <a className={styles.link} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}>
              <Icon className={styles.icon} />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
