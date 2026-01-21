<template>
  <div class="magic-aliner">
    <div class="text-container">
      <h2>{{textes[currentLang].titre}}</h2>
      <div class="info-container">
        <div class="mini-title">{{ textes[currentLang].adresse }}</div>
          <a href="https://www.google.com/maps/place/Vaudaux/data=!4m2!3m1!1s0x0:0xf6e9465f687c8d6c?sa=X&ved=1t:2428&ictx=111">
            <p class="arial">Av Louis-Pictet 9 </p>
            <p class="arial">1214 Vernier (Suisse)</p>
          </a>
      </div>
      <div class="info-container">
        <div class="mini-title">{{textes[currentLang].telephone}}</div>
        <a class="arial" href="tel:+41229390500">+41 22 939 05 00</a> 
      </div>
      <div class="info-container">
        <div class="mini-title">Mail</div>
        <a class="arial" href="mailto:info@vaudaux-ge.com">info@vaudaux-ge.com</a>
      </div>
      <div class="info-container">
        <div class="mini-title">{{ textes[currentLang].horaires }}</div>
        <p class="arial">{{ textes[currentLang].lundi }}</p>
        <p class="arial">08h00-12h00 / 14h00-17h00</p>
      </div>
    </div>
    <img src="../assets/contact/map.png" alt="position de l'usine" />
  </div>


  <div class="contact-form">
    <img src="../assets/contact/form.png" alt="">
    <div class="formulaire">

      <h2 class="italic">{{ textes[currentLang].demandeContact }}</h2>
      <form @submit.prevent="submitForm">
        <div class="contact-aligner">
          <div class="smaller-input">
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
          <div class="smaller-input">
            <input
            class="contact-input w-full"
            type="email"
            id="email"
            :placeholder="textes[currentLang].email"
            v-model="form.email"
            required
            />
            <input
            class="contact-input w-full"
            type="text"
            id="telephone"
            :placeholder="textes[currentLang].telephoneLabel"
            v-model="form.telephone"
            />
          </div>
          <input
            class="contact-input w-full"
            type="text"
            id="entreprise"
            :placeholder="textes[currentLang].entreprise"
            v-model="form.entreprise"
          />
            <!-- <input
              class="contact-input w-full"
              type="file"
              id="fichier"
              @change="handleFileUpload"
            /> -->
            <textarea
              class="contact-input textarea-fullwidth"
              id="texte_demande"
              :placeholder="textes[currentLang].texteDemande"
              v-model="form.texte_demande"
              required
            ></textarea>
            <button class="button italic" type="submit">
              {{ textes[currentLang].envoyer }}
            </button>
        </div>
      </form>
    </div>
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
            titre: "Notre bureau",
            telephone: "Téléphone :",
            adresse: "Adresse :",
            horaires: "Horaires :",
            lundi: "Du lundi au vendredi :",
            
            //Pour le form
            nom: "Nom*",
            prenom: "Prénom*",
            entreprise: "Entreprise",
            email: "Email*",
            telephoneLabel: "Téléphone",
            texteDemande: "Texte de la demande*",
            envoyer: "Envoyer",
            demandeContact: "Nous contacter",
            validationMessage: "Veuillez remplir tous les champs obligatoires.",
          },
          "en-US": {
            titre: "Our office",
            telephone: "PHONE :",
            adresse: "Adress :",
            horaires: "Opening our :",
            lundi: "Form monday to friday :",
            
            //Pour le form
            nom: "Last Name*",
            prenom: "First Name*",
            entreprise: "Company",
            email: "Email*",
            telephoneLabel: "Phone",
            texteDemande: "Request Text*",
            envoyer: "Send",
            demandeContact: "Contact us",
            validationMessage: "Please fill in all required fields.",
          },
        },
        currentLang: localStorage.getItem("Language") || "fr-CH",
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
      handleFileUpload(event) {
        this.form.fichier = event.target.files[0];
      },
      
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
      
      if (this.form.fichier) {
        formData.append("fichier", this.form.fichier);
      }
      
      fetch("https://api.claudemeylan.ch/vaudaux.php", {
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
  .magic-aliner,
  .contact-form {
    display: flex;
    align-items: center;
    background: #aea597;
    margin: 100px 7%;
    border-radius: 32px;
    padding: 50px;
    justify-content: space-between;
    text-align: center;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
  }

  h2 {
    color: #000;
    font-size: 40px;
    margin-bottom: 20px;
    font-style: italic;
  }

  .magic-aliner img {
    width: 50%;
  }
  
  .info-container {
    margin-top: 30px;
    border: 1px solid #fff;
    border-radius: 12px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
  }

  .info-container p, 
  .info-container a {
    color: #000;
    font-size: 20px;
    font-weight: 400;
  }

  .info-container a:hover {
    text-decoration: none;
  }

  .mini-title {
    font-style: italic;
    background-color: #aea597;
    color: #fff;
    position: absolute;
    font-size: 20px;
    top: -20px;
    padding: 0 10px;
  }

  .contact-form {
    padding: 0;
    overflow: hidden;
  }

  .formulaire {
    width: 50%;
  }

  .contact-form img {
    width: 50%;
    margin: 0;
  }

  .contact-aligner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-aligner input, 
  .contact-aligner textarea {
    width: 50%;
    margin-bottom: 20px;
    height: 32px;
    border-radius: 4px;
    padding: 0 5px;
  }

  .smaller-input {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  .smaller-input input {
    width: 48%;
  }

  .contact-aligner textarea {
    height: 90px;
  }
  
  .button {
    background-color: #ffffff00;
    color: #fff;
    border: 1.5px solid #fff;
    padding: 10px 50px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

    @media screen and (max-width: 768px) {
      .magic-aliner {
        flex-direction: column-reverse;
      }
      .contact-form {
        flex-direction: column;
      }

      .text-container, 
      .contact-aligner input, 
      .smaller-input,
      .formulaire,
      .contact-aligner textarea {
        width: 90%;    
      }

      .smaller-input input {
        width: 48%;
      }

      .contact-aligner {
        padding-bottom: 70px;
      }
      
      .magic-aliner img, 
      .contact-form img {
        width: 100%;
        margin-bottom: 50px;
      }

      @media screen and (max-width: 420px) {
        .magic-aliner {
          padding: 20px;
          padding-bottom: 40px;
        }
      }
    }
</style>