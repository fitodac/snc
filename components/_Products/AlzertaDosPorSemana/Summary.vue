<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <div :id="data.hash">
        <section class="intro text-white relative bg-alzerta-dos-summary px-6 xl:px-0 py-2 sm:py-0">
            <div class="max-w-3xl mx-auto pt-2 sm:pt-4">
                <div class="grid grid-cols-4 sm:grid-cols-6">
                    <div class="col-span-4 sm:col-span-2 hidden sm:block">
                        <img :src="`${base_url}/${data.headlineDrawing}`"
                             class="opacity-90 h-40 sm:h-80 w-auto"
                             alt=""/>
                    </div>
                    <div class="col-span-4 sm:col-span-4 flex items-center">
                        <div class="w-full text-right">
                            <img :src="`${base_url}/${data.headlineLogo}`"
                                 class="inline-block mb-0 sm:mb-4 w-48 sm:w-80 h-auto"
                                 alt=""/>
                            <p class="text-3xl sm:text-5xl font-bold">
                                <span v-html="data.headlineRed+' '" class="text-prod-alzerta-rose"></span>

                                <span v-html="data.headlineWhite"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="intro px-6 xl:px-0 py-2 sm:py-0 my-2 sm:my-6">
            <div class="max-w-3xl mx-auto pt-2 sm:pt-4 text-center">
                <h3 v-html="data.title"
                    class="text-xl sm:text-2xl font-bold text-prod-alzerta-rose py-2 sm:py-4"
                ></h3>
                <p v-for="(paragraph, pi_su) in data.paragraphs"
                   :ref="'pi_su'+pi_su"
                   v-html="paragraph"
                   class="leading-tight py-2 sm:py-2 text-lg sm:text-xl"
                ></p>
            </div>
        </section>
        <section class="intro text-white relative bg-alzerta-dos-summary-b px-6 xl:px-0 py-2 sm:py-0">
            <div class="max-w-6xl mx-auto pt-0 relative">
                <div class="grid grid-cols-4 sm:grid-cols-6">
                    <img :src="`${base_url}/${data.sublineDrawing}`"
                         class="opacity-90 w-[100%] absolute block ml-2 sm:ml-20"
                         alt=""/>
                    <div class="col-span-4 sm:col-span-1 hidden sm:block relative">
                    </div>
                    <div class="col-span-4 sm:col-span-3 flex items-center">
                        <div class="w-full text-right">
                            <div class="-mr-0 sm:-mr-20">
                                <p v-html="data.sublineBig" class="mr-1 sm:mr-9 mt-1 sm:mt-32 text-3xl sm:text-4xl text-prod-alzerta-rose font-bold"></p>
                                <p v-html="data.sublineMedium" class="text-2xl sm:text-3xl text-prod-alzerta-rose font-bold"></p>
                            </div>
                            <div class="flex items-start justify-end mt-2 sm:mt-4 mr-2 sm:-mr-16">
                                <span v-html="data.sublineSmall"
                                      class="text-xl sm:text-2xl text-prod-alzerta-rose font-bold -mt-8"
                                ></span>
                                <img :src="`${base_url}/${data.sublineLogo}`"
                                     class="inline-block mb-0 sm:mb-4 w-48 sm:w-64 h-auto mb-2 sm:mb-8"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 sm:col-span-2 flex items-end justify-end">
                        <a class="bg-prod-alzerta-rose hover:bg-prod-alzerta-rose-700 text-white font-bold py-2 px-4 rounded rounded-3xl px-4 sm:px-6 py-2 sm:py-4 mr-2 sm:mr-16 inline-blocks mb-2 sm:mb-8 mt-4 sm:mt-12"
                           href="#"
                           v-html="data.btnText">
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
