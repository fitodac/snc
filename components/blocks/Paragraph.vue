<script setup>
const props = defineProps({ data: Object })
</script>

<template>
	<div class="px-6 2xl:px-0">
		<div class="max-w-5xl pt-8 mx-auto">
			<div v-html="data.innerHTML" />
		</div>
	</div>
</template>