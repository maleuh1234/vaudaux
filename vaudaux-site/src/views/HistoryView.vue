<template>
    <div class="page-header-2">
        <div class="title"><h1>Notre histoire</h1></div>
    </div> 
    <div class="history-container">
        <div class="history-spacer special"></div>
        <section>
            <p>Marc Vaudaux, de retour d’Argentine, reprend un atelier de gainerie à Genève (rue du Marché, 30) et modernise ses équipements. Son ambition et son savoir-faire lui permettent rapidement d’absorber plusieurs concurrents.</p>
            <h2>1908</h2>
            <img src="../assets/images-history/history1-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>Face à l’essor de l’activité, l’atelier devient trop exigu. De nouveaux locaux plus vastes et mieux adaptés sont installés rue des Allemands. Équipés d’un ascenseur, une véritable révolution pour l’époque, ils offrent un confort de travail inédit.</p>
            <h2>1912</h2>
            <img src="../assets/images-history/history2-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>Marc Vaudaux, aidé par son fils Georges, acquiert un nouvel immeuble rue de l’Arquebuse. Mais la crise horlogère frappe durement, ralentissant l’activité.</p>
            <h2>1930</h2>
            <img src="../assets/images-history/history3-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>L’entreprise devient G & A Vaudaux, dirigée par Georges et Albert Vaudaux. <br>Cependant, la Seconde Guerre mondiale vient freiner son développement, entraînant des difficultés d’approvisionnement et une baisse d’activité. Face à cette situation, Marc Vaudaux reprend temporairement la direction, mettant à profit son expérience. Il reste à la tête de l’entreprise jusqu’à son décès en 1944.</p>
            <h2>1938</h2>
            <img src="../assets/images-history/history4_1-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p>Les affaires se développent à nouveau et il faut satisfaire des commandes croissantes d’une clientèle qui s’étend sans cesse. La Maison G & A Vaudaux, transfert ses locaux à la rue du stand n°2, pour des locaux plus spacieux. </p>
            <h2>1944</h2>
            <img src="../assets/images-history/history5-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>Dix années passent encore et il faut admettre que la construction d’une usine modèle est indispensable. <br>La Maison G & A Vaudaux s’installe au 14 bis de l’avenue G-Motta, dans un quartier en plein développement, près de l’ONU, offrant un cadre de travail optimal pour 80 employés. </p>
            <h2>1954</h2>
            <img src="../assets/images-history/history6-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p> Construction d’une nouvelle usine à Vernier. Un second bâtiment est ajouté en 1991 pour les ateliers et stocks.</p>
            <h2>1972</h2>
            <img src="../assets/images-history/history7-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>Jacques et Gérard Vaudaux prennent la direction de l’entreprise, se partageant les rôles entre production et commerce. <br>Introduction de l’informatique dans la gestion des stocks et de la production pour optimiser les flux de travail.</p>
            <h2>1981</h2>
            <img src="../assets/images-history/history8-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p> L’entreprise atteint 7500 m², emploie 250 personnes et produit des centaines de milliers d’écrins par an. Mais la crise horlogère de la fin des années 2000 fragilise l’activité.</p>
            <h2>2000</h2>
            <img src="../assets/images-history/history9-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>Philippe Belais rachète la manufacture. <br>Fort de son expérience dans le domaine du commerce, il identifie et corrige les dysfonctionnements de l'entreprise. Il met en valeur les savoir-faire de Vaudaux et restructure l'organisation pour assurer son développement.</p>
            <h2>2010</h2>
            <img src="../assets/images-history/history10-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section>
            <p> Création d’une unité de production en Espagne, à Elche, un haut lieu du savoir-faire de la chaussure en cuir. Cette implantation permet de croiser les expertises et de bénéficier d’une main-d’œuvre qualifiée. L'unité se spécialise dans la fabrication de petites et moyennes séries d’écrins et de maroquinerie.</p>
            <h2>2018</h2>
            <img src="../assets/images-history/history11-8.png" alt="">
        </section>
        <div class="history-spacer"></div>
        <section class="inverted">
            <p>Forts de notre expertise reconnue et de la qualité de notre savoir-faire, nous répondons à une grande diversité de demandes, tant en quantité qu’en variété de projets. Toujours tournés vers l’avenir, nous intégrons les dernières technologies pour enrichir nos méthodes de production, tout en préservant et transmettant l’héritage artisanal qui fait la réputation de Vaudaux.</p>
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