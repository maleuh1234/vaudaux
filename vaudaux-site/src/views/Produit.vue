<template>
    <div class="product-page">
    <h1>{{ product.titre }}</h1>
    <p> {{ product.txtInfo }} </p>
    <div v-if="product.imgs && product.imgs.length > 0">
      <img 
        v-for="(img, index) in product.imgs" 
        :key="index" 
        :src="img.fields.file.url" 
        :alt="product.titre"
      >
    </div>
    <p>{{ product.description }}</p>
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



 </style>
