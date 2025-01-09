<template>
  <div>
    <SmallHero 
      :heroImage="'img/heroTest.jpg'"
      :heroTitle="'Events'"
    />
  </div>

  <main>
    <section class="eventSection">
      <p class="introText">Teatret Zeppelin tilbyder forskellige events, alt fra loppemarkeder til kreative workshops. Uanset om du er på udkig efter unikke fund eller ønsker at udforske din kreative side gennem teater, har vi noget for alle. </p>
      <div class="eventList">
        <div 
          v-for="event in events" 
          :key="event.id" 
          class="eventCard cardAnimation"
        >
          <router-link :to="{ name: 'event', params: { id: event.id } }">
            <img :src="event.acf.image.url" :alt="event.title.rendered" />
            <div class="eventText cardAnimationText">
              <p class="eventTitle">{{ event.title.rendered }}</p>
              <p class="eventDate">{{ event.acf.date }}</p>
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
      events: [],
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await fetch('https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts?categories=4');
        const data = await response.json();
        this.events = data;
      } catch (error) {
        console.error("Der opstod en fejl!", error);
      }
    },
  },
};
</script>
  
  <style scoped>

  /* event sektion */

.eventList {
  padding: 4rem;
  padding-top: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center; 
  gap: 2rem;

}
.eventCard {
  position: relative;
  overflow: hidden;
  width: 100%; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.eventCard img {
  display: block;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 5px 5px 0 0;  
}

.eventText {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.8);
  padding: 10px 15px;
  text-align: left;
}

.eventTitle {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-yellow);
  margin: 0;
}

.eventDate {
  font-size: 1rem;
  color: var(--primary-yellow);
  margin: 5px 0 0;
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .eventList {
    padding: 0rem;
    padding-top: 1rem;

  }

  
}

@media (max-width: 800px) {
  .eventList {

  grid-template-columns: repeat(1, 1fr);


}

}

@media (max-width: 600px) {

}

@media (max-width: 400px) {

}



  </style>
  