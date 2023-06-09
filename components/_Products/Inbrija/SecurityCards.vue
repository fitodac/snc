<script setup>
defineProps({ data: String })
const base_url = window.location.origin
</script>


<template>
	<div class="px-6 xl:px-0">
        <div class="max-w-2xl mx-auto">
            <div class="grid grid-cols-4 sm:grid-cols-2 gap-4 py-4 sm:py-6">
                <div class="col-span-4 sm:col-span-1 text-center bg-[#E5E4E8] px-4 sm:px-6 py-4 sm:py-8 pb-4 sm:pb-10 rounded-2xl">
                    <img
                        :src="`${base_url}/${data[0].image}`"
                        alt="icono"
                        class="h-32 sm:h-40 mt-1 md:w-48 pb-4 sm:pb-8 inline-block">
                    <p v-html="data[0].title" class="text-lg leading-tight "></p>
                </div>
                <div class="col-span-4 sm:col-span-1 text-center bg-[#E5E4E8] px-4 sm:py-6 py-4 sm:py-8 pb-4 sm:pb-10 rounded-2xl">
                    <img
                        :src="`${base_url}/${data[1].image}`"
                        alt="icono"
                        class="h-32 sm:h-40 mt-1 md:w-48 pb-4 sm:pb-8 inline-block">
                    <p v-html="data[1].title" class="text-lg leading-tight "></p>
                </div>
            </div>
		</div>
	</div>
</template>
