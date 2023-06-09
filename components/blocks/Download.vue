<script setup>
const props = defineProps({ data: Object })
const config = useRuntimeConfig()

const { title, file, description } = props.data.attrs.data

const { data: file_data, error } = await useFetch(`${config.public.API_URL}/media/${file}`, {
	headers: {
		Authorization: `Basic ${btoa(config.public.WP_REST_AUTH_USER+':'+config.public.WP_REST_AUTH_PASS)}`
	}
})
</script>

<template>
	<div v-if="file_data" class="px-6 2xl:px-0">
		<div class="max-w-5xl mx-auto py-8">
			<a 
				:href="file_data.source_url" 
				target="_blank" 
				:alt="file_data.slug"
				class="group">
				<div class="inline-flex gap-x-5">

					<div class="">
						<img 
							src="/img/icon-download.svg" 
							alt="Icono de descarga"
							class="w-10 h-10 object-cover relative top-1 group-hover:opacity-80" />
					</div>

					<div class="space-y-2 flex-1">
						<h4 
							class="text-lg font-semibold leading-tight
							sm:text-xl
							group-hover:text-purple">
							{{ title }}
						</h4>
						
						<div 
							class="text-sm leading-tight 
							sm:text-base sm:leading-tight">
							{{ description }}
						</div>
					</div>

				</div>
			</a>
		</div>
	</div>
</template>