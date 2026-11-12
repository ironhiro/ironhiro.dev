import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { resetBrowserState } from './helpers';

afterEach(() => {
  cleanup();
  resetBrowserState();
});
