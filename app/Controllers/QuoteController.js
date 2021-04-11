import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuotesService.js";

//Private
function _drawQuote() {
    let template = ''
    template += `<h3 id="main-quote">${ProxyState.quote.quote}</h3><h5 id="main-quote-author">-${ProxyState.quote.author}</h5>`
    document.getElementById('quote-stuff').innerHTML = template

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
