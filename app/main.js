import BgImageController from "./Controllers/BgImageController.js";
import QuoteController from "./Controllers/QuoteController.js";

class App {
  bgImageController = new BgImageController();
  quoteController = new QuoteController();
}

window["app"] = new App();
