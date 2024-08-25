<template>
  <div class="page-header">
    <h1 data-speed="1.2">Contact</h1>
  </div>
  <div class="magic-aliner">
    <div class="text-container">
      <h2>Nos Bureaux</h2>
      <p>Rue de la Corraterie 20</p>
      <p>1204 Genève</p>
      <p class="special-margin">SWITZERLAND</p>
      <p>
        TEL
        <a href="tel:+41223186040">+41 (0)22 318 60 40</a>
      </p>
      <p>
        MAIL :
        <a href="mailto:talents@talents-ge.com">talents@talents-ge.com</a>
      </p>
      <p>
        INSTAGRAM :
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjd-6r-5ueHAxVXgP0HHfeTJe0QFnoECDUQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fvaudaux_geneve%2F%3Fhl%3Den&usg=AOvVaw17Vde3T55hhKBrugiPBZr5&opi=89978449"
          >@vaudaux_geneve</a
        >
      </p>
    </div>
    <img src="../assets/images-home/atelier.webp" alt="extérieur de la boutique" />
  </div>
</template>

<style scoped>
.page-header {
  background-image: url(../assets/images-home/right.jpg);
}

h1 {
  position: absolute;
}

.contact-form {
  margin: 100px 20px;
  position: relative;
}

.arrow-button {
  position: absolute;
  bottom: 0;
  right: 0;
}

.arrow-button svg {
  position: relative;
  transition: 0.3s;
  margin-right: 5px;
}

.arrow-button:hover svg {
  transform: translateX(10px);
}

.contact-aligner {
  display: flex;
  justify-content: space-between;
}
.contact-column {
  width: 47%;
}
.contact-column-small {
  width: 45%;
}

.page-header {
  background-image: url(../assets/images-home/right.jpg);
}

h2 {
  font-size: 2.827rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

p {
  margin-top: 0;
  width: 100%;
}

.special-margin {
  margin-bottom: 2rem;
}

a {
  font-size: inherit;
  color: inherit;
  background: linear-gradient(to top, #000 0%, #000 2px, transparent 3px) no-repeat;
  background-size: 0% 100%;
  transition: 0.2s;
}

a:hover {
  background-size: 100% 100%;
}

.contact-input {
  border-bottom: 2px solid #7b6e68;
  padding: 10px;
  margin-top: 40px;
}

.contact-input ::placeholder {
  color: #000;
  opacity: 0.6;
}

.w-full {
  width: 100%;
}

.magic-aliner {
  display: flex;
  flex-direction: column-reverse;
  margin: 100px 20px;
  justify-content: space-between;
  align-items: center;
}

.magic-aliner img,
.magic-aliner p,
.magic-aliner .text-container {
  width: 100%;
}

@media screen and (max-width: 1099px) {
  .contact-aligner {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
  }
  .contact-column {
    width: 70%;
  }
  .contact-column-small {
    width: 100%;
  }

  .arrow-button {
    position: static;
    margin-top: 40px;
  }
}
@media screen and (min-width: 1100px) {
  .contact-form {
    margin: 170px 60px;
  }

  .magic-aliner {
    display: flex;
    flex-direction: row;
    margin: 170px 60px;
    position: relative;
  }

  .magic-aliner img,
  .magic-aliner p,
  .magic-aliner .text-container {
    width: 49%;
  }
}
</style>