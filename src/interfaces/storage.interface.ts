export interface IStorage<T> {
  save(key: string, item: T): void;
  load(key: string): T | null;
}
