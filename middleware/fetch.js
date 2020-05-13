export default function({ store }) {
  if (Object.keys(store.state.data).length === 0) {
    store.dispatch('fetchData')
    store.dispatch('pokemons/bindPokemons')
  }
}
