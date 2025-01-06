<template>
    <div>
      <SmallHero 
        :heroImage="'img/heroTest.jpg'"
        :heroTitle="'For Skoler'"
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
    