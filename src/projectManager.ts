import { Priority, Project, TodoItem } from "./project";

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

  addTodoItem(
    projectID: string,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    completed: boolean = false
  ) {
    let projectsFiltered = this._projects.filter((p) => p.id === projectID);
    if (!projectsFiltered) {
      throw new Error(
        "The project ID " + projectID + " was not found in the ProjectManager"
      );
    }
    let todo = new TodoItem(
      title,
      description,
      dueDate,
      priority,
      undefined,
      completed
    );
    projectsFiltered[0].addTodo(todo);
    return todo.id;
  }

  private containsProject(project: Project): boolean {
    return this._projects.filter((p) => p.id === project.id).length > 0;
  }

  getAllProjects() {
    return this._projects;
  }
}
