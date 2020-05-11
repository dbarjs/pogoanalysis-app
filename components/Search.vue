<template>
  <div class="container flex-col px-4">
    <input
      v-model="queryText"
      type="text"
      class="mb-4 p-4 bg-gray-400 border-2 border-red-400 border-solid"
      placeholder="pokemon, tipo ou ataque"
    />
  </div>
</template>

<script>
export default {
  computed: {
    queryText: {
      get() {
        return this.$store.getters.getQueryText
      },
      set(value) {
        this.$store.commit('SET_QUERY_TEXT', value)
      }
    }
  }
}
</script>
