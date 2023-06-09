<script setup>
defineProps({data: String})
const base_url = window.location.origin
</script>


<template>
    <div class="px-6 xl:px-0">
        <div class="bg-prod-inbrija p-4 sm:p-20 text-white">
            <div class="container global">
                <h3 class="text-2xl">
                    <span v-html="data.pretitle" class="text-prod-inbrija-yellow"></span>
                    <span v-html="data.title"></span>
                </h3>
                <p v-html="data.subtitle" class="text-2xl font-bold pb-4 sm:pb-16"></p>
                <div class="grid grid-cols-4 sm:grid-cols-6">
                    <div class="col-span-4 sm:col-span-2 order-1 sm:order-1">
                        <ul class="grid gap-y-7">
                            <li
                                class="flex gap-x-5 pb-0 sm:pb-20">
                                <img
                                    :src="`${base_url}/img/products/inbrija/list-icon.webp`"
                                    alt="icono de lista"
                                    class="w-5 h-6 md:w-6 md:h-7">

                                <div
                                    v-html="data.list[0]"
                                    class="leading-tight"/>
                            </li>
                            <li
                                class="flex gap-x-5"
                                :class="{'border-t border-prod-inbrija-yellow pt-5': i}">
                                <img
                                    :src="`${base_url}/img/products/inbrija/list-icon.webp`"
                                    alt="icono de lista"
                                    class="w-5 h-6 md:w-6 md:h-7">

                                <div
                                    v-html="data.list[1]"
                                    class="leading-tight"/>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-4 sm:col-span-2 text-center order-1 sm:order-2">
                        <img
                            :src="`${base_url}/${data.img}`"
                            alt="icono"
                            class="w-32 sm:w-60 mt-1 pb-4 sm:pb-8 inline-block">
                    </div>
                    <div class="col-span-4 sm:col-span-2 order-3 sm:order-3">
                        <ul class="grid gap-y-7">
                            <li
                                class="flex gap-x-5">
                            <img
                                :src="`${base_url}/img/products/inbrija/list-icon.webp`"
                                alt="icono de lista"
                                class="w-5 h-6 md:w-6 md:h-7">

                            <div
                                v-html="data.list[2]"
                                class="leading-tight"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
