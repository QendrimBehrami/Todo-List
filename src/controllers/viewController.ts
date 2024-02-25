import { IView } from "../interfaces/view.interface";
import { IViewController } from "../interfaces/viewController.interface";
import { View } from "../views/view";

export class ViewController implements IViewController {
  private view: IView;

  constructor() {
    this.view = new View();
  }

  connectView() {
    this.view.connectController(this);
  }
}
