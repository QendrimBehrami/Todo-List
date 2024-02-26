import "../static/style.css";
import { DomManager } from "./domManager";
import { ProjectManager } from "./projectManager";

let projectManager = new ProjectManager();
let dom = new DomManager(projectManager);

let grocery = projectManager.createProject("Grocery List");
let gym = projectManager.createProject("Gym");

dom.render();
