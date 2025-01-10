<template>
  <header class="hero">
    <div class="heroContent">
      <h1>Teatret Zeppelin</h1>
      <p>Teater med kant for børn og voksne!</p>
      <li><router-link class="buttonType1" to="/forestillinger">Forestillinger</router-link></li>
    </div>
    <div class="scrollDown" @click="scrollToNextSection">
      <i class="fas fa-chevron-down"></i>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToNextSection() {
      const nextSection = document.querySelector('#nextSection'); 
      if (nextSection) {
        window.scrollTo({
          top: nextSection.offsetTop,
          behavior: 'smooth',
        });
      }
    },
  },
};
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

.heroContent {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.heroContent h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

.heroContent p {
  font-size: 1.5em;
  margin-bottom: 2em;
}

.scrollDown {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  cursor: pointer;
  font-size: 3em;
  color: var(--primary-yellow);
  transition: color 0.3s ease; 
}

.scrollDown:hover {
  color: white; 
}

@keyframes bounce {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

#nextSection {
  padding-top: 100vh; 
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .heroContent {
left: 50%;
}

  
}

</style>
