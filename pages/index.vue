<script setup>
import Layout from '@/layouts/Layout'
import Hero from '@/components/Hero'
import Image from '@/components/carousels/CarouselImage'
import Subscribe from '@/components/Subscribe'
import Patients from '@/components/BannerForPatients'
import FetchError from '@/components/FetchError'

const config = useRuntimeConfig()

const { data, pending, error} = await useFetch(`${config.public.API_URL}/options/home`)

if( error.value ) console.log(`Error: ${error.value}`)

const { 
	posts_row_1: row1,
	posts_row_2: row2
} = data.value

const filetypes = ['.pdf', '.xls', '.doc', '.docx', '.jpg', 'webp', '.png']

row1.forEach((e,i) => {
	if( !filetypes.includes(e.link.url.substr(-4)) ){
		if( e.link.url.indexOf('/api/') >= 0 ) row1[i].link.url = e.link.url.split('/api/')[1]
	}
})
</script>

<template>
  <Layout navbarColor="dark">
		
		<Hero />

		<section class="px-6 py-8 2xl:px-0">
			<div class="max-w-5xl mx-auto">
				<h3 class="section-title text-pink">Depresión y ansiedad</h3>

				<div v-if="row1" class="grid gap-10 mt-5 md:grid-cols-2">

					<div 
						v-for="p in row1"
						:key="`depresion-ansiedad-${Math.floor(Math.random() * 1000000).toString()}`">
						<div>
							<Image :src="p.image" :alt="p.title" :loading="false" />

							<div class="space-y-3 mt-4">
								<h4 v-if="p.title" v-html="p.title" class="text-xl font-semibold leading-none" />
								<div v-if="p.description" class="leading-tight" v-html="p.description" />
							</div>

							<div class="mt-6">
								<nuxt-link 
									:to="p.link.url"
									:target="p.link.target ?? '_self'"
									class="bg-purple text-white text-sm font-medium leading-tight px-16 pt-2 pb-3 inline-block rounded-lg transition-all hover:opacity-80">
									Acceder
								</nuxt-link>
							</div>
						</div>
					</div>
					
				</div>
				
				<FetchError v-else/>

			</div>
		</section>


		<section class="bg-navy-50 px-6 py-8 2xl:px-0">
			<div class="max-w-5xl mx-auto">
				<h3 class="section-title text-navy">Enfermedad de Alzheimer</h3>

				<div v-if="row2" class="grid gap-10 mt-8 md:grid-cols-2">
					
					<div 
						v-for="p in row2"
						:key="`depresion-ansiedad-${Math.floor(Math.random() * 1000000).toString()}`">
						<div>
							<Image :src="p.image" :alt="p.title" :loading="false" />

							<div class="space-y-3 mt-4">
								<h4 v-html="p.title" class="text-xl font-semibold leading-none" />
								<div v-if="p.description" class="leading-tight" v-html="p.description" />
							</div>

							<div class="mt-6">
								<a 
									:href="p.link.url"
									target="_blank"
									class="bg-purple text-white text-sm font-medium leading-tight px-16 pt-2 pb-3 inline-block rounded-lg transition-all hover:opacity-80">
									Acceder
								</a>
							</div>
						</div>
					</div>
					
				</div>

				<FetchError v-else/>

			</div>
		</section>

		<Patients />

		<!--<Subscribe />-->

  </Layout>
</template>

<style scoped>

</style>
