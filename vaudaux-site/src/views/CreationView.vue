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
    <div class="creation-img">
      <img 
        :src="creation.fields.imgs[0]?.fields.file.url" 
        :alt="creation.fields.titre"
      >
    </div>
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

.creation {
  margin-bottom: 5rem;
}

.creation-grid {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-gap: 0;
  max-width: 100vw;
}

.creation-img {
  width: 100%;
  aspect-ratio: 5/6;
  overflow: hidden;
}

@media screen and (min-width: 765px) {
  .line-item {
    width: 100%;
  }
  .creation {
    margin-bottom: 3.5rem;
  }
  .creation-grid {
    display: grid;
    grid-template-columns: repeat(2, 340px);
    grid-gap: 1rem;
    width: fit-content;
    margin: 5rem auto;
  }
}

@media screen and (min-width: 1100px) {
  .creation-grid {
    display: grid;
    grid-template-columns: repeat(3, 375px);
    grid-gap: 2rem;
  }
}

</style>
