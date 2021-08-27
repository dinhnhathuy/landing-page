<template>
    <section class="px-10 lg:px-32 mt-10 xl:mt-20">
        <div class="flex flex-col md:flex-row relative justify-center">
            <div class="w-full md:w-7/12 text-left mb-8">
                <p class="text-md font-medium mb-4">Easy and Fast</p>
                <h3 class="text-5xl font-bold mb-8" style="font-family: 'Volkhov', serif">Book your next trip <br>In 3 easy steps</h3>
                <div>
                    <div class="flex flex-row">
                        <img class="w-12 mr-4" src="../assets/images/book/destination.svg" alt="">
                        <div class="py-4 w-10/12">
                            <h5 class="text-xs font-bold">Choose Destination</h5>
                            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <img class="w-12 mr-4" src="../assets/images/book/destination.svg" alt="">
                        <div class="py-4 w-10/12">
                            <h5 class="text-xs font-bold">Choose Destination</h5>
                            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <img class="w-12 mr-4" src="../assets/images/book/destination.svg" alt="">
                        <div class="py-4 w-10/12">
                            <h5 class="text-xs font-bold">Choose Destination</h5>
                            <p class="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="w-full md:w-5/12 flex justify-center relative">
                <div class="w-8/12 md:w-full lg:w-8/12 shadow-md p-6 md:absolute relative bottom-0 left-0 rounded-3xl z-20 bg-white">
                    <div class="rounded-3xl mb-3">
                        <img src="../assets/images/book/book-1.jpg" alt="">
                    </div>
                    <div class="text-left mb-3">
                        <h5 class="text-lg font-medium">Trip To Greece</h5>
                        <p class="text-sm text-gray-600">14-29 June <span>|</span> by Robbin joseph</p>
                    </div>
                    <div class="flex flex-row mb-4">
                        <span class="w-9 h-9 bg-gray-100 rounded-full p-1.5 mr-4"><i class="fas fa-leaf"></i></span>
                        <span class="w-9 h-9 bg-gray-100 rounded-full p-1.5 mr-4"><i class="far fa-map"></i></span>
                        <span class="w-9 h-9 bg-gray-100 rounded-full p-1.5"><i class="fas fa-location-arrow"></i></span>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="text-sm text-gray-600"><span><i class="far fa-building"></i></span> 24 people going</p>
                        <span><i class="far fa-heart"></i></span>
                    </div>
                </div>
                <div class="absolute w-64 h-28 bg-white z-30 shadow-md rounded-2xl bottom-12 right-0 p-3">
                    <div class="flex flex-row">
                        <div class="w-12 h-12 mr-4 rounded-full overflow-hidden">
                            <img src="../assets/images/book/book-2.png" alt="">
                        </div>
                        <div class="text-left">
                            <p class="text-sm">Ongoing</p>
                            <h5 class="text-lg font-medium">Trip to rome</h5>
                            <p class="text-sm">40% <strong>completed</strong></p>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-1 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style="width:40%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-700"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" absolute top-6 right-6 z-10">
                    <span class="dot"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.dot {
  height: 350px;
  width: 350px;
  background-color: #59B1E6;
  opacity: 0.3;
  filter: blur(100px);
  border-radius: 50%;
  display: inline-block;
}
</style>