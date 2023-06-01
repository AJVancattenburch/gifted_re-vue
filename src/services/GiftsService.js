import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService";
import { Gift } from "../models/Gift.js";
import { giphyApi } from "./AxiosService.js";
import { Giphy } from "../models/Giphy.js";


class GiftsService {
  async getGifts() {
    const res = await api.get('api/gifts')
    // logger.log('[GETTING GIFTS]', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
    logger.log(AppState.gifts)
  }

  async openGift(giftId) {

    // look through your gifts array and find the gift using the id you passed in

    // maybe use an index so you can splice out the 'old data' and put in the 'updated data'
    const gift = AppState.gifts.find(g => g.id == giftId)
    gift.opened = true
    const res = await api.put(`api/gifts/${giftId}`, gift)
    logger.log(gift, res.data)
  }

  async createGift(formData) {
    const res = await api.post('api/gifts', formData)
    logger.log('[CREATING GIFT!]', res.data)
    AppState.gifts.unshift(new Gift(res.data))
  }

  async searchGiphy(query) {
    const res = await giphyApi.get('search', {
      api_key: 'OVZma9f0W7wQrKSMYI8y0uC8ItxecChE',
      rating: 'pg',
      offset: 0,
      lang: 'en',
      limit: 10,
      q: query
    })
    logger.log(res.data)
    const giphys = res.data.map(g => g.images.downsized_large.url)
    // handle the response
    AppState.giphys = giphys
}








  
}

export const giftsService = new GiftsService()