<template>
  <div class="page-header-2">
        <div class="title"><h1>{{textes[currentLang].Title}}</h1></div>
        <div class="header-intro">
            <p>{{textes[currentLang].Intro}}</p>
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
      <div class="spacer-footer"></div>
    <div class="spacer-footer"></div>

  <leFooter/>
    <div class="spacer-footer"></div>
</template>
<script setup>
    import leFooter from "../components/Footer.vue";
</script>
<script>
import contentfulClient from '@/contentfulClient.js';



export default {
  data() {
    return {
      currentLang: localStorage.getItem("Language") || "fr-CH",
      creations: [],
      textes: {
        "fr-CH": {
          Title: "Nos réalisations",
          Intro: "Découvrez nos réalisations, où le savoir-faire artisanal se met au service de créations uniques, pensées et façonnées avec soin pour sublimer chaque projet.",
        },
        "en-US": {
          Title: "Our Creations",
          Intro: "Discover our creations, where artisanal expertise meets the art of crafting unique pieces, thoughtfully designed and meticulously shaped to enhance every project.",
        },
      },
      
    };
  },

  async mounted() {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: 'vaudauxRealisation', // Remplace par l'ID de ton type de contenu
        locale: this.currentLang, // Filtre les entrées selon la langue actuelle
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
