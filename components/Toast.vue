<script setup>
import gsap from 'gsap'

defineProps({
	message: String,
	color: String
})

onMounted(() => {
	gsap.to('#toast', { opacity: 1 })

	setTimeout(() => {
		gsap.to('#toast', { opacity: 0 })
	}, 5000)
})
</script>


<template>
	<div id="toast" class="right-2 bottom-2 fixed opacity-0 z-50 pointer-events-none">
		<div 
			class="bg-white border border-slate-100 max-w-28 py-3 px-6 rounded-md shadow-lg"
			:class="[`text-${color}`]">
			{{ message }}
		</div>
	</div>
</template>