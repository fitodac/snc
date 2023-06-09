<script setup>
defineProps({ bg: String })
</script>

<template>
<section 
	class="px-6 relative 2xl:px-0
	
	before:content-[''] 
	before:h-screen 
	before:absolute 
	before:inset-x-0 
	before:bottom-full"
	
	:class="`bg-${bg} before:bg-${bg}`">
</section>
</template>