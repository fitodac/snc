<script setup>
// import { Link } from '@inertiajs/inertia-vue3'
</script>


<template>
<section class="bg-prod-inbrija-yellow px-6 pt-10 pb-14 xl:px-0">
	<div class="container global">
		<h4 class="text-prod-inbrija text-center font-medium">Más sobre INBRIJA:</h4>

		<div class="grid gap-5 mt-5 sm:grid-cols-3 lg:gap-10">

			<div>
				<Link
            href="/tratamientos/inbrija/eficacia/"
					class="border border-prod-inbrija text-prod-inbrija
									text-lg font-medium text-center w-full h-12 grid
									place-content-center rounded-xl transition-all
									hover:bg-prod-inbrija hover:text-prod-inbrija-yellow">
					Eficacia
				</Link>
			</div>

			<div>
				<Link
            href="/tratamientos/inbrija/seguridad/"
					class="border border-prod-inbrija text-prod-inbrija
									text-lg font-medium text-center w-full h-12 grid
									place-content-center rounded-xl transition-all
									hover:bg-prod-inbrija hover:text-prod-inbrija-yellow">
					Seguridad
				</Link>
			</div>

			<div>
				<Link
					href="/tratamientos/inbrija/posologia/"
					class="border border-prod-inbrija text-prod-inbrija
									text-lg font-medium text-center w-full h-12 grid
									place-content-center rounded-xl transition-all
									hover:bg-prod-inbrija hover:text-prod-inbrija-yellow">
					Posología
				</Link>
			</div>

		</div>
	</div>
</section>
</template>