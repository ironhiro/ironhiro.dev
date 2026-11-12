import { cx } from './cx';

/** Content widths defined in styles/base.css: 760px, 920px and 1120px. */
export type WrapWidth = 'default' | 'mid' | 'wide';

export const wrapClass = (width: WrapWidth = 'default', ...extra: (string | false | undefined)[]): string =>
  cx('wrap', width !== 'default' && width, ...extra);
