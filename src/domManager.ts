import { Priority, Project, TodoItem } from "./project";
import { ProjectManager } from "./projectManager";

export class DomManager {
  private projectManager: ProjectManager;
  private projectOverview: HTMLDivElement;
  private projectFilter: () => Project[];

  constructor(projectManager: ProjectManager) {
    this.projectManager = projectManager;
    this.projectOverview = document.querySelector(
      "#project-overview"
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

  private createProjectElement(project: Project) {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.id = project.id;

    let titleElement = document.createElement("h1");
    titleElement.textContent = project.title;
    projectDiv.appendChild(titleElement);
    return projectDiv;
  }

  render() {
    const projects = this.projectFilter();

    const projectDivs = projects.map((project) =>
      this.createProjectElement(project)
    );

    // Clear old content
    while (this.projectOverview.firstChild) {
      this.projectOverview.removeChild(this.projectOverview.firstChild);
    }

    // Append new content
    projectDivs.forEach((div) => {
      this.projectOverview.appendChild(div);
    });
  }
}
