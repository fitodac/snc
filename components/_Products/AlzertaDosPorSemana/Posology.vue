<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <div :id="data.hash">
        <section class="intro relative px-6 xl:px-0 py-2 sm:py-0 text-center">
            <div class="max-w-3xl mx-auto pt-2 sm:pt-4">
                <h3 v-html="data.title"
                    class="text-xl sm:text-2xl font-bold text-prod-alzerta-rose py-2 sm:py-4"
                ></h3>
                <p v-html="data.subtitle"
                   class="text-lg sm:text-xl my-2 sm:my-4"
                ></p>
                <ul class="grid gap-y-7 text-left my-2 sm:my-12">
                    <li
                        v-for="(item, i) in data.list"
                        :key="'li_po'+i"
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
                <div class="grid grid-cols-10 text-white">
                    <div class=" col-span-3 bg-prod-alzerta-rose border border-b-transparent border-l-transparent border-r-gray-300 px-0 py-2 sm:p-2 text-left" v-html="data.table[0][0]"></div>
                    <div class="col-span-1 bg-prod-alzerta-rose border border-b-transparent border-l-transparent border-r-gray-300 px-0 py-2 sm:p-2 font-bold"
                         v-for="(item, ti_po) in data.table[0].slice(1)"
                         :key="'ti_po'+ti_po"
                         v-html="item"
                    ></div>
                    <div class="col-span-3 bg-prod-alzerta-dos-por-semana-tableblue border border-t-transparent border-l-transparent border-r-gray-300 p-2 text-left px-1 sm:px-8" v-html="data.table[1][0]"></div>
                    <div class="col-span-1 bg-prod-alzerta-dos-por-semana-tableblue border border-t-transparent border-l-transparent border-r-gray-300 p-2 flex items-center justify-center" v-for="(item, ti_po2) in data.table[1].slice(1)"
                         :key="'ti_po2'+ti_po2"
                    >
                        <img v-if="item > 0"
                            :src="`${base_url}/${data.circleIcon}`"
                            alt="icono de circulo"
                            class="w-5 h-5 md:w-8 md:h-8 mt-1">

                    </div>
                    <div class="col-span-3 bg-prod-alzerta-dos-por-semana-tableblue border border-b-transparent border-t-transparent border-l-transparent border-r-gray-300 p-2 text-left px-1 sm:px-8" v-html="data.table[2][0]"></div>
                    <div class="col-span-1 bg-prod-alzerta-dos-por-semana-tableblue border border-b-transparent border-t-transparent border-l-transparent border-r-gray-300 p-2 flex items-center justify-center" v-for="(item, ti_po3) in data.table[2].slice(1)"
                         :key="'ti_po3'+ti_po3"
                    >
                        <img v-if="item > 0"
                             :src="`${base_url}/${data.squareIcon}`"
                             alt="icono de cuadrado"
                             class="w-5 h-5 md:w-8 md:h-8 mt-1">
                    </div>
                    <div class="col-span-3 bg-prod-alzerta-rose border border-t-transparent border-prod-alzerta-rose pt-1 text-left"></div>
                    <div class="col-span-1 bg-prod-alzerta-rose border border-t-transparent border-prod-alzerta-rose pt-1" v-for="(item, ti_po3) in data.table[2].slice(1)"
                         :key="'ti_po3'+ti_po3"
                    ></div>

                </div>


                <div v-html="data.text" class="mt-2 sm:mt-8 text-prod-alzerta-rose text-lg sm:text-xl"></div>
            </div>
        </section>
    </div>
</template>
