<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const base_url = window.location.origin
const alt = `ESTEVE pone a disposición de los pacientes y los profesionales sanitarios un call center de enfermeros/as para resolver las dudas que puedan surgir con el uso de INBRIJA®`
</script>


<template>
	<div class="px-6 xl:px-0">
		<div class="max-w-2xl mx-auto">
			<div class="grid gap-5">

				<h4 class="text-center font-medium">Programa para pacientes</h4>	
				
				<div class="flex justify-center">
					<img 
						v-if="width >= 700"
						:src="`${base_url}/img/products/inbrija/banner-patients-lg.webp`" 
						:alt="alt"
						class="w-full">

					<img 
						v-else
						:src="`${base_url}/img/products/inbrija/banner-patients-sm.webp`" 
						:alt="alt"
						class="w-full max-w-xs">
				</div>

			</div>
		</div>
	</div>
</template>