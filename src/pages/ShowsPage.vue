<template>
  <section class="forestillingerIndex">

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
  </section>

  </template>
  
  <script>
  export default {
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
        console.error("Der opstod en fejl ved hentning af data:", error);
      }
    },
  },
};



  </script>

  <style scoped>
  /* Forestilling cards */
.forestillingCard {
  position: relative; 
  width: 20vw;
  height: 400px;
}

.forestillingCard img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.forestillingText {
  position: absolute; 
  bottom: 10px; 
  left: 10px; 
  font-size: 24px;
  background-color: #FFD700;
  padding: 10px;
  color: #000;
}
</style>