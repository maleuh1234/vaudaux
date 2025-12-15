<template>
  <div class="home-page-background">
      <div class="background-layer" :style="{ backgroundImage: `url(${defaultImageUrl})` }">
      </div>
      <div class="foreground-layer" ref="foregroundLayer"></div>      
  </div>
  <section class="citation-container">
    <img class="citation-svg" src="../assets/images-home/sitation-1.svg" alt="">
    <p class="citation">Être gainier, c'est sculpter l’écrin qui sublime l’objet. C’est un art exigeant où chaque geste perpétue un savoir-faire d’exception. Chez Vaudaux, nous ne façonnons pas seulement du cuir, nous façonnons l’élégance et l’excellence.</p>
    <p class="signature">Philippe Belais, CEO</p>
  </section>
  <section class="gainerie">
    <img src="../assets/images-home/gainerie.jpg" alt="">
    <div class="gainerie-text">
      <h2>Qu’est ce que la gainerie ?</h2>
      <p>La gainerie, c’est <b>l’art de couvrir un objet d’un matériau noble pour le protéger et le sublimer</b>. Née à l’époque des chevaliers, elle servait autrefois à façonner des gaines en cuir pour les armes – d’où l’expression "dégainer une arme". <br><br>Aujourd’hui, ce savoir-faire allie tradition et innovation pour créer des écrins, coffrets et présentoirs, perpétuant ainsi l’excellence artisanale au service du luxe.</p>
    </div>
  </section>
  <section class="instagram">
    <h2></h2>
<iframe src="//lightwidget.com/widgets/b038f33ed3be5cf18cad457919f986d1.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>  </section>
  <section class="link-grid">
    <RouterLink to="/history">
      <img src="../assets/images-home/lien-histoire.jpg" alt="">
      <p>Notre histoire</p>
    </RouterLink>
    <RouterLink to="/values">
      <img src="../assets/images-home/lien-value.jpg" alt="">
      <p>Nos valeurs</p>
    </RouterLink>
    <RouterLink to="/KnowHow">
      <img src="../assets/images-home/lien-savoir.jpg" alt="">
      <p>Nos savoir-faire</p>
    </RouterLink>
  </section>
  <div class="spacer"></div>
<leFooter/>
</template>
<script setup>
    import leFooter from "../components/Footer.vue";
</script>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

import defaultImageMobile from '@/assets/images-home/390x824-Noel.jpg';
import defaultImageTablet from '@/assets/images-home/768x1024-Noel.jpg';
import defaultImageDesktop from '@/assets/images-home/1440x900-Noel.jpg';
import defaultImageLarge from '@/assets/images-home/1920x1080-Noel.jpg';

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
.spacer {
  height: 100px;
}

.home-page-background {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
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

.citation-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  margin: 250px auto;
  border: 3px solid #aea59755;
  border-radius: 30px;
  padding: 70px 0 30px 0;
}

.citation-svg {
  height: 250px;
  position: absolute;
  top: -300px;
  right: -70px;
}

.citation {
  font-size: 24px;
  color: #000;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-bottom: 50px;
  width: 120%;
}

.signature {
  font-size: 20px;
  color: #aea597;
  font-weight: 300;
  text-align: center;
}

.gainerie {
  display: flex;
  align-items: center;
  margin: 100px auto;
  max-width: 90%;
}

.gainerie img {
  width: 45%;
}

.gainerie-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -50px;
}

.gainerie-text h2 {
  font-size: 32px;
  color: #000;
}

.gainerie-text p {
  font-size: 20px;
  color: #fff;
  background-color: #aea597;
  line-height: 32px;
  margin-top: 20px;
  padding: 30px;
}

.instagram {
  max-width: 90%;
  margin: 100px auto;
  height: 800px;
}

iframe {
  height: 100%;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15%;
  margin: 300px auto;
  max-width: 80%;
}

.link-grid a {
  background-color: #aea597;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-grid p {
  position: absolute;
  color: #fff;
  font-size: 45px;
  font-weight: 500;
  background-color: #aea597bb;
  padding: 20px;
  width: 120%;
  text-align: center;
  transition: all 0.3s ease;
}
.link-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.link-grid a:hover p {
  background-color: #aea597;
}
@media screen and (max-width: 768px) {
  .citation-container {
        width: 80%;
        margin: 150px auto;
        padding: 50px 0 20px 0;
      }

      .citation-svg {
        height: 150px;
        top: -180px;
        right: -30px;
      }

      .citation {
        font-size: 18px;
        width: 90%;
        margin-bottom: 30px;
      }

      .gainerie {
        flex-direction: column;
      }

      .gainerie img {
        width: 80%;
        margin-bottom: 30px;
      }

      .gainerie-text {
        left: 0;
      }

      .gainerie-text h2 {
        font-size: 28px;
        text-align: center;
      }
      
      .gainerie-text p {
        font-size: 16px;
        line-height: 28px;
        padding: 20px;
        text-align: center;
      }

      .link-grid {
        grid-template-columns: 1fr;
        gap: 50px;
        margin: 200px auto;
      }

      .link-grid p {
        font-size: 32px;
        width: 150%;
      }
}
   
</style>