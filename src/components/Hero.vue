<template>
    <header class="hero">
      <div class="hero-content">
        <h1>Teatret Zeppelin</h1>
        <p>Teater med kant for børn og voksne!</p>
        <a href="./casestudies.html" class="buttonType1">Alle forestillinger</a>
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
margin-bottom: 2em;
}

.buttonType1 {
  background-color: var(--primary-yellow);
  color: black;
  padding: 20px 40px;
  border: 1.5px solid transparent; 
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease; 
}

.buttonType1:hover{
  background-color: white; 
  color: black; 
  border-color: var(--primary-yellow);
  transform: scale(1.05); 
}

  </style>
  