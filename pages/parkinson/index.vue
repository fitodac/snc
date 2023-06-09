<script setup>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/PageHeader'
import CarouselPosts from '@/components/carousels/CarouselPosts'
import CarouselLinks from '@/components/carousels/CarouselLinks'
import FetchError from '@/components/FetchError'
import BtnLink from '@/components/ButtonIconLink'

const config = useRuntimeConfig()

const { data, pending, error } = await useFetch(`${config.public.API_URL}/options/parkinson`)

const {
  posts_row_21: row21,
  posts_row_22: row22
} = data.value

</script>

<template>
  <Layout>
		<PageHeader bg="prod-inbrija"  title="ENFERMEDAD <br>DE PARKINSON" />

    <section class="bg-pink-50 pt-4 pb-8">
      <CarouselPosts
          v-if="row21"
          :data="row21"
          title="SIMPOSIOS"
          color="prod-inbrija" />

      <FetchError v-else/>
    </section>

    <div class="banner-inbrija select-none">
      <div class="container-inbrija">
        <img src="/img/products/inbrija/hero-product-2.webp" alt="Inbrija"/>
				
				<div 
					class="mt-6 sm:absolute 
					sm:bottom-8 sm:left-[22.5vw] sm:mt-0 
					md:pl-[9vw] md:sm:left-[19vw]
					xl:left-[256px] xl:bottom-[50px]">
					<nuxt-link 
						to="/tratamientos/inbrija/resumen/" 
						class="text-white leading-tight flex gap-x-5 items-center">
						Conoce sus beneficios para profesionales sanitarios y pacientes <BtnLink />
					</nuxt-link>
				</div>
      </div>
    </div>

    <section class="banner banner-patient">

      <div class="max-w-5xl mx-auto px-6">
        <h3 class="text">PARA <strong>TUS PACIENTES</strong></h3>
      </div>

      <CarouselLinks
				v-if="row22"
				:data="row22"
				class="text-white" />

      <FetchError v-else/>

    </section>

  </layout>
</template>

<style scoped></style>
