<script setup>
defineProps({data: Object})

const base_url = window.location.origin
</script>

<template>
    <div :id="data.hash">
        <section class="intro text-white relative px-6 xl:px-0 py-2 sm:py-10 bg-prod-alzerta-dos-por-semana text-center mt-4 sm:mt-4">
            <div class="max-w-xl mx-auto pt-2 sm:pt-4 text-center mb-2 sm:mb-12">
                <h3 class="text-xl sm:text-2xl font-bold text-prod-alzerta-rose py-2 sm:py-4"
                >
                    <span v-html="data.line1"
                          class="text-white"
                    ></span><br>
                    <span v-html="data.line2"></span>
                </h3>
                <p v-html="data.text"
                   class="text-lg sm:text-xl my-2 sm:my-4"
                ></p>
            </div>
            <div class="max-w-2xl mx-auto">
                <div
                    class="video-container w-full h-0 rounded-2xl relative overflow-hidden my-4 sm:mt-6 sm:mb-8 bg-gray-200"
                    style="padding-bottom: 56.25%"
                >
                    <div class="youtube_player video w-full h-full absolute top-0 left-0"
                         :videoID="data.videoID"
                         theme="light"
                         width="100%"
                         height="100%"
                         rel="0"
                         controls="1"
                         showinfo="0"
                         autoplay="0"
                         mute="0"
                         loop="0"
                         loading="1">
                    </div>
                </div>
            </div>
            <a class="bg-prod-alzerta-rose hover:bg-prod-alzerta-rose-700 text-white font-bold py-2 px-4 rounded-tl-3xl rounded-br-3xl px-4 sm:px-8 py-2 sm:py-4 inline-block text-lg sm:text-xl my-4 sm:my-8"
               href="#"
               v-html="data.btnText">
            </a>

        </section>
    </div>
</template>
