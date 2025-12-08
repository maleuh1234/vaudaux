<template>
    <div class="page-header-2">
        <div class="title"><h1>Nos valeurs</h1></div>
        <div class="header-intro">
            <p>Vaudaux s’investit dans une démarche RSE, alliant excellence artisanale, responsabilité environnementale et impact social positif, pour un avenir plus durable.</p>
        </div>
    </div>
    <div class="values-grid">
        <div class="value-card vector-1">
            <h2>Environnement</h2>
            <p>Vaudaux s’engage activement pour le respect de l’environnement et adopte une démarche sociale et écologique en accord avec son métier et sa taille. Nous encourageons des pratiques responsables au quotidien, notamment le tri des déchets, la préservation des ressources et la réduction de notre empreinte énergétique. Chaque collaborateur est acteur de cet engagement pour un avenir plus durable.</p>
        </div>
        <div class="value-card image-1"></div>
        <div class="value-card vector-2">
            <h2>Qualité</h2>
            <p>Guidé par cette sensibilité au travail soigné et le sens du service, notre engagement envers la qualité est permanent. Chaque pièce que nous créons est le résultat d’un travail méticuleux et d’une attention particulière aux détails, s’inscrivant dans un processus d’amélioration continue. </p>
        </div>
        <div class="value-card image-2"></div>
        <div class="value-card vector-3">
            <h2>Intégrité</h2>
            <p>Nous plaçons l’intégrité au cœur de notre engagement, en agissant avec honnêteté, humilité et transparence, aussi bien en interne qu’avec nos clients et partenaires. La confiance, essentielle à notre réussite, se construit dans la durée, s’entretient par des actions concrètes et se démontre au quotidien. En respectant nos engagements et en adoptant une approche éthique à chaque étape, nous cultivons des relations solides et durables.</p>
        </div>
        <div class="value-card image-3"></div>
        <div class="value-card vector-4">
            <h2>Sécurité</h2>
            <p>La sécurité est une priorité chez Vaudaux. Nous mettons en place des procédures pour garantir un environnement de travail sain et sécurisé à nos collaborateurs. Cela passe par le respect des consignes, la prévention des risques et l’utilisation d’équipements adaptés. Nous veillons à ce que chacun évolue dans un cadre favorisant la sérénité et l’efficacité au travail.</p>
        </div>
        <div class="value-card image-4"></div>
        <div class="value-card vector-5">
            <h2>Respect</h2>
            <p>Nous valorisons et respectons toutes les personnes avec lesquelles nous sommes en intéraction. Cela inclut le respect des idées, des la diversité et de l’environnement. Chaque membre de notre équipe est encouragé à exprimer ses idées, à échanger et à contribuer individuellement au succés collectif</p>
        </div>
    </div>
    <div class="spacer"></div>
    <leFooter/>
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
        margin: 50px 3%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 3%;
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
        font-size: 20px;
        line-height: 1.7;
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
</style>