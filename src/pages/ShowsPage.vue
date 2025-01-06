<template>
  <div>
    <SmallHero 
      :heroImage="'img/herobilledeZeppelin.jpg'"
      :heroTitle="'Forestillinger'"
    />
  </div>
  <section class="forestillingerIndex">

    <div class="forestillingerList">
      <div v-for="forestilling in forestillinger" :key="forestilling.id" class="forestillingCard">
        <router-link :to="{ name: 'forestilling', params: { id: forestilling.id } }">
          <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
          <div class="forestillingText">
            <p class="forestillingTitle">{{ forestilling.title.rendered }}</p>
            <p class="forestillingDate">{{ forestilling.acf.date }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  </template>
  
  <script>
import SmallHero from "../components/SmallHero.vue";

export default {
  components: {
    SmallHero,
  },
  data() {
    return {
      forestillinger: [],
    };
  },
  mounted() {
    this.fetchForestillinger();
  },
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
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center; 
}
.forestillingCard {
  position: relative;
  overflow: hidden;
  width: 300px; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forestillingCard img {
  display: block;
  width: 100%;
  object-fit: contain;
  height: auto;
  object-fit: cover;
  border-radius: 5px 5px 0 0; 
}

.forestillingText {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 215, 0, 0.9); 
  padding: 10px 15px;
  text-align: left;
}

.forestillingTitle {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin: 0;
}

.forestillingDate {
  font-size: 1rem;
  color: black;
  margin: 5px 0 0;
}

</style>