<template>
  <div>
    <Hero />
  </div>

  <main>
    <section class="indexIntro">
        <div>
          <h2>Velkommen til Teatret Zeppelin!</h2>
          <h3>Byens familieteater i hjertet af Vesterbro</h3>
          <p>
            Vi tilbyder spændende forestillinger for både klasser og familier.
            Vores program rummer noget for enhver smag, uanset om det er lærerig
            underholdning eller en hyggelig dag sammen. Priserne varierer
            afhængigt af forestillingens type og deltagerantal. Kontakt os for
            at høre mere og finde en løsning, der passer til jer!
          </p>
          <button></button>
          <button></button>
        </div>
        <video width="640" height="360" controls>
          <source src="../assets/img/introVideoIndex.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section class="forestillingerIndex">
    <div class="forestillingerList">
      <div v-for="forestilling in forestillinger.slice(0, 5)" :key="forestilling.id" class="forestillingCard">
        <router-link :to="{ name: 'forestilling', params: { id: forestilling.id } }">
          <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
          <div class="forestillingText">
            <p class="forestillingTitle">{{ forestilling.title.rendered }}</p>
            <p class="forestillingDate">{{ forestilling.acf.date }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
      </main>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  name: "IndexPage",
  components: {
    Hero
  },
  data() {
    return {
      forestillinger: [] 
    };
  },
  mounted() {
    this.fetchForestillinger(); 
  },
  methods: {
    async fetchForestillinger() {
      try {
        const response = await fetch('https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts?categories=2');
        const data = await response.json(); 
        this.forestillinger = data; 
      } catch (error) {
        console.error("Error fetching the shows:", error);
      }
    }
  }
};
</script>

  <style scoped>
  /* Hero Section */
.hero {
position: relative;
background-image: url('../assets/img/herobilledeZeppelin.jpg');
background-size: cover;
background-position: center;
height: 100vh;
color: white;
}

  /* Hero indhold */

.hero-content {
position: absolute;
top: 50%;
left: 20%;
transform: translate(-50%, -50%);
}

.hero-content h1 {
font-size: 3em;
margin-bottom: 0.5em;
}

.hero-content p {
font-size: 1.5em;
margin-bottom: 1em;
}

.hero-content .button {
padding: 0.5em 1em;
background: yellow;
color: black;
font-weight: bold;
text-transform: uppercase;
border: none;
cursor: pointer;
border-radius: 5px;
}

/* Scroll Down */
.scroll-down {
    text-align: center;
    margin-bottom: 2em;
  }
  
  .scroll-down i {
    font-size: 2em;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
}

/* Intro sektion */
.indexIntro {
  display: flex;
  padding: 4rem;
}

/* Forestilling cards */
.forestillingCard {
  position: relative; 
  width: 20vw;
  height: 400px;
}

.forestillingCard img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.forestillingText {
  position: absolute; 
  bottom: 10px; 
  left: 10px; 
  font-size: 24px;
  background-color: #FFD700;
  padding: 10px;
  color: #000;
}

</style>