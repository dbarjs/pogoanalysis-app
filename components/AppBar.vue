<template>
  <div class="flex flex-col items-center p-4">
    <logo></logo>
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavigationBar from '~/components/NavigationBar.vue'
export default {
  components: {
    Logo,
    NavigationBar
  }
}
</script>
