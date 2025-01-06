<template>
    <div>
      <SmallHero 
        :heroImage="'img/herobilledeZeppelin.jpg'"
        :heroTitle="'For Familier'"
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
    