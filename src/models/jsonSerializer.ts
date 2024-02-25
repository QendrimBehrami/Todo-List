import { Project } from "./project";
import { TodoItem } from "./todoItem";
import { ISerializer } from "../interfaces/serializer.interface";

export class JsonProjectSerializer implements ISerializer<Project> {
  serialize(item: Project): string {
    return JSON.stringify(item);
  }

  serializeArray(item: Project[]): string {
    return JSON.stringify(item);
  }

  deserialize(data: string): Project {
    const parsedData = JSON.parse(data);

    const serializer = new JsonTodoItemSerializer();
    let todos = serializer.deserializeArray(JSON.stringify(parsedData._todos));

    return new Project(parsedData._title, todos, parsedData._id);
  }

  deserializeArray(data: string): Project[] {
    const parsedData = JSON.parse(data);

    return parsedData.map((projectData: any) =>
      this.deserialize(JSON.stringify(projectData))
    );
  }
}

export class JsonTodoItemSerializer implements ISerializer<TodoItem> {
  serialize(item: TodoItem): string {
    return JSON.stringify(item);
  }

  serializeArray(item: TodoItem[]): string {
    return JSON.stringify(item);
  }

  deserialize(data: string): TodoItem {
    const parsedData = JSON.parse(data);
    return new TodoItem(
      parsedData._title,
      parsedData._description,
      new Date(parsedData._dueDate),
      parsedData._priority,
      parsedData._id,
      parsedData._completed
    );
  }

  deserializeArray(data: string): TodoItem[] {
    const parsedData = JSON.parse(data);

    return parsedData.map((todoData: any) =>
      this.deserialize(JSON.stringify(todoData))
    );
  }
}
