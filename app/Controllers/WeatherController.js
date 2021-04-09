import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

//Private
function _drawWeather() {
    let template = ''
    template += `<div class="col">
               
                <h5>  <img src="http://openweathermap.org/img/wn/${ProxyState.weather.icon}.png" alt="">${ProxyState.weather.setTempType()}${ProxyState.weather.tempEnding}</h5>
                </div>
                <div class="col d-flex justify-content-end">
                    <p class=>${ProxyState.weather.city}</p>
                </div>
`
    document.getElementById('weather-stuff').innerHTML = template
    console.log("drawn-weather");
}


//Public
export default class BgImageController {
    constructor() {
        ProxyState.on('weather', _drawWeather)


        this.grabWeather()
    }

    async grabWeather() {
        try {
            await weatherService.grabWeather()
        } catch (error) {
            console.error(error)
        }
    }
}
