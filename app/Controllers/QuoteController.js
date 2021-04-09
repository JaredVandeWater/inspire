import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuotesService.js";

//Private
function _drawQuote() {
    let template = ''
    template += `<h5>${ProxyState.quote.quote}</h5><p>-${ProxyState.quote.author}</p>`
    document.getElementById('quote-stuff').innerHTML = template
    console.log("drawn-quote");
}


//Public
export default class BgImageController {
    constructor() {
        ProxyState.on('quote', _drawQuote)


        this.grabQuote()
    }

    async grabQuote() {
        try {
            await quoteService.grabQuote()
        } catch (error) {
            console.error(error)
        }
    }
}