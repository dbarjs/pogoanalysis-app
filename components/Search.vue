<template>
  <div class="container flex-col px-4">
    <input
      v-model="query"
      type="text"
      class="mb-4 p-4 bg-gray-400 border-2 border-red-400 border-solid"
      placeholder="pokemon, tipo ou ataque"
    />
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
  data() {
    return {
      query: ''
    }
  },
  computed: {
    pokemons() {
      return this.$store.getters.getPokemons || []
    },
    result() {
      if (this.query) {
        let keys = ['dex', 'speciesName', 'types']
        if (this.query.charAt(0) === '@') {
          keys = ['fastMoves', 'chargedMoves']
        }
        const fuse = new Fuse(this.pokemons, {
          keys,
          threshold: 0.4
        })
        return fuse.search(this.query).slice(0, 99)
      } else {
        return this.pokemons
      }
    }
  }
}
</script>
