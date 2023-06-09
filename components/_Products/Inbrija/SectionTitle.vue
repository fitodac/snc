<script setup>
defineProps({ data: String })
</script>


<template>
<section class="bg-prod-inbrija text-white px-6 py-14 xl:px-0">
	<div class="container global">
		<div 
			v-html="data"
			class="text-2xl leading-snug md:text-4xl" />
	</div>
</section>
</template>