<template>
    <div>
      <SmallHero 
        :heroImage="'img/familier.jpg'"
        :heroTitle="'For Familier'"
      />
    </div>

    <main>
      <div class="familySectioncontainer">
         <div class="imgWelcomeContainer">
           <div class="introImg">
             <img src="../assets/img/kidTheatre.jpg" alt="">
            </div>
            <div class="greenBoxWelcome">
              <h2>Velkommen til Teaterets Magiske Univers for Børn og Familier!</h2>
              <p>Tag hele familien med på en rejse ind i teatrets verden, hvor fantasien får frit spil, og magiske øjeblikke skabes. Vores forestillinger for børn og familier er fyldt med spænding, humor og hjertevarme historier, der samler generationer.</p>
              <p>Teatret er et sted, hvor minder skabes, og hvor både små og store kan drømme sig væk. Kom og oplev den fortryllende atmosfære!</p>
              
              <h3>Ankomst</h3>
              <p>Kom i god tid, så I kan vænne jer til omgivelserne. Vælg pladser yderst, hvis barnet kan blive overvældet, og respekter aldersgrænser. Lad børnene opleve forestillingen uden kommentarer – det er helt okay, hvis de reagerer intuitivt!</p>
              
              <h3>Efter forestillingen</h3>
              <p>Efter forestillingen kan I hilse på skuespillerne og snakke om, hvordan den levede op til jeres forventninger, samt brugen af lys, lyd og temaer.</p>
            </div>
          </div>

        <div class="greenBoxRight">

            <h3 id="bigFive">5</h3>
            <h2> Gode grunde til at tage i teatret med sin familie</h2>
            <div>
              <h3>1. Styrker fællesskabet og familien</h3>
              <p>Teateroplevelser skaber et særligt rum, hvor familien kan dele en unik oplevelse uden for hjemmets rutiner. At være sammen om noget inspirerende og følelsesladet kan styrke familiens bånd og skabe fælles minder.</p>
            </div>

            <div>
              <h3>2. Lærerigt for både børn og voksne</h3>
              <p>Teaterstykker behandler ofte temaer og problemstillinger, der kan give anledning til samtaler og refleksion. Det giver mulighed for at lære og forstå verden fra forskellige perspektiver, hvilket er særligt værdifuldt for børn i deres udvikling.</p>
            </div>

            <div>
              <h3>3. Underholdning uden skærme</h3>
              <p>I en tid hvor skærme ofte dominerer familiens hverdag, er teater en fantastisk måde at opleve levende, fysisk underholdning, der fanger både børns og voksnes opmærksomhed.</p>
            </div>

            <div>
              <h3>4. Styrker kreativiteten</h3>
              <p>Teater vækker fantasien og inspirerer til kreativ tænkning. For børn er det en chance for at opleve historiefortælling og kunst på en måde, der kan motivere dem til at udtrykke sig selv kreativt.</p>
            </div>

            <div>
              <h3>5. En pause fra hverdagens stress</h3>
              <p>Teater kan være en kærkommen pause fra en travl hverdag, hvor familien får mulighed for at slappe af og nyde en oplevelse sammen uden at tænke på pligter og to-do-lister.
                Teateroplevelser giver ikke kun underholdning, men også muligheden for at skabe værdifulde og mindeværdige stunder for hele familien.</p>
            </div>
        </div>
    </div>

    <hr class="deviderLine">

    <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Sådan Gør Du Teateroplevelsen Magisk for Børn </h3>
            <p>
              Skal du i teatret med dit barn, er det en god idé at forberede dem på oplevelsen. Teater kan være både magisk og overvældende med stærke følelser og sanseindtryk. Historien kan røre, skræmme eller overraske, og det kan føles intenst for et barn.
            </p>
            <p>Nogle børn forlader måske salen for at beskytte sig selv, hvilket er naturligt, men de går glip af oplevelsen og samtalen bagefter. Ved at tale om teatrets virkemidler og historiens temaer kan du gøre barnet trygt og klar til at nyde oplevelsen. Med lidt forberedelse bliver teateret en magisk stund for hele familien.</p>
          </div>
          <img src="../assets/img/darkTheatre.jpg" alt="">

        </div>
        <div class="mediaTextSection">
          <img src="../assets/img/familierTeater4.jpg" alt="">

          <div>
            <h3 class="heading2">Strategeier</h3>
            <h4>Historien og temaerne</h4>
            <p>
              Forbered dit barn ved at læse forestillingsbeskrivelsen og tale om de temaer, den berører. Hvis forestillingen er baseret på en kendt historie, som en bog eller film, kan I snakke om den. Hvis dit barn har brug for ekstra forberedelse, kan du kigge i det undervisningsmateriale, vi udvikler til skolerne.
            </p>
            <h4>Dramadag derhjemme</h4>
            <p>
              I kan dramatisere scener fra forestillingen derhjemme. Rollerne og dramaøvelserne hjælper børn med at forstå teatrets virkemidler og de følelser, der opstår. Det viser dem, at det, der sker på scenen, "bare er leg."
            </p>
          </div>
        </div>

        <div class="mediaTextSection">
          <div>
            <h3 class="heading2">Teatrets virkemidler</h3>
            <p>
              Teater adskiller sig fra film og litteratur, da det foregår live og i samme rum som publikum, hvilket kan være overvældende for børn. En snak om teatrets virkemidler kan skabe afstand til scenen. 
            </p>
            <p>Teater omfatter lyd, lys, skuespillernes bevægelser, replikker, kostumer, rekvisitter, scenografi og effekter som ild eller røg. Bag kostumerne er altid en skuespiller – et helt almindeligt menneske.
            </p>
          </div>
          <img src="../assets/img/familierTeater.jpg" alt="">
        </div>
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
  .familySectioncontainer {
  max-width: 100%;
  display: flex;
  gap: 4rem;
  }

  .introImg {
  text-align: center;
  padding-bottom: 2rem;
  }

  .introImg img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  }
  .imgWelcomeContainer {
  height: 100%;
  }

  .greenBoxRight {
  background-color: var(--primary-blue);
  color: white;
  width: 70%;
  height: 100%;
  padding: 2rem;
  border-radius: 5px;

  }
  .greenBoxRight p {
  font-size: 15px;
  }
  #bigFive {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 1rem;
  }

  .greenBoxWelcome {
  background-color: var(--primary-blue);
  color: white;
  padding: 7rem;
  padding-top: 2rem;
  border-radius: 5px;
  }

  .mediaTextSection {
    padding-bottom: 0;
    padding-top: 1rem;
  }


@media (max-width: 1000px) {
  .greenBoxRight {
    width: 100%;
  }

  .familySectioncontainer {
    gap: 2rem;
  }

  
}

@media (max-width: 800px) {

  .familySectioncontainer {
    flex-direction: column;
  }
  .introImg {
    padding-bottom: 1rem;
  }

  .greenBoxRight {
    width: 100%;
    margin: 0;
    padding: 0;
    
  }

  .greenBoxRight h2, .greenBoxRight div {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 2rem;
  }

}

@media (max-width: 600px) {
  .greenBoxWelcome {
    padding: 2rem
  }

  .greenBoxRight h2, .greenBoxRight div {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }

}


      
      
    </style>
    