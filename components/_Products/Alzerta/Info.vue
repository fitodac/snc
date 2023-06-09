<script setup>
defineProps({data: String})
const base_url = window.location.origin
</script>


<template>
    <section class="pt-4 sm:pt-12 pb-4 sm:pb-16 bg-prod-alzerta-paleblue px-6 xl:px-0 mt-4 sm:mt-8">
        <div class="max-w-5xl mx-auto text-center">
            <h3 v-html="data.title"
                class="text-prod-alzerta-lightblue text-2xl sm:text-3xl font-bold py-2 sm:py-4">
            </h3>
            <p v-html="data.text" class="leading-tight text-xl sm:text-2xl"></p>
            <div class="grid grid-cols-1 sm:grid-cols-3 info-steps">
                <div
                    v-for="(item, si_in) in data.step_images"
                    :ref="'si_in'+si_in"
                    class="col-span-1 sm:col-span-1 overflow-visible pl-4 pr-12 sm:px-0">
                    <img :src="`${base_url}/${item}`"
                         class="block step-image max-w-none"
                         alt=""/>
                </div>
            </div>
            <img :src="`${base_url}/${data.logo}`"
                 class="inline-block w-32 sm:w-64 mt-4 sm:mt-16"
                 alt=""/>
        </div>
        <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-4 my-4 sm:my-6">
            <div
                v-for="(item, pi_in) in data.product_images"
                :ref="'pi_in'+pi_in"
                class="col-span-1 sm:col-span-1 overflow-visible pl-4 pr-12 sm:px-0 text-center">
                <img :src="`${base_url}/${item.image}`"
                     class="inline-block step-image"
                     alt=""/>
                <p v-html="item.text" class="text-center"></p>
            </div>
        </div>
        <div class="py-2 sm:py-4 text-center">
            <a class="bg-prod-alzerta-rose hover:bg-prod-alzerta-rose-700 text-white font-bold py-2 px-4 rounded-tl-3xl rounded-br-3xl px-4 sm:px-8 py-2 sm:py-4 inline-block text-lg sm:text-xl"
               href="#"
               v-html="data.btnText">
            </a>
        </div>
    </section>
</template>
