import BgImageController from "./Controllers/BgImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  bgImageController = new BgImageController();
  quoteController = new QuoteController();
  weatherController = new WeatherController();
}

window["app"] = new App();
