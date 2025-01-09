<template>
    <section class="singularArticlePodcast">
      <div v-if="articlePodcast">
        <header class="singularPageHero">
          <img class="singularPageHeroImage" :src="articlePodcast.acf.image.url" :alt="articlePodcast.title.rendered" />
          <h1 class="singularPageHeroTitle">{{ articlePodcast.title.rendered }}</h1>
        </header>

        <main>
        <section class="articlePodcastSection">
        <div class="articlePodcastTextSection">
            <h2 class="heading2">{{ articlePodcast.acf.title }}</h2>
            <p class="articlePodcastAuthor">Af {{ articlePodcast.acf.author }}</p>
            <p class="articlePodcastDate">{{ articlePodcast.date }}</p>
            <div>
              <h3></h3>
              <p>{{ articlePodcast.acf.text1 }}</p>
            </div>
            <div>
              <h3>{{ articlePodcast.acf.texttitle2 }}</h3>
              <p>{{ articlePodcast.acf.text2 }}</p>
            </div>

            <div>
              <h3>{{ articlePodcast.acf.texttitle3 }}</h3>
              <p>{{ articlePodcast.acf.text3 }}</p>
            </div>


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

.articlePodcastSection {
  padding-left: 10rem;
  padding-right: 10rem;
}


@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .articlePodcastSection {
  padding-left: 5rem;
  padding-right: 5rem;
}


  
}

@media (max-width: 800px) {
  .articlePodcastSection {
  padding-left: 3rem;
  padding-right: 3rem;
}



}

@media (max-width: 600px) {
  .articlePodcastSection {
  padding-left: 2rem;
  padding-right: 2rem;
}



}

@media (max-width: 400px) {
  .articlePodcastSection {
  padding-left: 0;
  padding-right: 0;
}



}




  </style>
  