import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
  data: {}
})

export const getters = {
  getData: (state) => state.data,
  getKeys: (state) => Object.keys(state.data),
  getPokemons: (state) => (state.data ? state.data.pokemon : []),
  getRankingScenarios: (state) =>
    state.data ? state.data.rankingScenarios : [],
  getPokemonTags: (state) => (state.data ? state.data.pokemonTags : []),
  getMoves: (state) => (state.data ? state.data.moves : [])
}

export const mutations = {
  ...vuexfireMutations,
  SET_DATA: (state, data) => (state.data = data)
}

export const actions = {
  async fetchData({ getters, commit }) {
    const apiURL = getters['util/getApiURL']
    const data = await this.$axios.$get(apiURL)
    commit('SET_DATA', data)
  }
}
