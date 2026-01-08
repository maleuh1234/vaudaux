<template>
    <div class="page-header-2">
        <div class="title"><h1>{{textes[currentLang].titre}}</h1></div>
    </div> 
    <div class="history-container">
        <div class="history-spacer special"></div>
        <section>
            <p>{{textes[currentLang].Paragraphe1}}</p>
            <h2>1908</h2>
            <img src="../assets/images-history/history1-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>{{textes[currentLang].Paragraphe2}}</p>
            <h2>1912</h2>
            <img src="../assets/images-history/history2-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>{{textes[currentLang].Paragraphe3}}</p>
            <h2>1930</h2>
            <img src="../assets/images-history/history3-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>{{textes[currentLang].Paragraphe4}}</p>
            <h2>1938</h2>
            <img src="../assets/images-history/history4_1-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>{{textes[currentLang].Paragraphe5}}</p>
            <h2>1944</h2>
            <img src="../assets/images-history/history5-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>{{textes[currentLang].Paragraphe6}}</p>
            <h2>1954</h2>
            <img src="../assets/images-history/history6-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>{{textes[currentLang].Paragraphe7}}</p>
            <h2>1972</h2>
            <img src="../assets/images-history/history7-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>{{textes[currentLang].Paragraphe8}}</p>
            <h2>1981</h2>
            <img src="../assets/images-history/history8-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>{{textes[currentLang].Paragraphe9}}</p>
            <h2>2000</h2>
            <img src="../assets/images-history/history9-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>{{textes[currentLang].Paragraphe10}}</p>
            <h2>2010</h2>
            <img src="../assets/images-history/history10-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>{{textes[currentLang].Paragraphe11}}</p>
            <h2>2018</h2>
            <img src="../assets/images-history/history11-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>{{textes[currentLang].Paragraphe12}}</p>
            <h2>Aujourd’hui</h2>
            <img src="../assets/images-history/history12-8.png" alt="">
        </section>
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
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
          titre: "Notre histoire",
          Paragraphe1: "Marc Vaudaux, de retour d’Argentine, reprend un atelier de gainerie à Genève (rue du Marché, 30) et modernise ses équipements. Son ambition et son savoir-faire lui permettent rapidement d’absorber plusieurs concurrents.",
          Paragraphe2: "Face à l’essor de l’activité, l’atelier devient trop exigu. De nouveaux locaux plus vastes et mieux adaptés sont installés rue des Allemands. Équipés d’un ascenseur, une véritable révolution pour l’époque, ils offrent un confort de travail inédit.",
          Paragraphe3: "Marc Vaudaux, aidé par son fils Georges, acquiert un nouvel immeuble rue de l’Arquebuse. Mais la crise horlogère frappe durement, ralentissant l’activité.",
          Paragraphe4: "L’entreprise devient G & A Vaudaux, dirigée par Georges et Albert Vaudaux. Cependant, la Seconde Guerre mondiale vient freiner son développement, entraînant des difficultés d’approvisionnement et une baisse d’activité. Face à cette situation, Marc Vaudaux reprend temporairement la direction, mettant à profit son expérience. Il reste à la tête de l’entreprise jusqu’à son décès en 1944.",
          Paragraphe5: "Les affaires se développent à nouveau et il faut satisfaire des commandes croissantes d’une clientèle qui s’étend sans cesse. La Maison G & A Vaudaux, transfert ses locaux à la rue du stand n°2, pour des locaux plus spacieux.",
          Paragraphe6: "Dix années passent encore et il faut admettre que la construction d’une usine modèle est indispensable. La Maison G & A Vaudaux s’installe au 14 bis de l’avenue G-Motta, dans un quartier en plein développement, près de l’ONU, offrant un cadre de travail optimal pour 80 employés.",
          Paragraphe7: "Construction d’une nouvelle usine à Vernier. Un second bâtiment est ajouté en 1991 pour les ateliers et stocks.",
          Paragraphe8: "Jacques et Gérard Vaudaux prennent la direction de l’entreprise, se partageant les rôles entre production et commerce. Introduction de l’informatique dans la gestion des stocks et de la production pour optimiser les flux de travail.",
          Paragraphe9: "L’entreprise atteint 7500 m², emploie 250 personnes et produit des centaines de milliers d’écrins par an. Mais la crise horlogère de la fin des années 2000 fragilise l’activité.",
          Paragraphe10: "Philippe Belais rachète la manufacture. Fort de son expérience dans le domaine du commerce, il identifie et corrige les dysfonctionnements de l'entreprise. Il met en valeur les savoir-faire de Vaudaux et restructure l'organisation pour assurer son développement.",
          Paragraphe11: "Création d’une unité de production en Espagne, à Elche, un haut lieu du savoir-faire de la chaussure en cuir. Cette implantation permet de croiser les expertises et de bénéficier d’une main-d’oeuvre qualifiée. L'unité se spécialise dans la fabrication de petites et moyennes séries d’écrins et de maroquinerie.",
          Paragraphe12: "Aujourd’hui : Forts de notre expertise reconnue et de la qualité de notre savoir-faire, nous répondons à une grande diversité de demandes, tant en quantité qu’en variété de projets. Toujours tournés vers l’avenir, nous intégrons les dernières technologies pour enrichir nos méthodes de production, tout en préservant et transmettant l’héritage artisanal qui fait la réputation de Vaudaux.",
        },
        "en-US": {
          titre: "Our History",
          Paragraphe1: "Marc Vaudaux, returning from Argentina, took over a leather-crafting workshop in Geneva (30 rue du Marché) and modernized its equipment. His ambition and expertise soon allowed him to absorb several competitors.",
          Paragraphe2: "As the business grew, the workshop became too small. New, larger, and better-suited premises were established on Rue des Allemands. Equipped with an elevator—a true innovation at the time—they provided an unprecedented level of comfort for the workspace.",
          Paragraphe3: "Marc Vaudaux, assisted by his son Georges, acquired a new building on Rue de l’Arquebuse. However, the watchmaking crisis hit hard, slowing down business.",
          Paragraphe4: "The company became G & A Vaudaux, led by Georges and Albert Vaudaux. However, World War II slowed its development, causing supply difficulties and a drop in activity. In response, Marc Vaudaux temporarily resumed leadership, drawing on his experience. He remained at the helm of the company until his passing in 1944.",
          Paragraphe5: "Business picked up again, with growing orders from an ever-expanding clientele. G & A Vaudaux moved to larger premises at 2 Rue du Stand to accommodate this growth.",
          Paragraphe6: "Another ten years passed, and it became clear that building a model factory was essential. G & A Vaudaux settled at 14 bis Avenue G-Motta, in a rapidly developing district near the UN, providing an optimal working environment for 80 employees.",
          Paragraphe7: "new factory was built in Vernier. A second building was added in 1991 to house workshops and storage.",
          Paragraphe8: "Jacques and Gérard Vaudaux took over the management of the company, dividing responsibilities between production and commercial operations. Computer systems were introduced to manage inventory and production, optimizing workflow efficiency.",
          Paragraphe9: "The company expanded to 7,500 m², employing 250 people and producing hundreds of thousands of cases each year. However, the watchmaking crisis at the end of the 2000s put the business under pressure.",
          Paragraphe10: "Philippe Belais acquired the manufacture. Drawing on his experience in commerce, he identified and addressed the company’s challenges. He highlighted Vaudaux’s craftsmanship and restructured the organization to ensure its continued growth.",
          Paragraphe11: "A production unit was established in Elche, Spain, a renowned hub of leather footwear expertise. This facility allows for the exchange of skills and access to a highly skilled workforce. The unit specializes in producing small to medium series of cases and leather goods.",
          Paragraphe12: "Building on our recognized expertise and the quality of our craftsmanship, we cater to a wide range of requests, both in volume and project variety. Always looking to the future, we integrate the latest technologies to enhance our production methods while preserving and passing on the artisanal heritage that defines Vaudaux.",
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
        height: 100px;
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
    .history-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15%;
    }
    .history-spacer.special{ 
        margin: 70px 0;
    }
    .history-spacer {
        border-radius: 4px;
        background-color: #aea59750;
        height: 45px;
        width: 8px;
        margin: 70px 0;
    }
    .history-container section {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        background-color: #aea59750;
        border-radius: 8px;
    }

    .history-container section.inverted {
        flex-direction: row-reverse;
    }
    .history-container h2 {
        position: absolute;
        top: -80px;
        font-size: 110px;
        color: #aea597;
        width: 100%;
        text-align: center;
        z-index: 1;
    }

    section img {
        position: relative;
        width: 40%;
        transform: scale(1.1);
    }

    section p {
        max-width: 45%;
        margin: 10% 5%;
        font-size: 24px;
        line-height: 38px;
        font-family: 'arial';
    }

    @media screen and (max-width: 768px) {
        .history-container section.inverted,
        .history-container section {
            flex-direction: column-reverse;
        }
        section img,
        section p {
            width: 80%;
            max-width: none;
        }
        .history-container h2 {
            top: -60px;
            font-size: 80px;
        }
        .history-container {
            padding: 0 8%;
        }
    }
    @media screen and (max-width: 420px) {
        .history-container h2 {
            top: -50px;
            font-size: 60px;
        }
        section p {
            font-size: 18px;
            line-height: 28px;
        }
    }


</style>