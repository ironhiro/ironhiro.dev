import { useRevealOnScroll } from '../../../hooks/useRevealOnScroll';

export interface RevealOnScrollProps {
  selector?: string;
}

/** Renders nothing; hydrate it once per page to fade `[data-reveal]` items in. */
export function RevealOnScroll({ selector }: RevealOnScrollProps) {
  useRevealOnScroll(selector);
  return null;
}
