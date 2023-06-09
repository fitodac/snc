<script setup>
defineProps({ data: String })
</script>


<template>
	<section class="px-6 xl:px-0">
		<div class="container global">
			<div 
				v-html="data"
				class="text-sm text-center" />
		</div>
	</section>
</template>