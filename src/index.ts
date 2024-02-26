import "../static/style.css";
import { DomManager } from "./domManager";
import { Priority } from "./project";
import { ProjectManager } from "./projectManager";

let projectManager = new ProjectManager();
let dom = new DomManager(projectManager);

let groceryList = projectManager.createProject("Grocery List");
let gym = projectManager.createProject("Gym");

projectManager.addTodoItem(
  groceryList,
  "Apples",
  "A bag of apples",
  new Date(),
  Priority.High
);

projectManager.addTodoItem(
  groceryList,
  "Banana",
  "A bag of banana",
  new Date(),
  Priority.Medium
);

projectManager.addTodoItem(
  gym,
  "Dead lifting",
  "xdd",
  new Date(),
  Priority.Medium
);

dom.render();
