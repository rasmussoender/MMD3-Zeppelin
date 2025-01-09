<template>
    <div>
      <SmallHero 
        :heroImage="'img/herobilledeZeppelin.jpg'"
        :heroTitle="'Om os'"
      />
    </div>

    <main>


        <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Hvem er vi?</h3>
            <p>
              Teatret Zeppelin er ikke bare et børneteater. Det er underholdning med dybde for børn og deres voksne. Det er teater med kant i store opsætninger med smæk på effekterne, men med intimiteten bevaret. Her kan du året rundt opleve forestillinger for hele familien og for børn i skolealderen i særdeleshed.
            </p>
            <p>Vi viser forestillinger for børn helt ned til 2 år, for de lidt større børn, for unge og for voksne. Vi har særlig erfaring med skoler, så skal klassen i teatret, er Zeppelin også et oplagt valg!
            Teatret Zeppelins forestillinger taler op til børn, ikke ned. Der er altid en filosofisk dybde tilpasset målgruppen, og der sås frø til gode og dybe snakke om at være menneske i evig udvikling. Vi er mere teater for børn end børneteater, som vi plejer at sige.
            Du finder os i Valdemarsgade 15 i hjertet af Vesterbro i København. Her har vi boet i vores charmerende teaterhus med egen café siden 1994.
            </p>
          </div>
          <video controls>
          <source src="../assets/img/aboutUsZeppelin.mp4" type="video/mp4" />
          Din browser supporter ikke denne video
        </video>
        </div>
        <hr class="deviderLine">

        <section class="zeppelinsHusSection">
        <h3 class="heading2">Zeppelins hus</h3>
        <div class="introIcons">
          <div>
            <i class="fa-solid fa-chair"></i>
            <p>Siddepladser: 170</p>
          </div>
          
          <div>
            <i class="fa-solid fa-ruler"></i>
            <p> Areal - væg til væg: 21x10m </p>
          </div>
          
          <div>
            <i class="fa-solid fa-house-user"></i>

            <p>Rum: 25</p>
          </div>
          
          <div>
            <i class="fa-solid fa-ruler-combined"></i>
            <p>Kvadratmeter: 720 m2</p>
          </div>
        </div>

        <div class="indexInstagramContainer">
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
          <div class="indexInstagramGrid flipped">
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm8.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm9.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm10.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm11.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm12.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm13.jpg" alt="">
            </div>
            <div class="imageContainer">
              <img src="../assets/img/ZeppelinOm14.jpg" alt="">
            </div>
          </div>
          </div>

      </section>

          <hr class="deviderLine">
          <section>
        <h3 class="heading2">Citater fra anmeldere</h3>
          <Swiper />
      </section>


      <hr class="deviderLine">

      <section class="ensembleSection">
          <h3 class="heading2">Medarbejdere</h3>
          <div class="ensembleContainer">
            <div>
              <img src="../assets/img/lasseZeppelin.jpg" alt="">
              <h4>Lasse Frank</h4>
              <p>Administrativ leder</p>
            </div>
            
            <div>
              <img src="../assets/img/mieZeppelin.jpg" alt="">
              <h4>Mie Brandt</h4>
              <p>Kunstnerisk leder</p>
            </div>
            
            <div>
              <img src="../assets/img/katjaZeppelin.jpg" alt="">
              <h4>Katja Neergaard</h4>
              <p>Økonomi- og Billetansvarlig</p>
            </div>
            
            <div>
              <img src="../assets/img/louiseZeppelin.jpg" alt="">
              <h4>Louise Borcher Petersen</h4>
              <p>Teatersekretær</p>
            </div>
            
            <div>
              <img src="../assets/img/oliverZeppelin.jpg" alt="">
              <h4>Oliver Söderlund Schack</h4>
              <p>Teatervicevært og -bygger</p>
            </div>

            <div>
              <img src="../assets/img/emmaZeppelin.jpg" alt="">
              <h4>Emma Asmussen</h4>
              <p>Udviklingsassistent</p>
            </div>

            <div>
              <img src="../assets/img/rasmusZeppelin.jpg" alt="">
              <h4>Rasmus Christner Månsson </h4>
              <p>Afvikler og tekniker</p>
            </div>

            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Asker Hvidepil  </h4>
              <p>Korleder</p>
            </div>

            <div>
              <img src="../assets/img/lauraZeppelin.jpg" alt="">
              <h4>Laura Walters</h4>
              <p>Event- og Billetmedarbejder</p>
            </div>


            <div>
              <img src="../assets/img/melissaZeppelin.jpg" alt="">
              <h4>Melissa Keller Kristensen </h4>
              <p> Forhusmedarbejder</p>
            </div>

            <div>
              <img src="../assets/img/kamillaZeppelin.webp" alt="">
              <h4>Kamilla Mølbjerg Odfeldt  </h4>
              <p> Forhusmedarbejder</p>
            </div>

            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Christina Christiansen   </h4>
              <p> Forhusmedarbejder</p>
            </div>

            <div>
              <img src="../assets/img/ChristinaZeppelin.jpg" alt="">
              <h4>Clara Kjær Jørgensen   </h4>
              <p> Forhusmedarbejder</p>
            </div>

            <div>
              <img src="../assets/img/FiggaZeppelin.jpg" alt="">
              <h4>Figga Vive Andersen  </h4>
              <p> Forhusmedarbejder</p>
            </div>

            <div>
              <img src="../assets/img/placeholderPerson.jpg" alt="">
              <h4>Solvig Tørsleff  </h4>
              <p> Forhusmedarbejder</p>
            </div>
          </div>
          </section>

    </main>
    </template>
    
    <script>
    import SmallHero from "../components/SmallHero.vue"; 
    import Swiper from '../components/Swiper.vue';

    
    export default {
      components: {
        SmallHero,
        Swiper,
      }};
  
    </script>
    
    <style scoped>



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

/* Zeppelins hus */
.introIcons {
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  padding-bottom: 2rem;
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

/* Galleri */
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

.indexInstagramGrid.flipped {
  direction: rtl; 
}

.indexInstagramGrid.flipped div {
  direction: ltr;
}

.indexInstagramGrid.flipped div:nth-of-type(1) {
  grid-column: span 2; 
  grid-row: span 2;    
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .ensembleContainer {
  grid-template-columns: repeat(3, 1fr);
}


  
}

@media (max-width: 800px) {
  .indexInstagramGrid.flipped {
    display: none;
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

@media (max-width: 600px) {
  .ensembleContainer {
  grid-template-columns: repeat(2, 1fr);
  
}


}

@media (max-width: 400px) {
  .ensembleContainer {
  grid-template-columns: repeat(1, 1fr);
}

}




  
    </style>
    