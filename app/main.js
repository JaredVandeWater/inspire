import BgImageController from "./Controllers/BgImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import WeatherController from "./Controllers/WeatherController.js";
import TasksController from "./Controllers/TasksController.js";

class App {
  bgImageController = new BgImageController();
  quoteController = new QuoteController();
  weatherController = new WeatherController();
  tasksController = new TasksController();
}

window["app"] = new App();
