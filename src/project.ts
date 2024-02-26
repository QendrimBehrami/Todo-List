import { v4 as uuidv4 } from "uuid";

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export class TodoItem {
  private _id: string;
  private _title: string;
  private _description: string;
  private _dueDate: Date;
  private _priority: Priority;
  private _completed: boolean;

  constructor(
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority = Priority.Medium,
    id?: string,
    completed = false
  ) {
    this._id = id ?? uuidv4();
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._completed = completed;
  }

  get id(): string {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(newPriority: Priority) {
    this._priority = newPriority;
  }

  get completed() {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  equals(other: TodoItem) {
    return this._id === other._id;
  }
}

export class Project {
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

  public get todos(): TodoItem[] {
    return this._todos;
  }
}
