<script setup>
defineProps({ data: String })
const base_url = window.location.origin
</script>


<template>
	<div class="px-6 xl:px-0">
		<div class="container global">
            <div class="grid grid-cols-3 sm:grid-cols-3 gap-4" v-if="data.cards">
                <div class="col-span-3 sm:col-span-1 bg-prod-inbrija-yellow rounded-xl text-center p-4 sm:p-8">
                    <img
                        :src="`${base_url}/${data.cards[0].icon}`"
                        alt="icono"
                        class="w-36 mt-1 md:w-48 pb-4 sm:pb-8 inline-block">
                    <h5 v-html="data.cards[0].title" class="font-bold text-lg"></h5>
                    <p v-html="data.cards[0].info" class="text-lg leading-tight "></p>
                </div>
                <div class="col-span-3 sm:col-span-1 bg-prod-inbrija rounded-xl text-center p-4 sm:p-8">
                    <img
                        :src="`${base_url}/${data.cards[1].icon}`"
                        alt="icono"
                        class="w-36 mt-1 md:w-48 pb-4 sm:pb-8 inline-block">
                    <h5 v-html="data.cards[1].title" class="font-bold text-lg text-prod-inbrija-yellow"></h5>
                    <p v-html="data.cards[1].info" class="text-lg leading-tight text-white"></p>
                </div>
                <div class="col-span-3 sm:col-span-1 bg-prod-inbrija-500 rounded-xl text-center p-4 sm:p-8">
                    <img
                        :src="`${base_url}/${data.cards[2].icon}`"
                        alt="icono"
                        class="w-36 mt-1 md:w-48 pb-4 sm:pb-8 inline-block">
                    <h5 v-html="data.cards[2].title" class="font-bold text-lg text-prod-inbrija-yellow"></h5>
                    <p v-html="data.cards[2].info" class="text-lg leading-tight text-white"></p>
                </div>
            </div>
		</div>
	</div>
</template>
