const pad = (n: number) => String(n).padStart(2, '0');

export const fmtDate = (iso: string): string => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
};

export const fmtMonthDay = (iso: string): string => {
  const d = new Date(iso);
  return `${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;
};

export const yearOf = (iso: string): number => new Date(iso).getFullYear();
