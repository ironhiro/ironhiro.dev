import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CodeBlockEnhancer } from './CodeBlockEnhancer';

describe('CodeBlockEnhancer', () => {
  it('wraps each Shiki block with a language label and a copy button, once', () => {
    document.body.innerHTML = '<div class="prose"><pre class="astro-code" data-language="csharp"><code>var x = 1;</code></pre></div>';
    const { rerender } = render(<CodeBlockEnhancer />);
    rerender(<CodeBlockEnhancer selector=".prose " />);

    const blocks = document.querySelectorAll('.code-block');
    expect(blocks).toHaveLength(1);
    expect(blocks[0].querySelector('.lang')?.textContent).toBe('csharp');
    expect(blocks[0].querySelector('button.copy')?.textContent).toBe('복사');
    expect(blocks[0].querySelector('pre')).toBeTruthy();
  });
});
