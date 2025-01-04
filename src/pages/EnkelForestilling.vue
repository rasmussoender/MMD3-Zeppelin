<template>
    <section class="enkelForestilling">
      <div v-if="forestilling">
        <h1>{{ forestilling.title.rendered }}</h1>
        <p>{{ forestilling.acf.date }}</p>
        <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
        <div v-html="forestilling.content.rendered"></div>
        <p>{{ forestilling.acf.description }}</p>
      </div>
      <div v-else>
        <p>Loading..</p>
        <!-- Kunne være nice med animation ikon-->
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        forestilling: null, 
      };
    },
    mounted() {
      this.fetchForestillingData();
    },
    methods: {
      async fetchForestillingData() {
        const id = this.$route.params.id; 
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          this.forestilling = data; 
        } catch (error) {
          console.error("Error fetching show data:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  