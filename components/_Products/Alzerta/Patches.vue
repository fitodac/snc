<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <section class="intro text-white px-6 xl:px-0 py-4 sm:py-0 my-2 sm:my-4">
        <div class="max-w-3xl mx-auto">
            <div v-for="(item, pi_pa) in data"
                 class="pt-4 sm:pt-6"
                 :ref="'pi_pa'+pi_pa"
            >
                <h3 v-html="item.title"
                    class="text-prod-alzerta-lightblue text-2xl sm:text-3xl font-bold py-2 sm:py-12 text-center">
                </h3>
                <div class="text-center">
                    <img v-for="(image, pr_pa) in item.images"
                         :ref="'pr_pa'+pr_pa"
                         :src="`${base_url}/${image}`"
                         class="inline-block px-3 h-48 sm:h-80"
                         alt=""/>
                </div>

            </div>
        </div>
    </section>
</template>
