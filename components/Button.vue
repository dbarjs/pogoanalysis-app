<template>
  <button
    class="button"
    :class="{ 'button--icon': icon }"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style>
.button {
  @apply px-4 py-2 rounded font-bold;
}

.button.button--icon {
  @apply py-1 px-1 !important;
}

.button:active,
.button:focus,
.button:hover {
  @apply outline-none appearance-none;
}

.button:hover {
  @apply bg-opacity-75;
}
</style>
