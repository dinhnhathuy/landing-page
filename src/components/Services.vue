<template>
    <section class="mt-36 relative">
        <div class="mb-16">
            <p class="text-gray-500 text-lg font-semibold">CATEGORY</p>
            <h2 style="font-family: 'Volkhov', serif;" class="text-5xl font-bold">We Offer Best Services</h2>
        </div>
        <div class="flex flex-row flex-wrap px-9">
            <service-card v-for="(service, index) in services" :key="index" :service="service"></service-card>
        </div>
        <div class="absolute top-0 right-0">
            <img src="../assets/images/services/service-decore.svg" alt="">
        </div>
    </section>
</template>

<script>
import ServiceCard from './services/ServiceCard.vue'
export default {
    components: {ServiceCard},
    data() {
        return {
            services: [
                {
                    id: 1,
                    title: 'Calculated Weather',
                    content: 'Built Wicket longer admire do barton vanity itself do in it.',
                    image: 'weather.svg'
                },
                {
                    id: 2,
                    title: 'Best Flights',
                    content: 'Engrossed listening. Park gate sell they west hard for the.',
                    image: 'flights.svg'
                },
                {
                    id: 3,
                    title: 'Local Events',
                    content: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
                    image: 'events.svg'
                },
                {
                    id: 4,
                    title: 'Customization',
                    content: 'We deliver outsourced aviation services for military customers',
                    image: 'custom.svg'
                }
            ]
        }
    },
}
</script>