<template>
  <header>
    <AppNavigation v-if="!isProductRoute"/>
  </header>  
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import AppNavigation from "./components/Navigation.vue"
  import { gsap } from 'gsap';
  import { ScrollSmoother } from 'gsap/ScrollSmoother';

  gsap.registerPlugin(ScrollSmoother);

  export default {
    name: 'layout',
    components: {
      AppNavigation
    },
    computed: {
      // Propriété calculée pour vérifier si la route est la page produit
      isProductRoute() {
        return this.$route.name === 'product' || this.$route.name === 'legal';  // Vérifie si la route est '/creations/:id'
      }
    }
  }
</script>

<style scoped>
  .logo-aligner {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    height: 10rem;
    padding-left: 3vw;
    z-index: 3;
  }

  .logo-home-link {
    height: 8rem;
  }
  
  .logo-home {
    width: 13rem;
    height: auto;
  }

  header {
    position: absolute;
    top: 0;
  }
</style>
