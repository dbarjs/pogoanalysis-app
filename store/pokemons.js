import { firestoreAction } from 'vuexfire'
import { pokemonsRef } from '~/firebase'

export const state = () => ({
  pokemons: []
})

export const getters = {
  getPokemons: (state, getters) =>
    getters.getPokemonList
      .map((pokemon) => ({
        ...pokemon,
        ...getters.getPokemonBySpeciesId(pokemon.speciesId)
      }))
      .sort(orderByPokemonUsage),
  getPokemonList: (state, getters, rootState, rootGetters) =>
    rootGetters.getPokemons.length >= state.pokemons.length
      ? rootGetters.getPokemons
      : state.pokemons,
  getPokemonBySpeciesId: (state) => (speciesId) =>
    state.pokemons.find((pokemon) => pokemon.speciesId === speciesId) || {}
}

export const actions = {
  bindPokemons: firestoreAction((context) => {
    context.bindFirestoreRef('pokemons', pokemonsRef)
  })
}

/**
 * Functions
 */

function orderByPokemonUsage(pokemonA, pokemonB) {
  if (pokemonA.usage && pokemonB.usage) {
    const pokemonAUsage = sumAllUsageLeagues(pokemonA.usage)
    const pokemonBUsage = sumAllUsageLeagues(pokemonB.usage)
    if (pokemonAUsage < pokemonBUsage) {
      return 1
    }
    if (pokemonAUsage > pokemonBUsage) {
      return -1
    }
    return 0
  }
  if (pokemonA.usage) {
    return -1
  }
  if (pokemonB.usage) {
    return 1
  }
  return 0
}

function sumAllUsageLeagues(usage = {}) {
  return (
    Object.values(usage).reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0) || 0
  )
}
