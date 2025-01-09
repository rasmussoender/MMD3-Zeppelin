<template>
    <div>
      <SmallHero 
        :heroImage="'img/herobilledeZeppelin.jpg'"
        :heroTitle="'Info til besøgende'"
      />
    </div>

    <main class="localNavSection">
      <aside class="LocalNav">
      <ul>
        <li><a href="#adresse">Adresse & Åbning</a></li>
        <li><a href="#offentlig">Offentlig transport</a></li>
        <li><a href="#parkering">Parkering</a></li>
        <li><a href="#salen">Forhold i Salen</a></li>
        <li><a href="#mad">Mad & Drikke</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </aside>

      <section>

        <div class="mediaTextSection">
          <div  id="adresse">
            <h3 class="heading2">Adresse & Åbning </h3>
            <h4>Zeppelin Teater</h4>
            <h5>Valdemarsgade 15</h5>
            <h5>1665 København V.</h5>
            <p>
              Teatret åbner 1 time før forestillingens start i weekender og en halv time før på hverdage. Når du ankommer, henvender du dig ved skranken i forhallen, hvor du også kan købe billet, hvis du ikke allerede har købt.
            </p>
          </div>
          <iframe class="googleMapsSection" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4500.077409422795!2d12.546233812016!3d55.67092709818263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652539fda9ac7c9%3A0xc7295b209eea95d2!2sValdemarsgade%2015%2C%201665%20K%C3%B8benhavn%2C%20Danmark!5e0!3m2!1sda!2sus!4v1736365263101!5m2!1sda!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr class="deviderLine">

        <div class="mediaTextSection">
          <img src="../assets/img/offentligTransport.jpg" alt="">

          <div id="offentlig">
            <h3 class="heading2">Offentlig transport</h3>
            <h4>Bus:</h4>
            <p>
              Følgende busser  har stoppesteder tæt på teatret
              Bus 10: EnghavevejBus 71: KingosgadeBus 1A og 23: Enghave st.Bus 7A: Værnedamsvej
            </p>
            <h4>Tog:</h4>
            <p>
              Det tager ca. et kvarter at gå fra Københavns Hovedbanegård og hen til teatret.
            </p>


          </div>
        </div>
        <hr class="deviderLine">

        <div class="mediaTextSection">
          <div id="parkering">
            <h3 class="heading2">Parkering</h3>
            <p>
              Det kan være svært at finde P-pladser i København, så vi opfordrer alle gæster i bil til at være på Vesterbro i god tid for at finde en P-plads.
            </p>
            <p>Det kan være svært at finde P-pladser i København, så vi opfordrer alle gæster i bil til at være på Vesterbro i god tid for at finde en P-plads.
            </p>
            <p>Nærmeste P-hus er Matthæusgade 46A, som har åbent alle dage 6:00-22:00.
            </p>
          </div>
          <img src="../assets/img/parkering.jpg" alt="">
        </div>
        <hr class="deviderLine">

        <div class="mediaTextSection">
          <img src="../assets/img/salen2019.jpg" alt="">

          <div id="salen">
            <h3 class="heading2">Forhold i Salen</h3>
            <p>
              Alle pladser i salen er unummererede.
              Vi har ingen elevator, men hjælper gerne mindre børn i kørestole op i salen. Større børn og voksne skal have handicaphjælper med. Ring i forvejen for nærmere aftale om det praktiske.

            </p>
            <p>Mad og drikkevarer må ikke medbringes i salen.
              Fotografering og videooptagelse under forestillingen er ikke tilladt.
              Husk at slukke mobilen og andet udstyr med lyd.
            </p>
            <p>Der kan anvendes stroboskoplys og kunstig røg/ild i forestillingerne. Ring for info om den specifikke forestilling.</p>
          </div>
        </div>
        <hr class="deviderLine">

        <div class="mediaTextSection">
          <div id="mad">
            <h3 class="heading2">Mad & Drikke</h3>
            <p>
              Teatret Zeppelins café hedder Kaféen. Den ligger på 3. sal øverst oppe i vores charmerende teaterhus. 
              Vi har et udvalg af sodavand, kakao, te og kaffe samt øl og vin. Trænger du til noget sødt, sælger vi både slik og chokolade. 
            </p>
            <p>Du kan betale med kontanter og Mobilepay i Kaféen (ingen dankort).Man må ikke medbringe mad/drikke/slik/snacks i teatersalen.
            </p>
          </div>
          <img src="../assets/img/madcafe.jpg" alt="">
        </div>
        <hr class="deviderLine">


        <div class="accordion" id="faq">
        <h3 class="heading2">Ofte stillede spørgsmål</h3>
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

  

      </section>
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
      openIndex: null, 
      items: [
        { question: "Må jeg selv medbringe mad?", answer: "...." },
        { question: "Kan man købe mad?", answer: "...." },
        {
          question: "Må man bruge sin telefon under forestillingerne?",
          answer:
            "For at skabe den bedst mulige oplevelse for alle gæster og for at respektere skuespillerne på scenen, er det ikke tilladt at bruge sin mobil under forestillingen. Vi beder dig derfor om at sætte din telefon på lydløs og undgå at tage den frem, så alle kan nyde forestillingen uden forstyrrelser.",
        },
        { question: "Kan jeg retunere/bytte mine billetter?", answer: "...." },
        { question: "...", answer: "..." },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
    </script>
    
    <style scoped>

  .localNavSection {
    display: flex;
    gap: 4rem; 
  }
    .LocalNav {

      position: sticky;
      top: 8rem; 
      margin-top: 2rem; 
      align-self: start; 
      width: 60%; 
      background: #f0f0f0; 
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
    
    .LocalNav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .LocalNav li {
      margin-bottom: 1rem;
    }
    
    .LocalNav a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
    
    .LocalNav a:hover {
      color: var(--primary-yellow); 
    }

     .googleMapsSection {
      width: 150%;
      border: none;
    }
    


    
    </style>
    