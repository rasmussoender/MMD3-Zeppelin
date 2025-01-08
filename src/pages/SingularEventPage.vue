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
      async fetchEventData() {
        const id = this.$route.params.id;
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          this.event = data;
        } catch (error) {
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

  </style>
  