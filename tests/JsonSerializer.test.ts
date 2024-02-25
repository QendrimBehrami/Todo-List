import { Priority } from "../src/interfaces/todo.interface";
import { Project } from "../src/models/project";
import { TodoItem } from "../src/models/todoItem";
import { JsonProjectSerializer } from "../src/models/jsonSerializer";

describe("JsonSerializer", () => {
  it("should properly serialize a project to JSON", () => {
    let todoItem = new TodoItem(
      "Write Tests",
      "I need to test the program more...",
      new Date(),
      Priority.High
    );

    let project = new Project("Important Project");
    project.addTodo(todoItem);

    const serializer = new JsonProjectSerializer();
    const serializedString = serializer.serialize(project);
    const deserializedProject = serializer.deserialize(serializedString);

    expect(deserializedProject).toEqual(project);
  });

  it("should properly serialize an array of projects to JSON", () => {
    let todoItem = new TodoItem(
      "Write Tests",
      "I need to test the program more...",
      new Date(),
      Priority.High
    );

    let project = new Project("Important Project");
    project.addTodo(todoItem);

    const serializer = new JsonProjectSerializer();
    const serializedString = serializer.serializeArray([project]);
    console.log(serializedString);

    const deserializedProject = serializer.deserializeArray(serializedString);

    expect(deserializedProject).toEqual([project]);
  });
});
