<template>
    <div>
      <!-- Henter small hero -->
      <SmallHero 
        :heroImage="'img/skolerFor.jpg'"
        :heroTitle="'For Skoler'"
      />
    </div>

    <main>
      <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Info til skoler og instutioner</h3>
            <p>
              For jer, der skal på skoleudflugt til Teatret Zeppelin, er her nogle nyttige oplysninger. Her kan du finde svar på eventuelle spørgsmål, du måtte have i forbindelse med din skoles besøg på Teatret Zeppelin.
            </p>
            <p> Ring endelig til os på tlf. 33220478, hvis du ikke finder det, du søger. Generel praktisk info for almindelige besøgende har vi samlet på
            </p>
          </div>
          <img src="../assets/img/eleverBillede.jpg" alt="">
        </div>

        <hr class="deviderLine">

        <h2 class="heading2">Workshops</h2>
        <p class="workshopIntroText">Vi har mange års erfaring med dramaundervisning og tilbyder flere former for teaterrelaterede aktiviteter som workshops, dramaforløb, projektudvikling og meget andet – hos os eller hos jer, og i åbenhed over for jeres temaer og idéer. </p>
      <div class="workshopList">
           <!-- v for loop som henter de første 3 workshops i arrayet -->

        <div 
          v-for="workshop in workshops.slice(0, 3)" 
          :key="workshop.id" 
          class="workshopCard cardAnimation"
        >
          <router-link :to="{ name: 'workshop', params: { id: workshop.id } }">
            <!-- Henter dynamisk forskellige elementer fra WP -->
            <img :src="workshop.acf.image.url" :alt="workshop.title.rendered" />
            <div class="workshopText cardAnimationText">
              <p class="workshopTitle">{{ workshop.title.rendered }}</p>
            </div>
          </router-link>
        </div>
      </div>
        
      <div class="centeredBtn">
      <li><router-link class="buttonType1" to="/workshops">Alle Workshops</router-link></li>
    </div>

    <hr class="deviderLine">

    <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Forbered dine elever</h3>
            <p>
              Ankom i god tid, så der er tid til at finde pladser og skabe ro før forestillingen. Orientér jer i salen – fx døre og trin – og placer jer strategisk, hvis nogen skulle have brug for at træde ud undervejs.
            </p>
            <h3 class="heading2">Efter forestillingen</h3>
            <p>Diskutér forestillingen sammen. Hvordan stemte den overens med forventningerne? Hvordan blev lys, lyd og temaer brugt? Hvis det er muligt, kan I hilse på skuespillerne for at få indblik i arbejdet bag forestillingen.</p>

          </div>
          <img src="../assets/img/kidsTheatre.jpg" alt="">
        </div>

        <div class="mediaTextSection">
          <img src="../assets/img/PeopleWatchingTheatre.jpg" alt="">

          <div>
            <h3 class="heading2">Skab forståelse for teateroplevelsen</h3>
            <p>
              Teater kan være en stærk og intens oplevelse, selv for ældre elever. Tal med eleverne om, hvordan teater adskiller sig fra andre medier som film og bøger. Gennemgå virkemidler som lys, lyd, skuespil og scenografi, så de er forberedte på de indtryk, de kan møde.
            </p>
            <h3 class="heading2">Forstå forestillingens temaer</h3>
            <p>Læs forestillingens beskrivelse og tal om de temaer, den berører. Hvis forestillingen bygger på en velkendt historie, kan I diskutere den på forhånd. Det kan hjælpe eleverne med at reflektere over, hvad de kan forvente, og forberede dem på de emner, der behandles.</p>

          </div>
        </div>

        <hr class="deviderLine">

        <section class="educationMaterialCards">
          <h2 class="heading2">Undervisningsmateriale</h2>
          <p class="workshopIntroText">Professionelt udarbejdet undervisningsmateriale til Zeppelins egenproduktioner kan downloades gratis. Materialet er udviklet efter folkeskolens gældende trinmål.</p>
          <div class="educationMaterialList">

          <a href="https://zeppelin.dk/wp-content/uploads/2023/05/TeatretZeppelin_TOVE_Undervisningsmateriale_V1_web.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard cardAnimation">
              <img src="../assets/img/toveZeppelin.jpg" alt="" />
              <div class="educationMaterialText cardAnimationText">
                <p class="educationMaterialTitle">Tove</p> 
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2023/01/Undervisningsmateriale-Maelkeboettereglementet-version-S27-01-2023.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard cardAnimation">
              <img src="../assets/img/maelkeboetteZeppelin.jpg" alt="" />
              <div class="educationMaterialText cardAnimationText">
                <p class="educationMaterialTitle">MÆLKEBØTTEREGLEMENTET</p>
              </div>
            </div>  
          </a>  
          <a href="https://zeppelin.dk/wp-content/uploads/2022/01/UV-materiale_Mio_2022_web.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard cardAnimation">
              <img src="../assets/img/mioMioZeppelin.jpg" alt="" />
              <div class="educationMaterialText cardAnimationText">
                <p class="educationMaterialTitle">Mio, Min Mio</p>
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2014/07/Skolemat.-Frost-2019.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard cardAnimation">
              <img src="../assets/img/frostBrodreZeppelin.jpg" alt="" />
              <div class="educationMaterialText cardAnimationText">
                <p class="educationMaterialTitle">Frostbrødre</p>
              </div>
            </div>  
          </a>  
          </div>
          <div class="centeredBtn">
      <li><router-link class="buttonType1" to="/undervisningsmateriale">Alt Undervisningsmateriale</router-link></li>
    </div>

        </section>

        <hr class="deviderLine">

        <div class="accordion">
        <h3 class="heading2">Ofte stillede spørgsmål</h3>
        <!-- for loop, der går gennem en liste af spørgsmål og svar, som defineres i script -->
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordionItem"
      >
        <div
          class="accordionClosed"
          @click="toggleItem(index)"
        >
          <span>{{ item.question }}</span>

            <!-- Pilen roteres når accordion trykkes på -->
          <i
            class="fa-solid fa-angle-down"
            :class="{ rotatedArrow: openIndex === index }"
          ></i>
        </div>
        <div
          v-show="openIndex === index"
          class="accordionOpen"
        >
          <p>{{ item.answer }}</p>
        </div>
  </div>
