<template>
  <div class="container flex flex-col min-h-screen max-w-full 2xl:max-w-7xl overflow-hidden">
    <app-hero></app-hero>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHero from './components/AppHero.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: {
    AppHero,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
