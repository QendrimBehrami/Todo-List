import "./../../static/style.css";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Add the icons to the library
library.add(faGithub);

// Tell FontAwesome to watch the DOM and add the SVGs when it finds icons
dom.watch();

export default () => {
  console.log("Hello, world from mainView.ts!");
};
