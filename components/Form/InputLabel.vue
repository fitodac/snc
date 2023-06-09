<script setup>
defineProps(['value']);
</script>

<template>
	<label class="text-purple text-sm font-medium leading-none block select-none">
		<span v-if="value">{{ value }}</span>
		<span v-else><slot /></span>
	</label>
</template>