<template>
    <div>
            <!-- Small hero component hentes info ændres -->
      <SmallHero 
        :heroImage="'img/Kor.jpg'"
        :heroTitle="'Kor'"
      />
    </div>

    <main>
      <section>
        <p class="introText">Teatret har to kor: Familiekoret og Kvindekoret – måske et af dem lige er sagen for dig/jer? Der er ingen krav til niveau og erfaring. I skal bare have lysten til at synge sammen! Læs mere om de to kor herunder. .</p>
        <hr class="deviderLine">

        <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Zeppelins familiekor</h3>
            <h4>Nyt semester starter d.22-1.25</h4>
            <p>
              Børn og voksne synger sammen – en skøn og anderledes familie-/venneaktivitet! 
              For alle fra 6 år.
              Et Vesterbro-kor med en helt unik sammensætning af børn, unge og voksne fra 6 år. En skøn aktivitet at være fælles om barn og voksen imellem. Ta’ din ven, søn/datter, mor/far, bedstemor/bedstefar, nabo, onkel/tante i hånden, og kom og oplev det unikke fællesskab, der opstår ved fællessang!
              
              Vi glæder os til at tage hul på det nye korsemester i 2025 med ‘gamle’ såvel som med nye medlemmer. Meld jer til!
              Prøv det gratis den første korgang den 22.1.25 kl. 17:00-18:00, og se, om det er noget for jer.
            </p>
          </div>
          <video controls>
          <source src="../assets/img/zeppelinFamiliekor.mp4" type="video/mp4" />
          Din browser supporter ikke denne video
        </video>
            
        </div>

        <hr class="deviderLine"></hr>

        <div class="mediaTextSection">
          <video controls>
          <source src="../assets/img/zeppelinKvindekor.mp4" type="video/mp4" />
          Din browser supporter ikke denne video
        </video>

          <div>
            <h3 class="heading2">Zeppelins Kvindekor</h3>
            <h4>Nyt semester starter d. 22 Januar</h4>
            <p>
              Kom og syng sammen med andre! Du er ikke nødvendigvis øvet i korsang, men har lysten til et inspirerende fællesskab med sange i alle afskygninger.

              Zeppelins kvindekor blev oprettet i 2020 på opfordring af tidligere kormedlemmer i familiekoret. De var blevet så begejstret for at synge i kor, at de kom med den gode ide at oprette et voksenkor. 

              Det blev til Kvindekoret, som vækkede stor genklang for både de ‘gamle’ familiekormedlemmer og nye sangglade medlemmer.

              Vi synger både én- og flerstemmigt, lytter og afprøver mange genrer. Det skal frem for alt være sjovt og hyggeligt – og lyde godt!
            </p>
          </div>
        </div>

        
      </section>
      <hr class="deviderLine"></hr>

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
      // Alle accordions er lukkede som default
      openIndex: null, 
      // En liste med objekter hvor svar og spørgsmål defineres
      items: [
        { question: "Hvordan melder man sig til?", answer: " skriv en mail til asker@zeppelin.dk – skriv hvem du/I er, og hvor mange, du vil melde til." },
        { question: "Hvad koster det at være med i korene?", answer: "kursusprisen er 600 kr. for voksne og 500 kr. for børn for ét semester på hele 14 korgange. Bemærk, at det er langt under “markedsprisen”. Deadline for betaling for 2. korsemester er d.10.1.25. For nye medlemmer der ønsker en gratis prøvegang d.22.1. er betalingsdeadline d.23.1." },
        {
          question: "Hvor foregår det?",
          answer:
            "For at skabe den bedst mulige oplevelse for alle gæster og for at respektere skuespillerne på scenen, er det ikke tilladt at bruge sin mobil under forestillingen. Vi beder dig derfor om at sætte din telefon på lydløs og undgå at tage den frem, så alle kan nyde forestillingen uden forstyrrelser.",
        },
        { question: "Medlemsrabat på teaterbilletter?", answer: "Medlemmer af Zeppelins familiekor og kvindekor betaler kun 40 kr. for billetter til Teatret Zeppelins egne forestillinger (ledsagere til kormedlemmer betaler fuld pris)." },
        { question: "Hvilke tidspunkter tager det sted?", answer: "Vi øver onsdage kl. 18.30-20.00." },
      ],
    };
  },
  // bruges til at skifte mellem at åbne og lukke en bestemt item i en liste. Såkun en kann være åben af gangen
  methods: {
    toggleItem(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
    </script>
    
    <style scoped>


    </style>
    