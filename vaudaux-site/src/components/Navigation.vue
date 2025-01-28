<template>
  <div class="spacer" ref="spacer"></div>
  <div class="burger" ref="burger" @click="toggleMenu" @mouseover="animateOnHover(true)" @mouseout="animateOnHover(false)">
    <div class="bread-container">
      <div class="bread1" ref="bread1"></div>
      <div class="bread3" ref="bread2"></div>
      <div class="bread3" ref="bread3"></div>
    </div>
    <div class="burger-background" ref="burgerBackground"></div>
  </div>
  <div class="opened-burger" :class="{ 'active': isToggled }">
    <RouterLink @click="closeMenu" to="'/'"><img class="nav-logo" src="../assets/logo.png" alt="Talents"></RouterLink>
    <nav class="main-nav">
      <RouterLink @click="closeMenu" to="/">{{textes[currentLang].Home}}</RouterLink>
      <RouterLink @click="closeMenu" to="/creations">{{textes[currentLang].Crea}}</RouterLink>
      <RouterLink @click="closeMenu" to="/presentation">{{textes[currentLang].Presentation}}</RouterLink>
      <RouterLink @click="closeMenu" to="/contact">Contact</RouterLink>
      <div class="language-changer">
        <button  @click="setLanguageFR">FR</button>
        <button  @click="setLanguageEN">EN</button>
      </div>
      <a class="instagram-link" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjd-6r-5ueHAxVXgP0HHfeTJe0QFnoECDUQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fvaudaux_geneve%2F%3Fhl%3Den&usg=AOvVaw17Vde3T55hhKBrugiPBZr5&opi=89978449" @click.stop><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
    </nav>
    <div class="legal-container">
      <a class="legal" href="https://docs.google.com/document/d/1yNKptiaNJa0ALBNIbpi0kIMzBW_Fpl0M/edit?usp=drive_link&ouid=117838288663904003205&rtpof=true&sd=true"  target="_blank" rel="noopener noreferrer">DPD</a>
      <a class="legal" href="https://drive.google.com/file/d/1jBzMFWkYmC78Log4SKJVherXGsijwA3a/view?usp=sharing"  target="_blank" rel="noopener noreferrer">CGA</a>
      <a class="legal" href="https://drive.google.com/file/d/1-T3CLFsDGciKRRTAILXQTTHd-gpWpyho/view?usp=sharing"  target="_blank" rel="noopener noreferrer">CGV</a>
    </div>
  </div>
</template>

