export interface ISerializer<T> {
  serialize(item: T): string;
  serializeArray(item: T[]): string;

  deserialize(data: string): T;
  deserializeArray(data: string): T[];
}
