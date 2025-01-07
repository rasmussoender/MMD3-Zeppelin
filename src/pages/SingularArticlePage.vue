<template>
    <section class="singularArticlePodcast">
      <div v-if="articlePodcast">
        <header class="articlePodcastHero">
          <img class="articlePodcastHeroImage" :src="articlePodcast.acf.image.url" :alt="articlePodcast.title.rendered" />
          <h1 class="articlePodcastHeroTitle">{{ articlePodcast.title.rendered }}</h1>
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
        articlePodcast: null,
      };
    },
    mounted() {
      this.fetchArticlePodcastData();
    },
    methods: {
      async fetchArticlePodcastData() {
        const id = this.$route.params.id;
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          this.articlePodcast = data;
        } catch (error) {
          console.error("Der opstod en fejl!", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .singularArticlePodcast {
    padding: 20px;
  }
  
  .articlePodcastHero {
    text-align: center;
  }
  
  .articlePodcastHeroImage {
    max-width: 100%;
    height: auto;
  }
  
  .articlePodcastHeroTitle {
    font-size: 2rem;
    margin-top: 20px;
  }
  </style>
  