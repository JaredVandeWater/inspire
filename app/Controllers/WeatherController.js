import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

//Private
function _drawWeather() {
    let template = ''
    template += `<div class="col">
                    <h5><img src="http://openweathermap.org/img/wn/${ProxyState.weather.icon}.png" alt="">
                        <button class="btn success" id="temp-number" onclick="app.weatherController.changeDegreeType()">
                            ${ProxyState.weather.setTempType()}${ProxyState.weather.tempEnding}
                        </button>
                    </h5>
                </div>
                <div class="col d-flex justify-content-end">
                    <p class=>${ProxyState.weather.city}</p>
                </div>
`
    document.getElementById('weather-stuff').innerHTML = template
    console.log("drawn-weather");
}

function _drawWeatherNum() {
    document.getElementById('temp-number').innerHTML = `${ProxyState.weather.setTempType()} ${ProxyState.weather.tempEnding}`
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



    changeDegreeType() {
        ProxyState.weather.TempType = !ProxyState.weather.TempType
        _drawWeatherNum()
        console.log(ProxyState.weather.TempType);
    }
}
