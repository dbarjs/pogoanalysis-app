<template>
  <span>
    <svg
      :style="{ width: size + 'px', height: size + 'px' }"
      viewBox="0 0 24 24"
    >
      <path class="fill-current" :d="svgPath" />
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    svgPath: {
      default: '',
      type: String
    },
    color: {
      default: '#000000',
      type: String
    },
    size: {
      default: 24,
      type: [String, Number]
    }
  },
  computed: {
    viewbox() {
      return `0 0 ${this.size} ${this.size}`
    }
  }
}
</script>

<style></style>
