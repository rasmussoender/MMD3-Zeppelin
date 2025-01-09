<template>
  <div>
    <Hero />
  </div>

  <main>
    <section class="mediaTextSection">
        <div>
          <h3 class="heading2">Velkommen til Teatret Zeppelin!</h3>
          <h4>Byens familieteater i hjertet af Vesterbro</h4>
          <p>
            Vi tilbyder spændende forestillinger for både klasser og familier.
            Vores program rummer noget for enhver smag, uanset om det er lærerig
            underholdning eller en hyggelig dag sammen. Priserne varierer
            afhængigt af forestillingens type og deltagerantal. Kontakt os for
            at høre mere og finde en løsning, der passer til jer!
          </p>
          <div class="buttonWrapper">
            <li><router-link class="buttonType1" to="/forestillinger">Forestillinger</router-link></li>
            <li><router-link class="buttonType1" to="/informationBesogende">Info til besøgende</router-link></li>
            
          </div>
        </div>
        <video controls>
          <source src="../assets/img/introVideoIndex.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <hr class="deviderLine">

      <section>
        <h3 class="heading2">Citater fra anmeldere</h3>
          <Swiper />
      </section>

      <hr class="deviderLine">

      <section class="forestillingerIndex">
        <h3 class="heading2">Forestillinger 2024/25</h3>
    <div class="forestillingerList">
      <div v-for="forestilling in forestillinger.slice(0, 4)" :key="forestilling.id" class="forestillingCard cardAnimation">
        <router-link :to="{ name: 'forestilling', params: { id: forestilling.id } }">
          <img :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
          <div class="forestillingText cardAnimationText">
            <p class="forestillingTitle">{{ forestilling.title.rendered }}</p>
            <p class="forestillingDate">{{ forestilling.acf.datestart }} - {{ forestilling.acf.dateend }} </p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="centeredBtn">
      <li><router-link class="buttonType1" to="/forestillinger">Forestillinger</router-link></li>
    </div>
  </section>

  <hr class="deviderLine">

  <div class="schoolsAndParentsSection">
    <h3 class="heading2">For skoler, Instutioner og Forældre</h3>

  <div class="imageContainer">
    <img src="../assets/img/forSkoler.jpg" alt="Stage with audience" class="ImageLeft">
    <div class="textBox schoolInfo">
      <h4>Skoler og institutioner</h4>
      <p>Hos Zeppelin har vi et stærkt fokus på skoleelevers oplevelse og stræber efter at give dem den bedst mulige læring. Er du lærer, kan du finde praktiske oplysninger her.</p>
      <div>

        <a href="#" class="buttonType1">For skoler og institutioner</a>
      </div>
    </div>
  </div>

  <div class="imageContainer">
    <img src="../assets/img/parentsZeppelin.jpg" alt="Audience enjoying a show" class="ImageRight">
    <div class="textBox parentInfo">
      <h4>Forældre</h4>
      <p>Hos Zeppelin har vi et stærkt fokus på skoleelevers oplevelse og stræber efter at give dem den bedst mulige læring. Er du lærer, kan du finde praktiske oplysninger her.</p>
      <a href="#" class="buttonType1">Til børnefamilier</a>
    </div>
  </div>
</div>


  <hr class="deviderLine">
  <section class="pictureGalleri">
  <h3 class="heading2">Følg os på Instagram</h3>
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
<hr class="deviderLine">
<section class="newsLetter">
  <div>
    <h3 class="heading2">FÅ BESKED!</h3>
    <h4>Når der kommer nyt fra os</h4>
  </div>

  <div class="emailForm">
  <input type="email" id="email" placeholder="Skriv din mail.." required>
  <button class="buttonType1" type="submit">Tilmeld</button>
</div>

</section>
</main>
</template>

<script>
import Hero from '../components/Hero.vue';
import Swiper from '../components/Swiper.vue';