<script>
  import { ref, } from 'vue'
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
      pdfLink: '../assets/dpd/DPD-TALENTS.pdf',
      textes: {
        "fr-CH" : {
            Home: "Accueil",
            Crea : "Créations",
            Presentation : "Présentation",            
        },
        "en-US" : {
            Home: "Home",
            Crea : "Creations",
            Presentation : "Presentation"
        }
      },
      currentLang: localStorage.getItem('Language') || 'fr-CH'
    };
  },
  methods: {
    setLanguageFR(){
      localStorage.setItem('Language', "fr-CH");
      location.reload();
    },
    setLanguageEN(){
      localStorage.setItem('Language', "en-US");
      location.reload();
    },
    toggleMenu() {
      this.isToggled = !this.isToggled;
      this.animateBurger();
    },
    animateOnHover(isHovered) {
      const timeline = gsap.timeline();
      if (this.isToggled) {
        return;
      }
      if (isHovered && !this.isToggled) {
        timeline.to(this.burgerBackground, { width: '65px', height: '65px', duration: 0.3 });
      } else {
        timeline.to(this.burgerBackground, { width: '0px', height: '0px', duration: 0.3 });
      }
    },
    animateBurger() {
  const timeline = gsap.timeline();

  if (this.isToggled) {
    timeline.to(this.bread1, { y: 10, rotation: 45, duration: 0.5 });
    timeline.to(this.bread2, { opacity: 0, duration: 0.5 }, '-=0.5');
    timeline.to(this.bread3, { y: -6, rotation: -45, duration: 0.5 }, '-=0.5');
    timeline.to(this.burgerBackground, { width: '65px', height: '65px', duration: 0.3 });
    
    // Bloquer le scroll
    document.body.style.overflow = 'hidden';
  } else {
    timeline.to([this.bread1, this.bread3], { y: 0, rotation: 0, duration: 0.5 });
    timeline.to(this.bread2, { opacity: 1, duration: 0.5 }, '-=0.5');
    
    // Rétablir le scroll
    document.body.style.overflow = '';
  }
},

closeMenu() {
  if (this.isToggled) {
    this.isToggled = false;
    this.animateBurger();
    gsap.to(this.burgerBackground, { width: '0px', height: '0px', duration: 0.3 });
  }
},
  },
  mounted() {
    // Assignez vos refs ici
    this.burger = this.$refs.burger;
    this.burgerBackground = this.$refs.burgerBackground;
    this.bread1 = this.$refs.bread1;
    this.bread2 = this.$refs.bread2;
    this.bread3 = this.$refs.bread3;

    const spacerHeight = this.$refs.spacer.clientHeight;

    // Créez une timeline GSAP avec votre animation
    const timeline = gsap.timeline({
      paused: true, // La timeline est en pause initialement
      defaults: { ease: 'power3.inOut' } // Vous pouvez ajuster l'ease selon vos préférences
    });

    timeline.to(this.$refs.burgerBackground, { width: '65px', height: '65px', duration: 0.3 });

    // Ajoutez un ScrollTrigger pour déclencher l'animation
    ScrollTrigger.create({
      trigger: this.$refs.spacer,
      start: 'bottom top', // Démarrez l'animation lorsque le haut du spacer atteint le haut de la fenêtre
      end: `+=${spacerHeight}`, // Terminez l'animation lorsque le bas du spacer atteint le haut de la fenêtre
      onEnter: () => timeline.play(), // Lorsque le spacer entre dans la vue, jouez la timeline
      onLeaveBack: () => timeline.reverse() // Lorsque le spacer sort de la vue, inversez la timeline
    });
  },
};
</script>

<style scoped>
  .instagram-link *{
    aspect-ratio: 1/1;
    width: 40px;
  }
  .burger {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 75px;
    width: 75px;
    cursor: pointer;
  }

  .bread-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 8;
  }

  .bread-container > * {
    height: 3px;
    background-color: #fff;
    margin-bottom: 5px;
  }

  .bread1 {
    width: 45px;
  } 
  .bread2 {
      width: 30px;
  } 
  .bread3 {
      width: 45px;
  } 

  .burger-background {
    border-radius: 100%;
    height: 0px;
    width: 0px;
    background-color: #7B6E68;
    transform-origin: center;
    position: absolute;
    z-index: 6;
  }
  
  .main-nav > *, 
  .main-nav button,
  .legal {
    color: #000;
    font-size: 32px;
    font-style: italic;
    margin-bottom: 1rem;
    background: linear-gradient(to top, #000 0%, #000 2px, transparent 3px) no-repeat;
    background-size: 0% 100%;
    transition: 0.2s;
    margin: 0 1rem;
  }

  .main-nav > *:hover, 
  .main-nav button:hover,
  .legal:hover {
    background-size: 100% 100%;
  }

  .language-changer {
    background: none;
  }

  .main-nav button {
    font-variant: small-caps;
    margin: 0 .5rem;
  }
  .main-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .opened-burger {
    background-color: #fff;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    display: none;
    align-items: center;
    justify-content: center;
  }

  .opened-burger.active {
    display: flex;
  }

  .nav-logo {
    height: 25px;
    position: absolute;
    top: 40px;
  }

  .spacer {
    top: 0;
    height: 230px;
    width: 0;
  }
  
  .legal-container {
    position: absolute;
    display: flex;
    bottom: .5rem;
    font-size: 15px;
  }

  @media screen and (min-width: 1100px) {
    .nav-logo {
    height: 40px;
  }

  .spacer {
    position: absolute;
      height: 600px;
    }
  }

</style>