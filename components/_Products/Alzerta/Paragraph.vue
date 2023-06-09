<script setup>
defineProps({data: String})
</script>


<template>
    <section class="pt-4 sm:pt-8 pb-4 sm:pb-16">
        <div class="max-w-3xl mx-auto text-center">
            <h3 v-html="data.title"
                class="text-prod-alzerta-lightblue text-2xl sm:text-3xl font-bold py-2 sm:py-6">
            </h3>
            <p v-html="data.text" class="leading-tight text-xl sm:text-2xl"></p>

        </div>
    </section>
</template>
