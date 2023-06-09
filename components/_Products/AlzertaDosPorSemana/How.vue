<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <div :id="data.hash">
        <div class="relative">
            <div class="intro text-white bg-prod-alzerta-dos-por-semana relative px-6 xl:px-0 py-4 sm:py-12">
                <div class="max-w-4xl mx-auto pt-2 sm:pt-4">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2 sm:py-4">
                        <div class="col-span-1 sm:col-span-1 pr-4 sm:pr-10">
                            <div v-html="data.apply.title"
                                 class="font-bold text-3xl sm:text-4xl"
                            ></div>
                            <span v-html="data.apply.subtitle1"
                                  class="text-xl sm:text-2xl font-bold"></span>
                            <span v-html="data.apply.subtitle2"
                                  class="text-xl sm:text-2xl font-bold text-prod-alzerta-rose"></span>

                        </div>
                        <div class="col-span-1 sm:col-span-1 flex gap-4"
                             v-for="(item, ho_in) in data.apply.columns"
                        >
                            <div
                                class="w-3 sm:w-5 h-3 sm:h-5 p-3 sm:p-5 h-3 sm:h-5 border-2 border-white rounded-3xl relative flex items-center justify-center">
                                <span v-html="item.number" class="absolute text-xl sm:text-2xl white-text"></span>
                            </div>
                            <div v-html="item.text" class="text-lg sm:text-xl">

                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 py-2 sm:py-4">
                        <div class="col-span-2 sm:col-span-1 pr-4 sm:pr-10">
                            <div v-html="data.put.title"
                                 class="font-bold text-3xl sm:text-4xl"
                            ></div>
                            <span v-html="data.put.subtitle1"
                                  class="text-xl sm:text-2xl font-bold"></span>
                            <span v-html="data.put.subtitle2"
                                  class="text-xl sm:text-2xl font-bold text-prod-alzerta-rose"></span>

                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <span class="font-bold text-lg sm:text-xl" v-html="data.put.frontTitle"></span>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                                <div class="col-span-1 sm:col-span-1"
                                     v-for="(item, ho_pu) in data.put.frontImages"
                                >
                                    <img
                                        :src="`${base_url}/${item}`"
                                        alt="imagen de frente"
                                        class="w-full h-auto mt-1 z-10 relative">

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 py-2 sm:py-4">
                        <div class="col-span-2 sm:col-span-1 pr-4 sm:pr-10">

                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <span class="font-bold text-lg sm:text-xl" v-html="data.put.backTitle"></span>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                                <div class="col-span-1 sm:col-span-1"
                                     v-for="(item, ho_pu) in data.put.backImages"
                                >
                                    <img
                                        :src="`${base_url}/${item}`"
                                        alt="imagen de atrás"
                                        class="w-full h-auto mt-1 z-30 relative">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white h-8 z-20 relative">

            </div>
            <div class="bg-prod-alzerta-dos-por-semana mx-auto py-4 sm:py-8">
                <div class="text-center max-w-4xl mx-auto">
                    <a class="bg-prod-alzerta-rose hover:bg-prod-alzerta-rose-700 text-white font-bold py-2 px-4 rounded-tl-3xl rounded-br-3xl px-2 sm:px-8 py-2 sm:py-2 inline-block text-lg sm:text-xl my-2 sm:my-4 mx-4 sm:mx-40 z-30 relative"
                       v-for="(item, dbh_in) in data.buttons"
                       :key="'dbh_in'+dbh_in"
                       href="#"
                       v-html="item">
                    </a>
                </div>
            </div>
            <div class="max-w-3xl relative mx-auto overflow-y-visible">
                <img
                    :src="`${base_url}/${data.put.putDrawing}`"
                    alt=""
                    class="absolute bottom-0 -left-20 sm:w-[75%] sm:-ml-[22%] z-10">
            </div>
        </div>
        <div class="max-w-3xl mx-auto pt-2 sm:pt-4 px-6 xl:px-0">
            <h3 class="text-center text-prod-alzerta-rose text-xl sm:text-2xl font-bold px-4 sm:px-0 py-4 sm:py-8"
                v-html="data.twice.title"></h3>
            <div class="max-w-xl mx-auto">
                <ul class="grid gap-y-7 text-left my-2 sm:my-12">
                    <li
                        v-for="(item, i) in data.twice.list"
                        :key="'li_tw'+i"
                        class="flex gap-x-4 text-xl"
                    >

                        <img
                            :src="`${base_url}/${data.icon}`"
                            alt="icono de lista"
                            class="w-3 h-3 md:w-4 md:h-4 mt-1">
                        <div
                            v-html="item"
                            class="leading-tight"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
