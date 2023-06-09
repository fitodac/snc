<script setup>
defineProps({data: String})
</script>


<template>
    <div class="px-6 xl:px-0">
        <div class="max-w-3xl mx-auto">

            <div
                class="bg-prod-inbrija-500 text-lg leading-tight px-4 sm:px-8 py-4 sm:py-8 rounded-2xl xl:text-2xl">
                <h4
                    class="text-white font-bold leading-tight text-base md:text-lg tracking-tight pb-2"
                    v-html="data.title"/>

                <div class="grid grid-cols-2 sm:grid-cols-4 text-white gap-0 sm:gap-8">
                    <div v-for="(item, li) in data.list" :ref="'it_me'+li"  class="col-span-2 sm:col-span-1 p-0">
                        <ul>
                            <li class="leading-tight flex gap-x-4">
                                <i class="bg-white w-1 h-1 rounded-full block top-2.5 relative"></i>
                                <div
                                    v-html="item"
                                    class="leading-none flex-1 text-base" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
