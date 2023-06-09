<script setup>
import { register } from 'swiper/element/bundle'
import sliderProps from '@/composables/sliderProps'

register()
const props = defineProps(sliderProps)

const slider_id = `slider-${Math.floor(Math.random() * 1000000).toString()}`
let slider = {}
const is_first_slider = ref(true)
const is_last_slider = ref(false)

const buttonsVisibility = (val, slides) => {
	is_first_slider.value = val > 0 ? false : true
	is_last_slider.value = val === slides ? true : false
}


onMounted(() => {
	slider = document.getElementById(slider_id)

	Object.assign(slider, {
		slidesPerView: 1,
		breakpoints: {
			500: { slidesPerView: 2 },
			640: { slidesPerView: 2.5 },
			880: {
				slidesPerView: 2.7
			},
			990: {
				slidesPerView: 6,
				centeredSlides: props.data.length > 2 ? true : false
			},
			1140: {
				slidesPerView: 3.3,
				spaceBetween: 30,
				// centeredSlides: false
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 40,
			}
		},
		spaceBetween: 20,
		navigation: {
			prevEl: `.slider-prev-${slider_id}`,
			nextEl: `.slider-next-${slider_id}`
		},
	})

	slider.initialize()

	slider.addEventListener('progress', (event) => {
		const [swiper, progress] = event.detail;
		setTimeout(() => buttonsVisibility(swiper.realIndex, swiper.slides.length), 1)
	})
})

const sliderPrev = () => { slider.swiper.slidePrev() }
const sliderNext = () => { slider.swiper.slideNext() }
</script>


<template>
	<div 
		class="mx-6 mt-6 space-y-7 overflow-x-hidden sm:mr-0 md:space-y-0 lg:ml-0">

		<div class="sm:px-6 2xl:px-0">
			<div class="max-w-5xl min-h-[50px] mx-auto relative">
				<div 
					class="sm:mr-20 md:mr-28"
					:class="`text-${color}`">
					<h3 
						class="section-title">
						{{ title }}
					</h3>
					<h4 class="section-subtitle">
						{{ subtitle }}
					</h4>
				</div>
				
				<div class="hidden gap-x-3 justify-end sm:flex sm:absolute sm:right-0 sm:top-2">
					<button 
						@click="sliderPrev"
						class="border border-gray-400 w-8 h-8 grid place-content-center rounded-lg transition-all group hover:opacity-80 md:w-10 md:h-10"
						:class="[{'opacity-0 pointer-events-none': is_first_slider, 'opacity-100': !is_first_slider}, `hover:bg-${color} hover:border-${color}`]">
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 15 9"
							class="fill-gray-500 w-8 h-2.5 group-hover:fill-white">
							<polygon points="265.655 134.496 269.801 130.374 269.801 133.74 279.942 133.74 279.942 135.261 269.801 135.261 269.792 138.618" transform="translate(-265 -130)"/>
						</svg>
						<span class="sr-only">next</span>
					</button>

					<button 
						@click="sliderNext"
						class="border border-gray-400 w-8 h-8 grid place-content-center rounded-lg transition-all group hover:opacity-80 md:w-10 md:h-10"
						:class="[{'opacity-0 pointer-events-none': is_last_slider, 'opacity-100': !is_last_slider}, `hover:bg-${color} hover:border-${color}`]">
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 15 9"
							class="fill-gray-500 w-8 h-2.5 group-hover:fill-white">
							<polygon points="345.048 134.496 340.902 138.618 340.902 135.252 330.761 135.252 330.761 133.731 340.902 133.731 340.91 130.374" transform="translate(-330 -130)"/>
						</svg>
						<span class="sr-only">prev</span>
					</button>
				</div>
			</div>
		</div>
		

		<swiper-container 
			init="false" 
			:id="slider_id"
			class="swiper-carousel !mt-3.5">
			<slot />
		</swiper-container>
	</div>
</template>



<style scoped>
@media (min-width: 600px){
	.swiper-carousel{
		margin-left: 4vw;
	}
}

@media (min-width: 880px){
	.swiper-carousel{ margin-left: 3vw; }
}

@media (min-width: 990px){
	.swiper-carousel{ margin-left: -66vw; }
}

@media (min-width: 1140px){
	.swiper-carousel{
		position: relative;
		left: 50vw;
		margin-left: -32.5rem;
		width: calc(64rem + ((100vw - 64rem)/2));
	}
}
</style>