<template>
  <div>
    <p class="mb-4">Showing: {{ result.length }} results</p>
    <ul class="flex flex-col w-full">
      <Pokemon
        v-for="(pokemon, index) in result"
        :key="index"
        :pokemon="pokemon.item || pokemon"
        hide-details
      >
      </Pokemon>
    </ul>
  </div>
</template>

<script>
import Fuse from 'fuse.js/dist/fuse.basic.esm'
import Pokemon from '~/components/Pokemon.vue'
export default {
  components: {
    Pokemon
  },
  computed: {
    queryText() {
      return this.$store.getters.getQueryText
    },
    pokemons() {
      return this.$store.getters['pokemons/getPokemons'] || []
    },
    result() {
      if (this.queryText) {
        let keys = ['dex', 'speciesName', 'types']
        if (this.queryText.charAt(0) === '@') {
          keys = ['fastMoves', 'chargedMoves']
        }
        const fuse = new Fuse(this.pokemons, {
          keys,
          threshold: 0.4,
          shouldSort: false
        })
        return fuse.search(this.queryText).slice(0, 99)
      } else {
        return this.pokemons
      }
    }
  }
}
</script>

<style></style>