</div>


    </main>
    </template>
    
    <script>
import SmallHero from "../components/SmallHero.vue";

export default {
  components: {
    SmallHero,
  },
  
  data() {
    return {
      workshops: [],
      // Alle accordions er lukkede som default
      openIndex: null,
      // En liste med objekter hvor svar og spørgsmål defineres
      items: [
        { question: "Hvordan bestiller vi billetter til skoleklasser?", answer: "Skoleklasser får billetter til 40 kr. pr. elev, og den samme lave pris gælder for de medfølgende lærere. Vi anbefaler, at I ringer til os på 33220478 og bestiller billetter for at sikre, at I får lærerrabatten med. En skoleudflugt til Teatret Zeppelin er ikke en dyr fornøjelse." },
        { question: "Hvad gør vi, hvis vi bliver forsinkede til forestillingen?", answer: "Det er vigtigt, at teatret bliver informeret, hvis jeres klasse bliver forsinket eller forhindret, så vi ikke opholder andre klasser unødigt. Det er ligeledes vigtigt, at vi kan kontakte jer på dagen, og I bedes derfor have en tændt telefon med jer og sørge for, at det er nummeret på den telefon, som I opgiver ved bestilling." },
        {
          question: "Er det nødvendigt at medbringe billetter på papir?",
          answer:
            "I skal IKKE printe billetter ud. Medbring i stedet jeres betalte faktura eller ordrebekræftelse, og fremvis den. Vi fremsender ikke billetter til større grupper og skoleklasse, men sparer papiret.",
        },
        { question: "Skal jeg forberede min elever?", answer: "Det kan være en stor og måske overvældende oplevelse at være i teatret. Derfor er det vigtigt at forberede eleverne godt, inden besøget. " },
        { question: "Tilbyder Teatret Zeppelin rundvisninger eller oplæg?", answer: "For studerende på lærerseminariet, pædagoguddannelen, kulturstudiefag e.l. kan vi efter aftale arrangere et kort oplæg og efterfølgende Q&A ved fagperson, f.eks. en fra teatrets ledelse. Til det yngre publikum fra skoler og institutioner o.l. har vi sommetider haft fornøjelsen af at give en rundvisning bagom scenen i mindre grupper. Hvis lignende kunne være noget for jer, så kontakt os, og vi vil forsøge at skræddersy et gratis oplæg, som er relevant for netop jer." }, 
        
      ],
    };
  },
  mounted() {
    this.fetchWorkshops();
  },
  methods: {
    async fetchWorkshops() {
      try {
        const response = await fetch('https://zeppelin-teater.rasmuspedersen.net/wp-json/wp/v2/posts?categories=5'); 
        const data = await response.json();
        this.workshops = data;
      } catch (error) {
        console.error("Der opstod en fejl!", error);
      }
    },
      // bruges til at skifte mellem at åbne og lukke en bestemt item i en liste. Såkun en kann være åben af gangen
    toggleItem(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};

    </script>
    
    <style scoped>

  /* Workshop cards */
  .workshopList {
    padding-top: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center; 
    gap: 2rem;
    padding-top: 2rem;

  }
  .workshopCard {
    position: relative;
    overflow: hidden;
    width: 100%; 
    height: 50vh;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .workshopCard img {
    display: block;
    width: 100%;
    height: 100%; 
    object-fit: cover; 
    border-radius: 5px 5px 0 0;  
  }

  .workshopText {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(30, 30, 30, 0.8);
    padding-top: 1rem;
    padding-bottom: 1rem;  
  }

  .workshopTitle {
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary-yellow);
    margin: 0;
  }

  .workshopIntroText {
    width: 50%;
  }

  .educationMaterialList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-top: 2rem;
}
.educationMaterialCard {
  position: relative;
  overflow: hidden;
  width: 100%; 
  height: 50vh;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.educationMaterialCard img {
  display: block;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  border-radius: 5px 5px 0 0; 
}

.educationMaterialText {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.8);
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.educationMaterialTitle {
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  color: var(--primary-yellow);
}


@media (max-width: 1000px) {
  .educationMaterialList {
  grid-template-columns: repeat(2, 1fr);

}

}

@media (max-width: 800px) {

  .workshopList {

grid-template-columns: repeat(1, 1fr);

}
  .educationMaterialList {
grid-template-columns: repeat(2, 1fr);

}

}

@media (max-width: 600px) {
  .educationMaterialList {

grid-template-columns: repeat(1, 1fr);

}


}



  
  
    </style>
    