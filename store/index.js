import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
  data: {},
  queryText: ''
})

export const getters = {
  getQueryText: (state) => state.queryText || '',
  getData: (state) => state.data,
  getKeys: (state) => Object.keys(state.data),
  getPokemons: (state) => state.data?.pokemon || [],
  getRankingScenarios: (state) => state.data?.rankingScenarios || [],
  getPokemonTags: (state) => state.data?.pokemonTags || [],
  getMoves: (state) => state.data?.moves || []
}

export const mutations = {
  ...vuexfireMutations,
  SET_DATA: (state, data) => (state.data = data),
  SET_QUERY_TEXT: (state, value) => (state.queryText = value)
}

export const actions = {
  async fetchData({ getters, commit }) {
    const apiURL = getters['util/getApiURL']
    const data = await this.$axios.$get(apiURL)
    commit('SET_DATA', data)
  }
}
