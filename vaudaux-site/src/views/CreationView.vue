<template>
  <div class="page-header">
    <h1> {{textes[currentLanguage].Title}}  </h1>
  </div>
  <div>
    <p class="intro-text">Introductions au créations</p>
  </div>
  <div class="creation-grid">
    <RouterLink class="creation">
      <img src="" alt="">
      <p></p>
    </RouterLink>
    <RouterLink class="creation">
      <img src="" alt="">
      <p></p>
    </RouterLink>
    <RouterLink class="creation">
      <img src="" alt="">
      <p></p>
    </RouterLink>
    <RouterLink class="creation">
      <img src="" alt="">
      <p></p>
    </RouterLink>
    <RouterLink class="creation">
      <img src="" alt="">
      <p></p>
    </RouterLink>
  </div>
</template>

<script>
import contentfulClient from '@/contentfulClient.js';



export default {
  data() {
    return {
      currentLanguage: localStorage.getItem("Language") || "en-US",
      creations: [],
      textes: {
        "fr-CH": {
          Title: "Creations",
        },
        "en-US": {
          Title: "Creations",
        },
      },
      
    };
  },

  mounted() {
    contentfulClient.getEntry()
  },

};
</script>



<style scoped>



 </style>
