import {
  database,
  increment,
  pokemonsRef,
  Timestamp,
  usageRef
} from '~/firebase'

export const state = () => ({
  stack: []
})

export const mutations = {
  ADD_POKEMON: (state, pokemon) => state.stack.push(pokemon),
  REMOVE_POKEMON: (state, speciesId) =>
    state.stack.splice(
      state.stack.findIndex((pokemon) => pokemon.speciesId === speciesId),
      1
    ),
  CLEAR_STACK: (state) => (state.stack = [])
}

export const getters = {
  getStack: (state) => state.stack || [],
  getStackList: (state) =>
    state.stack.reduce((accumulator, pokemon) => {
      if (accumulator[pokemon.speciesId]) {
        accumulator[pokemon.speciesId].usage++
      } else {
        accumulator[pokemon.speciesId] = {
          ...pokemon,
          usage: 1
        }
      }
      return accumulator
    }, {}),
  getStackLength: (state) => state.stack.length,
  getPokemonNameList: (state, getters) => {
    const list = {}
    Object.values(getters.getStackList).map((pokemon) => {
      list[pokemon.speciesId] = pokemon.usage
    })
    return list
  }
}

export const actions = {
  register: (context, leagueName) => {
    if (context.state.stack.length && leagueName) {
      const batch = database.batch()
      context.state.stack.forEach((pokemon) => {
        if (pokemon.speciesId) {
          batch.set(
            pokemonsRef.doc(pokemon.speciesId),
            {
              ...pokemon,
              usage: {
                [leagueName]: increment
              }
            },
            {
              merge: true
            }
          )
        }
      })
      batch.commit().then(() =>
        usageRef
          .add({
            [leagueName]: context.getters.getPokemonNameList,
            created: Timestamp.now()
          })
          .then(() => context.commit('CLEAR_STACK'))
      )
    }
  }
}
