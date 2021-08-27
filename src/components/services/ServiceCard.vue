<template>
  <div class="w-full lg:w-3/12 md:w-6/12 lg:mb-7 text-center transform transition group hover:-translate-y-2 relative px-12 py-12 lg:py-0 lg:px-0">
    <div class="flex flex-col justify-center p-12 z-20 card bg-white relative shadow-md lg:shadow-none group-hover:shadow-md">
      <img :src="require(`../../assets/images/services/${service.image}`)" alt="" class="h-24 ml-auto mr-auto">
      <div>
        <h4 class="text-xl font-semibold mb-4 mt-7">{{ service.title }}</h4>
        <p>{{ service.content }}</p>
      </div>
    </div>
    <div class="absolute w-24 h-24 bg-none group-hover:bg-yellow-600 left-5 bottom-5 lg:-left-6 lg:-bottom-7 service-relact z-10"></div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    border-radius: 36px;
    // border: 2px solid black;
}
.service-relact {
    border-radius: 30px 0px 10px;
}
</style>