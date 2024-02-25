import { IProject } from "../interfaces/project.interface";
import { ITodoItem } from "../interfaces/todo.interface";
import { IView } from "../interfaces/view.interface";
import { IViewController } from "../interfaces/viewController.interface";
import "./../../static/style.css";
import { loadIcons } from "./iconLoader";

export class View implements IView {
  viewController: IViewController | undefined;
  private mainElement: HTMLElement;

  constructor() {
    loadIcons();
    this.mainElement = document.querySelector("main") as HTMLElement;
  }

  connectController(controller: IViewController): void {
    this.viewController = controller;
  }

  createTodoElement(todoItem: ITodoItem): HTMLDivElement {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-item");

    todoElement.innerHTML = `
            <h3>${todoItem.title}</h3>
            <p>${todoItem.description}</p>
            <p>Due Date: ${todoItem.dueDate}</p>
            <p>Priority: ${todoItem.priority}</p>
            <button class="delete-todo-button">delete</button>
            `;
    return todoElement;
  }

  createProjectElement(project: IProject): HTMLDivElement {
    throw new Error("Method not implemented.");
  }
}
