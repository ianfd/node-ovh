import type { QueryParams, QueryValue } from './types';

export function appendQuery(url: URL, query?: QueryParams): void {
  if (!query) {
    return;
  }

  for (const [key, value] of Object.entries(query)) {
    appendQueryValue(url, key, value);
  }
}

function appendQueryValue(url: URL, key: string, value: QueryValue): void {
  if (value === undefined || value === null) {
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      appendQueryValue(url, key, item);
    }
    return;
  }

  if (value instanceof Date) {
    url.searchParams.append(key, value.toISOString());
    return;
  }

  if (typeof value === 'object') {
    url.searchParams.append(key, JSON.stringify(value));
    return;
  }

  url.searchParams.append(key, String(value));
}

