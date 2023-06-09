<script setup>
const isAuthenticated = ref(false)

const date = new Date()

const classLink = `leading-none inline-block select-none hover:text-purple`

onMounted(() => {
	isAuthenticated.value = window.localStorage.getItem('isAuthenticated') === 'true'
})

const openCookieModal = () => {
	tarteaucitron.userInterface.openPanel();
	
}

const logos = [
	{
		idx: `logo-${Math.floor(Math.random() * 1000000).toString()}`,
		img: '/img/footer/esteve-sistema-nervioso-central.webp',
		alt: 'Esteve Sistema Nervicoso Central'
	},
	{
		idx: `logo-${Math.floor(Math.random() * 1000000).toString()}`,
		img: '/img/footer/inbrija.webp',
		alt: 'Inbrija',
		link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/Fitxa-Tecnica-INBRIJA.pdf'
	},
	{
		idx: `logo-${Math.floor(Math.random() * 1000000).toString()}`,
		img: '/img/footer/xeristar.webp',
		alt: 'Xeristar',
		link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/FT_Xeristar-1.pdf'
	},
	{
		idx: `logo-${Math.floor(Math.random() * 1000000).toString()}`,
		img: '/img/footer/alzerta.webp',
		alt: 'Alzerta',
		link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/FT-Alzerta.pdf'
	},
	{
		idx: `logo-${Math.floor(Math.random() * 1000000).toString()}`,
		img: '/img/footer/alzerta-dos-por-semana.webp',
		alt: 'Alzerta parche transdermico - 2 por semana',
		link: 'https://canalestevesnc.com/api/wp-content/uploads/2023/05/FT-Alzerta-dos-por-semana-1.pdf'
	}
]
</script>

<template>
	<div class="border-t border-stone-100 leading-tight text-center px-6 py-5 2xl:px-0" v-if="isAuthenticated">
		<div class="container mx-auto">
			<div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

				<div
					v-for="prod in logos"
					:key="prod.idx"
					class="space-y-3">
					<img
						:src="prod.img"
						:alt="prod.alt"
						class="h-14 mx-auto object-contain">
					<div class="text-sm">
						<a v-if="prod.link" :href="prod.link" target="_blank">Ficha técnica</a>
					</div>
				</div>

			</div>
		</div>
	</div>

	<section class="bg-stone-50 text-sm pt-7 pb-10 px-6 2xl:px-0">
		<div class="container mx-auto">
			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">

				<div class="lg:col-span-3 xl:col-span-2">
					<h4 class="font-bold">Canal Esteve SNC</h4>

					<ul class="mt-2">
						<li><nuxt-link to="/depresion-ansiedad" :class="classLink">Depresión y ansiedad</nuxt-link></li>
						<li><nuxt-link to="/alzheimer-demencia" :class="classLink">Enfermedad de Alzheimer y Demencia</nuxt-link></li>
						<li><nuxt-link to="/parkinson" :class="classLink">Enfermedad de Parkinson</nuxt-link></li>
						<li><nuxt-link to="/tratamientos" :class="classLink">Tratamientos</nuxt-link></li>
						<li><nuxt-link to="/pacientes" :class="classLink">Para tus pacientes</nuxt-link></li>
						<li><nuxt-link to="/ponentes" :class="classLink">Para Ponentes</nuxt-link></li>
					</ul>
				</div>


				<div class="lg:col-span-3 xl:col-span-2">
					<div v-if="isAuthenticated">
						<h4 class="font-bold">Productos</h4>

						<ul class="mt-2">
							<li><nuxt-link to="/tratamientos/inbrija/resumen" :class="classLink">Inbrija</nuxt-link></li>
							<li><nuxt-link to="/tratamientos/xeristar" :class="classLink">Xeristar</nuxt-link></li>
							<li><nuxt-link to="/tratamientos/alzerta" :class="classLink">Alzerta</nuxt-link></li>
							<li><nuxt-link to="/tratamientos/alzerta-dos-por-semana" :class="classLink">Alzerta - Dos por semana</nuxt-link></li>
						</ul>
					</div>
				</div>


				<div class="lg:col-span-2">
					<h4 class="font-bold">Legal</h4>

					<ul class="mt-2">
						<li><nuxt-link to="https://www.esteveagora.com/es/privacidad" target="_blank" :class="classLink">Privacidad</nuxt-link></li>
						<li><a href="#" @click="openCookieModal" :class="classLink">Política de cookies</a></li>
						<li><nuxt-link to="https://www.esteveagora.com/es/aviso-legal" target="_blank" :class="classLink">Aviso legal</nuxt-link></li>
						<li><nuxt-link to="https://canalestevesnc.com/contacto"  :class="classLink">Contacto</nuxt-link></li>
					</ul>
				</div>



				<div class="lg:col-span-4 xl:col-span-6">
					<h4 class="font-bold">Última actualización 1/06/2023  |  © 1996-{{ date.getFullYear() }} Esteve</h4>

					<div class="text-xs">
						El Sitio Web pone a disposición del usuario, únicamente para la búsqueda de,
						y acceso a, contenidos y servicios disponibles en Internet, hiperenlaces o
						dispositivos técnicos de enlace, que permiten al usuario el acceso a sitios
						web o portales de Internet pertenecientes a, o gestionados por, terceros
						(los "Sitios Web de Terceros"). Los Sitios Web de Terceros referidos anteriormente
						no están bajo el control de Esteve y, en consecuencia, Esteve (o cualesquiera
						sociedades pertenecientes al grupo al que pertenece Esteve) no es responsable
						del contenido y servicios de ninguno de los Sitios Web de Terceros.<br>
						Estos Sitios Web de Terceros se proporcionan únicamente para informarle sobre la
						existencia de otras fuentes de información sobre un tema concreto y la inclusión
						de un enlace en el presente Sitio Web no implica la aprobación de los Sitios
						Web de Terceros por parte de Esteve.
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<style scoped></style>
