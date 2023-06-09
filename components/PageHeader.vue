<script setup>
defineProps({
	bg: String,
	title: String
})
</script>


<template>
	<section 
		class="bg-[url('/img/bg-page-header.svg')] bg-no-repeat bg-right-top bg-70vw 
		text-white px-6 pt-28 pb-12 -mt-20 relative
		sm:pt-40 sm:pb-16 sm:-mt-32
		md:pt-60 md:-mt-48
		xl:px-0
		
		before:content-[''] 
		before:h-screen 
		before:absolute 
		before:inset-x-0 
		before:bottom-full"
		:class="`bg-${bg} before:bg-${bg}`">
		<div class="max-w-5xl mx-auto">
			<h1 
				v-html="title"
				class="text-4xl font-bold leading-none select-none sm:text-5xl md:leading-none lg:text-6xl" />
		</div>
	</section>
</template>