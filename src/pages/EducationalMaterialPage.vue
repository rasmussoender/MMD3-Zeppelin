<template>
    <div>
      <SmallHero 
        :heroImage="'img/herobilledeZeppelin.jpg'"
        :heroTitle="'Undervisningsmateriale'"
      />
    </div>

    <main>
      <div class="educationMaterialIntro">
          <div>
            <h3 class="heading2">undervisningsmateriale til Zeppelins forestillinger</h3>
            <p>
              Opgaverne er varierede, så eleverne både arbejder på et beskrivende og reflekterende niveau og på et kreativt niveau med fx tegneøvelser eller dramaøvelser. Formålet er, at eleverne får sat ord på deres oplevelse og bearbejdet den på en nuanceret måde.
            </p>
            <p>Det er Teatret Zeppelins ønske, at undervisningsmaterialet vil inspirere og motivere eleverne til at sætte ord på deres teateroplevelse.
            </p>
          </div>
          <img src="../assets/img/herobilledeZeppelin.jpg" alt="">

        </div>

        <section class="educationMaterialCards">
          <div class="educationMaterialList">

          <a href="https://zeppelin.dk/wp-content/uploads/2023/05/TeatretZeppelin_TOVE_Undervisningsmateriale_V1_web.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/toveZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">Tove</p> 
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2023/01/Undervisningsmateriale-Maelkeboettereglementet-version-S27-01-2023.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/maelkeboetteZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">MÆLKEBØTTEREGLEMENTET</p>
              </div>
            </div>  
          </a>  
          <a href="https://zeppelin.dk/wp-content/uploads/2022/01/UV-materiale_Mio_2022_web.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/mioMioZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">Mio, Min Mio</p>
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2014/07/Skolemat.-Frost-2019.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/frostBrodreZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">Frostbrødre</p>
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2014/07/Skolemateriale-DDFEHH-2020.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/drengenderZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">Drengen der fik en hunds</p>
              </div>
            </div>  
          </a>  


          <a href="https://zeppelin.dk/wp-content/uploads/2014/07/Zeppelin_Ronja_UV-2018.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/ronjaZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">Ronja røverdatter</p>
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2017/05/Skolemateriale-Haady-2017.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/haadyZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">Under Haadys Skjold</p>
              </div>
            </div>  
          </a>  

          <a href="https://zeppelin.dk/wp-content/uploads/2014/09/Skolemateriale-1001_Nat-2013.pdf" target="_blank" class="educationMaterialLink">
            <div class="educationMaterialCard">
              <img src="../assets/img/1001natZeppelin.jpg" alt="" />
              <div class="educationMaterialText">
                <p class="educationMaterialTitle">1001 nat</p>
              </div>
            </div>  
          </a>  


          </div>

        </section>


    </main>
    </template>
    
    <script>
    import SmallHero from "../components/SmallHero.vue"; 
    
    export default {
      components: {
        SmallHero,
      }};
  
    </script>
    
    <style scoped>

.educationMaterialIntro {
    display: flex;
    gap: 4rem;
  }

  .educationMaterialIntro p {
    padding-bottom: 2rem;
  }

  .educationMaterialIntro img {
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
  width: 300px; 
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

  
    </style>
    