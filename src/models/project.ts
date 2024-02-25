import { IProject } from "../interfaces/project.interface";
import { ITodoItem } from "../interfaces/todo.interface";
import { TodoItem } from "./todoItem";

class Project implements IProject {
  private _todos: TodoItem[];
  private _title: string;

  constructor(title: string) {
    this._title = title;
    this._todos = new Array();
  }

  public get title(): string {
    return this._title;
  }

  public set title(newTitle) {
    this._title = newTitle;
  }

  public addTodo(todo: TodoItem) {
    this._todos.push(todo);
  }

  public removeTodo(todo: TodoItem) {
    this._todos = this._todos.filter(
      (currentTodo) => !currentTodo.equals(todo)
    );
  }

  public get todos(): ITodoItem[] {
    return this._todos;
  }
}
