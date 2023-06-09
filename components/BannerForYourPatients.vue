<script setup>
defineProps({ data: Array })
</script>

<template>
<section class="banner banner-patient">
	<div class="max-w-5xl mx-auto px-6">
		<h3 class="text-white text-2xl text-center select-none sm:text-4xl">
			<span class="font-light pr-1">PARA</span> 
			<span class="font-bold">TUS PACIENTES</span>
		</h3>

		<div class="grid gap-10 mt-12 md:mt-20 md:grid-cols-2">
			<div 
				v-for="item in data"
				:key="Math.floor(Math.random() * 1000000).toString()"
				class="">
				<a :href="item.link" target="_blank" class="select-none">
					<span 
						v-if="item.img" 
						class="max-w-xs h-[10.5rem] mx-auto block 
						sm:max-w-sm sm:h-52 
						md:max-w-lg md:w-full md:h-48 
						lg:w-full lg:h-60">
						<img 
							:src="item.img" 
							:alt="item.title" 
							class="w-full h-full object-cover rounded-2xl">
					</span>

					<h4 
						v-if="item.title"
						class="text-lg text-white font-medium mt-3 md:text-3xl">
						{{ item.title }}
					</h4>

					<div 
						v-if="item.description"
						class="text-white leading-tight font-light mt-1">
						{{ item.description }}
					</div>
				</a>
			</div>
		</div>

	</div>
</section>
</template>