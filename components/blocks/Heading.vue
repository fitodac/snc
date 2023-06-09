<script setup>
const props = defineProps({ data: Object })

let className = ``
</script>

<template>
	<div class="px-6 2xl:px-0">
		<div class="container max-w-5xl mx-auto my-8">
			<div v-html="data.innerHTML" />
		</div>
	</div>
</template>