export default {
  name: "IndexPage",
  components: {
    Hero,
    Swiper,
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



/* Forestilling cards */
.forestillingerList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.forestillingCard {
  position: relative;
  overflow: hidden;
  width: 90%; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forestillingCard img {
  display: block;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 5px 5px 0 0; 
}

.forestillingText {
  position: absolute;
  bottom: 0;
  width: 100%;
  
  background-color: rgba(30, 30, 30, 0.8);
  padding: 10px 15px;
  text-align: left;
}

.forestillingTitle {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--primary-yellow);
  margin: 0;
}

.forestillingDate {
  font-size: 1rem;
  color: var(--primary-yellow);
  margin: 5px 0 0;
}



.buttonWrapper {
  padding-top: 3rem;
  display: flex;
  gap: 20px;
  justify-content: left; 
  
}

/* skoler og forælder sektion */
.schoolsAndParentsSection {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.imageContainer {
  position: relative;
  width: 100%;
  height: 60vh;
  margin: 0 auto;
}

.imageContainer p {
  padding-bottom: 3rem;
}

.ImageRight {
  display: block;
  width: 60%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.ImageLeft {
  display: block;
  width: 60%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px; 
  position: absolute;
  right: 0; 
}

.textBox {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background-color: var(--primary-blue);
  color: white;
  border-radius: 5px;
  max-width: 400px;
}

.schoolInfo {
  left: 0px;
  width: 100%;
  left: auto;
  padding: 3rem 8rem;

}

.parentInfo {
  right: 0px;
  width: 100%;
  left: auto;
  padding: 3rem 8rem;
}

.textBox h4 {
  margin: 0;
  font-size: 1.6rem;
}

.textBox p {
  margin: 10px 0 0;

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

/* Nyhedsbrev */
.newsLetter {
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;
}

.emailForm {
  gap: 1.5rem;
  display: flex;
  align-items: center;
  width: 50vw;
  padding: 0.5rem;
  border-radius: 5px;

}

.emailForm input {
  width: 70%;
  padding: 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  background: var(--primary-text-dark);
}

.emailForm button {
  padding: 1.5rem 3rem;
  cursor: pointer;
}


@media (max-width: 1200px) {
}

@media (max-width: 1000px) {


.buttonWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }

    .imageContainer {
    position: static; 
    height: auto; 
  }

  .textBox {
    position: static;
    transform: none; 
    top: auto; 
    margin-top: 1rem; 
    width: 100%; 
    max-width: none; 
  }

  .ImageRight,
  .ImageLeft {
    width: 100%; 
    height: 60vh; 
    position: static; 
  }

  .schoolsAndParentsSection {
    flex-direction: column; 
    gap: 2rem;


  }

  .schoolInfo {
  left: auto;
  padding: 3rem 0;

}

.schoolInfo p, .schoolInfo h4, .parentInfo p, .parentInfo h4 {
  padding-left: 2rem;
  padding-right: 2rem;

}
.schoolInfo a, .parentInfo a  {
  margin: 2rem;
}

.parentInfo {
  right: 0px;
  width: 100%;
  left: auto;
  padding: 3rem 0;
}



}

@media (max-width: 800px) {
  .forestillingerList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.forestillingCard {
  width: 100%;
}

.newsLetter {
  flex-direction: column;
  align-items: center;
}

.emailForm button {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.emailForm input {
  padding: 0.75rem ;

}
}

@media (max-width: 600px) {
  .emailForm {
    flex-direction: column;
  }
  .emailForm {
    width: 100%;
  }

    .forestillingerList {
  grid-template-columns: repeat(1, 1fr);
    }

    .indexInstagramGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .indexInstagramGrid a:nth-of-type(1) {
    grid-column: span 2;
    grid-row: span 1;    
  }

  .indexInstagramGrid a:nth-of-type(n+2) {
    grid-column: span 1; 
    grid-row: span 1;   
  }






}

@media (max-width: 400px) {
}








</style>