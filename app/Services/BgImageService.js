import { ProxyState } from "../AppState.js";
import BgImage from "../Models/BgImage.js";
import { sandboxApi } from "./AxiosService.js"


class BgImageService {
    async grabBgImage() {
        try {
            let response = await sandboxApi.get('images')
            ProxyState.bgImage = new BgImage(response.data)
        } catch (error) {
            console.error(error)
        }

    }
}

export const bgImageService = new BgImageService();