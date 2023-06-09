<script setup>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/PageHeader'
import CarouselPosts from '@/components/carousels/CarouselPosts'
import CarouselFiles from '@/components/carousels/CarouselFiles'
import FetchError from '@/components/FetchError'
import BannerAlzerta from '@/components/BannerAlzerta'
import BannerForYourPatients from '@/components/BannerForYourPatients'

const config = useRuntimeConfig()

const { data, pending, error} = await useFetch(`${config.public.API_URL}/options/alzheimer-demencia`)

if( error.value ) console.log(`Error: ${error.value}`)

const { 
	posts_row_7: row7,
	posts_row_8: row8,
	posts_row_9: row9,
	posts_row_10: row10,
	posts_row_11: row11
} = data.value


const banner_4_your_patients = [
	{ 
		img: '/img/banner-alzeplan.webp', 
		title: 'ALZHEPLAN', 
		description: `Plataforma de información y apoyo para cuidadores/as y familiares de personas con Enfermedad de Alzheimer`,
		link: 'https://alzheplan.com/'
	},
	{ 
		img: '/img/banner-alzheapp.webp', 
		title: 'ALZHEAPP', 
		description: `Aplicación móvil destinada a pacientes y cuidadores/as para ayudarles con el tratamiento de Alzerta® y Alzerta® dos por semana`,
		link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/EST-PM-TARJETON-ALZHEAPP-CON-FSC-2023-1.pdf'
	}
]
</script>

<template>
  <Layout>
		<PageHeader bg="navy" title="ENFERMEDAD DE ALZHEIMER <br>Y DEMENCIA" />

		<section class="py-4">
			<CarouselFiles 
				v-if="row7"
				:data="row7" 
				title="Monografías y newsletters" 
				color="navy" />

			<FetchError v-else/>
		</section>


		<section class="bg-navy-50 pt-4 pb-8">
			<CarouselPosts 
				v-if="row8"
				:data="row8" 
				title="Simposios y talleres" 
				color="navy" />

			<FetchError v-else/>
		</section>


		<section class="py-4">
			<CarouselPosts 
				v-if="row9"
				:data="row9" 
				title="Neuropills" 
				color="navy" />

			<FetchError v-else/>
		</section>


		<section class="bg-navy-50 pt-4 pb-8">
			<CarouselPosts 
				v-if="row10"
				:data="row10" 
				title="Artículos" 
				color="navy" />

			<FetchError v-else/>
		</section>

		<section class="py-4">
			<CarouselFiles 
				v-if="row11"
				:data="row11" 
				title="Guías y manuales" 
				color="navy" />

			<FetchError v-else/>
		</section>

		<BannerAlzerta />
		<BannerForYourPatients :data="banner_4_your_patients" />

  </layout>
</template>

<style scoped></style>
