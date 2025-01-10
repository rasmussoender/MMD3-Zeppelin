<template>
  <div>
    <SmallHero 
      :heroImage="'img/workshops.jpg'"
      :heroTitle="'Workshops'"
    />
  </div>

  <main>
    <section class="workshopSection">
      <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Workshops (Zepzone)</h3>
            <p>
            ZepZone er børns, unges og voksnes interaktive møde med teatret, også uden for teatersalen.
            I ZepZone laver vi dramapædagogisk arbejde, der rykker positivt ved grænser, spreder glæde og engagement, uanset alder, og skaber et inspirerende med- og modspil til den gængse undervisning i skolen.
            ZepZones tilbud udvikles, tilrettelægges og udføres af professionelle kunstnere fra mange kroge af teatrets verden, som alle har mange års erfaring indenfor deres fag.
            </p>
            <p>Nedenunder kan I se eksempler på, hvad et ZepZone-tilbud kan indeholde.
              Undervisningen og workshops kan både afholdes på teatret eller på jeres skole. Ring og få en snak med os om jeres idéer, ønsker og behov.
            </p>
          </div>
          <img src="../assets/img/workshopCafe.jpg" alt="">
        </div>
        <hr class="deviderLine">
      <div class="workshopList">
        <div 
          v-for="workshop in workshops" 
          :key="workshop.id" 
          class="workshopCard cardAnimation"
        >
          <router-link :to="{ name: 'workshop', params: { id: workshop.id } }">
            <img :src="workshop.acf.image.url" :alt="workshop.title.rendered" />
            <div class="workshopText cardAnimationText">
              <p class="workshopTitle">{{ workshop.title.rendered }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SmallHero from "../components/SmallHero.vue";

export default {
  components: {
    SmallHero,
  },
  data() {
    return {
      workshops: [],
    };
  },
  mounted() {
    this.fetchWorkshops();
  },
// fetchEvents henter data fra API'en ved at bruge fetch.
// Den venter på at få svar fra API'en og gemmer de modtagne data i this.events
// Hvis der opstår en fejl under hentningen, vil fejlen blive logget i konsollen.
  methods: {
    async fetchWorkshops() {
      try {
        const response = await fetch('https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts?categories=5'); 
        const data = await response.json();
        this.workshops = data;
      } catch (error) {
        console.error("Der opstod en fejl!", error);
      }
    },
  },
};
</script>

    
    <style scoped>


    /* Event sektion */

  .workshopList {
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center; 
    gap: 2rem;
  }
  .workshopCard {
    position: relative;
    overflow: hidden;
    width: 100%; 
    height: 50vh;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .workshopCard img {
    display: block;
    width: 100%;
    height: 100%; 
    object-fit: cover; 
    border-radius: 5px 5px 0 0;  
  }

  .workshopText {
    position: absolute;
    width: 100%;
    background-color: rgba(30, 30, 30, 0.8);

  }

  .workshopTitle {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary-yellow);
  }


@media (max-width: 800px) {
  .workshopList {

    grid-template-columns: repeat(1, 1fr);

  }

}


  
  
    </style>
    