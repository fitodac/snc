<script setup>
defineProps({data: String})
</script>


<template>
    <div class="px-6 xl:px-0">
        <div class="max-w-3xl mx-auto">
            <h4
                v-if="data.title"
                class="text-prod-inbrija-500 text-xl leading-tight md:text-2xl tracking-tight my-2 sm:my-6"
                v-html="data.title"/>

            <div class="grid grid-cols-4 sm:grid-cols-5 gap-4">
                <div class="col-span-4 sm:col-span-3">
                    <div class="bg-prod-inbrija pt-4 sm:pt-8 pb-4 sm:pb-12 px-4 sm:px-12 rounded-xl text-white">
                        <h5
                            v-html="data.cards[0].title"
                            class="font-bold leading-tight mb-4"/>
                        <ul
                            v-if="data.cards[0].list"
                            class="grid gap-y-2 leading-none">
                            <li
                                v-for="(li, idx) in data.cards[0].list"
                                :key="'li_ca'+idx"
                                class="leading-none flex gap-x-2">
                                <i class="bg-white w-1 h-1 rounded-full block top-2.5 relative"></i>
                                <div
                                    v-html="li"
                                    class="leading-none flex-1"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-4 sm:col-span-2">
                    <div class="bg-prod-inbrija-yellow pt-4 sm:pt-8 pb-4 sm:pb-12 px-4 sm:px-12 rounded-xl">
                        <h5
                            v-html="data.cards[1].title"
                            class="font-bold leading-tight mb-4"/>
                        <ul
                            v-if="data.cards[1].list"
                            class="grid gap-y-2 leading-none">
                            <li
                                v-for="(li, idx) in data.cards[1].list"
                                :key="'li_ca'+idx"
                                class="leading-none flex gap-x-2">
                                <i class="bg-gray-800 w-1 h-1 rounded-full block top-2.5 relative"></i>
                                <div
                                    v-html="li"
                                    class="leading-none flex-1"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
