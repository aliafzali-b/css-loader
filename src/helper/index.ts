export function cloneDeep<T>(object: T): T {
  //@ts-ignore
  if (object == null) return null;
  return JSON.parse(JSON.stringify(object));
}
