export function encodePath(path: string, params: object): string {
  const values = params as Record<string, string | number | boolean | undefined>;
  return path.replace(/\{([^}]+)\}/g, (_, name: string) => {
    const value = values[name];
    if (value === undefined) {
      throw new Error(`Missing path parameter: ${name}`);
    }
    return encodeURIComponent(String(value));
  });
}
