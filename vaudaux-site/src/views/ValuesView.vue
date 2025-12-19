<template>
    <div class="page-header-2">
        <div class="title"><h1>{{textes[currentLang].page_titre}}</h1></div>
        <div class="header-intro">
            <p>{{textes[currentLang].page_text}}</p>
        </div>
    </div>
    <div class="values-grid">
        <div class="value-card vector-1">
            <h2>{{textes[currentLang].titre1}}</h2>
            <p>{{textes[currentLang].text1}}</p>
        </div>
        <div class="value-card image-1"></div>
        <div class="value-card vector-2">
            <h2>{{textes[currentLang].titre2}}</h2>
            <p>{{textes[currentLang].text2}}</p>
        </div>
        <div class="value-card image-2"></div>
        <div class="value-card vector-3">
            <h2>{{textes[currentLang].titre3}}</h2>
            <p>{{textes[currentLang].text3}}</p>
        </div>
        <div class="value-card image-3"></div>
        <div class="value-card vector-4">
            <h2>{{textes[currentLang].titre4}}</h2>
            <p>{{textes[currentLang].text4}}</p>
        </div>
        <div class="value-card image-4"></div>
        <div class="value-card vector-5">
            <h2>{{textes[currentLang].titre5}}</h2>
            <p>{{textes[currentLang].text5}}</p>
        </div>
    </div>
    <div class="spacer"></div>
    <leFooter/>
    <div class="spacer-footer"></div>
</template>
<script setup>
    import leFooter from "../components/Footer.vue";
</script>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AppNavigation',
  data() {
    return {
      textes: {
        "fr-CH": {
          page_titre: "Nos valeurs",
          page_text: "Vaudaux s’investit dans une démarche RSE, alliant excellence artisanale, responsabilité environnementale et impact social positif, pour un avenir plus durable.",
          titre1: "Environnement",
          text1: "Vaudaux s’engage activement pour le respect de l’environnement et adopte une démarche sociale et écologique en accord avec son métier et sa taille. Nous encourageons des pratiques responsables au quotidien, notamment le tri des déchets, la préservation des ressources et la réduction de notre empreinte énergétique. Chaque collaborateur est acteur de cet engagement pour un avenir plus durable.",
          titre2: "Qualité",
          text2: "Guidé par cette sensibilité au travail soigné et le sens du service, notre engagement envers la qualité est permanent. Chaque pièce que nous créons est le résultat d’un travail méticuleux et d’une attention particulière aux détails, s’inscrivant dans un processus d’amélioration continue.",
          titre3: "Intégrité",
          text3: "Nous plaçons l’intégrité au coeur de notre engagement, en agissant avec honnêteté, humilité et transparence, aussi bien en interne qu’avec nos clients et partenaires. La confiance, essentielle à notre réussite, se construit dans la durée, s’entretient par des actions concrètes et se démontre au quotidien. En respectant nos engagements et en adoptant une approche éthique à chaque étape, nous cultivons des relations solides et durables.",
          titre4: "Sécurité",
          text4: "La sécurité est une priorité chez Vaudaux. Nous mettons en place des procédures pour garantir un environnement de travail sain et sécurisé à nos collaborateurs. Cela passe par le respect des consignes, la prévention des risques et l’utilisation d’équipements adaptés. Nous veillons à ce que chacun évolue dans un cadre favorisant la sérénité et l’efficacité au travail.",
          titre5: "Respect",
          text5: "Nous valorisons et respectons toutes les personnes avec lesquelles nous sommes en interaction. Cela inclut le respect des idées, de la diversité et de l’environnement. Chaque membre de notre équipe est encouragé à exprimer ses idées, à échanger et à contribuer individuellement au succès collectif",
        },
        "en-US": {
          page_titre: "Our values",
          page_text: "Vaudaux is committed to a CSR-driven approach, combining artisanal excellence, environmental responsibility, and positive social impact to help shape a more sustainable future.",
          titre1: "Environment",
          text1: "Vaudaux actively promotes environmental responsibility through social and ecological practices aligned with our craft and company scale. We encourage responsible daily actions, including waste sorting, resource preservation, and reducing our energy footprint. Every employee plays an active role in this collective commitment to a more sustainable future.",
          titre2: "Quality",
          text2: "Guided by a deep respect for fine craftsmanship and a strong sense of service, our commitment to quality is unwavering. Every piece we create is the result of meticulous work and close attention to detail, embedded in a process of continuous improvement.",
          titre3: "Integrity",
          text3: "Integrity lies at the heart of our values. We act with honesty, humility, and transparency—both internally and with our clients and partners. Trust, essential to our success, is built over time, strengthened through concrete actions, and demonstrated every day. By honoring our commitments and embracing ethical practices at every stage, we foster strong and lasting relationships.",
          titre4: "Safety",
          text4: "Safety is a top priority at Vaudaux. We implement clear procedures to ensure a healthy and secure working environment for our teams. This includes compliance with safety guidelines, risk prevention, and the use of appropriate equipment. We strive to provide a workplace that supports both well-being and efficiency.",
          titre5: "Respect",
          text5: "We value and respect everyone we interact with, embracing diversity, ideas, and the environment alike. Each team member is encouraged to share ideas, collaborate openly, and contribute individually to our collective success.",
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
  },
};
</script>

<style scoped>
    .spacer {
        height: 200px;
    }
    .page-header-2 {
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .title {
        background-color: #fff;
        padding: 0 3%;
        position: relative;
        bottom: -28px;
    }

    h1 { 
        color: #aea597;
        position: static;
        font-size: 38px;
        z-index: 1;
    }

    .header-intro {
        color: #aea597;
        border: 1px solid #aea597;
        font-size: 19px;
        max-width: 94%;
        padding: 40px 10% 30px 10%;
        border-radius: 10px;
        text-align: center;
    }

    .values-grid {
        display: grid;
        gap: 32px;
        margin: 60px auto;
        padding: 3% 20px;
        grid-template-columns: 1fr;
        width: fit-content;
    }

    .value-card {
        background-color: #aea597;
        border-radius: 8px;
        aspect-ratio: 102 / 143;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 40px;
        font-size: 16px;
        line-height: 1.7;
        width: 100%;
        max-width: 500px;
        min-width: 215px;
        margin: 0;
    }

    h2 {
        color: #fff;
        margin-bottom: 15px;
        font-size: 28px;
    }

    .image-1 {
        background-image: url(../assets/images-values/1x/1.jpg);
    }
    .image-2 {
        background-image: url(../assets/images-values/1x/2.jpg);
    }
    .image-3 {
        background-image: url(../assets/images-values/1x/3.jpg);
    }
    .image-4 {
        background-image: url(../assets/images-values/1x/4.jpg);
    }
    .vector-1 {
        background-size: 60%;
        background-image: url(../assets/images-values/SVG/vector1.svg);
    }
    .vector-2 {
        background-size: 60%;
        background-image: url(../assets/images-values/SVG/vector2.svg);
    }
    .vector-3 {
        background-size: 60%;
        background-image: url(../assets/images-values/SVG/vector3.svg);
    }
    .vector-4 {
        background-size: 60%;
        background-image: url(../assets/images-values/SVG/vector4.svg);
    }
    .vector-5 {
        background-size: 60%;
        background-image: url(../assets/images-values/SVG/vector5.svg);
    }

    @media (min-width: 650px) {
        .values-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        .value-card {
            font-size: 16px;
        }
    }

    @media (min-width: 1100px) {
        .value-card {
            font-size: 20px;
        }
        .values-grid {
            grid-template-columns: repeat(3, 1fr);
            margin: 60px auto;
        }
    }
</style>