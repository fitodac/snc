<script setup>
defineProps({data: String})
const base_url = window.location.origin
</script>

<template>
    <div class="px-6 xl:px-0 bg-[url('/img/products/inbrija/in-bg.jpg')] bg-[cover] bg-[center top] bg-[no-repeat]">
        <div class="max-w-3xl mx-auto py-4 sm:py-12">
            <h3 class="leading-none text-xl sm:text-2xl py-2 sm:py-6">
                <span v-html="data.title" class="font-bold"></span>
                <span v-html="data.name"></span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-5">
                <div class="col-span-1 sm:col-span-3">
                    <ul
                        v-if="data.list"
                        class="grid gap-y-2">
                        <li
                            v-for="(li, lin) in data.list"
                            :key="'li_pa'+lin"
                            class="leading-tight flex gap-x-2">

                            <img
                                :src="`${base_url}/img/products/inbrija/list-icon.webp`"
                                alt="icono de lista"
                                class="w-5 h-5 block top-1 relative">

                            <div
                                v-html="li"
                                class="leading-snug flex-1"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="bg-prod-inbrija
                                my-2 sm:my-10
								text-lg leading-tight
								px-8
								sm:px-12 py-4 sm:py-12
								rounded-2xl
								text-lg
								sm:text-2xl relative"
            >
                <i class="bg-prod-inbrija-yellow absolute -left-3.5 sm:-left-8 p-1 sm:p-2 rounded-full   ">
                <img
                    :src="`${base_url}/img/products/inbrija/in-icon-patient.svg`"
                    alt="icono"
                    class="w-6 h-6 sm:w-12 sm:h-12  block top-1 relative">
                </i>

                <div class="text-white patient-description font-bold">
                    <p v-for="(item, pa_in) in data.banner" :ref="'pa_in'+pa_in" v-html="item" :class="{'pt-4': pa_in > 0}">

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.patient-description span{
    color: #F9C606;
}

</style>
