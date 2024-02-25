import { ISerializer } from "../interfaces/serializer.interface";
import { IStorage } from "../interfaces/storage.interface";
import { Project } from "./project";

const PROJECT_STORAGE_PREFIX = "PROJECT_";

class LocalProjectStorage implements IStorage<Project> {
  private serializer: ISerializer<Project>;

  constructor(serializer: ISerializer<Project>) {
    this.serializer = serializer;
  }

  save(key: string, item: Project): void {
    const serialized = this.serializer.serialize(item);
    localStorage.setItem(PROJECT_STORAGE_PREFIX + key, serialized);
  }

  load(key: string): Project | null {
    const item = localStorage.getItem(PROJECT_STORAGE_PREFIX + key);
    if (!item) return null;
    return this.serializer.deserialize(item);
  }
}
