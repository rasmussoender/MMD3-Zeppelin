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
            <p>{{ forestilling.acf.review.reviewtext }}</p>
            <h5>- {{ forestilling.acf.review.author }}</h5>
          </div>
        </section>

        <section class="ensembleSection">
  <h3 class="heading2">Ensemble</h3>
  <div class="ensembleContainer">
    <div v-for="([key, person], index) in Object.entries(forestilling.acf.ensemble.ensembleperson)" :key="index">
      <img :src="person.personpicture || '../assets/img/placeholderPerson.jpg'" />
      <h4>{{ person.personname }}</h4>
      <p>{{ person.personrole }}</p>
    </div>
  </div>
</section>


          <section class="pictureGalleri">
      <h3 class="heading2">Galleri fra forestillingen</h3>
      <div class="indexInstagramGrid">
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm1.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm2.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm3.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm4.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm5.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm6.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm7.jpg" alt="">
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
          console.log(this.forestilling.acf.ensemble.ensembleperson); 

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

.indexInstagramGrid:nth-of-type(1) {
  padding-bottom: 1rem;
}

.indexInstagramGrid div {
  width: 100%;
  height: 15rem;
}

.indexInstagramGrid div img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.indexInstagramGrid div:nth-of-type(1) {
  grid-column: span 2; 
  grid-row: span 2;    
  height: 31rem;

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


@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .reviewSection {
  padding-left: 10rem;
  padding-right: 10rem;

}
  


}

@media (max-width: 800px) {
  .textCalenderSection {
    flex-direction: column;
    padding-bottom: 2rem;
  }

  .textCalenderSection img {

    width: 100%;
  }

}

@media (max-width: 600px) {
  .reviewSection {
  padding-left: 5rem;
  padding-right: 5rem;

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
  .reviewSection {
  padding-left: 2rem;
  padding-right: 2rem;

}

}




  </style>
  