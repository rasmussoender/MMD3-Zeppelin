<template>
  <header class="hero">
    <!-- Hero billeder og titeler er dynamiske-->
    <img :src="heroImage" :alt="heroTitle" class="hero-image" />
    
    <div class="hero-content">
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
.hero-content {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  z-index: 2; 
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
}



</style>
