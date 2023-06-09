<script setup>
import { ref } from 'vue'

const props = defineProps({ 
	src: String, 
	alt: String,
	loading: Boolean
})

const loading = ref(props.loading ?? true)

const imageLoaded = el => loading.value = false
</script>

<template>
<div class="w-full">

	<figure v-if="src" class="w-full relative">
		<img 
			:src="src" 
			:alt="alt"
			class="w-full aspect-video object-cover rounded-xl"
			@load="imageLoaded">
		
		<div 
			v-if="loading"
			class="w-full h-full grid place-content-center top-0 absolute rounded-xl">
			<i class="border-4 border-gray-200 border-l-pink w-6 h-6 block rounded-full animate-spin"></i>
		</div>
	</figure>


	<div 
		v-else 
		class="bg-pink-200 text-pink-50 grid place-content-center aspect-video rounded-xl opacity-50">
		<i class="ri-camera-off-fill text-4xl"></i>
	</div>

</div>
</template>