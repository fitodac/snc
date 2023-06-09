<template>
	<section class="px-6 py-8 2xl:px-0">
		<div class="max-w-5xl mx-auto">
			<h3 class="section-title text-purple">Meet in the experts</h3>

			<div class="max-w-4xl grid gap-7 mt-6 md:grid-cols-2 lg:gap-10">

				<div class="">
					<img 
						src="/img/banner-meetin.webp" 
						alt="Plataforma de información y apoyo para cuidadores/as y familiares de personas con Enfermedad de Alzheimer"
						class="w-full max-w-sm aspect-video rounded-xl md:max-w-fit">
				</div>

				<div class="md:grid md:items-center">
					<div class="space-y-4 select-none md:space-y-6">
						
						<h3 class="text-2xl font-medium leading-none md:text-3xl md:leading-none">MEET IN THE EXPERTS</h3>
						<div class="font-light leading-tight">Reuniones formativas sobre las últimas actualizaciones en el manejo del paciente con enfermedad de Parkinson, proporcionando a los ponentes acceso a vídeos y materiales descargables para su uso en reuniones locales.</div>
						
						<div class="">
							<nuxt-link
								to="/ponentes/meetin-the-experts"
								class="bg-purple text-sm text-white text-center py-2 px-16 inline-block rounded-lg transition-all hover:opacity-80">
								Acceder
							</nuxt-link>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>