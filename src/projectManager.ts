import { Project } from "./project";

export class ProjectManager {
  private _projects: Project[];

  constructor() {
    this._projects = new Array<Project>();
  }

  createProject(title: string): string {
    let project = new Project(title);
    this._projects.push(project);
    return project.id;
  }

  //   push(project: Project) {
  //     if (!this.containsProject) {
  //       this._projects.push(project);
  //     }
  //   }

  private containsProject(project: Project): boolean {
    return this._projects.filter((p) => p.id === project.id).length > 0;
  }

  getAllProjects() {
    return this._projects;
  }
}
