import { v4 as uuidv4 } from "uuid";
import { ITodoItem, Priority } from "../interfaces/todo.interface";

export class TodoItem implements ITodoItem {
  private _id: string;
  private _title: string;
  private _description: string;
  private _dueDate: Date;
  private _priority: Priority;
  private _completed: boolean;

  /**
   * Create a new TodoItem
   * @param title
   * @param description
   * @param dueDate
   * @param priority
   */
  constructor(
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority = Priority.Medium
  ) {
    this._id = uuidv4();
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._completed = false;
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
