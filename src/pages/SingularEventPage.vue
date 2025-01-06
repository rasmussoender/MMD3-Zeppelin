<template>
    <section class="singularEvent">
      <div v-if="event">
        <header class="eventHero">
          <img class="eventHeroImage" :src="event.acf.image.url" :alt="event.title.rendered" />
          <h1 class="eventHeroTitle">{{ event.title.rendered }}</h1>
        </header>
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
.eventHero {
  position: relative;
  height: 80vh; 
  overflow: hidden;
}

.eventHeroImage {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  position: absolute;
  top: 0;
  left: 0;
}

.eventHeroTitle {
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 6rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 1; 
}

  </style>
  