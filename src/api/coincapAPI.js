import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.coincap.io/'
})

export const coinAPI = {
    getExchange(limit) {
        const currentLimit = limit ? limit : '10'
        return instance.get(`v2/exchanges?limit=${currentLimit}`).then(res => res.data)
    },
    getMarket(limit) {
        const currentLimit = limit ? limit : '10'
        return instance.get(`v2/markets?limit=${currentLimit}`).then(res => res.data)
    }
}
