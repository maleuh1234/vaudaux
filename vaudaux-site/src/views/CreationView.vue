<template>
  <div class="page-header">
    <h1> {{textes[currentLanguage].Title}}  </h1>
  </div>
  <div>
    <p class="intro-text">{{textes[currentLanguage].Intro}} </p>
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
      currentLanguage: localStorage.getItem("Language") || "fr-CH",
      creations: [],
      textes: {
        "fr-CH": {
          Title: "Créations",
          Intro: "Depuis plus d’un siècle, nos artisans de la maison perpétuent leur savoir-faire, toujours soucieux du détail, de la délicatesse des coupes et des assemblages, offrant une qualité sans égale aux écrins et autres présentoirs qui mettront en valeur les objets et l’identité de chaque marque des Maisons pour lesquelles nous créons. Les matières, soigneusement sélectionnées, bénéficient de finitions élégantes et soignées pour une harmonie toujours fonctionnelle.",
        },
        "en-US": {
          Title: "Creations",
          Intro: "For over a century, the artisans of our house have been passing down their expertise, always attentive to detail, the finesse of cuts and assemblies, offering unrivaled quality in the cases and other displays that showcase the objects and the identity of each brand for which we create. The carefully selected materials are enhanced by elegant and refined finishes, ensuring a harmonious yet functional result.",
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

.page-header {
  background-image: url(../assets/images-home/0K6A9321.jpg);
}

h1 {
  position: absolute;
}

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
  transition: .5s;
}

.creation-img:hover {
  transform: scale(1.01);
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
