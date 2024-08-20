<template>
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
    };
  },
  async created() {
    try {
      const entry = await contentfulClient.getEntry(this.$route.params.id);
      this.product = entry.fields;
    } catch (error) {
      console.error("Erreur lors de la récupération du produit:", error);
    }
  },
};
</script>



<style scoped>

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
    grid-column: span 2; /* Le premier enfant occupe 2 colonnes */
  }

  .product-grid {
    width: 100%;
  }

  .product-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .text-container {
    margin: 7rem 0 5rem 0;
    width: 100%;
  }

  @media screen and (min-width: 756px) {
    h1 {
      font-size: 4rem;
    }

  }
  
  @media screen and (min-width: 1100px) {
    .product-page {
      flex-direction: row-reverse;
      margin: 0 3rem;
      height: 100vh;
      justify-content: space-between;
      align-items: center;
    }

    .product-grid {
      height: 70vh;
      width: 48%;
      overflow-y: scroll;
      padding: 0 .3rem;
      display: grid;
      grid-template-columns: repeat(2, 47%);
      grid-auto-rows: 19rem;
      grid-gap: 6%;
    }

    .text-container {
      width: 48%;
      height: 40vh;
    }
  }

 </style>
