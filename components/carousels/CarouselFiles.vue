<script setup>
import Slider from './CarouselLayout'
import Image from './CarouselImage'
import BtnIconDownload from '../ButtonIconDownload'
import sliderProps from '@/composables/sliderProps'

const props = defineProps({...sliderProps})
</script>


<template>
	<div>
		<Slider :data="data" :title="title" :subtitle="subtitle" :color="color">
			<swiper-slide 
				v-for="p in data" 
				:key="Math.floor(Math.random() * 1000000).toString()">

				<a :href="p.file.url" target="_blank">
					<Image :src="p.image" :alt="p.title" />
				</a>

				<h3 class="text-lg font-medium leading-tight mt-1.5" v-html="p.title" />
				<div 
					v-if="p.description" 
					class="text-sm leading-tight mt-2">
					{{ p.description }}
				</div>

				<div class="mt-3">
					<a 
						:href="p.file.url" 
						target="_blank"
						download
						class="inline-flex transition-all hover:opacity-80">
						<BtnIconDownload />
					</a>
				</div>

			</swiper-slide>
		</Slider>
	</div>
</template>