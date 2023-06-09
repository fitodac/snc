<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <section class="intro text-prod-alzerta bg-prod-alzerta-paleblue px-6 xl:px-0 py-4 sm:py-8 my-0 sm:my-12">
        <div class="max-w-6xl mx-auto">
            <div v-for="(item, pi_pa) in data"
                 class=""
                 :ref="'pi_pa'+pi_pa"
            >
                <div class="grid grid-cols-1 sm:grid-cols-6 gap-2 sm:gap-8">
                    <div class="col-span-1 sm:col-span-2 flex items-center">
                        <img :src="`${base_url}/${item.image}`"
                             class="inline-block "
                             alt=""/>
                    </div>
                    <div v-if="pi_pa < 2" class="col-span-1 sm:col-span-4 flex items-center sm:border-b-prod-alzerta sm:border
                    sm:border-t-transparent sm:border-l-transparent sm:border-r-transparent
">
                        <div class="py-4 sm:py-20">
                            <h3 v-html="item.title"
                                class="text-2xl sm:text-3xl font-bold py-2 sm:py-12 pb-2 sm:py-4">
                            </h3>
                            <p v-if="item.text" v-html="item.text"></p>
                        </div>
                    </div>
                    <div v-else class="col-span-1 sm:col-span-4 flex items-center">
                        <div class="py-4 sm:py-20">
                            <h3 v-html="item.title"
                                class="text-2xl sm:text-3xl font-bold py-2 sm:py-12 pb-2 sm:py-4">
                            </h3>
                            <p v-if="item.text" v-html="item.text"></p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>
