<template>
  <div class="spacer" ref="spacer"></div>
  <div class="burger" ref="burger" @click="toggleMenu">
    <div class="bread-container">
      <div class="bread1" ref="bread1"></div>
      <div class="bread2" ref="bread2"></div>
      <div class="bread3" ref="bread3"></div>
    </div>
    <p class="arial not-mobile">Menu</p>
    <div class="burger-background" ref="burgerBackground"></div>
  </div>
  <div class="logo-aligner"  v-if="!isProductRoute">
    <RouterLink class="logo-home-link" to="/"><img class="logo-home" ref="logo" src="../assets/logo.svg" alt="Vaudaux" /></RouterLink>
  </div>
  <div class="right-menu">
    <div class="language-changer not-mobile">
          <button class="arial" @click="setLanguageFR">FR</button>
          /
          <button class="arial" @click="setLanguageEN">EN</button>
    </div>
    <RouterLink class="not-mobile" to="/contact"><svg width="103" height="90" viewBox="0 0 103 90" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_76_112)"><path d="M51.03 0C22.85 0 0 19.99 0 44.65C0 54.21 3.43 63.06 9.28 70.32C8.09 75.29 7.25 80.34 6.77 85.43C6.65 86.67 7.8 87.65 9.01 87.33L24.96 83.04C32.59 87.02 41.51 89.31 51.04 89.31C79.22 89.31 102.07 69.32 102.07 44.66C102.07 20 79.21 0 51.03 0ZM27.04 51.03C23.52 51.03 20.66 48.17 20.66 44.65C20.66 41.13 23.52 38.27 27.04 38.27C30.56 38.27 33.42 41.13 33.42 44.65C33.42 48.17 30.56 51.03 27.04 51.03ZM51.03 51.03C47.51 51.03 44.65 48.17 44.65 44.65C44.65 41.13 47.51 38.27 51.03 38.27C54.55 38.27 57.41 41.13 57.41 44.65C57.41 48.17 54.55 51.03 51.03 51.03ZM75.02 51.03C71.5 51.03 68.64 48.17 68.64 44.65C68.64 41.13 71.5 38.27 75.02 38.27C78.54 38.27 81.4 41.13 81.4 44.65C81.4 48.17 78.54 51.03 75.02 51.03Z" fill="#AEA597"/></g><defs><clipPath id="clip0_76_112"><rect width="102.06" height="89.29" fill="white"/></clipPath></defs></svg></RouterLink>
  </div>

  <div class="opened-burger" :class="{ 'active': isToggled }">
    <div class="fermer arial" @click="closeMenu">X {{textes[currentLang].fermer}}</div>
    <div class="side-panel">
      <nav class="main-nav">
        <ul style="list-style-type:disc;">
          <li><RouterLink @click="closeMenu" to="/">{{textes[currentLang].Home}}</RouterLink></li>
          <li><RouterLink @click="closeMenu" to="/creations">{{textes[currentLang].Crea}}</RouterLink></li>
          <li><RouterLink @click="closeMenu" to="/knowHow">{{textes[currentLang].know}}</RouterLink></li>
          <li><RouterLink @click="closeMenu" to="/history">{{textes[currentLang].hist}}</RouterLink></li>
          <li><RouterLink @click="closeMenu" to="/values">{{textes[currentLang].value}}</RouterLink></li>
          <li><RouterLink @click="closeMenu" to="/contact">Contact</RouterLink></li>
        </ul>
        <div class="language-changer">
          <button @click="setLanguageFR">FR</button>
           / 
          <button @click="setLanguageEN">EN</button>
        </div>
      </nav>
      <div class="legal-container">
        <RouterLink @click="closeMenu" to="/legal" class="legal" target="_blank" rel="noopener noreferrer">{{textes[currentLang].legal}}</RouterLink>
      </div>
    </div>

    <div class="overlay" @click="closeMenu"></div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>
import { ref } from 'vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AppNavigation',
  data() {
    return {
      isToggled: ref(false),
      burger: null,
      burgerBackground: null,
      bread1: null,
      bread2: null,
      bread3: null,
      textes: {
        "fr-CH": {
          Home: "Accueil",
          Crea: "Nos réalisations",
          Presentation: "Présentation",
          value: "Nos valeurs",
          know: "Nos savoir-faire",
          hist: "Notre histoire",
          fermer: "Fermer",
          legal: "Mentions légales"
        },
        "en-US": {
          Home: "Home",
          Crea: "Our Creations",
          Presentation: "Presentation",
          value: "Our Values",
          know: "Our Know-How",
          hist: "Our History",
          fermer: "Close",
          legal: "Legal Mentions"
        }
      },
      currentLang: localStorage.getItem('Language') || 'fr-CH'
    };
  },
  methods: {
    setLanguageFR() {
      localStorage.setItem('Language', "fr-CH");
      location.reload();
    },
    setLanguageEN() {
      localStorage.setItem('Language', "en-US");
      location.reload();
    },
    toggleMenu() {
      this.isToggled = !this.isToggled;
    },
    closeMenu() {
      if (this.isToggled) {
        this.isToggled = false; 
        gsap.to(this.burgerBackground, { width: '0px', height: '0px', duration: 0.3 });
      }
    }
  },
  mounted() {
    this.burger = this.$refs.burger;
    this.burgerBackground = this.$refs.burgerBackground;
  }
};
</script>

<style scoped>
.burger {
  position: absolute;
  top: 0;
  left: 3rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}

.burger p {
  margin-left: 10px;
  font-size: 18px;
  color: #aea597;
}

.opened-burger {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 20;
}
.fermer {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
    z-index: 21;
  padding: 10px;
}

.opened-burger.active {
  display: flex;
}
.main-nav {
  margin-bottom: 70px;
}

.side-panel {
  background: #aea597;
  color: #fff;
  width: 100%;
  max-width: 480px;
  height: 100%;
  padding-top: 10%;
  padding-left: 7%;
  z-index: 16;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
}

li {
  padding-left: 30px;
  margin-left: 15px;
}

.side-panel * {
  font-size: 30px;
  margin-top: 15px;
  font-style: italic;
}

.overlay {
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  z-index: 14;
}

.bread-container {
  position: relative;
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 11;
}


.bread-container div {
  width: 100%;
  height: 4px;
  background-color: #aea597;
  border-radius: 2px;
}
.bread2 {
  width: 90% !important;
}
.right-menu {
  position: absolute;
  top: 40%;
  right: 1rem;
  z-index: 20;
  height: 20%;
  display: flex;
  align-items: center;
  color: #aea597;
  font-size: 20px;
}

.right-menu svg {
  height: 20px;
}

.logo-aligner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-aligner .logo-home {
  height: 40px;
}

.nav-logo {
  height: 40px;
  margin-bottom: 70px;
  margin-top: 50px;
}

.not-mobile {
  display: block; 
}

.legal-container a {
  font-size: 18px;
}

  @media(min-width: 1100px) {
    .side-panel {
      width: 33%;
    }
  }

  @media screen and (max-width: 420px) {
    .side-panel * {
      font-size: 20px;
      margin-top: 7px;
    }
    .legal-container a {
      font-size: 15px;
    }
    .side-panel {
      padding-top: 100px;
    }
    .not-mobile {
      display: none; 
    }
  }
</style>
