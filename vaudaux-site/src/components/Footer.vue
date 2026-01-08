<template>
    <footer>
        <div>
            <p>Vaudaux SA</p>
            <p>Av Louis-Pictet 9</p>
            <p>1214 Vernier - Suisse</p>
        </div>
        <div class="middle">
            <p class="arial">Copyright © 2026 Vaudaux SA, Tous droits reservés</p>
        </div>
        <div class="contact">
          <p>T +41 (0)22 939 05 00</p>
          <p>info@vaudaux-ge.com</p>
        </div>
        <div class="social">
          <a href="">
            <svg width="449" height="449" viewBox="0 0 449 449" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M224.175 109.175C160.675 108.975 109.075 160.375 108.875 223.875C108.675 287.375 160.075 338.975 223.575 339.175C287.075 339.375 338.675 287.975 338.875 224.475C339.075 160.975 287.675 109.375 224.175 109.175ZM223.575 149.575C264.775 149.375 298.275 182.675 298.475 223.875C298.675 265.075 265.375 298.575 224.175 298.775C182.975 298.975 149.475 265.675 149.275 224.475C149.075 183.275 182.375 149.775 223.575 149.575ZM316.975 104.475C316.975 89.675 328.975 77.675 343.775 77.675C358.575 77.675 370.575 89.675 370.575 104.475C370.575 119.275 358.575 131.275 343.775 131.275C328.975 131.275 316.975 119.275 316.975 104.475ZM446.675 131.675C444.975 95.775 436.775 63.975 410.475 37.775C384.275 11.575 352.475 3.375 316.575 1.575C279.575 -0.525 168.675 -0.525 131.675 1.575C95.875 3.275 64.075 11.475 37.775 37.675C11.475 63.875 3.375 95.675 1.575 131.575C-0.525 168.575 -0.525 279.475 1.575 316.475C3.275 352.375 11.475 384.175 37.775 410.375C64.075 436.575 95.775 444.775 131.675 446.575C168.675 448.675 279.575 448.675 316.575 446.575C352.475 444.875 384.275 436.675 410.475 410.375C436.675 384.175 444.875 352.375 446.675 316.475C448.775 279.475 448.775 168.675 446.675 131.675ZM398.875 356.175C391.075 375.775 375.975 390.875 356.275 398.775C326.775 410.475 256.775 407.775 224.175 407.775C191.575 407.775 121.475 410.375 92.075 398.775C72.475 390.975 57.375 375.875 49.475 356.175C37.775 326.675 40.475 256.675 40.475 224.075C40.475 191.475 37.875 121.375 49.475 91.975C57.275 72.375 72.375 57.275 92.075 49.375C121.575 37.675 191.575 40.375 224.175 40.375C256.775 40.375 326.875 37.775 356.275 49.375C375.875 57.175 390.975 72.275 398.875 91.975C410.575 121.475 407.875 191.475 407.875 224.075C407.875 256.675 410.575 326.775 398.875 356.175Z" fill="white"/></svg>
            Instagram
          </a>
          <a href="">
            <svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M196.3 512H103.4V212.9H196.3V512ZM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1ZM543.9 512H451.2V366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9V512H254.4V212.9H343.5V253.7H344.8C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7V512H543.9Z" fill="white"/></svg>
            Linkedin
          </a>
        </div>
        <div>
            <nav class="main-nav">
                <RouterLink @click="closeMenu" to="/">{{textes[currentLang].Home}}</RouterLink>
                <RouterLink @click="closeMenu" to="/creations">{{textes[currentLang].Crea}}</RouterLink>
                <RouterLink @click="closeMenu" to="/knowHow">savoir-faire</RouterLink>
                <RouterLink @click="closeMenu" to="/history">histoire</RouterLink>
                <RouterLink @click="closeMenu" to="/values">valeur</RouterLink>
                <RouterLink @click="closeMenu" to="/contact">Contact</RouterLink>
                <div class="legal-container">
                  <RouterLink to="/legal" class="legal" target="_blank" rel="noopener noreferrer">{{textes[currentLang].legal}}</RouterLink>
                </div>
                <div class="language-changer">
                <button @click="setLanguageFR">FR</button>
                <button @click="setLanguageEN">EN</button>
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
    background-color: #aea597;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 10%;
    position: relative;
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

    .social svg {
        width: auto;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
    }

    .social a {
        color: white;
        text-decoration: none;
        margin-bottom: 10px;
        display: flex;
    }

    .middle {
        text-align: center;
        position: absolute;
        bottom: 1rem;
        width: 80%;
        padding-top: 10px;
        border-top: #dfdad1b7 3px solid;
        color: #14000063;
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