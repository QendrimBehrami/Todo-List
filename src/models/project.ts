import { IProject } from "../interfaces/project.interface";
import { ITodoItem } from "../interfaces/todo.interface";
import { TodoItem } from "./todoItem";
import { v4 as uuidv4 } from "uuid";

export class Project implements IProject {
  private _todos: TodoItem[];
  private _title: string;
  private _id: string;

  constructor(title: string, todos: TodoItem[] = [], id?: string) {
    this._title = title;
    this._todos = todos ? todos : new Array();
    this._id = id ?? uuidv4();
  }

  public get title(): string {
    return this._title;
  }

  public set title(newTitle) {
    this._title = newTitle;
  }

  public get id() {
    return this._id;
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
