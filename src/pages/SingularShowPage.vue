<template>
  <section class="enkelForestilling">
    <!-- For looper for forestillinger, og mange af elementer er dynamiske -->
    <div v-if="forestilling">
      <header class="singularPageHero">
        <img class="singularPageHeroImage" :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
        <h1 class="singularPageHeroTitle">{{ forestilling.title.rendered }}</h1>
      </header>

      <main>
        <div class="introIcons">
          <div>
            <i class="fa-solid fa-calendar-days"></i>
            <p>{{ forestilling.acf.datestart }} - {{ forestilling.acf.dateend }} </p>
          </div>
          
          <div>
            <i class="fa-solid fa-money-bill-wave"></i>
            <p>{{ forestilling.acf.price }} kr.</p>
          </div>
          
          <div>
            <i class="fa-solid fa-clock"></i>

            <p>{{ forestilling.acf.time }} min</p>
          </div>
          
          <div>
            <i class="fa-solid fa-users"></i>
            <p>{{ forestilling.acf.age }} år</p>
          </div>
        </div>
        <hr class="deviderLine">
        <section class="textCalenderSection">
          <div class="calenderImageContainer">

            <img :src="forestilling.acf.calenderplaceholder" alt="">
          </div>
          <div>
            <h2 class="title">{{ forestilling.title.rendered }}</h2>
            <h3 class="subtitle">{{ forestilling.acf.forestillingsubtitle }}</h3>
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
    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson1.personpicture1 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson1.personname1 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson1.personrole1 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson2.personpicture2 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson2.personname2 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson2.personrole2 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson3.personpicture3 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson3.personname3 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson3.personrole3 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson4.personpicture4 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson4.personname4 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson4.personrole4 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson5.personpicture5 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson5.personname5 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson5.personrole5 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson6.personpicture6 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson6.personname6 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson6.personrole6 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson7.personpicture7 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson7.personname7 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson7.personrole7 }}</p>
    </div>

    <div>
      <img :src="forestilling.acf.ensemble.ensembleperson8.personnpicture8 || '/img/placeholderPerson.jpg'" alt="">
      <h4>{{ forestilling.acf.ensemble.ensembleperson8.personname8 }}</h4>
      <p>{{ forestilling.acf.ensemble.ensembleperson8.personrole8 }}</p>
    </div>
  </div>
</section>


      <div class="indexInstagramContainer">
        <h3 class="heading2">Billeder fra teatret</h3>

        <div class="indexInstagramGrid">
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage1 || '/img/ZeppelinOm1.jpg'" 
      alt="">
  </div>
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage2 || '/img/galleriPlaceholder.jpg'" 
      alt="">
  </div>
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage3 || '/img/galleriPlaceholder3.jpg'" 
      alt="">
  </div>
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage4 || '/img/galleriplacerholder2.jpg'" 
      alt="">
  </div>
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage5 || '/img/ZeppelinOm5.jpg'" 
      alt="">
  </div>
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage6 || '/img/ZeppelinOm6.jpg'" 
      alt="">
  </div>
  <div class="imageContainer">
    <img 
      :src="forestilling.acf.galleri.galleriimage7 || '/img/ZeppelinOm7.jpg'" 
      alt="">
  </div>
</div>

          </div>

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
        // Her hentes det info fra det specikke id for det post der er blevet trykket på.
        //  this.$route.params indeholder dynamiske routes
      async fetchForestillingData() {
        const id = this.$route.params.id; 
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          // sørger for, at koden venter på, at JSON data er hentet, før den går videre.
          const data = await response.json();
          // De hentede data bliver gemt i variablen  Forstilling
          this.forestilling = data; 
          // Logger fejl i konsol
        } catch (error) {
          console.error("Der opstod en fejl!", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>



/* Content section */
.heading2 {
  padding-top: 2rem;
}
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

.calenderImageContainer {
  max-height: 60vh;
  object-fit: cover;
}
.calenderImageContainer img {
  height: 100%;
  width: 35vw;
  object-fit: cover;
}

/* Ensemble sektion */
.ensembleContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.ensembleContainer div {
  padding: 1rem;
}

.ensembleSection {
  position: relative;
  width: 100%;
}

.ensembleSection img {
  top: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 5px;
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
  padding-top: 1rem;
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



@media (max-width: 1000px) {
  .reviewSection {
  padding-left: 10rem;
  padding-right: 10rem;

}

.ensembleContainer {
  grid-template-columns: repeat(3, 1fr);
}


}

@media (max-width: 800px) {
  .textCalenderSection {
    flex-direction: column;
    padding-bottom: 2rem;
  }

  .calenderImageContainer {
  max-height: 100%;
}
.calenderImageContainer img {
  width: 100%;
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

.ensembleContainer {
  grid-template-columns: repeat(2, 1fr);
  
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

.ensembleContainer {
  grid-template-columns: repeat(1, 1fr);
}

}

  </style>
  