import { useEffect } from 'react';

export interface CodeBlockEnhancerProps {
  /** Container holding the rendered markdown. */
  selector?: string;
}

const enhance = (pre: HTMLPreElement): void => {
  if (pre.parentElement?.classList.contains('code-block')) return;
  const wrap = document.createElement('div');
  wrap.className = 'code-block';
  const head = document.createElement('div');
  head.className = 'code-head';
  const lang = document.createElement('span');
  lang.className = 'lang';
  const language = pre.dataset.language;
  lang.textContent = language && language !== 'plaintext' ? language : 'text';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.textContent = '복사';
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.innerText);
      btn.textContent = '복사됨';
    } catch {
      btn.textContent = '실패';
    }
    setTimeout(() => (btn.textContent = '복사'), 1500);
  });
  head.append(lang, btn);
  pre.replaceWith(wrap);
  wrap.append(head, pre);
};

/**
 * Adds a language label and a copy button to every Shiki code block.
 * The markdown HTML is rendered by Astro, not React, so this works on the DOM after hydration.
 */
export function CodeBlockEnhancer({ selector = '.prose' }: CodeBlockEnhancerProps) {
  useEffect(() => {
    document.querySelectorAll<HTMLPreElement>(`${selector} pre.astro-code`).forEach(enhance);
  }, [selector]);
  return null;
}
