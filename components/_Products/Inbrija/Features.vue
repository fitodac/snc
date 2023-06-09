<script setup>
defineProps({ data: String })
const base_url = window.location.origin
</script>


<template>
	<div class="px-6 xl:px-0">
        <div class="max-w-3xl mx-auto">
            <h4
                v-if="data.title"
                class="text-prod-inbrija-500 leading-tight text-center text-base md:text-lg tracking-tight my-4 sm:my-6"
                v-html="data.title" />

            <div class="grid grid-cols-5 sm:grid-cols-5">
                <div v-for="(block, bli) in data.blocks" :key="'bli'+bli"
                    class="col-span-2 sm:col-span-1 text-center my-2 sm:my-4">
                    <img
                        :src="`${base_url}/${block.icon}`"
                        alt="icono"
                        class="w-12 mt-1 md:w-16 inline-block">
                    <h5 v-html="block.title" class="text-center font-bold text-sm mt-0 sm:mt-4"></h5>
                    <p v-html="block.info" class="text-center text-xs"></p>
                </div>
            </div>
        </div>
	</div>
</template>
