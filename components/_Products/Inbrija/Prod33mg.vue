<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const base_url = window.location.origin
const alt = `INBRIJA® 33 mg 92 cápsulas duras CN 732440.9`
</script>


<template>
	<section class="px-6 xl:px-0">
		<div class="max-w-xl mx-auto">
			<div class="flex justify-center">
				<img 
					v-if="width >= 700"
					:src="`${base_url}/img/products/inbrija/product-33mg-lg.webp`" 
					:alt="alt"
					class="w-full">

				<img 
					v-else
					:src="`${base_url}/img/products/inbrija/product-33mg-sm.webp`" 
					:alt="alt"
					class="w-full max-w-sm">
			</div>
		</div>
	</section>
</template>