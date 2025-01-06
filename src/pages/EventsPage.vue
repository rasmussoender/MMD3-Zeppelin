<template>
  <div>
    <SmallHero 
      :heroImage="'img/heroTest.jpg'"
      :heroTitle="'Events'"
    />
  </div>
  </template>
  
  <script>
  import SmallHero from "../components/SmallHero.vue"; 
  
  export default {
    components: {
      SmallHero,
    }};

  </script>
  
  <style scoped>


  </style>
  