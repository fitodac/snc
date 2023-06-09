<script setup>
</script>

<template>
<section 
	class="bg-violet bg-[url('/img/brand-iso-opacity10.svg')] bg-no-repeat bg-90%
	px-6 py-12 md:py-24 lg:py-28 2xl:px-0">
	<div class="max-w-4xl mx-auto">
		<div class="grid gap-10 select-none sm:grid-cols-6 sm:gap-8 md:grid-cols-8">
			
			<div class="text-white sm:col-span-4 md:flex md:gap-6 md:col-span-6 md:items-start">
				<img src="/img/envelope.svg" alt="Sobre" class="w-12 md:w-20 lg:w-24" />
				<div>
					<div class="text-lg font-light leading-tight mt-4 md:text-2xl md:leading-none md:mt-0">Mantente al día de nuestras actividades</div>
					<div class="text-2xl font-semibold leading-tight mt-2 md:text-3xl md:leading-none lg:text-4xl">¡Únete a nuestro boletín mensual!</div>
				</div>
			</div>

			<div class="sm:pt-16 sm:flex sm:justify-end sm:col-span-2 md:pt-0 md:items-end md:col-span-2">
				<div>
					<nuxt-link 
						to="/"
						class="bg-purple text-sm text-white text-center py-2 px-12 inline-block rounded-lg transition-all hover:opacity-80">
						Suscribirme
					</nuxt-link>
				</div>
			</div>

		</div>
	</div>
</section>
</template>