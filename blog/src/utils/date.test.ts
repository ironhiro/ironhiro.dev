import { describe, expect, it } from 'vitest';
import { fmtDate, fmtMonthDay, yearOf } from './date';

// midday UTC so the local date is the same in every time zone from UTC-11 to UTC+11
const iso = '2026-03-05T12:00:00.000Z';

describe('date utils', () => {
  it('formats dates with zero padding', () => {
    expect(fmtDate(iso)).toBe('2026.03.05');
    expect(fmtMonthDay(iso)).toBe('03.05');
    expect(yearOf(iso)).toBe(2026);
  });
});
