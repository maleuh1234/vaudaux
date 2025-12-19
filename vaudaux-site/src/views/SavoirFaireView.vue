<template>
    <div class="page-header-2">
        <div class="title"><h1>{{textes[currentLang].page_titre}}</h1></div>
        <div class="header-intro">
            <p>{{textes[currentLang].page_text}}</p>
        </div>
    </div>
    <div class="savoir-faire-container">
        <div class="savoir-faire-item">
            <div class="savoir-faire-textes">
                <h2>{{textes[currentLang].titre1}}</h2>
                <p>{{textes[currentLang].text1}}</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-1.png" alt="">
        </div>    
        <div class="savoir-faire-item reversed">
            <div class="savoir-faire-textes">
                <h2>{{textes[currentLang].titre2}}</h2>
                <p>{{textes[currentLang].text2}}</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-2.png" alt="">
        </div>    
        <div class="savoir-faire-item">
            <div class="savoir-faire-textes">
                <h2>{{textes[currentLang].titre3}}</h2>
                <p>{{textes[currentLang].text3}}</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-3.png" alt="">
        </div>    
        <div class="savoir-faire-item reversed">
            <div class="savoir-faire-textes">
                <h2>{{textes[currentLang].titre4}}</h2>
                <p>{{textes[currentLang].text4}}</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-4.png" alt="">
        </div>    
        <div class="savoir-faire-item">
            <div class="savoir-faire-textes">
                <h2>{{textes[currentLang].titre5}}</h2>
                <p>{{textes[currentLang].text5}}</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-5.png" alt="">
        </div>    
        <div class="savoir-faire-item reversed">
            <div class="savoir-faire-textes">
                <h2>{{textes[currentLang].titre6}}</h2>
                <p>{{textes[currentLang].text6}}</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-6.png" alt="">
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
          page_titre: "Nos savoir-faire",
          page_text: "Chez Vaudaux, chaque création est le fruit d’un artisanat d’exception, où chaque savoir-faire se complète pour offrir des pièces uniques, alliant tradition, précision et innovation.",
          titre1: "développement",
          text1: "Un studio de création et une équipe de développement travaillent ensemble transformer chaque idée en réalité. De la conception initiale aux derniers ajustements techniques, nous accompagnons chaque projet avec expertise et créativité, en veillant à allier esthétique, fonctionnalité et excellence artisanale",
          titre2: "Menuiserie",
          text2: "Nos artisans sont spécialisés dans la fabrication de fûts sur mesure, créant ainsi des structures robustes et élégantes pour vos projets. Grâce à un savoir-faire unique et en constante évolution, nous intégrons les dernières technologies et machines pour garantir des réalisations précises et innovantes.",
          titre3: "L’art de la découpe",
          text3: "Chaque pièce de cuir est soigneusement sélectionnée pour garantir la qualité de nos créations. Nos gainiers choisissent les meilleures peaux pour des projets raffinés et durables, tout en maîtrisant une large gamme de matériaux : tissus, papiers, imitations du cuir, velours, etc. Chaque matière est traitée avec soin pour des finitions impeccables et une esthétique unique.",
          titre4: "Impression",
          text4: "Grâce à notre expertise, chaque pièce devient unique grâce à une gamme de techniques d’impression sur mesure : impression à chaud pour initiales ou logos, sérigraphie pour des motifs raffinés, ou impression numérique pour des illustrations complexes, offrant ainsi des créations d’une élégance exceptionnelles.",
          titre5: "Gainerie",
          text5: "Nos artisans gainiers perpétuent l'excellence du savoir-faire VAUDAUX en couvrant chaque forme avec une précision unique. Grâce à leur maîtrise des coupes et des assemblages, chaque réalisation reflète un soin du détail exceptionnel. Chaque pièce devient ainsi une création élégante, authentique et durable, portant la signature de notre expertise artisanale.",
          titre6: "Maroquinerie",
          text6: "Le savoir-faire en maroquinerie vient enrichir celui de la gainerie, élargissant ainsi les possibilités d’assemblage et de finitions. Que ce soit pour créer des pièces complètes telles que des pochettes, sacs ou porte-clés, ou pour personnaliser vos créations avec des surpiqûres délicates, chaque détail vous offre une multitude d’options de personnalisation.",
        },
        "en-US": {
          page_titre: "Our know-how",
          page_text: "At Vaudaux, every creation is the result of exceptional craftsmanship, where each skill comes together to produce unique pieces that blend tradition, precision, and innovation.",
          titre1: "Development",
          text1: "Our creative studio and development team work together to transform ideas into reality. From initial concept to final refinements, we support each project with expertise and creativity, ensuring a seamless blend of beauty, function, and artisanal mastery",
          titre2: "Woodworking",
          text2: "Our artisans specialize in crafting custom barrels, creating strong and elegant structures for your projects. With unique, ever-evolving expertise, we integrate the latest technologies and machinery to ensure precise and innovative results.",
          titre3: "The Art of Cutting",
          text3: "Each piece of leather is carefully selected to ensure the quality of our creations. Our leather craftsmen choose the finest hides for refined and durable projects, while expertly working with a wide range of materials—fabrics, paper, leather substitutes, velvet, and more. Every material is handled with care to achieve flawless finishes and a distinctive aesthetic.",
          titre4: "Printing",
          text4: "Thanks to our expertise, each piece becomes unique through a range of customized printing techniques: hot stamping for initials or logos, screen printing for intricate patterns, and digital printing for complex illustrations—resulting in creations of exceptional elegance.",
          titre5: "Leather Crafting",
          text5: "Our leather artisans uphold the VAUDAUX standard of excellence by covering each form with unmatched precision. With their mastery of cutting and assembly, every creation reflects exceptional attention to detail. Each piece becomes an elegant, authentic, and lasting work, bearing the mark of our artisanal expertise.",
          titre6: "Leather Goods",
          text6: "Our leather goods expertise complements our leather crafting, expanding possibilities for assembly and finishes. Whether creating complete pieces like pouches, bags, or keychains, or adding delicate stitching to personalize your creations, every detail offers a wealth of customization options.",
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
        margin-bottom: 100px;
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

    .savoir-faire-container {
        display: flex;
        flex-direction: column;
        margin: 0 5%;
    }
    .savoir-faire-item.reversed {
        flex-direction: row-reverse;
    }

    .savoir-faire-item {
        display: flex;
        align-items: center;
        margin-top: -50px;
    }

    .savoir-faire-item img {
        width: 600px;
    }

    .savoir-faire-item.reversed .savoir-faire-textes{
        left: -1.5%;
    }

    .savoir-faire-textes {
        width: 500px;
        border: 2px solid #aea597;
        border-radius: 10px;
        padding: 3% 2%;
        position: relative;
        right: -1.5%;
    }

    .savoir-faire-textes * {
        text-align: center;
    }

    .savoir-faire-textes h2 {
        font-size: 35px;
        margin-bottom: 20px;
    }

    .savoir-faire-textes p {
        font-size: 19px;
        line-height: 31px;
    }

    @media screen and (max-width: 768px) {
        .savoir-faire-item,
        .savoir-faire-item.reversed {
            flex-direction: column-reverse;
            margin-top: 50px;

        }

        .savoir-faire-item img {
            width: 90%;
        }

        .savoir-faire-textes,
        .savoir-faire-item.reversed .savoir-faire-textes {
            width: 80%;
            margin-top: -20px;
        }
    }

    @media screen and (max-width: 420px) {

    }

</style>