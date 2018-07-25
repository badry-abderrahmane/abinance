const Binance = require('binance-api-node').default


export const state = () => ({
  client: null,
})

export const mutations = {
  SET_CLIENT: (state, { keys }) => {
    state.client = Binance({
      apiKey: keys.apiKey,
      apiSecret: keys.apiSecret,
    })
  },
}

export const actions = {

}
