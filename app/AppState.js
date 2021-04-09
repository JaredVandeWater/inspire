
import BgImage from "./Models/BgImage.js"
import Quote from "./Models/Quote.js"
import Weather from "./Models/Weather.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {BgImage} */
  bgImage = null

  /** @type {Quote} */
  quote = null

  /** @type {Weather} */
  weather = null


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
