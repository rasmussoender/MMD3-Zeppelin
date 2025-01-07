<template>
    <section class="singularArticlePodcast">
      <div v-if="articlePodcast">
        <header class="articlePodcastHero">
          <img class="articlePodcastHeroImage" :src="articlePodcast.acf.image.url" :alt="articlePodcast.title.rendered" />
          <h1 class="articlePodcastHeroTitle">{{ articlePodcast.title.rendered }}</h1>
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

            <div>
              <h3>Hvad kræver auteur-metoden af de medvirkende?</h3>
              <p>Mie fremhæver resonans som et nøgleord inden for auteur-metoden.
              ”Vi er alle sammen mennesker, og vi er nogenlunde ens.”
              Hvis det materiale, der udvikles i fællesskab, ikke vækker resonans – eller dissonans, så ved hun, det skal ud. I den arbejdsform får alle medvirkende et stærkt medejerskab af forestillingen, fordi de bidrager med noget af personlig betydning.
              “Jo mere man tør byde ind med sine personlige fortællinger, jo stærkere bliver ejerforholdet og forestillingen.”
              Mie understreger dog, at auteur-metoden ikke handler om terapi. Hun forsøger ikke at løse folks problemer, men bruger fortællingerne til at skabe materiale, der vækker resonans. De medvirkendes fortællinger bruger hun aldrig i deres oprindelige form, og aldrig på en udleverende måde. Alligevel kræver det mod at deltage i en auteur-forestilling – skuespillere skal turde sætte deres egne følelser på spil. Mie læner sig frem i stolen, idet hun siger:
              “Man kan ikke ansætte en skuespiller, der ikke vil det – det blokerer hele processen, hvis nogen ikke vil dele det, der betyder noget for dem. Så genererer vi ikke materiale.”
            </p>
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

  /* Hero section styles */
.articlePodcastHero {
  position: relative;
  height: 80vh; 
  overflow: hidden;
}

.articlePodcastImage {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  position: absolute;
  top: 0;
  left: 0;
}

.articlePodcastHeroTitle {
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

.articlePodcastSection {
  padding-left: 10rem;
  padding-right: 10rem;
}


  </style>
  