<template>
  <section class="px-5 lg:px-20 ">
    <div class="mt-28 relative">
      <div class="mb-16">
        <p class="text-gray-500 text-lg font-semibold">Top Selling</p>
        <h2 style="font-family: 'Volkhov', serif" class="text-5xl font-bold">
          Top Destinations
        </h2>
      </div>
      <div class="flex flex-row p-6 px-10 justify-between">
        <destination-card></destination-card>
        <destination-card></destination-card>
        <destination-card></destination-card>
      </div>
      <!-- <destination-carousel></destination-carousel> -->
      <div class="absolute right-0 top-1/2">
          <img src="../assets/images/destinations/decore.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import DestinationCard from '../components/destination/card.vue'
// import DestinationCarousel from '../components/destination/DestinationCarousel.vue'
export default {
    components: {
        DestinationCard,
        // DestinationCarousel
    }
}
</script>