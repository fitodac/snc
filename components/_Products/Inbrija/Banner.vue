<script setup>
defineProps({ data: String })
const base_url = window.location.origin
</script>


<template>
	<div class="px-6 xl:px-0">
        <div class="max-w-2xl mx-auto">

            <div class="grid grid-cols-4 sm:grid-cols-5 bg-prod-inbrija rounded-2xl px-4 sm:px-16 py-4 sm:py-8">
                <div class="col-span-4 sm:col-span-3 text-white">
                    <h3 v-html="data.title" class="text-prod-inbrija-yellow text-xl font-bold pb-4 sm:pb-6"></h3>
                    <ul
                        v-if="data.list"
                        class="grid gap-y-2 leading-none">
                        <li
                            v-for="(li, idx) in data.list"
                            :key="'li_ca'+idx"
                            class="leading-relaxed flex gap-x-2">
                            <i class="bg-white w-1 h-1 rounded-full block top-2.5 relative"></i>
                            <div
                                v-html="li"
                                class="leading-tight text-sm flex-1"/>
                        </li>
                    </ul>
                </div>
                <div class="col-span-4 sm:col-span-2 text-center">
                    <img
                        :src="`${base_url}/${data.img}`"
                        alt="icono"
                        class="w-32 sm:w-52 mt-1 pb-4 sm:pb-8 inline-block">
                </div>

            </div>

		</div>
	</div>
</template>
