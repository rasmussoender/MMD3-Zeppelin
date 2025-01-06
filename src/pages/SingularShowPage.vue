<template>
  <section class="enkelForestilling">
    <div v-if="forestilling">
      <header class="heroForestilling">
        <img class="heroForestillingImage" :src="forestilling.acf.image.url" :alt="forestilling.title.rendered" />
        <h1 class="heroForestillingTitle">{{ forestilling.title.rendered }}</h1>
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
          <i class="fa-solid fa-quote-left"></i>
          <p>Oplagt begynderforestilling, der kan give appetit på mere hos det yngste publikum. Det er vel svært at finde bedre børneteater til denne aldersgruppe og det fortjener Teater Next stor ros for at satse på</p>
          <h5>- Set på Scenen</h5>
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
          console.error("Error fetching show data:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>


/* Hero section styles */
.heroForestilling {
  position: relative;
  height: 80vh; 
  overflow: hidden;
}

.heroForestillingImage {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  position: absolute;
  top: 0;
  left: 0;
}

.heroForestillingTitle {
  position: absolute;
  text-transform: uppercase;
  top: 80%;
  left: 80%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 6rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 1; 
}

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

.reviewSection {
  margin-top: 2rem;
  padding-top: 2rem;
  padding-left: 20rem;
  padding-right: 20rem;
  padding-bottom: 2rem;
  background: #176C76;
  color: white;
  border-radius: 5px;

}

.reviewSection i {
  font-size: 3rem;
  padding-bottom: 1rem;
}

  </style>
  