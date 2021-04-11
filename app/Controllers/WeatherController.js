import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

//Private
function _drawWeather() {
    let template = ''
    template += `<div class="col">
                    <div class="m-0" id="temp-btn"><img src="http://openweathermap.org/img/wn/${ProxyState.weather.icon}.png" alt="weather icon">
                        <button class="btn p-0 m-0 my-card-text" id="temp-number" onclick="app.weatherController.changeDegreeType()">
                            <h4>${ProxyState.weather.setTempType()}${ProxyState.weather.tempEnding}</h4>
                        </button>
                    </div>
                </div>
                <div class="col d-flex justify-content-center my-card-text">
                    <h4 class=>${ProxyState.weather.city}</h4>
                </div>
`
    document.getElementById('weather-stuff').innerHTML = template
}

function _drawWeatherNum() {
    document.getElementById('temp-number').innerHTML = `<h4>${ProxyState.weather.setTempType()} ${ProxyState.weather.tempEnding}<h4>`
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
    }
}
