import { ITodoItem } from "./todo.interface";

export interface IProject {
  id: string;
  title: string;
  todos: ITodoItem[];

  addTodo(todo: ITodoItem): void;
  removeTodo(todo: ITodoItem): void;
}
