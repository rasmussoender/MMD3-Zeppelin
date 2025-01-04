<template>
  <div id="app">
    <Navigation />
    <router-view />

    
  </div>

</template>

<script>
import Navigation from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navigation
  }
};


</script>

<style>
body, h1, p, ul, li, a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
  
body {
    margin: 0;
    
}
p {
  line-height: 1.3;
}

  </style>
