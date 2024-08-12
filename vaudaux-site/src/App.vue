<template>
  <header>
    <div class="logo-aligner">
      <RouterLink to="/"><img class="logo-home" ref="logo" src="./assets/logo.png" alt="Vaudaux" /></RouterLink>
    </div>
    <AppNavigation/>
  </header>  <router-view/>
</template>

<script>
import AppNavigation from "./components/Navigation.vue"

export default {
  name: 'layout',
  components: {
    AppNavigation
  }
}
</script>

<style scoped>
  .logo-aligner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding-left: 3vw;
    z-index: 3;
  }

  header {
    position: absolute;
    top: 0;
  }
</style>
