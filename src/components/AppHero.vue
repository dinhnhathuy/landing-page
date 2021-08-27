<template>
  <div class="relative px-5 lg:px-20">
    <div class="absolute top-0 -right-14">
      <img src="../assets/images/decore-1.svg" class="w-11/12" alt="" />
    </div>
    <div class=" absolute -left-1/3 top-0">
      <span class="dot"></span>
    </div>
    <app-header></app-header>
    <hero-content></hero-content>
  </div>
</template>

<script>
import AppHeader from "./hero/AppHeader.vue";
import HeroContent from "./hero/HeroContent.vue";
export default {
  components: {
    AppHeader,
    HeroContent,
  },
};
</script>

<style lang="scss" scoped>
.dot {
  height: 478px;
  width: 478px;
  background-color: #D5AEE4;
  opacity: 0.3;
  filter: blur(150px);
  border-radius: 50%;
  display: inline-block;
}
</style>