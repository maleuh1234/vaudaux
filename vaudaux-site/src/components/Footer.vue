<template>
    <footer>
        <div>
            <p>Vaudaux SA</p>
            <p>Av Louis-Pictet 9</p>
            <p>1214 Vernier</p>
        </div>
        <div class="middle">
            <p>© Vaudaux SA 2025</p>
            <div class="legal-container">
                <RouterLink to="/legal" class="legal" target="_blank" rel="noopener noreferrer">{{textes[currentLang].legal}}</RouterLink>
            </div>
        </div>
        <div>
            <nav class="main-nav">
                <RouterLink to="/">{{textes[currentLang].Home}}</RouterLink>
                <RouterLink to="/creations">{{textes[currentLang].Crea}}</RouterLink>
                <RouterLink to="/presentation">{{textes[currentLang].Presentation}}</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
                <div class="language-changer">
                    <button  @click="setLanguageFR">FR</button>
                    <button  @click="setLanguageEN">EN</button>
                </div>
            </nav>
    </div>
  </footer>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<script>
  import { ref, } from 'vue'

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
            legal : "Mentions légales"            
        },
        "en-US" : {
            Home: "Home",
            Crea : "Creations",
            Presentation : "Presentation",
            legal : "Legal Mentions"
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
    }
}
</script>
<style>
footer {
    height: fit-content;
    background-color: #7B6E68;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 10%;
}

  footer {
      color: #fff;
      font-family: 'Noto Serif Display';
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      margin: 0;
    }

    a:hover {
        text-decoration: underline;
    }

    .main-nav {
        display: flex;
        flex-direction: column;
        font-size: 15px;
    }

    .language-changer * {
        margin: 3px 2px;
    }

    .middle {
        text-align: center;
    }
    
    @media screen and (min-width: 1100px) {
        .logo-home {
            height: 60px;
        }
        
        footer p {
            font-size: 15px;
        }
    }
    
</style>