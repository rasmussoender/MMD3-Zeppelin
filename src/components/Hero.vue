<template>
    <header class="hero">
      <div class="hero-content">
        <h1>Teatret Zeppelin</h1>
        <p>Teater med kant for børn og voksne!</p>
        <a href="#" class="button">Forestillinger</a>
      </div>
      <div class="scroll-down">
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

.hero-content {
position: absolute;
top: 50%;
left: 20%;
transform: translate(-50%, -50%);
}

.hero-content h1 {
font-size: 3em;
margin-bottom: 0.5em;
}

.hero-content p {
font-size: 1.5em;
margin-bottom: 1em;
}

.hero-content .button {
padding: 0.5em 1em;
background: yellow;
color: black;
font-weight: bold;
text-transform: uppercase;
border: none;
cursor: pointer;
border-radius: 5px;
}
  </style>
  