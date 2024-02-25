import { Project } from "../models/project";
import { ISerializer } from "./serializer.interface";

export interface IPersistence {
  saveProjects(projects: Project[], serializer: ISerializer<Project>): void;
  loadProjects(serializer: ISerializer<Project>): Project[];
}
