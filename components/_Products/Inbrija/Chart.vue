<script setup>
defineProps({ data: Object })

const base_url = window.location.origin
</script>


<template>
	<section class="px-6 xl:px-0">
		<div class="max-w-2xl mx-auto">
			
			<h4 v-html="data.title" class="leading-tight" />
			<div v-if="data.title" class="h-5" />

			<img 
				:src="`${base_url}/${data.image}`" 
				:alt="data.alt"
				class="w-full object-cover">

			<div v-if="data.caption" class="h-5" />
			<h5 v-html="data.caption" class="text-sm" />


		</div>
	</section>
</template>