<template>
  <nav class="flex justify-center">
    <ul class="flex flex-col items-center justify-center">
      <navigation-link to="/league/master">Great League</navigation-link>
      <navigation-link to="/league/master">Ultra League</navigation-link>
      <navigation-link to="/league/master">Master League</navigation-link>
    </ul>
  </nav>
</template>

<script>
import NavigationLink from '~/components/NavigationLink.vue'
export default {
  components: {
    NavigationLink
  }
}
</script>
