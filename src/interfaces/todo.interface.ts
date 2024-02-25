export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export interface ITodoItem {
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
  equals(other: ITodoItem): boolean;
}
