<template>
  <li
    class="transform scale-90 hover:scale-100 duration-300 hover:text-blue-500 transition-all ease-in-out"
  >
    <nuxt-link :to="to">
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Boolean],
      default: false
    }
  }
}
</script>
