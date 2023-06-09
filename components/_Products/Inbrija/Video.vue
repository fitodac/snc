<script setup>
defineProps({ data: String })
</script>


<template>
	<div class="px-6 xl:px-0">
        <div class="max-w-3xl mx-auto text-center">
            <h3 class="leading-none text-xl sm:text-3xl py-2 sm:py-6">
                <span v-html="data.title" class="font-bold"></span>
            </h3>
            <p v-html="data.content" class="text-base sm:text-2xl py-4 sm:py-6"></p>
            <div class="video-container w-full h-0 rounded-2xl relative overflow-hidden my-4 sm:mt-6 sm:mb-8 bg-gray-200"
                 style="padding-bottom: 56.25%"
            >
                <div class="youtube_player video w-full h-full absolute top-0 left-0"
                     :videoID="data.video"
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
	</div>
</template>
