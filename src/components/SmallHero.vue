<template>
  <header class="hero">
    <!-- Hero billeder og titeler er dynamiske-->
    <img :src="heroImage" :alt="heroTitle" class="hero-image" />
    
    <div class="heroContent">
      <h1>{{ heroTitle }}</h1>
    </div>
    
  </header>
</template>

<script>
export default {
  props: {
    heroImage: {
      type: String,
      required: true
    },
    heroTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 50vh;
  color: white;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; 
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 1; 
}

/* Hero content */
.heroContent {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  z-index: 2; 
}

.heroContent h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}

@media (max-width: 1200px) {

}

@media (max-width: 1000px) {
  .heroContent h1 {
  font-size: 2em;
}
  


  
}

@media (max-width: 800px) {



}

@media (max-width: 600px) {
  .heroContent h1 {
  font-size: 1.5em;
}


}

@media (max-width: 400px) {

}




</style>
