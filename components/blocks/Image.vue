<script setup>
import getImage from '@/composables/getImage'

const props = defineProps({ data: Object })
</script>

<template>
	<div class="px-6 2xl:px-0">
		<div 
			class="py-8 mx-auto flex"
			:class="data.attrs.align === 'full' ? 'max-w-full' : 'max-w-5xl'">
			<div 
				v-html="data.innerHTML"
				class="w-full"/>
		</div>
	</div>
</template>