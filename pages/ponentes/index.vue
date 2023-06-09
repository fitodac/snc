<script setup>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/PageHeader'
import CarouselPosts from '@/components/carousels/CarouselPosts'
import CarouselFiles from '@/components/carousels/CarouselFiles'
import FetchError from '@/components/FetchError'
import ModalPassword from '@/components/ModalPassword'
import BannerMeetIn from '@/components/BannerMeetIn'

const config = useRuntimeConfig()

const {data, pending, error } = await useAsyncData(() => $fetch(`${config.public.API_URL}/options/ponentes`) );

if( error.value ) console.log(`Error: ${error.value}`)

const {
	posts_row_400: row400,
	posts_row_401: row401,
	posts_row_402: row402,
	posts_row_403: row403,
	posts_row_404: row404,
	posts_row_405: row405
} = data.value
</script>

<template>
	<Layout>
		<PageHeader
			bg="purple-dark"
			title="
				<p class='text-4xl font-bold md:text-4xl md:leading-none lg:text-5xl'>PARA PONENTES</p>
				<p class='text-xl leading-tight font-light mt-2 lg:text-2xl'>Acceso exclusivo para ponentes de formaciones para la actualización científica</p>
			" />


		<BannerMeetIn />


		<section class="bg-pink-50 pt-4 pb-8">
			<CarouselFiles
				v-if="row405"
				:data="row405"
				title="DA&CO"
				subtitle="Manejo integral de la depresión, ansiedad y comorbilidades"
				color="pink" />

			<FetchError v-else/>
		</section>


		<section class="py-4">
			<CarouselFiles
				v-if="row400"
				:data="row400"
				title="PROYECTO PADEAN/CASOS CLÍNICOS:"
				subtitle="FORMACIÓN PARA EL MÉDICO DE AP"
				color="pink" />

			<FetchError v-else/>
		</section>


		<section class="bg-pink-50 pt-4 pb-8">
			<CarouselFiles
				v-if="row401"
				:data="row401"
				title="APSAM:"
				subtitle="INTERCONSULTA ENTRE ATENCIÓN PRIMARIA Y PSIQUIATRÍA PARA EL ABORDAJE DE LA SALUD MENTAL"
				color="pink" />

			<FetchError v-else/>
		</section>


		<section class="py-4">
			<CarouselPosts
				v-if="row402"
				:data="row402"
				title="PSIQUIACTUAL"
				subtitle="PROYECTO DE ACTUALIZACIÓN PROFESIONAL Y DEBATE DE TEMAS CANDENTES EN PSIQUIATRÍA"
				color="pink" />

			<FetchError v-else/>
		</section>


		<section class="bg-pink-50 pt-4 pb-8">
			<CarouselFiles
				v-if="row403"
				:data="row403"
				title="XERIMEETINGS"
				color="pink" />

			<FetchError v-else/>
		</section>


		<section class="py-4">
			<CarouselFiles
				v-if="row404"
				:data="row404"
				title="MEET ALZHEIMER PROGRAM"
				color="soft-blue" />

			<FetchError v-else/>
		</section>

	</layout>


	<teleport to="body">
		<ModalPassword />
	</teleport>
</template>

<style scoped></style>
