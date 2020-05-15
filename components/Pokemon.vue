<template>
  <div
    v-if="pokemon"
    class="pokemon flex flex-col items-start mb-4 transition-all duration-300 cursor-pointer bg-white p-6 rounded-lg shadow-lg select-none"
    :class="color"
    @click="select"
  >
    <slot></slot>
    <h1 class="text-lg font-bold text-left">
      #{{ pokemon.dex }} {{ pokemon.speciesName }}
    </h1>
    <p v-if="!hideDetails">speciesId: {{ pokemon.speciesId }}</p>
    <p v-if="!hideDetails">Stats: {{ pokemon.baseStats }}</p>
    <p v-if="!hideDetails">Types: {{ pokemon.types }}</p>
    <p v-if="!hideDetails">Fast Moves: {{ pokemon.fastMoves }}</p>
    <p v-if="!hideDetails">Charged Moves: {{ pokemon.chargedMoves }}</p>
    <p v-if="!hideDetails">Tags: {{ pokemon.tags }}</p>
    <p v-if="!hideDetails">defaultIVs: {{ pokemon.defaultIVs }}</p>
  </div>
</template>

<script>
import { pokemonsRef, increment } from '~/firebase'
export default {
  props: {
    pokemon: {
      required: true,
      type: Object
    },
    hideDetails: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    color() {
      switch (this.pokemon.types[0]) {
        case 'bug':
          return 'bg-green-800 text-white'
        case 'dark':
          return 'bg-gray-800 text-white'
        case 'dragon':
          return 'bg-blue-900 text-white'
        case 'electric':
          return 'bg-yellow-400'
        case 'fairy':
          return 'bg-pink-500'
        case 'fighting':
          return 'bg-red-900 text-white'
        case 'fire':
          return 'bg-red-600'
        case 'flying':
          return 'bg-blue-300'
        case 'ghost':
          return 'bg-indigo-800 text-white'
        case 'grass':
          return 'bg-light-green-500 text-light-green-900'
        case 'ground':
          return 'bg-orange-800'
        case 'ice':
          return 'bg-indigo-200'
        case 'normal':
          return 'bg-gray-400'
        case 'poison':
          return 'bg-purple-700'
        case 'psychic':
          return 'bg-red-300'
        case 'rock':
          return 'bg-yellow-600'
        case 'steel':
          return 'bg-blue-gray-600 text-white'
        case 'water':
          return 'bg-blue-300'
        default:
          return 'bg-gray-300'
      }
    }
  },
  methods: {
    select() {
      this.$store.commit('usage/ADD_POKEMON', this.pokemon)
      if (!pokemonsRef) {
        pokemonsRef.doc(this.pokemon.speciesId).set(
          {
            ...this.pokemon,
            usage: {
              greatLeague: increment
            }
          },
          {
            merge: true
          }
        )
      }
    }
  }
}
</script>

<style>
.pokemon:hover {
  @apply bg-opacity-75;
}
</style>
