<script setup>
defineProps(['message']);
</script>

<template>
	<div v-show="message">
		<p class="text-sm leading-tight text-red-600 select-none">{{ message }}</p>
	</div>
</template>
