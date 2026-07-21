export function formatName(first: string, last: string): string {
  return `${first.trim()} ${last.trim()}`.trim();
}

export function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1)}…`;
}
