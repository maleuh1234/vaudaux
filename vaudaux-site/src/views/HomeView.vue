<template>
  <div class="home-page-background">
      <div class="background-layer" :style="{ backgroundImage: `url(${defaultImageUrl})` }"></div>
      <div class="foreground-layer" ref="foregroundLayer"></div>      
      <h1 class="home-h1">{{textes[currentLanguage].Title}}</h1>
      <RouterLink to="/presentation" class="hp-button playfair-display-semi-bold button-right" @mouseover="changeImage(imageUrl1)" @mouseleave="resetImage">{{textes[currentLanguage].Pres}} <span class="arrow"><svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 36L20 19L2 2" stroke="white" stroke-width="5"/></svg></span></RouterLink>
      <RouterLink to="/creations" class="hp-button playfair-display-semi-bold button-left" @mouseover="changeImage(imageUrl2)" @mouseleave="resetImage"><span class="arrow"><svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L4 19L22 36" stroke="white" stroke-width="5"/></svg></span> {{textes[currentLanguage].Crea}}</RouterLink>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import defaultImageUrl from '@/assets/images-home/hipppo.webp';
import imageUrl1 from '@/assets/images-home/atelier.webp';
import imageUrl2 from '@/assets/images-home/Papillion.webp';

export default {
  data() {
    return {
      currentLanguage: localStorage.getItem("Language") || "fr-CH",
      textes: {
        "fr-CH": {
          Title: "Texte concernant l'actualité de vaudaux, le gainier depuis 1908 FR",
          Pres: "Presentation FR",
          Crea:"Créations FR",
        },
        "en-US": {
          Title: "Texte concernant l'actualité de vaudaux, le gainier depuis 1908 US",
          Pres: "Presnetation US",
          Crea:"Créations US",
        },
      },
      
    };
  },
  name: 'HomePage',
  setup() {
    const foregroundLayer = ref(null);

    const changeImage = (newImageUrl) => {
      gsap.to(foregroundLayer.value, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          foregroundLayer.value.style.backgroundImage = `url(${newImageUrl})`;
          gsap.to(foregroundLayer.value, { opacity: 1, duration: 0.2 });
        },
      });
    };

    const resetImage = () => {
      gsap.to(foregroundLayer.value, { opacity: 0, duration: 0.3 });
    };

    // Précharger les images au montage du composant
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    onMounted(async () => {
      await preloadImage(defaultImageUrl);
      await preloadImage(imageUrl1);
      await preloadImage(imageUrl2);
    });

    return {
      defaultImageUrl,
      imageUrl1,
      imageUrl2,
      changeImage,
      resetImage,
      foregroundLayer,
    };
  },
};
</script>

<style scoped>
.home-page-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-layer,
.foreground-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: 0.2s;
}

.foreground-layer {
  z-index: 1;
  opacity: 0;
}

.home-h1 {
  position: relative;
  text-align: center;
  font-size: 1.414rem;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 200px;
  color: #fff;
  z-index: 3;
}

button {
  margin: 0 10px;
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
}

.hp-button {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 5rem;
  z-index: 5;
  transition: .3s;
  color: #fff;
  font-size: 1.3rem;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.hp-button:hover {
  transform: scale(1.05);
}

.hp-button .arrow {
  transform: scale(.7);
}

.button-right {
  right: 4rem;
  transform-origin: right;
}
.button-right .arrow{
  margin-left: 20px;
  transition: .3s;
}

.button-left .arrow{
  margin-right: 20px;
  transition: .3s;
}

.button-right:hover .arrow{
  margin-left: 30px;
}

.button-left:hover .arrow{
  margin-right: 30px;
}

.button-left {
  left: 4rem;
  transform-origin: left;
}

.arrow {
  font-weight: 900;
}


@media screen and (max-width: 390px) {
  .button-right {
    bottom: 2.5rem;
    right: 1rem;
  }
  
  .button-left {
    left: 1rem;
  }

}
@media screen and (min-width: 1100px) {
  .home-h1 {
    font-size: 3.998rem;
    margin-top: 270px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .hp-button {
    font-size: 2rem;
  }
  .hp-button .arrow {
    transform: scale(1);
  }
}
</style>