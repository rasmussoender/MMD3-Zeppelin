<template>
  <div>
    <SmallHero 
      :heroImage="'img/Forrestillinger.jpg'"
      :heroTitle="'Artikler og Podcasts'"
    />
  </div>

  <main>
    <section class="articlePodcastSection">
      <p class="introText">Samling af artikler og Podcasts med viden om teater, debat og baggrundsstof om teater samt nyheder og info om Teatret Zeppelin – skrevet af medarbejderne og ledelsen på Teatret Zeppelin.</p>
      <div class="articlePodcastList">
        <!-- loop som henter alle artikel opslag -->
        <div 
    v-for="articlePodcast in articlesPodcasts" 
    :key="articlePodcast.id" 
    class="articlePodcastCard cardAnimationArticle"
  >
    <!-- Bruger routerlink til at linke hen til det specifikke id for cardet -->
    <router-link :to="{ name: 'artiklerPodcast', params: { id: articlePodcast.id } }">
      <img 
        :src="articlePodcast.acf.image.url" 
        :alt="articlePodcast.title.rendered" 
        class="articlePodcastImage" 
      />
      <div class="articlePodcastText cardAnimationArticleText">
        <span class="articlePodcastCategory">{{ articlePodcast.acf.category
 }}</span>
        <p class="articlePodcastTitle">{{ articlePodcast.title.rendered }}</p>
        <p class="articlePodcastDescription">{{ articlePodcast.acf.shortdescription
 }}</p>
        <div class="articlePodcastAuthorDate">
          <p class="articlePodcastAuthor">Af <span>{{ articlePodcast.acf.author }}</span></p>
          <p class="articlePodcastDate">{{ articlePodcast.acf.date }}</p>
        </div>
      </div>
    </router-link>
  </div>
      </div>
    </section>
  </main>
</template>

<script>
// henter smallhero component
import SmallHero from "../components/SmallHero.vue";

export default {
  components: {
    SmallHero,
  },
      // returnerer et tomt array, som kan fyldes med data fra WP
  data() {
    return {
      articlesPodcasts: [],
    };
  },
    // mounted kører når komponenten vises på siden. Inde i den bliver fetchArticlesPodcasts kaldt for at hente data .
  mounted() {
    this.fetchArticlesPodcasts();
  },
  // fetchArticlesPodcasts henter data fra API'en ved at bruge fetch.
// Den venter på at få svar fra API'en og gemmer de modtagne data i this.articlesPodcasts.
// Hvis der opstår en fejl under hentningen, vil fejlen blive logget i konsollen.
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
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; 
  gap: 2rem;

}
.articlePodcastCard {

  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  width: 100%; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
}

.articlePodcastImage {
  display: block;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 5px 5px 0 0;  
}

.articlePodcastText {
  padding: 1rem;
  height: 25vh;
}

.articlePodcastCategory {
  display: inline-block;
  background-color: var(--primary-yellow);
  color: var(--primary-text-dark);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.articlePodcastTitle {
  font-size: 22px;
  font-weight: bold;
}

.articlePodcastDescription {
  font-size: 14px;
  color: #666;
}

.articlePodcastAuthorDate {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 12px;
  color: var(--primary-text-dark);
}

.articlePodcastAuthor span {
  font-weight: bold;
}

.articlePodcastDate {
  font-style: italic;
  padding-right: 2rem;
}

/* Hover effect */
.cardAnimationArticle:hover img {
  transform: scale(1.1); 
}

.cardAnimationArticle:hover .cardAnimationArticleText {
  background-color: rgb(236, 236, 236, 0.99);
}

.cardAnimationArticle:hover {
  transform: translateY(-5px); 
}

.cardAnimationArticle {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 55vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

}

.cardAnimationArticle img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  transition: transform 0.3s ease-in-out;
}

.cardAnimationArticle .cardAnimationArticleText {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ECECEC;
  padding: 10px 15px;
  text-align: left;
  color: var(--primary-text-dark);
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}


@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .articlePodcastList {
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  padding-top: 1rem;
}


  
}


@media (max-width: 600px) {
  .articlePodcastList {
grid-template-columns: repeat(1, 1fr);
}

}






  
  
    </style>
    