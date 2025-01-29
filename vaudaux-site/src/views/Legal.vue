<template>
  <div class="logo-aligner">
    <img src="../assets/logoB.png" alt="Vaudaux">
  </div>
  <div class="spacer" ref="spacer"></div>
  <div class="opened-burger">
    <nav class="main-nav">
      <a class="" href="https://docs.google.com/document/d/1yNKptiaNJa0ALBNIbpi0kIMzBW_Fpl0M/edit?usp=drive_link&ouid=117838288663904003205&rtpof=true&sd=true"  target="_blank" rel="noopener noreferrer">Déclaration de protection des données</a>
      <a class="" href="https://drive.google.com/file/d/1jBzMFWkYmC78Log4SKJVherXGsijwA3a/view?usp=sharing"  target="_blank" rel="noopener noreferrer">Conditions générales d'achat</a>
      <a class="" href="https://drive.google.com/file/d/1-T3CLFsDGciKRRTAILXQTTHd-gpWpyho/view?usp=sharing"  target="_blank" rel="noopener noreferrer">Conditions générales de vente</a>
    </nav>
  </div>
</template>

<script>
  import { ref, } from 'vue'
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  export default {
    name: 'LegalView',
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
  .main-nav > *,
  .main-nav button,
  .legal {
    color: #000;
    font-size: 17px;
    font-style: italic;
    margin-bottom: 1rem;
    background: linear-gradient(to top, #000 0%, #000 2px, transparent 3px) no-repeat;
    background-size: 0% 100%;
    transition: 0.2s;
  }
  
  .main-nav > *:hover, 
  .main-nav button:hover,
  .legal:hover {
    background-size: 100% 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-aligner {
    height: 45;
    position: absolute;
    top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1000000;
  }

  .spacer {
    top: 0;
    height: 230px;
    width: 0;
  }

  @media screen and (min-width: 1100px) {
    .logo-aligner {
    height: 100px;
  }

  .main-nav > *, 
  .main-nav button,
  .legal {
    color: #000;
    font-size: 32px;
  }

  .spacer {
    position: absolute;
      height: 600px;
    }
  }

</style>