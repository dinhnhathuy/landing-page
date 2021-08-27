<template>
    <nav id="nav" class="flex items-center justify-between flex-wrap p-4 md:p-8">
      <div class="flex items-center text-white mr-6 w-2/12 relative">
        <img src="../../assets/images/logo.svg" alt="">
      </div>
      <div class="block md:hidden relative">
        <button @click="isOpen = !isOpen">
          <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div id="main-nav" class="w-full flex-grow md:flex items-end md:w-auto relative">
        <div :class="isOpen ? '' : 'hidden'" class="nav">
            <a href="" class="nav-item">
                Destinations
            </a>
            <a href="#home" class="nav-item nav-item-main">
                Hotels
            </a>
            <a href="#home" class="nav-item nav-item-main">
                Flights
            </a>
            <a href="#home" class="nav-item nav-item-main">
                Bookings
            </a>
            <a href="#home" class="nav-item nav-item-main">
                Login
            </a>
            <a href="#home" class="nav-item nav-item-main">
                Sign Up
            </a>
            <a href="#home" class="nav-item">
                En <i class="arrow down m-1"></i>
            </a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      windowWidth: 0,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth < 768) return this.isOpen = false
      return this.isOpen = true
    }
  },
}
</script>

<style lang="scss" scoped>
.arrow {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>