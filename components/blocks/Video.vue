<script setup>
import Plyr from 'plyr'

const props = defineProps({ data: Object })
const plyrID = Math.floor(Math.random() * 1000000).toString()

const { title, video, caption } = props.data.attrs.data
const elPlyr = ref(null)

const getYTVideoID = url => {
	const VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
	const id = url.match(VID_REGEX)[1]
	if( id ){ return id }else{ console.error('No se ha podido obtener el ID del video!') }
}


onMounted(() => {
	elPlyr.value.setAttribute('data-plyr-provider', 'youtube')
	elPlyr.value.setAttribute('data-plyr-embed-id', getYTVideoID(video))
	new Plyr(`#video-${plyrID}`)
})
</script>

<template>
	<div class="px-6 py-8 2xl:px-0">
		<div class="max-w-5xl mx-auto">
			<div class="space-y-5 md:space-y-7">
				
				<h3 
					class="text-lg font-semibold leading-tight 
					sm:text-xl sm:leading-tight 
					md:text-2xl md:leading-tight">{{ title }}</h3>
				
				<div class="aspect-video rounded-3xl overflow-hidden">
					<div 
						:id="`video-${plyrID}`" 
						ref="elPlyr"
						class="aspect-video" />
				</div>

				<div 
					class="text-xs italic text-center leading-tight 
					sm:text-sm sm:leading-tight">{{ caption }}</div>

			</div>
		</div>
	</div>
</template>