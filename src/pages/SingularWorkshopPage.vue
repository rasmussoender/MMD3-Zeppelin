<template>
    <section class="singularWorkshop">
      <div v-if="workshop">
        <header class="workshopHero">
          <img class="workshopHeroImage" :src="workshop.acf.image.url" :alt="workshop.title.rendered" />
          <h1 class="workshopHeroTitle">{{ workshop.title.rendered }}</h1>
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
        workshop: null,
      };
    },
    mounted() {
      this.fetchWorkshopData();
    },
    methods: {
      async fetchWorkshopData() {
        const id = this.$route.params.id;
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          this.workshop = data;
        } catch (error) {
          console.error("Error fetching workshop data:", error);
        }
      },
    },
  };
  </script>

  <style scoped>
</style>