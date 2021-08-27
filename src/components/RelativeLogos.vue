<template>
  <section class="px-20">
    <div class="flex flex-row justify-center lg:justify-between flex-wrap">
      <div class="p-4 gray hover:shadow-md rounded-xl">
        <img class="h-8" src="../assets/images/logos/axon.jpg" alt="" />
      </div>
      <div class="p-4 gray hover:shadow-md rounded-xl">
        <img class="h-8" src="../assets/images/logos/jetstar.png" alt="" />
      </div>
      <div class="p-4 gray hover:shadow-md rounded-xl">
        <img class="h-8" src="../assets/images/logos/expedia.jpg" alt="" />
      </div>
      <div class="p-4 gray hover:shadow-md rounded-xl">
        <img class="h-8" src="../assets/images/logos/qatas.png" alt="" />
      </div>
      <div class="p-4 gray hover:shadow-md rounded-xl">
        <img class="h-8" src="../assets/images/logos/alitalia.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .gray {
      filter: grayscale(1) invert(0);
      -webkit-filter: grayscale(1) invert(0);
    }
    .gray:hover {
      filter: none;
    }
</style>