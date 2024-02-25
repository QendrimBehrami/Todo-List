import { Project } from "../models/project";
import { IPersistence } from "./persistence.interface";
import { ISerializer } from "./serializer.interface";

class localStoragePersistence implements IPersistence {
  saveProjects(projects: Project[], serializer: ISerializer<Project>): void {
    localStorage.setItem("projects", serializer.serializeArray(projects));
  }
  loadProjects(serializer: ISerializer<Project>): Project[] {
    const serializedProjects = localStorage.getItem("projects");
    if (serializedProjects) {
      return serializer.deserializeArray(serializedProjects);
    } else {
      return [];
    }
  }
}
