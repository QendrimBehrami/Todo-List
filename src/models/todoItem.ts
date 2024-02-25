import { v4 as uuidv4 } from "uuid";

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

class TodoItem {
  private _id: string;
  private _title: string;
  private _description: string;
  private _dueDate: Date;
  private _priority: Priority;

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
  }

  get id(): string {
    return this.id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get dueDate(): Date {
    return this._dueDate;
  }

  get priority(): Priority {
    return this._priority;
  }
}
