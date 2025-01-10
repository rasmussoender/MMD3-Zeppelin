<template>
  <div id="app">
    <!-- Her kaldes components som går igen på alle sider -->
    <Navigation />
    <ChatBox />

    <router-view />
    <Footer />


    
  </div>

</template>

<script>
import Navigation from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ChatBox from './components/ChatBox.vue';


export default {
  name: 'App',
  components: {
    Navigation,
    ChatBox,
    Footer,
  }
};


</script>

<style>

</style>
