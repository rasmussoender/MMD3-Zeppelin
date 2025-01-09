<template>
  <div>
    <SmallHero 
      :heroImage="'img/herobilledeZeppelin.jpg'"
      :heroTitle="'Forestillinger'"
    />
  </div>
  <main>

    <section class="forestillingerIndex">
      <p class="introText">Teatret Zeppelin tilbyder en række spændende og meningsfulde forestillinger, der appellerer til både børn og unge. Med mere end 40 års erfaring skaber teatret forestillinger, der udfordrer og engagerer publikum fra store til små </p>
      <div class="forestillingerList">
        <div v-for="forestilling in forestillinger" :key="forestilling.id" class="forestillingCard cardAnimation">
          <router-link :to="{ name: 'forestilling', params: { id: forestilling.id } }">
            <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
            <div class="forestillingText cardAnimationText">
              <p class="forestillingTitle">{{ forestilling.title.rendered }}</p>
              <p class="forestillingDate">{{ forestilling.acf.date }}</p>
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


@media (max-width: 1200px) {
}

@media (max-width: 1000px) {

  

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

@media (max-width: 400px) {

}




</style>