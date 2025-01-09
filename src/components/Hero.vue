<template>
    <header class="hero">
      <div class="heroContent">
        <h1>Teatret Zeppelin</h1>
        <p>Teater med kant for børn og voksne!</p>
        <li><router-link class="buttonType1" to="/forestillinger">Forestillinger</router-link></li>
      </div>
      <div class="scrollDown">
        <i class="fas fa-chevron-down"></i>
      </div>
    </header>

  </template>
  
  <script>

  </script>
  
  <style scoped>

.hero {
position: relative;
background-image: url('../assets/img/herobilledeZeppelin.jpg');
background-size: cover;
background-position: center;
height: 100vh;
color: white;
}

  /* Hero indhold */

.heroContent {
position: absolute;
top: 50%;
left: 20%;
transform: translate(-50%, -50%);
}

.heroContent h1 {
font-size: 3em;
margin-bottom: 0.5em;
}

.heroContent p {
font-size: 1.5em;
margin-bottom: 2em;
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .heroContent {
left: 50%;
}

  
}

@media (max-width: 800px) {


}

@media (max-width: 600px) {

}

@media (max-width: 400px) {

}



  </style>
  