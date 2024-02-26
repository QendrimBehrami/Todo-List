import { Priority, Project, TodoItem } from "./project";
import { ProjectManager } from "./projectManager";

export class DomManager {
  private projectManager: ProjectManager;
  private projectsDiv: HTMLDivElement; // Elements in main
  private projectOverview: HTMLDivElement; // Elements in sidebar
  private projectFilter: () => Project[];

  constructor(projectManager: ProjectManager) {
    this.projectManager = projectManager;
    this.projectsDiv = document.querySelector("#projects") as HTMLDivElement;
    this.projectOverview = document.querySelector(
      "#project-elements"
    ) as HTMLDivElement;
    this.projectFilter = projectManager.getAllProjects.bind(projectManager);

    this.setupAddProjectButton();
  }

  private setupAddProjectButton() {
    let projectButton = document.querySelector(
      "#new-project-button"
    ) as HTMLButtonElement;

    let formElement = document.querySelector(
      "#new-project-div form"
    ) as HTMLFormElement;

    let formInputElement = document.querySelector(
      "#new-project-div form input"
    ) as HTMLInputElement;

    const toggleForm = () => {
      formElement.style.display =
        formElement.style.display === "none" || formElement.style.display === ""
          ? "inline-block"
          : "none";
    };

    projectButton.addEventListener("click", toggleForm);

    formElement?.addEventListener("submit", (e) => {
      e.preventDefault();

      const newProjectName = formInputElement.value;
      this.projectManager.createProject(newProjectName);
      this.render();

      formInputElement.value = "";
      toggleForm();
    });
  }

  private createTodoElement(todo: TodoItem) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    todoDiv.id = "todo-div-" + todo.id;

    let titleElement = document.createElement("h2");
    titleElement.textContent = todo.title;

    todoDiv.appendChild(titleElement);
    return todoDiv;
  }

  private createProjectElement(project: Project) {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.id = "project-div-" + project.id;

    let titleElement = document.createElement("h1");
    titleElement.textContent = project.title;

    // Handle Todo Array
    let todoDivs = project.todos.map((todo) => this.createTodoElement(todo));

    projectDiv.appendChild(titleElement);
    todoDivs.forEach((div) => projectDiv.appendChild(div));
    return projectDiv;
  }

  private createProjectOverviewElement(project: Project) {
    // Create the div
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("page-element");

    // Set Icon
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-list");

    // Add Selection Button
    let button = document.createElement("button");
    button.id = "project-button-" + project.id;
    button.textContent = project.title;

    // Add everything to project div
    projectDiv.appendChild(icon);
    projectDiv.appendChild(button);

    return projectDiv;
  }

  render() {
    const projects = this.projectFilter();

    // Clear old content
    while (this.projectsDiv.firstChild) {
      this.projectsDiv.removeChild(this.projectsDiv.firstChild);
    }

    while (this.projectOverview.firstChild) {
      this.projectOverview.removeChild(this.projectOverview.firstChild);
    }

    // Create new content
    const projectDivs = projects.map((project) =>
      this.createProjectElement(project)
    );

    const projectOverviewDivs = projects.map((project) =>
      this.createProjectOverviewElement(project)
    );

    // Append new content
    projectDivs.forEach((div) => {
      this.projectsDiv.appendChild(div);
    });

    projectOverviewDivs.forEach((div) => {
      this.projectOverview.appendChild(div);
    });
  }
}
