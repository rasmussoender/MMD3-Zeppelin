<template>
  <div>
    <!-- SMall hero hentes også kan billedet og titlen ændres dynamisk -->
    <SmallHero 
      :heroImage="'img/showPageHero.jpg'"
      :heroTitle="'Forestillinger'"
    />
  </div>
  <main>

    <section class="forestillingerIndex">
      <p class="introText">Teatret Zeppelin tilbyder en række spændende og meningsfulde forestillinger, der appellerer til både børn og unge. Med mere end 40 års erfaring skaber teatret forestillinger, der udfordrer og engagerer publikum fra store til små </p>
      <div class="forestillingerList">
              <!-- v for loop som henter alle forestillingerne-->
        <div v-for="forestilling in forestillinger" :key="forestilling.id" class="forestillingCard cardAnimation">
                  <!-- Bruger routerlink til at linke hen til det specifikke id for cardet -->
          <router-link :to="{ name: 'forestilling', params: { id: forestilling.id } }">
            <!-- Henter dynamisk forskellige elementer fra WP -->
            <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
            <div class="forestillingText cardAnimationText">
              <p class="forestillingTitle">{{ forestilling.title.rendered }}</p>
              <p class="forestillingDate">{{ forestilling.acf.datestart }} - {{ forestilling.acf.dateend }} </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>

  </template>
  
  <script>
  // Importere smallhero og  komponenent
import SmallHero from "../components/SmallHero.vue";

export default {
  components: {
    SmallHero,
  },
    // returnerer et tomt array med forestillinger, som kan fyldes med data fra WP
  data() {
    return {
      forestillinger: [],
    };
  },
    // mounted kører når komponenten vises på siden. Inde i den bliver fetchForestillinger kaldt for at hente data om forestillinger.
  mounted() {
    this.fetchForestillinger();
  },
// fetchForestillinger henter data fra API'en ved at bruge fetch.
// Den venter på at få svar fra API'en og gemmer de modtagne data i this.forestillinger.
// Hvis der opstår en fejl under hentningen, vil fejlen blive logget i konsollen.
  methods: {
    async fetchForestillinger() {
      try {
        const response = await fetch('https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts?categories=2');
        const data = await response.json();
        this.forestillinger = data;
      } catch (error) {
        console.error("Der opstod en fejl!", error);
      }
    },
  },
};

  </script>

  <style scoped>
/* Forestilling cards */
.forestillingerList {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center; 
}
.forestillingCard {
  position: relative;
  overflow: hidden;
  width: 90%; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forestillingCard img {
  display: block;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 5px 5px 0 0; 
}

.forestillingText {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.8);
  padding: 10px 15px;
  text-align: left;
}

.forestillingTitle {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-yellow) ;
  margin: 0;
}

.forestillingDate {
  font-size: 1rem;
  color: var(--primary-yellow) ;
  margin: 5px 0 0;
}
.introText {
  padding-top: 4rem;
}


@media (max-width: 800px) {
  .forestillingerList {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.forestillingCard {
  width: 100%;
}

}

@media (max-width: 600px) {
  .forestillingerList {
  grid-template-columns: repeat(1, 1fr);
}

}





</style>