<script setup>
import getImage from '@/composables/getImage'

import Slider from '@/components/carousels/CarouselLayout'
import Image from '@/components/carousels/CarouselImage'
import BtnIconLink from '@/components/ButtonIconLink'
import BtnIconDownload from '@/components/ButtonIconDownload'

const props = defineProps({ data: Object })

const { blocks: total, title } = props.data.attrs.data
const data = props.data.attrs.data

const imgPromise = img_id => new Promise((resolve) => resolve(getImage(img_id)))
const promises = []
const file_promises = []
const config = useRuntimeConfig()

async function getFilePath(id){
	const { data: file_data, error } = await useFetch(`${config.public.API_URL}/media/${id}`, {
		headers: {
			Authorization: `Basic ${btoa(config.public.WP_REST_AUTH_USER+':'+config.public.WP_REST_AUTH_PASS)}`
		}
	})

	if( error.value ){
		console.log(`Se ha productido un error al cargar el archivo ${id}`, error)
		return { src: null }
	}else{
		return { src: file_data.value.guid.rendered }
	}
}

for(let i = 0; i < total; i++){
	promises.push(imgPromise(data[`blocks_${i}_image`]))
	
	if( data[`blocks_${i}_file`] ){
		file_promises.push(getFilePath(data[`blocks_${i}_file`]))
	}
}


Promise.all(promises)
	.then(resp => {
		resp.forEach((e,i) => {
			data[`blocks_${i}_image_src`] = e.src
			data[`blocks_${i}_image_alt`] = e.alt
		})
	})
	.catch(err => console.log('Error al obtener imágenes del carousel', err))


Promise.all(file_promises)
	.then(resp => {
		resp.forEach((e,i) => { data[`blocks_${i}_file`] = e.src })
	})
	.catch(err => console.log('Error al obtener los links de archivos del carousel', err))

let color = 'pink'
if( props.data.attrs.className.indexOf('is-style-blue') >= 0 ) color = 'navy'
if( props.data.attrs.className.indexOf('is-style-purple') >= 0 ) color = 'purple'
</script>


<template>
<div 
	v-if="total" 
	class="px-6 pt-16 pb-28 2xl:px-0">
	<Slider :data="{length: total}" :title="title" :color="color">
		<swiper-slide 
			v-for="(n, i) in total" 
			:key="`slide-${Math.floor(Math.random() * 1000000).toString()}`"
			class="max-w-[320px]">

			<Image 
				v-if="data[`blocks_${i}_image_src`]"
				:src="data[`blocks_${i}_image_src`]" 
				:alt="data[`blocks_${i}_image_alt`]" />

			<h3 class="text-lg font-medium leading-tight mt-3">{{ data[`blocks_${i}_title`] }}</h3>
			
			<div 
				class="text-sm leading-tight mt-4">
				{{ data[`blocks_${i}_description`] }}
			</div>
			
			<div 
				v-if="data[`blocks_${i}_link`]"
				class="mt-3">
				<nuxt-link 
					:to="data[`blocks_${i}_link`]"
					:target="!parseInt(data[`blocks_${i}_target_blank`]) ? '_self' : '_blank'">
					<BtnIconLink />
				</nuxt-link>
			</div>


			<div 
				v-if="data[`blocks_${i}_file`]"
				class="mt-3">
				<a :href="data[`blocks_${i}_file`]" target="_blank">
					<BtnIconDownload />
				</a>
			</div>
			
		</swiper-slide>
	</Slider>
</div>
</template>