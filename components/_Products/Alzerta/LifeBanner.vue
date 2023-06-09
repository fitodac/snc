<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <section class="intro text-white relative bg-alzerta-life px-6 xl:px-0 py-2 sm:py-0">
        <div class="max-w-3xl mx-auto pt-2 sm:pt-4">
            <div class="grid grid-cols-4 sm:grid-cols-4">
                <div class="col-span-4 sm:col-span-2 hidden sm:block">
                    <img :src="`${base_url}/${data.lifeDrawing}`"
                         class="opacity-50 h-40 sm:h-80 w-auto"
                         alt=""/>
                </div>
                <div class="col-span-4 sm:col-span-2 flex items-center">
                    <div class="w-full text-right">
                        <img :src="`${base_url}/${data.logo}`"
                             class="inline-block mb-0 sm:mb-4 w-32 sm:w-64 h-auto"
                             alt=""/>
                        <p v-html="data.headline"
                           class="text-3xl sm:text-6xl font-bold"
                        ></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
