import { IProjectController } from "../interfaces/projectController.interface";
import { Project } from "../models/project";

export class ProjectController implements IProjectController {
  projects: Project[];

  constructor() {
    this.projects = new Array<Project>();
  }
}
