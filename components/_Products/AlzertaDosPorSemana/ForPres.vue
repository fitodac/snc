<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <div :id="data.hash">
        <section
            class="intro text-white bg-prod-alzerta-dos-por-semana pt-4 sm:pt-8 mt-4 sm:mt-8  relative px-0 xl:px-0 py-0 sm:py-0">
            <div class="max-w-3xl mx-auto pt-2 sm:pt-4">
                <h3 class="text-center text-xl sm:text-2xl font-bold px-4 sm:px-0">
                    <span v-html="data.formats.title1" class="text-prod-alzerta-rose"></span>
                    <span v-html="data.formats.title2" class="text-white"></span>
                </h3>
                <p v-html="data.formats.text" class="text-lg sm:text-xl text-center my-2 sm:my-4 px-4 sm:px-0"></p>
                <div class="grid grid-cols-2 sm:grid-cols-12 text-center text-white z-20 relative pb-10 sm:pb-20 bg-prod-alzerta-rose sm:bg-transparent">
                    <div class="col-span-1 sm:col-span-3 flex justify-center items-center">
                        <span v-html="data.formats.ribbon[0]" class="text-white mt-0 sm:mt-2"></span>
                    </div>
                    <div class="col-span-1 sm:col-span-2 flex justify-center items-center">
                        <img
                            :src="`${base_url}/${data.formats.ribbon[1]}`"
                            alt="icono de lista"
                            class="w-full h-auto mt-1 z-10 relative">
                    </div>
                    <div class="col-span-1 sm:col-span-3 px-6 justify-center items-center">
                        <img
                            :src="`${base_url}/${data.formats.ribbon[2]}`"
                            alt="icono de lista"
                            class="w-full h-auto mt-1 z-10 relative">
                    </div>
                    <div class="col-span-1 sm:col-span-4 flex justify-center items-center">
                        <span v-html="data.formats.ribbon[3]" class="mt-0 sm:mt-2"></span>
                    </div>
                    <img :src="`${base_url}/${data.formats.ribbonDrawing}`"
                         class="opacity-90 w-[100%] absolute block ml-2 sm:ml-20 -left-32 bottom-0 z-0"
                         alt=""/>
                </div>

                <div class="bg-prod-alzerta-rose h-20 -mt-52 absolute w-full left-0 z-2">&nbsp;
                </div>
            </div>
        </section>
        <section class="px-6 xl:px-0 py-2 sm:py-4">
            <div class="max-w-4xl mx-auto pt-2 sm:pt-4">
                <h3 class="text-center text-prod-alzerta-rose text-xl sm:text-2xl font-bold px-4 sm:px-0 py-4 sm:py-12" v-html="data.presentations.title"></h3>

                <div class="grid grid-cols-2 sm:grid-cols-3">
                    <div class="col-span-1 sm:col-span-1 text-center" v-for="(item, pc_fp) in data.presentations.circles"
                         :key="'pc_fp'+pc_fp"
                    >
                        <img
                            :src="`${base_url}/${item}`"
                            alt="icono de lista"
                            class="w-[80%] h-auto mt-1 inline-block px-2 sm:px-8 pb-2 sm:pb-4">
                        <img
                            :src="`${base_url}/${data.presentations.squares[pc_fp]}`"
                            alt="icono de lista"
                            class="w-[150vw] h-auto mt-1 inline-block">

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
