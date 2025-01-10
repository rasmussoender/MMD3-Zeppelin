<template>
        <section class="singularWorkshop">
      <div v-if="workshop">
        <header class="singularPageHero">
          <img class="singularPageHeroImage" :src="workshop.acf.image.url" :alt="workshop.title.rendered" />
          <h1 class="singularPageHeroTitle">{{ workshop.title.rendered }}</h1>
        </header>

        <main>
            <div class="introIcons">
          <div>
            <i class="fa-solid fa-user-graduate"></i>
            <p>{{ workshop.acf.subject }}</p>
          </div>
          
          <div>
            <i class="fa-solid fa-clock"></i>
            <p> {{ workshop.acf.time }} timer</p>
          </div>
          
          <div>
            <i class="fa-solid fa-money-bill-wave"></i>
            <p>{{ workshop.acf.price }} </p>
          </div>
          
          <div>
            <i class="fa-solid fa-users"></i>
            <p>{{ workshop.acf.class }} </p>
          </div>
        </div>
        <hr class="deviderLine">

        <section class="workshopSection">
        <div class="workshopTextSection">
            <h2 class="heading2">{{ workshop.acf.title }}</h2>
            <h3>{{ workshop.acf.subtitle }}</h3>
            <p>
                {{ workshop.acf.breadtext }}
            </p>
        </div>
        <div class="workshopContact">
            <h4>Kontakt & Booking</h4>
            <img src="../assets/img/mieZeppelin.jpg" alt="">
            <h5>Mie Brandt</h5>
            <p>Kunstnerisk leder</p>
            <p><a href="mailto:mie@zeppelin.dk">mie@zeppelin.dk</a></p>



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
        workshop: null,
      };
    },
    mounted() {
      this.fetchWorkshopData();
    },
    methods: {
      async fetchWorkshopData() {
        // Her hentes det info fra det specikke id for det post der er blevet trykket på.
        //  this.$route.params indeholder dynamiske routes
        const id = this.$route.params.id;
        try {
          const response = await fetch(`https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts/${id}`);
          // sørger for, at koden venter på, at JSON data er hentet, før den går videre.
          const data = await response.json();
          // De hentede data bliver gemt i variablen  workshop
          this.workshop = data;
        } catch (error) {
          // Logger fejl i konsol
          console.error("Error fetching workshop data:", error);
        }
      },
    },
  };
  </script>

  <style scoped>


/* icon section */
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

.workshopSection {
    display: flex;
    gap: 15rem;
}

.workshopTextSection {
    width: 100%;
}

.workshopContact {
    background: var(--primary-blue);
    padding: 2rem;
    color: white;
    text-align: center;
    width: 30%;
    border-radius: 5px;
}

.workshopContact img {
    border-radius: 50%;
    width: 10rem; 
    height: 10rem;
    object-fit: cover; 
    margin-bottom: 0;
}

.workshopContact a {
    color: var(--primary-yellow);
}

.workshopContact h4 {
    font-size: 1.3rem;
}

.workshopContact h5 {
    font-size: 1.3rem;
    margin-bottom: 0;
    margin-top: 1rem ;
}


@media (max-width: 1200px) {
  .workshopContact {
    width: 35%;
    justify-content: center;
    align-items: center;
}

}

@media (max-width: 1000px) {
  .workshopSection {
    gap: 8em;
}

.workshopTextSection {
  width: 100%;
}

}

@media (max-width: 800px) {
  .workshopSection {
  flex-direction: column;
  gap: 2rem;
  
}

.workshopContact {
    width: 100%;
    padding: 0rem;


}


}


</style>