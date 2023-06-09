<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <section class="text-white relative bg-alzerta-evidence px-6 xl:px-0 py-4 sm:py-8">
        <div class="max-w-4xl mx-auto relative">
            <img :src="`${base_url}/${data.evidenceDrawing}`"
                 class="inline-block h-5/6 w-auto mt-32 sm:-mt-44 absolute w-auto -left-64 -bottom-1 opacity-60"
                 alt=""/>
            <div class="grid grid-cols-3 sm:grid-cols-8 overflow-hidden ">
                <div class="col-span-1 sm:col-span-2 py-2 sm:py-4">
                    <p v-html="data.text[0]"
                       class="text-2xl sm:text-4xl"
                    ></p>
                </div>
                <div class="col-span-1 sm:col-span-3 flex items-center ">
                    <img :src="`${base_url}/${data.evidenceSign}`"
                         class="inline-block w-full h-auto mt-10 sm:-mt-44 "
                         alt=""/>
                </div>
                <div class="col-span-3 sm:col-span-3 text-right py-2 sm:py-8">
                    <div class="sm:mr-2 sm:mr-6">
                        <p v-html="data.text[1]"
                           class="text-4xl sm:text-6xl"
                        ></p>
                        <p v-html="data.text[2]"
                           class="text-2xl sm:text-4xl"
                        ></p>
                        <img :src="`${base_url}/${data.logo}`"
                             class="inline-block mb-2 sm:mb-4 w-64 h-auto my-4 sm:my-6"
                             alt=""/>
                    </div>
                    <a class="bg-prod-alzerta-rose hover:bg-prod-alzerta-rose-700 text-white font-bold py-2 px-4 rounded rounded-3xl px-4 sm:px-6 py-2 sm:py-4 inline-block"
                       href="#"
                       v-html="data.btnText">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
