<template>
    <footer>
        <section>
        <div id="footerLeft">
         
            <img src="../assets/img/zeppelinLogo.svg" alt="">
          <p>Valdemarsgade 15</p>
          <p>1665 Kbh V</p>
          <p><a href="">+45 44 33 04 78</a></p>
         
          <p>Administration</p>
          <p>man-fre 9:00-16:00</p>
          <p><a href="">post@zeppelin.dk</a></p>
          <p>Billetbestilling</p>
          <p>man-fre 9:00-15:00</p>
          <p><a href="">billet@zeppelin.dk</a></p>
       
        </div>
        <div class="FooterDivBund">
          <div><h3>SCENEN OG SAMVÆRET</h3>
            <p>Teater forestillinger</p>
            <p>Events</p>
            <p>kor</p></div>
            <div><h3>MEDIER</h3>
            <p>Artikler & Podcast</p></div>
        </div>
        <div class="FooterDivBund">
            <div><h3>I TEATERET</h3>
            <p>Information til besøgende</p></div>
            <div><h3>OM TEATERET</h3>
            <p>Om os</p></div>
        </div>
        <div>
            <h3>BØRN OG UNGE</h3>
            <p>For Børnefamilier</p>
            <p>For skoler og instituitioner</p>
            <p>Workshops</p>
            <p>Undervisningsmateriale</p>
        </div>
    </section>
    <hr>
    <div class="ikoner">
    <i class="fa-brands fa-square-instagram"></i>
    <i class="fa-brands fa-square-x-twitter"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-linkedin"></i>
</div>
    </footer>  
</template>

<script>
</script>

<style scoped>
section {
    background-color: #1E1E1E;
    color: #FFFFFF;
    display: flex;
    margin-top: 3rem;
    justify-content: space-around;
    padding-bottom: 2rem;
}
 
section a {
    text-decoration: none;
    color: #DACC00;
}
 
footer section>div {
    display: flex;
    flex-direction: column;
    max-width: 25%;
}
 
 
#footerLeft {
    display: flex;
    align-items: center;
    flex-direction: column;
}
 
footer section>.FooterDivBund {
    justify-content: space-between;
    margin-bottom: 7rem;
}

#footerLeft img {
    width: 70%;
}

.ikoner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.ikoner i {
  font-size: 2rem;
  margin: 0 1rem;
}

</style>