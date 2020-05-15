<template>
  <div
    v-if="stack.length"
    class="bg-gray-300 fixed bottom-0 left-0 p-4 pb-3 w-full shadow-xl select-none"
  >
    <ul class="usage-stack-list flex flex-col overflow-y-auto mb-3">
      <li
        v-for="pokemon in pokemonList"
        :key="pokemon.speciesId"
        class="mb-2 last:m-0"
      >
        <div class="flex px-4 py-2 bg-white rounded-lg">
          <div class="flex justify-between items-center w-full">
            <p>
              <span class="text-sm">{{ pokemon.speciesName }}</span>
              <span
                class="px-2 py-1 rounded-lg text-xs bg-green-500 text-white"
              >
                {{ pokemon.usage }}
              </span>
            </p>
            <btn
              class="h-full rounded hover:bg-gray-200"
              icon
              @click="remove(pokemon.speciesId)"
            >
              <icon
                class="text-red-800"
                :svg-path="mdiDeleteOutline"
                size="18"
              ></icon>
            </btn>
          </div>
        </div>
      </li>
    </ul>
    <div class="flex justify-between mb-2">
      <btn
        class="mr-4 flex-1 bg-blue-500 text-white"
        @click="register('greatLeague')"
      >
        Great
      </btn>
      <btn
        class="mr-4 flex-1 bg-purple-500 text-white"
        @click="register('ultraLeague')"
      >
        Ultra
      </btn>
      <btn
        class="mr-0 flex-1 bg-gray-900 text-white"
        @click="register('masterLeague')"
      >
        Master
      </btn>
    </div>
    <p class="text-xs text-center">Selecione uma das ligas acima</p>
  </div>
</template>

<script>
import { mdiDeleteOutline } from '@mdi/js'
export default {
  data() {
    return {
      mdiDeleteOutline
    }
  },
  computed: {
    stack() {
      return this.$store.getters['usage/getStack']
    },
    pokemonList() {
      const list = Object.values(this.$store.getters['usage/getStackList'])
      return list.sort(this.orderByDexNumber)
    }
  },
  methods: {
    remove(speciesId) {
      this.$store.commit('usage/REMOVE_POKEMON', speciesId)
    },
    orderByDexNumber(pokemonA, pokemonB) {
      if (pokemonA.dex > pokemonB.dex) {
        return 1
      }
      if (pokemonA.dex < pokemonB.dex) {
        return -1
      }
      return 0
    },
    register(leagueName) {
      this.$store.dispatch('usage/register', leagueName)
    }
  }
}
</script>

<style>
.usage-stack-list {
  max-height: 14rem;
}
</style>
