<template>
    <nav class="navbar">
      <img class="zeppelinLogo" src="../assets/img/zeppelinLogo.svg" alt="" />
      <div class="navItems">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shows">Shows</router-link></li>
        <li><a href="#">Events</a></li>
        <div class="menu-icon" @click="toggleMenu">
          <i class="fas fa-bars" id="burger-menu"></i>
        </div>
      </div>
    </nav>

    <div ref="overlayMenu" class="overlay">
      <div class="close-icon" @click="toggleMenu">
        <i class="fas fa-times" id="close-menu"></i>
      </div>
      <div class="overlay-content">
        <ul>
          <li><h3>SCENEN OG SAMVÆRET</h3></li>
          <li><a href="#">Teater forestillinger</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Kor</a></li>
          <li><h3>I TEATRET</h3></li>
          <li><a href="#">Særlige behov</a></li>
          <li><a href="#">Information til besøgende</a></li>
          <li><h3>BØRN & UNGE</h3></li>
          <li><a href="#">For børnefamilier</a></li>
          <li><a href="#">For skoler og institutioner</a></li>
          <li><h3>MEDIER</h3></li>
          <li><a href="#">Artikler</a></li>
          <li><a href="#">Podcast</a></li>
          <li><h3>OM TEATRET</h3></li>
          <li><a href="#">Om os</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Sponsor</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    methods: {
      toggleMenu() {
        const overlayMenu = this.$refs.overlayMenu;
        overlayMenu.style.display = overlayMenu.style.display === "flex" ? "none" : "flex";
      }
    }
  };
  </script>
  

<style>


/* General */


/* Nav */
.navbar {
display: flex;
align-items: center;
justify-content: space-between;
padding: 1em 2em;
background: rgba(0, 0, 0, 0.5);
}
.navItems {
    display: flex;
    flex-direction: row;
    gap: 5rem;


}

.navItems li a {
    color: white;
}

.zeppelinLogo {
    height: 6rem;

}



.menu-icon {
color: white;
font-size: 2em;
cursor: pointer;
}



/* Overlay Menu */
.overlay {
    position: fixed;
    top: 0;
    right: 0; 
    left: auto; 
    width: 60%;
    height: 100%;
    background: #1E1E1E;
    color: white;
    z-index: 999;
    display: none; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  

.overlay-content {
text-align: center;
}

.overlay ul {
padding: 0;
}

.overlay ul li {
margin: 1em 0;
}

.overlay ul li h3 {
font-size: 1.2em;
margin-bottom: 0.5em;
text-transform: uppercase;
}

.overlay ul li a {
font-size: 1em;
color: white;
font-weight: bold;
text-transform: capitalize;
}

.close-icon {
position: absolute;
top: 20px;
right: 20px;
font-size: 2em;
cursor: pointer;
}





</style>

