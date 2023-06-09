<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <div :id="data.hash">
        <section class="intro relative px-6 xl:px-0 py-2 sm:py-0">
            <div class="max-w-2xl mx-auto pt-2 sm:pt-4">
                <h3 class="text-center text-prod-alzerta-rose text-xl sm:text-2xl font-bold px-4 sm:px-0 py-4 sm:py-8"
                    v-html="data.title"></h3>
                <p v-html="data.subtitle" class="text-center text-lg sm:text-xl"></p>
                <ul class="grid gap-y-7 text-left my-2 sm:my-12">
                    <li
                        v-for="(item, i) in data.list"
                        :key="'li_ef'+i"
                        class="flex gap-x-4 text-xl"
                    >

                        <img
                            :src="`${base_url}/${data.icon}`"
                            alt="icono de lista"
                            class="w-3 h-3 md:w-4 md:h-4 mt-1">
                        <div
                            v-html="item"
                            class="leading-tight"/>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
