<template>
  <div class="home">
    <services></services>
    <destinations></destinations>
    <book></book>
    <testimonials></testimonials>
    <relative-logos></relative-logos>
    <subcribe></subcribe>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Services from '../components/Services.vue';
import Destinations from '../components/Destinations.vue'
import Book from '../components/Book.vue'
import Testimonials from '../components/Testimonials.vue'
import RelativeLogos from '../components/RelativeLogos.vue'
import Subcribe from '../components/Subcribe.vue';

export default {
  name: "Home",
  components: {
    Services,
    Destinations,
    Book,
    Testimonials,
    RelativeLogos,
    Subcribe
  },
};
</script>
