import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js"


class WeatherService {
    async grabWeather() {
        try {
            let response = await sandboxApi.get('weather')
            ProxyState.weather = new Weather(response.data)
            console.log(ProxyState.quote);
        } catch (error) {
            console.error(error)
        }
    }
}

export const weatherService = new WeatherService();