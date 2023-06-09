<script setup>
const props = defineProps({ data: Object })
</script>

<template>
<div class="px-6 2xl:px-0">
	<div class="max-w-5xl mx-auto">
		<div class="text-white pt-8 pb-12 select-none md:pt-8 md:pb-20">
			<p 
				v-if="data.attrs.data.small_title" 
				class="text-sm uppercase font-medium md:text-base">
				{{ data.attrs.data.small_title }}
			</p>
			
			<h2 
				v-if="data.attrs.data.page_title" 
				class="text-3xl leading-none font-bold select-none 
				sm:text-4xl sm:leading-none 
				md:text-5xl md:leading-none">
				{{ data.attrs.data.page_title }}
			</h2>
			
			<h3 
				v-if="data.attrs.data.intro"
				class="font-light leading-tight mt-2 md:text-xl md:leading-tight md:mt-3">
				{{ data.attrs.data.intro }}
			</h3>
		</div>
	</div>
</div>
</template>