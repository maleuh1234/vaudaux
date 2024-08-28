<template>
  <button @click="goBack" class="back-button"><svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 2L3 14.6L15.6 27.2" stroke="black" stroke-width="3.57"/></svg><span>{{textes[currentLanguage].Bouton}}</span></button>
    <div class="product-page">
      <div class="text-container">
        <h1>{{ product.titre }}</h1>
        <p> {{ product.txtInfo }} </p>
      </div>
        <div class="product-grid" v-if="product.imgs && product.imgs.length > 0">
          <div 
            v-for="(img, index) in product.imgs" 
            :key="index" 
            class="product-image" 
            :style="{ backgroundImage: 'url(' + img.fields.file.url + ')' }"
            :alt="product.titre"
          ></div>
          <p>{{ product.description }}</p>
        </div>
    </div>
</template>

<script>
import contentfulClient from '@/contentfulClient.js';

export default {
  data() {
    return {
      product: {},
      currentLanguage: localStorage.getItem("Language") || "fr-CH",
      textes: {
        "fr-CH": {
          Bouton: "Retour",
        },
        "en-US": {
          Bouton: "Back",
        },
      },
    };
  },
  async created() {
    try {
      const entry = await contentfulClient.getEntry(this.$route.params.id, {
      locale: this.currentLanguage
      });
      this.product = entry.fields;
    } catch (error) {
      console.error("Erreur lors de la récupération du produit:", error);
    }
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
  },
};
</script>



<style scoped>

  .back-button {
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }

  .back-button svg {
    transition: .3s;
  }
  
  .back-button:hover svg {
    transform: translateX(-.5rem);
  }

  .back-button span {
    font-weight: 600;
    margin-left: 1rem;
  }

  h1 {
    position: static;
    color: #7B6E68;
    font-weight: 500;
    font-size: 1.999rem;
  }

  .product-page {
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem;
    justify-content: space-between;
    align-items: center;
  }

  .product-image:first-child {
    grid-column: span 2;
    height: auto;
    aspect-ratio: 1/1;
  }

  .product-grid {
    width: 100%;
  }

  .product-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 60vh;
    margin-bottom: 3rem;
  }
  
  .text-container {
    margin: 7rem 0 4.5rem 0;
    width: 100%;
  }
  
  @media screen and (min-width: 756px) {
    h1 {
      font-size: 4rem;
    }
    
  }
  
  @media screen and (min-width: 1100px) {
      .product-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 50vh;
        margin-bottom: 0;
      }

    .product-page {
      flex-direction: row-reverse;
      margin: 0 3rem;
      height: 100vh;
      justify-content: space-between;
      align-items: center;
    }

    .product-grid {
      height: 70vh;
      width: 54%;
      overflow-y: scroll;
      padding: 0 .3rem;
      display: grid;
      grid-template-columns: repeat(2, 47%);
      grid-gap: 6%;
    }

    .product-grid::-webkit-scrollbar {
      width: 0.2rem; /* Largeur de la barre de défilement */
    }

    .product-grid::-webkit-scrollbar-track {
      background: transparent; /* Fond transparent */
    }

    .product-grid::-webkit-scrollbar-thumb {
      background-color: #7B6E68; /* Couleur de l'indicateur */
      border-radius: 0; /* Pas de border-radius */
    }

    .text-container {
      width: 42%;
      height: 60vh;
    }
  }

 </style>
