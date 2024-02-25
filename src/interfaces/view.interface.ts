import { IProject } from "./project.interface";
import { ITodoItem } from "./todo.interface";
import { IViewController } from "./viewController.interface";

export interface IView {
  connectController(controller: IViewController): void;

  createTodoElement(todoItem: ITodoItem): HTMLDivElement;

  createProjectElement(project: IProject): HTMLDivElement;
}
