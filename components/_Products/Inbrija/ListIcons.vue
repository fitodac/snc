<script setup>
defineProps({ data: Object })
const base_url = window.location.origin
</script>


<template>
	<section class="px-6 xl:px-0">
		<div class="max-w-2xl mx-auto">

			<h4 
				v-if="data.title"
				class="text-prod-inbrija-500 text-xl leading-tight md:text-2xl" 
				v-html="data.title" />

			<div class="grid gap-y-12 mt-10">
				<div 
					v-for="item in data.list"
					:key="item.idx"
					class="flex items-start gap-x-5 md:gap-x-8">
					
					<img 
						:src="`${base_url}/${item.icon}`" 
						alt="icono"
						class="w-16 mt-1 md:w-20">

					<div class="flex-1 pt-3">
						<h5 
							v-html="item.title"
							class="font-bold leading-tight" />
						
						<hr class="border-prod-inbrija-yellow my-2.5">

						<h5 
							v-if="item.subtitle"
							v-html="item.subtitle" 
							class="text-lg leading-tight mb-5" />

						<ul 
							v-if="item.list"
							class="grid gap-y-2">
							<li 
								v-for="li in item.list"
								:key="li.idx"
								class="leading-tight flex gap-x-2">
								<i class="bg-gray-500 w-1 h-1 rounded-full block top-2.5 relative"></i>
								<div 
									v-html="li.text"
									class="leading-snug flex-1" />
							</li>
						</ul>

						<div 
							v-if="item.video"
							class="pt-3">
							<iframe 
								width="560" 
								height="315" 
								class="aspect-video"
								:src="item.video.src" 
								:title="item.title" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowfullscreen>
							</iframe>
						</div>
					</div>

				</div>
			</div>

		</div>
	</section>
</template>