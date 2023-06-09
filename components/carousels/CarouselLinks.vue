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
				class="max-w-[320px] mr-8">

        <a :href="`${p.link}`">
          <Image :src="p.image" :alt="p.title" />
          <h3 class="text-lg font-medium leading-tight mt-3" v-html="p.title" />
        </a>

			</swiper-slide>
		</Slider>
	</div>
</template>