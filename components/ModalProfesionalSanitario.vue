<script setup>
import Cookies from 'js-cookie'

const allow = ref(Cookies.get("specialist"))

const setSpecialistCookie = () => {
	Cookies.set('specialist', 'true', { expires: 365 })
	allow.value = true
}

</script>

<template>
	<div 
		v-if="!allow" 
		class="bg-white bg-opacity-60 inset-0 fixed backdrop-blur-md select-none z-50">
		<div class="w-full h-full grid grid-cols-1 place-content-center px-6 2xl:px-0">
			<div class="flex justify-center">

			<div class="bg-violet text-white text-center w-full max-w-5xl p-1 md:py-16">
				<div class="space-y-6 md:space-y-10">
					<div class="text-aqua text-3xl font-semibold leading-none 
						md:text-4xl md:leading-none 
						lg:text-5xl lg:leading-none">
						¡Bienvenido a Canal ESTEVE SNC!
					</div>

					<div class="font-light max-w-2xl mx-auto mt-3 md:text-lg md:leading-tight">
						Te informamos que canalestevesnc.com es un portal online destinado exclusivamente a profesionales sanitarios. Aquí encontrarás contenidos exclusivos de educación médica relacionados con el sistema nervioso central.
					</div>

					<div class="grid gap-6 sm:grid-cols-2 md:gap-6">

						<div class="md:flex md:justify-end">
							<button
								class="bg-aqua font-medium leading-none max-w-28 h-full p-4 flex justify-center items-center rounded-xl transition-all md:px-14 hover:opacity-80"
								@click="setSpecialistCookie">
								CONFIRMO QUE<br>SOY PROFESIONAL SANITARIO
							</button>
						</div>

						<div class="grid items-center md:flex">
							<a 
								href="https://www.esteve.com/es/pacientes/sistema-nervioso-central"
								target="_blank"
								class="bg-stone-300 font-medium leading-none max-w-28 h-full p-4 flex justify-center items-center rounded-xl transition-all md:px-14 hover:opacity-90 hover:text-violet">
								NO SOY PROFESIONAL SANITARIO
							</a>
						</div>

					</div>
				</div>

			</div>

			</div>
		</div>
	</div>
</template>