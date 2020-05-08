export const state = () => ({
  apiURL:
    'https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/gamemaster.json'
})

export const getters = {
  getApiURL: (state) => state.apiURL
}
