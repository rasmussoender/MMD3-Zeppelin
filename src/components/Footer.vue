<template>
    <footer>
        <section>
        <div id="footerLeft">
         
            <img src="../assets/img/zeppelinLogo.svg" alt="">
            <div>
                <p>Valdemarsgade 15</p>
                <p>1665 Kbh V</p>
                <p><a class="footerContactLink" href="tel:+4544330478">+45 44 33 04 78</a></p>

            </div>
            <div>
             <p>Administration</p>
             <p>man-fre 9:00-16:00</p>
             <p><a class="footerContactLink" href="mailto:post@zeppelin.dk">post@zeppelin.dk</a></p>

            </div>
            <div>

                <p>Billetbestilling</p>
                <p>man-fre 9:00-15:00</p>
                <p><a class="footerContactLink" href="mailto:billet@zeppelin.dk">billet@zeppelin.dk</a></p>

            </div>
       
        </div>
        <div class="FooterDivBund">
            <div>
            <h3>SCENEN OG SAMVÆRET</h3>
            <p><router-link to="/forestillinger">Teater forestillinger</router-link></p>
            <p><router-link to="/events">Events</router-link></p>
            <p><router-link to="/kor">kor</router-link></p>
            </div>

            <div><h3>MEDIER</h3>
            <p><router-link to="/artiklerPodcasts">Artikler & Podcast</router-link></p>
            </div>
        </div>
        <div class="FooterDivBund">
            <div><h3>I TEATERET</h3>
            <p><router-link to="/InformationBesogende">Information til besøgende</router-link></p></div>
            
            <div><h3>OM TEATERET</h3>
            <p><router-link to="/omOs">Om os</router-link></p></div>
        </div>
        <div>
            <h3>BØRN OG UNGE</h3>
            <p><router-link to="/familier">For Børnefamilier</router-link></p>
            <p><router-link to="/skolerInstitutioner">For skoler og instituitioner</router-link></p>
            <p><router-link to="/workshops">Workshops</router-link></p>
            <p><router-link to="/undervisningsmateriale">Undervisningsmateriale</router-link></p>
        </div>
    </section>
    <hr class="footerLine">
    <div class="ikoner">
        <a href="https://www.instagram.com/teatretzeppelin/" target="_blank">
        <i class="fa-brands fa-square-instagram"></i>
    </a>
    <a href="https://www.tiktok.com/@teatretzeppelin?" target="_blank">
        <i class="fa-brands fa-tiktok"></i>
    </a>
    <a href="https://www.facebook.com/TeatretZeppelin" target="_blank">
        <i class="fa-brands fa-square-facebook"></i>
    </a>
    <a href="https://www.youtube.com/channel/UCQbwvU3WUDAVt06q6dRqdfw" target="_blank">
        <i class="fa-brands fa-square-youtube"></i>
    </a>
    <a href="https://www.linkedin.com/company/teatret-zeppelin/" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
    </a>
</div>
    </footer>  
</template>

<script>
</script>

<style scoped>

footer {
    background-color: #1E1E1E; 
    color: white; 
}
section {
    padding-top: 4rem;
    color: #FFFFFF;
    display: flex;
    margin-top: 3rem;
    justify-content: space-around;
    padding-bottom: 2rem;

}

.footerContactLink {
    color: var(--primary-yellow);
}

footer section a {
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

footer section a:hover, footer section a.router-link-active {
    color: var(--primary-yellow);
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
    align-items: left;
    flex-direction: column;
    gap: 1rem;
}

footer section>.FooterDivBund {
    justify-content: space-between;
    margin-bottom: 3rem;
}

#footerLeft img {
    width: 70%;
}

.ikoner {
  color: white;
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  background-color: #1E1E1E;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem; 
}

.ikoner i {
text-decoration: none;
color: white;
  font-size: 3rem;
  margin: 0 1rem;
  transition: color 0.3s ease;

}

.ikoner i:hover {
    color: var(--primary-yellow);
}

.footerLine {
    border: 0; 
    height: 2px; 
    margin-left: 4rem;
    margin-right: 4rem;
    background-color: white; 
    color: white;
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {

    section {
        flex-direction: column;
        align-items: center;
    }



}

@media (max-width: 800px) {
    section {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        width: 100%;

    }


    .ikoner i {
    font-size: 2rem;
    }

}

@media (max-width: 600px) {
    .ikoner i {
    font-size: 1.5rem;
    }

}

@media (max-width: 400px) {
    .ikoner i {
    font-size: 1.2rem;
    }

}

</style>