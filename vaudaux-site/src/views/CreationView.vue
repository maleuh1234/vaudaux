<template>
  <div class="page-header-2">
        <div class="title"><h1>Nos réalisations</h1></div>
        <div class="header-intro">
            <p>Découvrez nos réalisations, où le savoir-faire artisanal se met au service de créations uniques, pensées et façonnées avec soin pour sublimer chaque projet.</p>
        </div>
    </div>
  <div class="creation-grid">
    <div 
      v-for="(creation, index) in creations" 
      :key="index" 
      class="creation"
    >
      <img 
        :src="creation.fields.imgs[0]?.fields.file.url" 
        :alt="creation.fields.titre"
      >
    </div>
  </div>
  <leFooter/>
</template>
<script setup>
import leFooter from "../components/Footer.vue";
</script>
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

.spacer {
        height: 200px;
    }
    .page-header-2 {
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 100px;
    }

    .title {
        background-color: #fff;
        padding: 0 3%;
        position: relative;
        bottom: -28px;
    }
.header-intro {
        color: #aea597;
        border: 1px solid #aea597;
        font-size: 19px;
        max-width: 94%;
        padding: 40px 10% 30px 10%;
        border-radius: 10px;
        text-align: center;
    }

    h1 { 
        color: #aea597;
        position: static;
        font-size: 38px;
        z-index: 1;
    }

.creation-grid {
  display: grid;
  margin: auto;
  margin-bottom: 100px;
  width: fit-content;
  max-width: 90%;
}

/* —— Mobile par défaut : grille simple —— */
.creation-grid {
  grid-template-columns: 1fr;
  grid-gap: 30px;
}

.creation {
  width: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.creation img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* empêche toute déformation */
  object-position: center;
  display: block;
}

/* —— Desktop layout personnalisé —— */
@media screen and (min-width: 1100px) {
  .creation-grid {
    grid-template-columns: repeat(4, 300px);
    grid-auto-rows: 450px;
    grid-template-areas:
      "A A B C"
      "A A D E"
      "F G H H";
  }

  /* On applique les zones uniquement après 1100px */
  .creation:nth-child(1) { grid-area: A; }
  .creation:nth-child(2) { grid-area: B; }
  .creation:nth-child(3) { grid-area: C; }
  .creation:nth-child(4) { grid-area: D; }
  .creation:nth-child(5) { grid-area: E; }
  .creation:nth-child(6) { grid-area: F; }
  .creation:nth-child(7) { grid-area: G; }
  .creation:nth-child(8) { grid-area: H; }

  .creation-grid {
    margin: auto;  
  }
}

</style>
