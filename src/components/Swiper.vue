<!-- Brugt Swiper vue -->
<!-- 3 parts kode: https://swiperjs.com/vue -->
<template>
  <!-- fortæller Swiper hvilke funktione den skal bruge -->
   <!-- Definerer ting såson hvor mange der skal vises per slide, om man vil have pagination, autoplay og hvor lang der der går -->
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,  
        disableOnInteraction: false,  
      }"
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <!-- Putter dynamisk info ind i swiperen, som defineres længere nede -->
      <swiper-slide v-for="(review, index) in reviews" :key="index">
        <div class="reviewSection">
          <div>
            <i class="fa-solid fa-quote-left"></i>
            <p>{{ review.text }}</p>
            <h5>- {{ review.author }}</h5>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  
  <script>
  // Importere alle elementerne fra swiper
  import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    // Her definerers alle de data man vil vise i swiperen
    data() {
      return {
        reviews: [
          {
            text: "Som altid formår Teatret Zeppelin at skabe en fabelagtigt smuk forestilling. Rekvisitter, kostumer, musik og teknik er af højeste kvalitet.",
            author: "Den 4. væg",
          },
          {
            text: "Dette er muligvis det smukkeste teater for børn, jeg nogensinde har set!",
            author: "Ungt Teaterblod",
          },
          {
            text: "Zeppelin har flere gange tidligere vist deres evne til at ’zeppelinisere’ børnebøger, så forestillingen fungerer som det bud på familieteater, de store scener kan have svært ved at levere trods stort udstyr og større bemanding",
            author: " Politiken",
          },
          {
            text: "Her er tale om børneteater i verdensklasse.",
            author: " CPHCulture",
          },
          {
            text: "Zeppelin har gjort det til et speciale at tage sit publikum med ind i store historier. Gang på gang udnytter teatret sine begrænsede ressourcer opfindsomt og til det yderste, så resultatet altid synes større, end det egentlig er.",
            author: " Teateravisen",
          },
        ],
      };
    },
    // Der opsætters variabler og moduler, som bruges af Swiper.
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, A11y, Autoplay],
      };
    },
  };
  </script>
  
  <style scoped>
.reviewSection {
  padding-top: 2rem;
  padding-left: 20rem;
  padding-right: 20rem;
  padding-bottom: 2rem;
  background: #176C76;
  color: white;
  border-radius: 5px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: left; 
}

.reviewSection i {
  font-size: 3rem;
  padding-bottom: 1rem;
}

.reviewSection div {
  padding-top: 2rem;
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
  .reviewSection {
  padding-left: 10rem;
  padding-right: 10rem;

}
  
}


@media (max-width: 600px) {
  .reviewSection {
  padding-left: 5rem;
  padding-right: 5rem;

}
}

@media (max-width: 400px) {
  .reviewSection {
  padding-left: 2rem;
  padding-right: 2rem;

}
}

  </style>
  