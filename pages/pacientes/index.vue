<script setup>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/PageHeader'
import CarouselFiles from '@/components/carousels/CarouselFiles'
import FetchError from '@/components/FetchError'

const config = useRuntimeConfig()

const {data, error } = await useFetch(`${config.public.API_URL}/options/pacientes`);

if( error.value ) console.log(`Error: ${error.value}`)

const { 
	posts_row_13: row13,
	posts_row_14: row14,
	posts_row_15: row15
} = data.value


/**
Harcodeamos ciertos links a pedido del cliente
*/
row14.forEach((e,i) => {
	if( 'ALZHEPLAN' === e.title ) row14[i].file = { url: 'https://alzheplan.com/' }
})

row15.forEach((e,i) => {
	if( 'Vídeo demostración INBRIJA®' === e.title ) row15[i].file = { url: 'https://youtu.be/kCwFmKDlJU0' }
})
</script>

<template>
  <Layout>
		<PageHeader bg="purple-dark" title="
			<p class='text-4xl font-bold md:text-4xl md:leading-none lg:text-5xl'>PARA TUS PACIENTES</p>
			<p class='text-xl leading-tight font-light mt-2 lg:text-2xl'>Iniciativas, materiales y recursos de valor para ayudar a tus pacientes y cuidadores</p>
		" />


		<section class="py-4">
			<CarouselFiles 
				v-if="row13"
				:data="row13" 
				title="Depresión y ansiedad" 
				color="purple" />

			<FetchError v-else/>
		</section>


		<section class="bg-purple-50 pt-4 pb-8">
			<CarouselFiles 
				v-if="row14"
				:data="row14" 
				title="Enfermedad de Alzheimer" 
				color="purple" />

			<FetchError v-else/>
		</section>


		<section class="py-4">
			<CarouselFiles 
				v-if="row15"
				:data="row15" 
				title="Enfermedad de Párkinson" 
				color="purple" />

			<FetchError v-else/>
		</section>

  </layout>
</template>

<style scoped></style>
