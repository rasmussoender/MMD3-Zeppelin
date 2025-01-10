<template>
    <section class="singularEvent">
      <div v-if="event">
        <header class="singularPageHero">
          <img class="singularPageHeroImage" :src="event.acf.image.url" :alt="event.title.rendered" />
          <h1 class="singularPageHeroTitle">{{ event.title.rendered }}</h1>
        </header>

        <main>
            <div class="introIcons">
          <div>
            <i class="fa-solid fa-calendar-days"></i>
            <p>{{ event.acf.date }}</p>
          </div>
          
          <div>
            <i class="fa-solid fa-clock"></i>
            <p> kl. {{ event.acf.time }}</p>
          </div>
          
          <div>
            <i class="fa-solid fa-money-bill-wave"></i>
            <p>{{ event.acf.price }}</p>
          </div>
          
          <div>
            <i class="fa-solid fa-users"></i>
            <p>{{ event.acf.age }}</p>
          </div>
        </div>
        <hr class="deviderLine">
        <section class="eventTextSection">
        <p>{{ event.acf.text1 }}</p>
        <p>{{ event.acf.text2 }}</p>
        <div class="centeredBtn">
            <a :href="event.acf.registerlink" target="_blank" class="buttonType1">Tilmeld</a>
        </div>

        </section>
        </main>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        event: null,
      };
    },
    mounted() {
      this.fetchEventData();
    },
    methods: {
      // fetchEventData henter data fra API'en ved at bruge fetch.
      async fetchEventData() {
        // Her hentes det info fra det specikke id for det post der er blevet trykket på.
        //  this.$route.params indeholder dynamiske routes
        const id = this.$route.params.id;
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          // sørger for, at koden venter på, at JSON data er hentet, før den går videre.
          const data = await response.json();
          // De hentede data bliver gemt i variablen  event
          this.event = data;
        } catch (error) {
          // Fejl logges
          console.error("Der opstod en fejl!", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>

/* Hero section styles */

/* icon section */
.introIcons {
  display: flex;
  justify-content: space-around;
}

.introIcons div {
  display: flex;
  align-items: center; 
  justify-content: center; 
  flex-direction: column; 
  text-align: center;
}

.introIcons div i {
  font-size: 2rem; 
  margin-bottom: 20px; 
  color: var(--primary-blue);
}

.eventTextSection {
    padding: 15rem;
    padding-top: 0;
}
.eventTextSection p {
    padding-top: 3rem;
}

@media (max-width: 1200px) {

  .eventTextSection {
    padding: 10rem;
    padding-top: 0;
}
.eventTextSection p {
    padding-top: 2rem;
}

}

@media (max-width: 1000px) {
  .ensembleContainer {
  grid-template-columns: repeat(3, 1fr);
}

.eventTextSection {
    padding: 5rem;
    padding-top: 0;

}

}

@media (max-width: 800px) {

  .eventTextSection {
    padding: 3rem;
    padding-top: 0;

}


}

@media (max-width: 600px) {
  .eventTextSection {
    padding: 2rem;
    padding-top: 0;

}


}


  </style>
  