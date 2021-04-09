import { ProxyState } from "../AppState.js";
import { bgImageService } from "../Services/BgImageService.js";

//Private
function _drawImg() {
    let template = ''
    template += `url('${ProxyState.bgImage.bgUrl}')`
    document.body.style.backgroundImage = template;
    console.log("drawn-img");
}


//Public
export default class BgImageController {
    constructor() {
        ProxyState.on('bgImage', _drawImg)

        this.grabBgImage()
    }

    async grabBgImage() {
        try {
            await bgImageService.grabBgImage()
        } catch (error) {
            console.error(error);
        }
    }
}