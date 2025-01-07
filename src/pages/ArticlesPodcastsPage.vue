<template>
  <div>
    <SmallHero 
      :heroImage="'img/heroTest.jpg'"
      :heroTitle="'Artikler og Podcasts'"
    />
  </div>

  <main>
    <section class="articlePodcastSection">
      <p class="introText">Teatret Zeppelin tilbyder forskellige artikler og podcasts, der giver indsigt i vores projekter og baggrundshistorier. Uanset om du er interesseret i teaterverdenen eller ønsker at høre mere om de kreative processer, har vi noget for dig.</p>
      <div class="articlePodcastList">
        <div 
          v-for="articlePodcast in articlesPodcasts" 
          :key="articlePodcast.id" 
          class="articlePodcastCard"
        >
          <router-link :to="{ name: 'artiklerPodcast', params: { id: articlePodcast.id } }">
            <img :src="articlePodcast.acf.image.url" :alt="articlePodcast.title.rendered" />
            <div class="articlePodcastText">
              <p class="articlePodcastTitle">{{ articlePodcast.title.rendered }}</p>
              <p class="articlePodcastDate">{{ articlePodcast.acf.date }}</p>
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
      articlesPodcasts: [],
    };
  },
  mounted() {
    this.fetchArticlesPodcasts();
  },
  methods: {
    async fetchArticlesPodcasts() {
      try {
        const response = await fetch('https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts?categories=6');
        const data = await response.json();
        this.articlesPodcasts = data;
      } catch (error) {
        console.error("Der opstod en fejl!", error);
      }
    },
  },
};
</script>


    
    <style scoped>

.articlePodcastList {
  padding: 4rem;
  padding-top: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center; 
  gap: 2rem;

}
.articlePodcastCard {
  position: relative;
  overflow: hidden;
  width: 100%; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.articlePodcastCard img {
  display: block;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 5px 5px 0 0;  
}

.articlePodcastText {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.8);
  padding: 10px 15px;
  text-align: left;
}

.articlePodcastTitle {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-yellow);
  margin: 0;
}

.articlePodcastDate {
  font-size: 1rem;
  color: var(--primary-yellow);
  margin: 5px 0 0;
}
  
  
    </style>
    