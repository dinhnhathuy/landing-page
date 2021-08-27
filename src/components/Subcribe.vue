<template>
    <section class="p-6 lg:p-20">
        <div class="relative">
            <div class="p-6 lg:p-24 bg-purple-100 z-10 subcribe-wrapper relative overflow-hidden">
                <h3 class="text-xl lg:text-3xl font-semibold text-gray-500">Subscribe to get information, latest news and other interesting offers about Cobham</h3>
                <div class="mt-16 flex justify-center">
                    <div class="p-6 md:w-96 bg-white rounded-lg relative z-10">
                        <span class="absolute left-5 top-6"><i class="far fa-envelope w-6"></i></span>
                        <input  type="email" class="w-10/12 focus:outline-none border-none">
                    </div>
                    <button class="p-5 px-10 ml-10 bg-yellow-600 rounded-xl text-white">Subscribe</button>
                </div>
                <img src="../assets/images/subcribe/decore-1.svg" alt="" class="absolute bottom-0 left-4 opacity-10">
                <img src="../assets/images/subcribe/decore-1.svg" alt="" class="absolute top-0 -right-12 w-3/12 opacity-10" style="transform: rotate(-90deg);">
            </div>
            <div class="w-16 h-16 absolute z-20 rounded-full p-3 -top-6 -right-6 subcribe-send">
                <img src="../assets/images/send.svg" alt="">
            </div>
            <div class="absolute -right-20 -bottom-20">
                <img src="../assets/images/subcribe/decore-2.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.subcribe-wrapper {
    border-radius: 129px 20px 20px 20px;
}
.subcribe-send {
    background: linear-gradient(201.65deg, #747DEF 10.27%, #5E3BE1 100%);
}
@media only screen and (max-width:768px) {
    .subcribe-wrapper {
        border-radius: 20px 20px 20px 20px;
    }
}
</style>