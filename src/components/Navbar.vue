<template>
  <nav class="navbar">
     <router-link to="/">
     <img class="zeppelinLogo" src="../assets/img/zeppelinLogo.svg" alt="Zeppelin Logo" />
     </router-link>
    
    <div class="navItems">
      <li><router-link to="/">Forside</router-link></li>
      <li><router-link to="/forestillinger">Forestillinger</router-link></li>
      <li><router-link to="/events">Events</router-link></li>
      <a href="https://teaterbilletter.dk/forestillinger?venueCodes=VN0000129" target="_blank" class="navButton">Køb billet</a>
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
        <hr class="navDeviderLine">
        <div class="burgerMenuItemWrapper">
          <li><router-link to="/forestillinger" @click="toggleMenu">Teater forestillinger</router-link></li>
          <li><router-link to="/events" @click="toggleMenu">Events</router-link></li>
          <li><router-link to="/kor" @click="toggleMenu">Kor</router-link></li>
        </div>
        <li><h3>I TEATRET</h3></li>
        <hr class="navDeviderLine">
        <div class="burgerMenuItemWrapper">
          <li><router-link to="/InformationBesogende" @click="toggleMenu">Information til besøgende</router-link></li>
        </div>
        <li><h3>BØRN & UNGE</h3></li>
        <hr class="navDeviderLine">
        <div class="burgerMenuItemWrapper">
          <li><router-link to="/familier" @click="toggleMenu">For børnefamilier</router-link></li>
          <li><router-link to="/skolerInstitutioner" @click="toggleMenu">For skoler og institutioner</router-link></li>
          <li><router-link to="/workshops" @click="toggleMenu">Workshops</router-link></li>
          <li><router-link to="/undervisningsmateriale" @click="toggleMenu">Undervisningsmateriale</router-link></li>
        </div>
        <li><h3>MEDIER</h3></li>
        <hr class="navDeviderLine">
        <div class="burgerMenuItemWrapper">
          <li><router-link to="/artiklerPodcasts" @click="toggleMenu">Artikler & Podcasts</router-link></li>
        </div>
        <li><h3>OM TEATRET</h3></li>
        <hr class="navDeviderLine">
        <div class="burgerMenuItemWrapper">
          <li><router-link to="/omOs" @click="toggleMenu">Om os</router-link></li>
        </div>
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
  padding: 0 2em;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  z-index: 1000; 
  box-sizing: border-box; 
}
.navItems {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;


}

.navItems li a {
    color: white;
    font-size: 1.2rem;
}

.zeppelinLogo {
    height: 6rem;

}

/* Nav button */
.navButton {
background-color: var(--primary-yellow);
color: black;
padding: 10px 20px;
border: 1.5px solid transparent; 
border-radius: 5px;
cursor: pointer;
font-size: 1rem;
text-decoration: none;
transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease; 
}

.navButton:hover{
background-color: white; 
color: black; 
border-color: var(--primary-yellow);
transform: scale(1.05); 
  }


.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
  cursor: pointer;
  z-index: 1001; 
}



/* Overlay Menu */
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: #1E1E1E;
  color: white;
  z-index: 1000; 
  display: none; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  padding-top: 0;
}

.overlay.show {
  display: flex;
}

.overlay-content {
  position: relative; 
  width: 100%; 
}

.burgerMenuItemWrapper {
  display: flex;
  justify-content: flex-start; 
  gap: 5rem; 
}

.navDeviderLine {
  position: absolute; 
  left: 0; 
  right: 0; 
  height: 1px;
  background-color: white; 
  margin-top: 0;
}

.overlay ul {
padding: 0;
}

.overlay ul li {
margin: 1em 0;
}

.overlay ul li h3 {
font-size: 1.2em;
text-transform: uppercase;
margin-bottom: -.5rem;
}

.overlay ul li a {
font-size: 1em;
color: white;
font-weight: bold;
text-transform: capitalize;
}

.close-icon {
position: absolute;
top: 1.5rem;
right: 2rem;
font-size: 2.5rem;
cursor: pointer;
}







</style>

