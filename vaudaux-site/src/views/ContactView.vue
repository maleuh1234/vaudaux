<template>
  <div class="page-header">
    <h1 data-speed="1.2">Contact</h1>
  </div>
  <div class="magic-aliner">
    <div class="text-container">
      <h2>{{textes[currentLang].titre}}</h2>
      <p>Av Louis-Pictet 9 </p>
      <p>1214 Vernier</p>
      <p class="special-margin">SWITZERLAND</p>
      <p>
        {{textes[currentLang].telephone}}
        <a href="tel:+41229390500">+41 22 939 05 00</a>
      </p>
      <p>
        MAIL :
        <a href="mailto:info@vaudaux-ge.com">info@vaudaux-ge.com</a>
      </p>
      <p>
        INSTAGRAM :
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjd-6r-5ueHAxVXgP0HHfeTJe0QFnoECDUQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fvaudaux_geneve%2F%3Fhl%3Den&usg=AOvVaw17Vde3T55hhKBrugiPBZr5&opi=89978449"
          >@vaudaux_geneve</a>
      </p>
    </div>
    <img src="../assets/images-home/atelier.webp" alt="extérieur de la boutique" />
  </div>


  <div class="contact-form">
    <h2>{{ textes[currentLang].demandeContact }}</h2>
    <form @submit.prevent="submitForm">
      <div class="contact-aligner">
        <div class="contact-column">
          <div class="contact-aligner">
            <input
              class="contact-input contact-column-small"
              type="text"
              id="nom"
              :placeholder="textes[currentLang].nom"
              v-model="form.nom"
              required
            />
            <input
              class="contact-input contact-column-small"
              type="text"
              id="prenom"
              :placeholder="textes[currentLang].prenom"
              v-model="form.prenom"
              required
            />
          </div>
          <input
            class="contact-input w-full"
            type="text"
            id="entreprise"
            :placeholder="textes[currentLang].entreprise"
            v-model="form.entreprise"
          />
          <input
            class="contact-input w-full"
            type="email"
            id="email"
            :placeholder="textes[currentLang].email"
            v-model="form.email"
            required
          />
        </div>
        <div class="contact-column">
          <input
            class="contact-input w-full"
            type="text"
            id="telephone"
            :placeholder="textes[currentLang].telephoneLabel"
            v-model="form.telephone"
          />
          <textarea
            class="contact-input w-full"
            id="texte_demande"
            :placeholder="textes[currentLang].texteDemande"
            v-model="form.texte_demande"
            required
          ></textarea>
          <button class="button" type="submit">
            {{ textes[currentLang].envoyer }}
          </button>
        </div>
      </div>
    </form>
  </div>
  <leFooter/>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      textes: {
        "fr-CH": {
          titre: "Nos bureaux",
          telephone: "TEL :",

          //Pour le form
          nom: "Nom*",
          prenom: "Prénom*",
          entreprise: "Entreprise",
          email: "Email*",
          telephoneLabel: "Téléphone",
          texteDemande: "Texte de la demande*",
          envoyer: "Envoyer",
          demandeContact: "Demande de contact",
          validationMessage: "Veuillez remplir tous les champs obligatoires.",
        },
        "en-US": {
          titre: "Our office",
          telephone: "PHONE :",

          //Pour le form
          nom: "Last Name*",
          prenom: "First Name*",
          entreprise: "Company",
          email: "Email*",
          telephoneLabel: "Phone",
          texteDemande: "Request Text*",
          envoyer: "Send",
          demandeContact: "Contact Request",
          validationMessage: "Please fill in all required fields.",
        },
      },
      currentLang: localStorage.getItem("Language") || "en-US",
      form: {
        nom: "",
        prenom: "",
        entreprise: "",
        email: "",
        telephone: "",
        texte_demande: "",
      },
    };
  },

methods: {
    submitForm() {
      if (
        !this.form.nom ||
        !this.form.prenom ||
        !this.form.email ||
        !this.form.texte_demande
      ) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: this.textes[this.currentLang].validationMessage,
        });
        return;
      }

      const formData = new URLSearchParams();
      formData.append("nom", this.form.nom);
      formData.append("prenom", this.form.prenom);
      formData.append("entreprise", this.form.entreprise);
      formData.append("email", this.form.email);
      formData.append("telephone", this.form.telephone);
      formData.append("texte_demande", this.form.texte_demande);

      fetch("https://chattona.emf-informatique.ch/vaudaux/contact_form.php", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => {
          if (!response.ok) {
            return response.text().then((text) => {
              throw new Error(text);
            });
          }
          return response.text();
        })
        .then((result) => {
          Swal.fire({
            icon: "success",
            title: "Succès",
            text: result,
          });
          // Réinitialiser le formulaire
          this.form.nom = "";
          this.form.prenom = "";
          this.form.entreprise = "";
          this.form.email = "";
          this.form.telephone = "";
          this.form.texte_demande = "";
        })
        .catch((error) => {
          console.error("Erreur:", error);
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: error.message,
          });
        });
    },
  },
}
</script>

<script setup>
  import leFooter from "../components/Footer.vue";
</script>

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