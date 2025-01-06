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

</style>
