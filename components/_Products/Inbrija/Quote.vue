<script setup>
defineProps({ data: String })
</script>


<template>
	<div class="px-6 xl:px-0">
		<div class="container global">
			
			<div 
				class="bg-[#E5E4E8]
								text-lg text-center leading-tight
								px-12 py-10 
								rounded-2xl 
								xl:text-2xl">
				<div v-html="data" />
			</div>

		</div>
	</div>
</template>