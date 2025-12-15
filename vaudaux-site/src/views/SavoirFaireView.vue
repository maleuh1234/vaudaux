<template>
    <div class="page-header-2">
        <div class="title"><h1>Nos savoir-faire</h1></div>
        <div class="header-intro">
            <p>Chez Vaudaux, chaque création est le fruit d’un artisanat d’exception, où chaque savoir-faire se complète pour offrir des pièces uniques, alliant tradition, précision et innovation.</p>
        </div>
    </div>
    <div class="savoir-faire-container">
        <div class="savoir-faire-item">
            <div class="savoir-faire-textes">
                <h2>développement</h2>
                <p>Un studio de création et une équipe de développement travaillent ensemble transformer chaque idée en réalité. <br>De la conception initiale aux derniers ajustements techniques, nous accompagnons chaque projet avec expertise et créativité, en veillant à allier esthétique, fonctionnalité et excellence artisanale.</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-1.png" alt="">
        </div>    
        <div class="savoir-faire-item reversed">
            <div class="savoir-faire-textes">
                <h2>Menuiserie</h2>
                <p>Nos artisans sont spécialisés dans la fabrication de fûts sur mesure, créant ainsi des structures robustes et élégantes pour vos projets. Grâce à un savoir-faire unique et en constante évolution, nous intégrons les dernières technologies et machines pour garantir des réalisations précises et innovantes.</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-2.png" alt="">
        </div>    
        <div class="savoir-faire-item">
            <div class="savoir-faire-textes">
                <h2>L’art de la découpe</h2>
                <p>Chaque pièce de cuir est soigneusement sélectionnée pour garantir la qualité de nos créations. Nos gainiers choisissent les meilleures peaux pour des projets raffinés et durables, tout en maîtrisant une large gamme de matériaux : tissus, papiers, imitations du cuir, velours, etc. Chaque matière est traitée avec soin pour des finitions impeccables et une esthétique unique.</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-3.png" alt="">
        </div>    
        <div class="savoir-faire-item reversed">
            <div class="savoir-faire-textes">
                <h2>Impression</h2>
                <p>Grâce à notre expertise, chaque pièce devient unique grâce à une gamme de techniques d’impression sur mesure : impression à chaud pour initiales ou logos, sérigraphie pour des motifs raffinés, ou impression numérique pour des illustrations complexes, offrant ainsi des créations d’une élégance exceptionnelles.</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-4.png" alt="">
        </div>    
        <div class="savoir-faire-item">
            <div class="savoir-faire-textes">
                <h2>Gainerie</h2>
                <p>Nos artisans gainiers perpétuent l'excellence du savoir-faire VAUDAUX en couvrant chaque forme avec une précision unique. Grâce à leur maîtrise des coupes et des assemblages, chaque réalisation reflète un soin du détail exceptionnel. Chaque pièce devient ainsi une création élégante, authentique et durable, portant la signature de notre expertise artisanale.</p>
            </div>
            <img src="../assets/savoir-faire/3x/savoir-faire-5.png" alt="">
        </div>    
        <div class="savoir-faire-item reversed">
            <div class="savoir-faire-textes">
                <h2>Maroquinerie</h2>
                <p>Le savoir-faire en maroquinerie vient enrichir celui de la gainerie, élargissant ainsi les possibilités d’assemblage et de finitions. Que ce soit pour créer des pièces complètes telles que des pochettes, sacs ou porte-clés, ou pour personnaliser vos créations avec des surpiqûres délicates, chaque détail vous offre une multitude d’options de personnalisation.</p>
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