<template>
  <div class="home-page-background">
      <div class="background-layer" :style="{ backgroundImage: `url(${defaultImageUrl})` }">
         <!-- <img class="logo-ephj" src="../assets/images-home/LuxepackTA.png" alt="">
        <img src="../assets/images-home/luxepackT.png" alt="">  -->
      </div>
      <div class="foreground-layer" ref="foregroundLayer"></div>      
      <!-- <h1 class="home-h1" ref="enTete">{{textes[currentLanguage].Title}}</h1> -->
      <RouterLink to="/presentation" class="hp-button button-right" @mouseover="changeImage(imageUrl1)" @mouseleave="resetImage">{{textes[currentLanguage].Pres}}</RouterLink>
      <RouterLink to="/creations" class="hp-button button-left" @mouseover="changeImage(imageUrl2)" @mouseleave="resetImage">{{textes[currentLanguage].Crea}}</RouterLink>
  </div>
</template> 
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

import defaultImageMobile from '@/assets/images-home/390x824-Corporate.jpg';
import defaultImageTablet from '@/assets/images-home/768x1024-Corporate.jpg';
import defaultImageDesktop from '@/assets/images-home/1440x900-Corporate.jpg';
import defaultImageLarge from '@/assets/images-home/1920x1080-Corporate.jpg';

import imageUrl1 from '@/assets/images-home/0K6A1107.jpg';
import imageUrl2 from '@/assets/images-home/0K6A9321.jpg'; 
// TERST
export default {
  data() {
    return {
      currentLanguage: localStorage.getItem("Language") || "fr-CH",
      textes: {
        "fr-CH": {
          Title: "Prestataire officiel du Grand Prix d’Horlogerie de Genève.",
          Pres: "Présentation",
          Crea:"Créations",
        },
        "en-US": {
          Title: "Official Service Provider of the Grand Prix d'Horlogerie de Genève.",
          Pres: "Presentation",
          Crea:"creations",
        },
      },
      
    };
  },
  name: 'HomePage',
  setup() {
    const foregroundLayer = ref(null);
    const enTete = ref(null);
    const defaultImageUrl = ref(defaultImageDesktop);

     const updateBackground = () => {
      const width = window.innerWidth;
      if (width < 600) {
        defaultImageUrl.value = defaultImageMobile;
      } else if (width < 1024) {
        defaultImageUrl.value = defaultImageTablet;
      } else if (width < 1600) {
        defaultImageUrl.value = defaultImageDesktop;
      } else {
        defaultImageUrl.value = defaultImageLarge;
      }
    };

    const changeImage = (newImageUrl) => {
      gsap.to(foregroundLayer.value, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          foregroundLayer.value.style.backgroundImage = `url(${newImageUrl})`;
          gsap.to(foregroundLayer.value, { opacity: 1, duration: 0.2 });
        },
      });
      gsap.to(enTete.value, { opacity: 0, duration: 0.3, delay: .2 });
    };

     const resetImage = () => {
      gsap.to(foregroundLayer.value, { opacity: 0, duration: 0.3 });
      gsap.to(enTete.value, { opacity: 1, duration: 0.3, delay: 0.2 });
    };

    // --- Préchargement des images ---
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    onMounted(async () => {
       updateBackground(); // Choisir l’image initiale
        window.addEventListener('resize', updateBackground); // Réagir au redimensionnement

        await preloadImage(defaultImageMobile);
        await preloadImage(defaultImageTablet);
        await preloadImage(defaultImageDesktop);
        await preloadImage(defaultImageLarge);
        await preloadImage(imageUrl1);
        await preloadImage(imageUrl2);
    });

     onUnmounted(() => {
      window.removeEventListener('resize', updateBackground);
    });

    return {
      defaultImageUrl,
      imageUrl1,
      imageUrl2,
      changeImage,
      resetImage,
      foregroundLayer,
      enTete,
    };
  },
};
</script>

<style scoped>
.home-page-background {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.background-layer img {
  width: 100%;
  height: auto;
  margin: 0 0 60px 10%;
}

.foreground-layer {
  z-index: 1;
  opacity: 0;
}

.home-h1 {
  position: relative;
  width: 90%;
  text-align: center;
  font-size: 1.414rem;
  color: #fff;
  z-index: 3;
  position: static;
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
  color: white;
  font-size: 1.3rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  background-color: rgb(174, 165, 151);
  padding: 10px 20px;
  border: 5px solid rgb(174, 165, 151);
}

.hp-button:hover {
  text-decoration: none;
  color: rgb(174, 165, 151);
  background-color: #fff;
}

.button-left {
  left: 4rem;
  transform-origin: left;
}

.button-right {
  right: 4rem;
}


@media screen and (max-width: 412px) {
  .button-right {
    bottom: 1rem;
    right: 1rem;
  }
  
  .button-left {
    left: 1rem;
    bottom: 6rem;
  }

}
@media screen and (min-width: 1100px) {
  .home-h1 {
    font-size: 3rem;
  }

  .hp-button {
    font-size: 2rem;
  }
  .hp-button .arrow {
    transform: scale(1);
  }
  .background-layer img {
    width: 70%;
    height: auto;
    margin: 0 0 60px 0%;
  }
  .logo-ephj {
    width: 65% !important;
    position: absolute;
    margin-bottom: 20px;
    margin-left: 0 !important;
  }
}
</style>