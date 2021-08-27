<template>
  <section class="px-5 lg:px-20 ">
    <div class="mt-28 relative">
      <div class="mb-16">
        <p class="text-gray-500 text-lg font-semibold">Top Selling</p>
        <h2 style="font-family: 'Volkhov', serif" class="text-5xl font-bold">
          Top Destinations
        </h2>
      </div>
        <swiper :slidesPerView="1" :isDuplicate="true" :spaceBetween="10" :pagination='{
          "clickable": true
        }' :breakpoints='{
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 3,
            "spaceBetween": 30
          }
        }' class="mySwiper">
          <swiper-slide>
            <destination-card></destination-card>
          </swiper-slide>
          <swiper-slide>
            <destination-card></destination-card>
          </swiper-slide>
          <swiper-slide>
            <destination-card></destination-card>
          </swiper-slide>
          <swiper-slide>
            <destination-card></destination-card>
          </swiper-slide>
          <swiper-slide>
            <destination-card></destination-card>
          </swiper-slide>
        </swiper>
      <!-- <destination-carousel></destination-carousel> -->
      <div class="absolute right-0 top-1/2">
          <img src="../assets/images/destinations/decore.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import DestinationCard from '../components/destination/card.vue'
import DestinationCarousel from '../components/destination/DestinationCarousel.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css'

export default {
    components: {
      DestinationCard,
      DestinationCarousel,
      Swiper,
      SwiperSlide,
    },
    // setup() {
    //   const onSwiper = (swiper) => {
    //     console.log(swiper);
    //   };
    //   const onSlideChange = () => {
    //     console.log('slide change');
    //   };
    //   return {
    //     onSwiper,
    //     onSlideChange,
    //   };
    // },
}
</script>