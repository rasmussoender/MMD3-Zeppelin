<template>
  <section class="enkelForestilling">
    <div v-if="forestilling">
      <header class="singularPageHero">
        <img class="singularPageHeroImage" :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
        <h1 class="singularPageHeroTitle">{{ forestilling.title.rendered }}</h1>
      </header>

      <main>
        <div class="introIcons">
          <div>
            <i class="fa-solid fa-calendar-days"></i>
            <p>{{ forestilling.acf.date }}</p>
          </div>
          
          <div>
            <i class="fa-solid fa-clock"></i>
            <p>{{ forestilling.acf.price }} kr.</p>
          </div>
          
          <div>
            <i class="fa-solid fa-money-bill-wave"></i>
            <p>{{ forestilling.acf.time }} min</p>
          </div>
          
          <div>
            <i class="fa-solid fa-users"></i>
            <p>{{ forestilling.acf.age }} år</p>
          </div>
        </div>
        <hr class="deviderLine">
        <section class="textCalenderSection">
          <img src="../assets/img/kalenderPlaceholder.png" alt="">
          <div>
            <h2 class="title">{{ forestilling.title.rendered }}</h2>
            <h3 class="subtitle">Hjertevarm, sanselig og musikalsk forestilling for børn fra 2 til 5 år.</h3>
            <p class="description">{{ forestilling.acf.description }}</p>
            <a :href="forestilling.acf.ticketurl" target="_blank" class="buttonType1">Køb billet</a>
          </div>
        </section>

        <section class="reviewSection" >
          <div>

            <i class="fa-solid fa-quote-left"></i>
            <p>Oplagt begynderforestilling, der kan give appetit på mere hos det yngste publikum. Det er vel svært at finde bedre børneteater til denne aldersgruppe og det fortjener Teater Next stor ros for at satse på</p>
            <h5>- Set på Scenen</h5>
          </div>
        </section>

        <section class="ensembleSection">
          <h3 class="heading2">Ensemble</h3>
          <div class="ensembleContainer">
            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Sara Line Møller Olsen</h4>
              <p>Medvirkende</p>
            </div>
            
            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Sara Line Møller Olsen</h4>
              <p>Medvirkende</p>
            </div>
            
            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Sara Line Møller Olsen</h4>
              <p>Medvirkende</p>
            </div>
            
            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Sara Line Møller Olsen</h4>
              <p>Medvirkende</p>
            </div>
            
            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Sara Line Møller Olsen</h4>
              <p>Medvirkende</p>
            </div>
          </div>
          </section>

          <section class="pictureGalleri">
      <h3 class="heading2">Galleri fra forestillingen</h3>
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
          console.error("Der opstod en fejl!", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>



/* Content section */
.introIcons {
  display: flex;
  justify-content: space-around;
}

.introIcons div {
  display: flex;
  align-items: center; 
  justify-content: center; 
  flex-direction: column; 
  text-align: center;
}

.introIcons div i {
  font-size: 2rem; 
  margin-bottom: 20px; 
  color: var(--primary-blue);
}




.description {
  padding-bottom: 4rem;
}

.textCalenderSection {
  display: flex;
  gap: 2rem;
}

.textCalenderSection img {
  width: 50%;
}

/* Ensemble sektion */
.ensembleContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

}

.ensembleContainer  div {
  padding: 1rem;
}

.ensembleSection img {
  width: 100%;
  object-fit: contain;
  height: auto;
}

.ensembleSection h4, .ensembleSection p {
  text-align: center;
}

/* Galleri */
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

.reviewSection {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-left: 20rem;
  padding-right: 20rem;
  padding-bottom: 2rem;
  background: #176C76;
  color: white;
  border-radius: 5px;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: left; 
}

.reviewSection i {
  font-size: 3rem;
  padding-bottom: 1rem;
}

.reviewSection div {
  padding-top: 2rem;
}



  </style>
  