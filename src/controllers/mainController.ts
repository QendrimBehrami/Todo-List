import { IProjectController } from "../interfaces/projectController.interface";
import { IViewController } from "../interfaces/viewController.interface";
import { ProjectController } from "./projectController";
import { ViewController } from "./viewController";

export class MainController {
  private projectController: IProjectController;
  private viewController: IViewController;

  constructor() {
    this.projectController = new ProjectController();
    this.viewController = new ViewController();
    this.viewController.connectView();
  }
}
