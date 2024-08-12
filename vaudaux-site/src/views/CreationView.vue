<template>
  <div class="page-header">
    <h1> {{textes[currentLanguage].Title}}  </h1>
  </div>
  <div>
    <p class="intro-text">Introductions au créations</p>
  </div>
  <div class="creation-grid">
    <RouterLink 
      v-for="(creation, index) in creations" 
      :key="index" 
      :to="{ name: 'product', params: { id: creation.sys.id }}" 
      class="creation"
    >
      <img 
        :src="creation.fields.imgs[0]?.fields.file.url" 
        :alt="creation.fields.titre"
      >
      <p>{{ creation.fields.titre }}</p>
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

  async mounted() {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: 'vaudauxRealisation', // Remplace par l'ID de ton type de contenu
        locale: this.currentLanguage, // Filtre les entrées selon la langue actuelle
      });
      this.creations = entries.items.map(item => item); // Mets à jour le tableau 'creations'
      console.log(this.creations);
    } catch (error) {
      console.error("Erreur lors de la récupération des entrées de Contentful:", error);
    }
  },
};
//
</script>



<style scoped>



 </style>
