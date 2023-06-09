<script setup>
const props = defineProps({ data: Object })
</script>

<template>
	<div v-html="data.innerHTML" />
</template>