import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"


class QuotesService {
    async grabQuote() {
        try {
            let response = await sandboxApi.get('quotes')
            ProxyState.quote = new Quote(response.data)
        } catch (error) {
            console.error(error)
        }
    }
}

export const quoteService = new QuotesService();