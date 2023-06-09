<script setup>
import Layout from '@/layouts/Layout'

import Filter from '@/components/products/treatments/Filter'
import References from '@/components/products/References'
// import Quiz from '@/Components/Products/Treatments/Quiz.vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => [{
      inbrija: {
        title: 'Enfermedad de parkinson',
        image: {
          sm: '/img/products/treatments/banner-imbrija-sm.webp',
          lg: '/img/products/treatments/banner-imbrija-lg.webp',
          alt: 'Imagen de Inbrija, levodopa polvo para inhalación',
        },
        brand: 'Inbrija&reg;',
        content: 'La primera y única levodopa inhalada indicada para el tratamiento intermitente de las fluctuaciones motoras episódicas en personas con Enfermedad de Parkinson<sup>1,2</sup>',
        route: 'products.inbrija.summary'
      },
      alzerta: {
        title: 'Enfermedad de alzheimer',
        image: {
          sm: '/img/products/treatments/banner-alzerta-sm.webp',
          lg: '/img/products/treatments/banner-alzerta-lg.webp',
          alt: 'Imagen de Inbrija parche transdérmico',
        },
        brand: 'Alzerta&reg;',
        content: 'Parche de Rivastigmina que proporciona al paciente con Enfermedad de Alzheimer un beneficio en la cognición, la conducta y las actividades de la vida diaria<sup>3-5</sup>',
        route: '/tratamientos'
      },
      alzerta_2_por_semana: {
        title: 'Enfermedad de alzheimer',
        image: {
          sm: '/img/products/treatments/banner-alzerta-2-x-semana-sm.webp',
          lg: '/img/products/treatments/banner-alzerta-2-x-semana-lg.webp',
          alt: 'Imagen de Inbrija (2 por semana) parche transdérmico',
        },
        brand: 'Alzerta&reg; dos por semana',
        content: 'Hemos simplificado el tratamiento para la Enfermedad de Alzheimer, reduciéndolo a dos días por semana para conectar a tus pacientes y cuidadores con más momentos de vida<sup>6</sup>',
        route: '/tratamientos'
      },
      xeristar: {
        title: 'Depresión y ansiedad',
        image: {
          sm: '/img/products/treatments/banner-xeristar-sm.webp',
          lg: '/img/products/treatments/banner-xeristar-lg.webp',
          alt: 'Imagen de Xeristar en sus presentaciones de 30, 60, 90 y 120 miligramos',
        },
        brand: 'Xeristar&reg;',
        content: 'Frente a la depresión y la ansiedad Xeristar&reg; expande su luz con una gama más amplia.',
        route: 'products.xeristar'
      }
    }],
  },
  quiz: {
    type: Array,
    default:
        () => [{
          "header": "Encuesta SNC",
          "image": "",
          "title": "Doctor, \u00bfya conoce Alzerta dos por semana?",
          "actions": [
            {
              "idx": "y",
              "text": "S\u00ed",
              "link": "/tratamientos"
            },
            {
              "idx": "n",
              "text": "No",
              "link": "/tratamientos"
            }]
        }],
  },
  related: {
    type: Array,
    default:
        () => [{
          "title": "Tambi\u00e9n puede interesarte",
          "posts": [
            {
              "idx": "casos-clinicos-atencion-primaria",
              "title": "PADEAN - \"Depresi\u00f3n y deterioror cognitivo\"",
              "breadcrumb": "Casos cl\u00ednicos para atenci\u00f3n primaria",
              "image": "/img/products/treatments/post-1.webp",
              "route": "/tratamientos"
            },
            {
              "idx": "hablemos-de-psiquiatria-legal",
              "title": "Respuestas para la pr\u00e1ctica diaria",
              "breadcrumb": "Hablemos de psioquiatr\u00eda legal",
              "image": "/img/products/treatments/post-2.webp",
              "route": "/tratamientos"
            },
            {
              "idx": "depresion-y-alteraciones del ]s",
              "title": "Depresi\u00f3n y alteraciones del sue\u00f1o",
              "breadcrumb": "Art\u00edculo",
              "image": "/img/products/treatments/post-3.webp",
              "route": "/tratamientos"
            }]
        }],
  },
  references: {
    type: Array,
    default:
      () => [
				"Ficha tecnica de INBRIJAR 2022.", 
				"Consultado en https://cima.aemps.es/cima/publico/home.html a fecha 20 de enero de 2023", "Bullock R, et al. Int Psychogeriatr. 2011;13(Suppl 2):242S.", "Winblad B, et al. Int J Geriatr Psychiatry. 2007;22:485-91.", "Cummings J, et al. Dement Geriatr Cogn Disord. 2012;33:341-53.", "Ficha t\u00e9cnica Alzerta\u00ae dos por semana. Disponible en: https://archivosweb.esteve.com/ft/alzerta-2-por-semana-17x24.pdf"
			]
  },
})
</script>


