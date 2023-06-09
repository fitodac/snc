<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>


<template>
	<div class="max-w-5xl mx-auto">
		<div class="flex items-center gap-3 px-6 xl:px-0">

			<span class="font-semibold">Filtrar por</span>

			<div
				class="border border-gray-300 flex-1
								min-w-[280px] px-4 pt-1.5 pb-2
								relative sm:flex-none"
				:class="{'rounded-lg': !open, 'rounded-t-lg': open}"
				@mouseleave="open = false">
				<div
					class="leading-none flex items-center gap-1
								select-none cursor-pointer transition-all
								hover:text-prod-purple hover:border-prod-purple-500"
					@click="open = true">
					<span class="flex-1">Patología</span>
					<i class="ri-arrow-down-line top-px relative"></i>
				</div>

				<div
					class="bg-white border border-gray-200
									-left-px -right-px top-full absolute rounded-b-xl
									shadow-lg"
					:class="{'block': open, 'hidden': !open}">
					<ul class="text-sm font-medium">
						<li class="">
							<a href="#depresion-ansiedad" class="px-4 py-2 block hover:text-prod-purple">Depresión y ansiedad</a>
						</li>

						<li class="">
							<a href="#parkinson" class="px-4 py-2 block hover:text-prod-purple">Enfermedad de Parkinson</a>
						</li>

						<li class="">
							<a href="#alzheimer" class="px-4 py-2 block hover:text-prod-purple">Enfermedad de Alzheimer y Demencia</a>
						</li>

						

						<!-- <li class="">
							<NuxtLink
								href="/tratamientos/xeristar"
								class="px-4 py-2 block hover:text-prod-purple">
								Depresión / Ansiedad
							</NuxtLink>
						</li> -->
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>