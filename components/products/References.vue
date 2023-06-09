<script setup>
defineProps({
	data: Object
})
</script>


<template>
	<section class="bg-gray-100 px-6 py-12 xl:px-0">
		<div class="max-w-5xl mx-auto">
			<h4 class="text-lg font-bold leading-none select-none">REFERENCIAS</h4>

			<div class="text-xs leading-tight mt-2">
				<div
					v-for="(item, i) in data"
					:key="`ref-${i}`"
					:class="{'mt-1': i}">
					<div class="flex gap-x-1">
						<span class="font-bold">{{ i+1 }}.</span>
						<div v-html="item" />
					</div>
				</div>
			</div>

		</div>
	</section>
</template>