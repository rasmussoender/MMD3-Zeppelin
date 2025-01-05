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
          <div class="buttonWrapper">
            <a href="./casestudies.html" class="buttonType1">Om Zeppelin</a>
            <a href="index.html#contactSection" class="buttonType1"
            >Info til besøgende</a
            >
          </div>
        </div>
        <video width="640" height="360" controls>
          <source src="../assets/img/introVideoIndex.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <hr class="deviderLine">
      <section class="forestillingerIndex">
    <div class="forestillingerList">
      <div v-for="forestilling in forestillinger.slice(0, 4)" :key="forestilling.id" class="forestillingCard">
        <router-link :to="{ name: 'forestilling', params: { id: forestilling.id } }">
          <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
          <div class="forestillingText">
            <p class="forestillingTitle">{{ forestilling.title.rendered }}</p>
            <p class="forestillingDate">{{ forestilling.acf.date }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="centeredBtn">
      <a href="./casestudies.html" class="buttonType1">Alle forestillinger</a>
    </div>
  </section>

  <hr class="deviderLine">
  <section class="pictureGalleri">
  <h3>Følg os på Instagram</h3>
  <div class="indexInstagramGrid">
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram1.png" alt="">
    </a>
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram2.png" alt="">
    </a>
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram3.png" alt="">
    </a>
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram4.png" alt="">
    </a>
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram5.png" alt="">
    </a>
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram6.png" alt="">
    </a>
    <a href="https://www.instagram.com/teatretzeppelin" target="_blank">
      <img src="../assets/img/zeppelinInstagram7.png" alt="">
    </a>
  </div>
  <p>@teatretzeppelin</p>
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

.deviderLine {
  border: none;
  height: 2px;
  background-color: black;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* Intro sektion */
.indexIntro {
  display: flex;
}
.indexIntro p {
  width: 80%;
}

/* Forestilling cards */
.forestillingerList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center; 
}
.forestillingCard {
  position: relative;
  overflow: hidden;
  width: 300px; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forestillingCard img {
  display: block;
  width: 100%;
  object-fit: contain;
  height: auto;
  object-fit: cover;
  border-radius: 5px 5px 0 0; 
}

.forestillingText {
  position: absolute;
  bottom: 0;
  width: 100%;
  
  background-color: rgba(218, 204, 0, 0.85);
  padding: 10px 15px;
  text-align: left;
}

.forestillingTitle {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  margin: 0;
}

.forestillingDate {
  font-size: 1rem;
  color: black;
  margin: 5px 0 0;
}



.buttonWrapper {
  padding-top: 2rem;
  display: flex;
  gap: 20px;
  justify-content: left; 
  
}

.centeredBtn {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}

/* Instagram galliri */


.indexInstagramGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem; 
}

.grid-item {
  display: block;
  position: relative; 
}

.indexInstagramGrid a img {
  display: block;    
  width: 100%;       
  height: 100%;      
  object-fit: cover; 
}

.indexInstagramGrid a:nth-of-type(1) {
  grid-column: span 2; 
  grid-row: span 2;    
  height: 100%;        
}

.indexInstagramGrid a:nth-of-type(n+2) {
  grid-column: span 1;
}
</style>