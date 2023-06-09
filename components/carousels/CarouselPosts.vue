<script setup>
import { onMounted, ref } from 'vue'
import Slider from './CarouselLayout'
import Image from './CarouselImage'
import BtnIconLink from '../ButtonIconLink'
import sliderProps from '@/composables/sliderProps'

defineProps({...sliderProps})

const href = ref('/')

onMounted(() => {
	href.value = window.location.href.endsWith('/') ? window.location.href.slice(0,-1) : window.location.href
})
</script>


<template>
	<div>
		<Slider :data="data" :title="title" :subtitle="subtitle" :color="color">
			<swiper-slide 
				v-for="p in data" 
				:key="Math.floor(Math.random() * 1000000).toString()"
				class="max-w-[320px]">

				<Image :src="p.post.featured_image" :alt="p.post.title" />

				<h3 class="text-lg font-medium leading-tight mt-1.5" v-html="p.post.post_title" />
				<div 
					v-if="p.post.post_excerpt" 
					class="text-sm leading-tight mt-2">
					{{ p.post.post_excerpt }}
				</div>
				
				<div class="mt-3">
					<nuxt-link 
						:to="`${href}/${p.post.post_name}`" 
						class="inline-flex transition-all hover:opacity-80">
						<BtnIconLink />
					</nuxt-link>
				</div>

			</swiper-slide>
		</Slider>
	</div>
</template>