<template>
  <Layout>
    <section
      class="bg-purple-dark bg-[url('/img/bg-page-header.svg')] bg-no-repeat bg-right-top bg-70vw
			text-white px-6 pb-20
			md:pt-60 md:-mt-48
			xl:px-0">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-6xl font-bold leading-none select-none md:text-5xl md:leading-none lg:text-6xl">
          TRATAMIENTOS
        </h1>
      </div>
    </section>

    <div class="bg-white">

      <Filter class="pt-10"/>

      <div class="px-6 pt-10 pb-20 xl:px-0">
        <div class="max-w-5xl mx-auto">
          <div class="grid gap-8 md:grid-cols-2">
            <div id="parkinson" class="flex flex-col md:col-span-2">
							<a href="/tratamientos/inbrija/resumen">
								<img
                src="/img/products/treatments/banner-imbrija-lg.webp"
                alt="Imagen de Inbrija, levodopa polvo para inhalación"></a>
              <div class="text-center mt-6 flex flex-col flex-1"><h3 class="grid select-none"><span
                  class="text-prod-purple-500 uppercase leading-none font-bold">Enfermedad de parkinson</span><span
                  class="text-3xl leading-none">Inbrija®</span></h3>
                <div class="leading-tight max-w-sm mx-auto mt-2 h-full">La primera y única levodopa inhalada indicada
                  para el tratamiento intermitente de las fluctuaciones motoras episódicas en personas con Enfermedad de
                  Parkinson<sup>1,2</sup></div>
                <div class="mt-4 flex justify-center"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80"
								href="/tratamientos/inbrija/resumen"><i
                    class="ri-arrow-right-line"></i></a></div>
              </div>
            </div>
            
						
						<div id="alzheimer" class="flex flex-col">
							<a href="/tratamientos/alzerta"><img
                src="/img/products/treatments/banner-alzerta-lg.webp" alt="Imagen de Inbrija parche transdérmico"></a>
              <div class="text-center mt-6 flex flex-col flex-1"><h3 class="grid select-none"><span
                  class="text-prod-purple-500 uppercase leading-none font-bold">Enfermedad de alzheimer</span><span
                  class="text-3xl leading-none">Alzerta®</span></h3>
                <div class="leading-tight max-w-sm mx-auto mt-2 h-full">Parche de Rivastigmina que proporciona al
                  paciente con Enfermedad de Alzheimer un beneficio en la cognición, la conducta y las actividades de la
                  vida diaria<sup>3-5</sup></div>
                <div class="mt-4 flex justify-center"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80" href="/tratamientos/alzerta"><i
                    class="ri-arrow-right-line"></i></a></div>
              </div>
            </div>
            <div class="flex flex-col"><a href="/tratamientos/alzerta-dos-por-semana"><img
                src="/img/products/treatments/banner-alzerta-2-x-semana-lg.webp"
                alt="Imagen de Inbrija (2 por semana) parche transdérmico"></a>
              <div class="text-center mt-6 flex flex-col flex-1"><h3 class="grid select-none"><span
                  class="text-prod-purple-500 uppercase leading-none font-bold">Enfermedad de alzheimer</span><span
                  class="text-3xl leading-none">Alzerta® dos por semana</span></h3>
                <div class="leading-tight max-w-sm mx-auto mt-2 h-full">Hemos simplificado el tratamiento para la
                  Enfermedad de Alzheimer, reduciéndolo a dos días por semana para conectar a tus pacientes y cuidadores
                  con más momentos de vida<sup>6</sup></div>
                <div class="mt-4 flex justify-center"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80" href="/tratamientos/alzerta-dos-por-semana"><i
                    class="ri-arrow-right-line"></i></a></div>
              </div>
            </div>
            
						<div id="depresion-ansiedad" class="flex flex-col md:col-span-2"><a
                href="/tratamientos/xeristar"><img
                src="/img/products/treatments/banner-xeristar-lg.webp"
                alt="Imagen de Xeristar en sus presentaciones de 30, 60, 90 y 120 miligramos"></a>
              <div class="text-center mt-6 flex flex-col flex-1"><h3 class="grid select-none"><span
                  class="text-prod-purple-500 uppercase leading-none font-bold">Depresión y ansiedad</span><span
                  class="text-3xl leading-none">Xeristar®</span></h3>
                <div class="leading-tight max-w-sm mx-auto mt-2 h-full">Frente a la depresión y la ansiedad Xeristar®
                  expande su luz con una gama más amplia.
                </div>
                <div class="mt-4 flex justify-center"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80" href="/tratamientos/xeristar"><i
                    class="ri-arrow-right-line"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <References :data="references"/>

      <!-- <Quiz :data="quiz"/> -->


      <div class="bg-gray-100 px-6 py-14 xl:px-0">
        <div class="max-w-5xl mx-auto"><h3 class="text-prod-purple text-2xl font-bold text-center uppercase">También
          puede interesarte</h3>
          <div class="grid gap-10 mt-10 md:grid-cols-3 md:gap-6 lg:gap-10">
            <div class="max-w-sm mx-auto"><img src="/img/products/treatments/post-1.webp"
                                               alt="PADEAN - &quot;Depresión y deterioror cognitivo&quot;"
                                               class="w-full h-52 object-cover rounded-xl md:h-40 lg:h-48">
              <ul class="text-xs leading-tight uppercase h-9 mt-3 overflow-hidden">
                <li class="text-prod-xeristar font-bold inline">Depresión y ansiedad</li>
                <li class="inline"><span class="mx-1">|</span> Casos clínicos para atención primaria</li>
              </ul>
              <h4 class="text-xl font-semibold leading-tight h-20 overflow-hidden">PADEAN - "Depresión y deterioror
                cognitivo"</h4>
              <div class="mt-2"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80" href="/depresion-ansiedad/proyecto-padean-formacion-para-el-psiquiatra"><i
                  class="ri-arrow-right-line"></i></a></div>
            </div>
            <div class="max-w-sm mx-auto"><img src="/img/products/treatments/post-2.webp"
                                               alt="Respuestas para la práctica diaria"
                                               class="w-full h-52 object-cover rounded-xl md:h-40 lg:h-48">
              <ul class="text-xs leading-tight uppercase h-9 mt-3 overflow-hidden">
                <li class="text-prod-xeristar font-bold inline">Depresión y ansiedad</li>
                <li class="inline"><span class="mx-1">|</span> Hablemos de psioquiatría legal</li>
              </ul>
              <h4 class="text-xl font-semibold leading-tight h-20 overflow-hidden">Respuestas para la práctica
                diaria</h4>
              <div class="mt-2"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80" href="https://estevepsiquiatrialegal.es/" target="_blank"><i
                  class="ri-arrow-right-line"></i></a></div>
            </div>
            <div class="max-w-sm mx-auto"><img src="/img/products/treatments/post-3.webp"
                                               alt="Depresión y alteraciones del sueño"
                                               class="w-full h-52 object-cover rounded-xl md:h-40 lg:h-48">
              <ul class="text-xs leading-tight uppercase h-9 mt-3 overflow-hidden">
                <li class="text-prod-xeristar font-bold inline">Depresión y ansiedad</li>
                <li class="inline"><span class="mx-1">|</span> Artículo</li>
              </ul>
              <h4 class="text-xl font-semibold leading-tight h-20 overflow-hidden">Depresión y alteraciones del
                sueño</h4>
              <div class="mt-2"><a class="bg-prod-purple text-white w-10 h-10
								grid place-content-center rounded-lg
								transition-all hover:opacity-80" href="/depresion-ansiedad/depresion-y-alteraciones-del-sueno-una-relacion-bidireccional"><i
                  class="ri-arrow-right-line"></i></a></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Layout>
</template>

<style scoped></style>
