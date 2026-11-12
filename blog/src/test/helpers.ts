import { act } from '@testing-library/react';
import { vi } from 'vitest';
import type { PostSummary } from '../types/post';

/** jsdom has no matchMedia; this answers every query with `matches`. */
export function mockMatchMedia(matches = false): void {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

/** Records observed elements so tests can trigger intersections by hand. */
export class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = [];
  readonly observed = new Set<Element>();

  constructor(private readonly callback: IntersectionObserverCallback) {
    FakeIntersectionObserver.instances.push(this);
  }

  observe = (el: Element) => void this.observed.add(el);
  unobserve = (el: Element) => void this.observed.delete(el);
  disconnect = () => this.observed.clear();

  /** Reports `el` as visible. */
  intersect(el: Element): void {
    const entry = { target: el, isIntersecting: true } as IntersectionObserverEntry;
    act(() => this.callback([entry], this as unknown as IntersectionObserver));
  }
}

export function mockIntersectionObserver(): void {
  FakeIntersectionObserver.instances = [];
  vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver);
}

/** Scrolls the jsdom window and fires the scroll event inside act(). */
export function scrollWindowTo(y: number): void {
  act(() => {
    Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
    window.dispatchEvent(new Event('scroll'));
  });
}

/** Undoes what tests leave on the shared document and window. */
export function resetBrowserState(): void {
  const root = document.documentElement;
  delete root.dataset.theme;
  root.className = '';
  document.body.innerHTML = '';
  Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
  try {
    localStorage.clear();
  } catch {
    // storage may be unavailable
  }
  vi.unstubAllGlobals();
}

export function makePost(overrides: Partial<PostSummary> = {}): PostSummary {
  return {
    id: 'hello-world',
    title: '블로그를 시작합니다',
    description: '첫 글',
    pubDate: '2026-10-08T00:00:00.000Z',
    tags: ['blog'],
    draft: false,
    minutes: 1,
    ...overrides,
  };
}
