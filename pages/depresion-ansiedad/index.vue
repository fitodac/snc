<script setup>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/PageHeader'
import CarouselPosts from '@/components/carousels/CarouselPosts'
import CarouselFiles from '@/components/carousels/CarouselFiles'
import FetchError from '@/components/FetchError'
import BtnIconDiagonal from '@/components/ButtonIconDiagonal'
import BtnIconLink from '@/components/ButtonIconLink'
import BannerForYourPatients from '@/components/BannerForYourPatients'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch(`${config.public.API_URL}/options/depresion-ansiedad`)

if( error.value ) console.log(`Error: ${error.value}`)

const { 
	posts_row_3: row3,
	posts_row_4: row4,
	posts_row_5: row5,
	posts_row_6: row6
} = data.value

const banner_4_your_patients = [
	{ img: '/img/estar-mejor-o-estar-bien.webp', title: 'Cuaderno ¿Estar mejor o estar bien? (metas objetivas)', link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/cuaderno-metas-objetivas.pdf' },
	{ img: '/img/sintomas-de-la-depresion-y-ansiedad.webp', title: 'Cuaderno Síntomas depresión/ansiedad', link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/sintomas-depresion-ansiedad.pdf' }
]
</script>

<template>
  <Layout>
		<PageHeader bg="pink" title="DEPRESIÓN <br>Y ANSIEDAD" />

		<section class="py-4">
			<CarouselFiles 
				v-if="row3"
				:data="row3" 
				title="Newsletter Depression & Anxiety Today" 
				color="pink" />
			
			<FetchError v-else/>
		</section>


		<section class="bg-pink-50 px-6 py-8 2xl:px-0">
			<div class="max-w-5xl mx-auto">
				<h3 class="section-title text-pink">Hablemos de psiquiatría legal</h3>

				<div class="max-w-sm mt-6 md:grid md:grid-cols-2 md:gap-x-10 md:max-w-full">
					<div class="">
						<img 
							src="/img/hablemos-de-psiquiatria-banner.webp" 
							alt="Banner sobre Hablemos de psiquiatría legal"
							class="aspect-video">
					</div>

					<div class="mt-5 md:mt-0">
						<h4 class="text-xl font-bold leading-tight lg:text-2xl lg:leading-tight">Implicaciones legales en la práctica psiquiátrica diaria</h4>
						<p class="leading-tight mt-3 lg:text-lg lg:leading-tight">Iniciativa enfocada a solucionar dudas y consultas sobre implicaciones legales en la práctica clínica diaria en psiquiatría.</p>
						
						<div class="mt-10">
							<nuxt-link 
								to="https://estevepsiquiatrialegal.es/" 
								target="_blank"
								class="inline-flex transition-all hover:opacity-80">
								<BtnIconDiagonal />
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</section>


		<section class="pt-4 pb-8">
			<CarouselFiles 
				v-if="row4"
				:data="row4" 
				title="Casos clínicos Padean para atención primaria" 
				color="pink" />

			<FetchError v-else/>
		</section>



		<section class="bg-pink-50 pt-4 pb-8">
			<CarouselPosts 
				v-if="row5"
				:data="row5" 
				title="Webinars" 
				color="pink" />

			<FetchError v-else/>
		</section>


		<section class="px-6 py-8 2xl:px-0">
			<div class="max-w-5xl mx-auto">
				<h3 class="section-title text-pink">Curso DE&CO</h3>

				<div class="max-w-sm mt-6 md:grid md:grid-cols-2 md:gap-x-10 md:max-w-full">
					<div class="">
						<img 
							src="/img/de&co.webp" 
							alt="Banner sobre Hablemos de psiquiatría legal"
							class="aspect-video">
					</div>

					<div class="mt-5 md:mt-0">
						<h4 class="text-xl font-bold leading-tight lg:text-2xl lg:leading-tight">DE&CO: Formación<br>en Depresión y Comorbilidades</h4>
						<p class="leading-tight mt-3 lg:text-lg lg:leading-tight">Programa formativo en el que se valora la depresión como una entidad que puede asociarse con otras patologías, como otros trastornos de la salud mental o enfermedades neurodegenerativas, así como su relación con el dolor y su abordaje en poblaciones especiales</p>

						<div class="mt-10">
							<nuxt-link 
								to="https://www.depresionycomorbilidades.com/"
								target="_blank"
								class="inline-flex transition-all hover:opacity-80">
								<BtnIconLink />
							</nuxt-link>
						</div>
					</div>
				</div>

				<div class="max-w-4xl grid gap-8 mt-10 select-none md:grid-cols-2 md:gap-10 lg:ml-10">
					<div class="grid gap-x-10 sm:flex sm:items-center md:items-start">
						<div 
							class="text-xs leading-tight order-2 sm:text-sm sm:leading-tight lg:pt-2">
							Con el aval científico de la Sociedad Española de Psiquiatría
						</div>
						<div class="w-32 md:w-56 lg:w-32">
							<img 
								src="/img/logo-sociedad-espanola-de-psiquiatria.webp" 
								alt="Sociedad Española de Psiquiatría"
								class="h-20 mx-auto object-contain">
						</div>
					</div>

					<div class="grid gap-x-10 sm:flex sm:items-center md:items-start">
						<div 
							class="text-xs leading-tight order-2 sm:text-sm sm:leading-tight lg:pt-2">
							Con el aval científico de la Sociedad Española de Psiquiatría Biológica
						</div>
						<div class="w-32 md:w-56 lg:w-32">
							<img 
								src="/img/logo-sociedad-espanola-de-psiquiatria-biologica.webp" 
								alt="Sociedad Española de Psiquiatría Biológica"
								class="h-20 mx-auto object-contain">
						</div>
					</div>
				</div>
			</div>
		</section>


		<section class="bg-pink-50 pt-4 pb-8">
			<CarouselPosts 
				v-if="row6"
				:data="row6" 
				title="Artículos" 
				color="pink" />

			<FetchError v-else/>
		</section>

		<section class="banner banner-xeristar">
			<div class="container">
				<div class="text">
					Frente a la depresión y la ansiedad <strong>Xeristar&reg; expande su luz con una gama más amplia.</strong>
				</div>
				<div>
					<a href="/tratamientos/xeristar">
						Conoce sus beneficios para profesionales sanitarios y pacientes
						<span class="icon-link">
							<BtnIconLink />
						</span>
					</a>
				</div>
			</div>
		</section>

		<BannerForYourPatients :data="banner_4_your_patients"/>

  </layout>
</template>

<style scoped></style>
