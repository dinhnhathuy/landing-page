<template>
    <section class="mt-32 px-20">
        <div class="flex flex-row">
            <div class="w-5/12 text-left">
                <swiper :spaceBetween="30" :pagination='{
                "clickable": true
                }' class="testi-swiper">
                    <swiper-slide>
                        <div class="text-left mb-28">
                            <p class="text-lg uppercase font-semibold">Testimonials</p>
                            <h3 class="text-5xl font-bold">What people say about Us.</h3>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="text-left pb-8">
                            <p class="text-lg uppercase font-semibold">Testimonials</p>
                            <h3 class="text-5xl font-bold">What people say about Us.</h3>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="text-left pb-8">
                            <p class="text-lg uppercase font-semibold">Testimonials</p>
                            <h3 class="text-5xl font-bold">What people say about Us.</h3>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="w-7/12 p-6 relative">
               
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
  Pagination
} from 'swiper'
SwiperCore.use([Pagination]);
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style lang="scss">
.testi-swiper .swiper-pagination  {
    text-align: start !important;
}
.testi-swiper .swiper-pagination-bullet {
    margin: 0 15px !important
}
</style> 