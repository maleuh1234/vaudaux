<template>
  <AppNavigation/>
  <router-view/>
</template>

<script>
import AppNavigation from "./components/Navigation.vue"

export default {
  name: 'HomeView',
  components: {
    AppNavigation
  }
}
</script>
