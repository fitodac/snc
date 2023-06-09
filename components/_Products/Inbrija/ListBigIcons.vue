<script setup>
defineProps({ data: Object })
const base_url = window.location.origin
</script>

<template>
	<section class="px-6 xl:px-0">
		<div class="max-w-2xl mx-auto">

			<div class="grid gap-y-2 mt-4 sm:mt-6">
				<div
					v-for="(item, dai) in data"
					:key="item.idx"
					class="flex items-start gap-x-5 md:gap-x-8 border-prod-inbrija-yellow my-2.5 border-0"
                    :class="{
                        'border-t-2': dai > 0,
                        'pt-6': dai > 0,
                    }"
                >
					<img
						:src="`${base_url}/${item.icon}`"
						alt="icono"
						class="w-20 mt-1 sm:28 md:w-32">

					<div class="flex-1 pt-0 sm:pt-3">
                        <div v-html="item.content" class="text-base sm:text-lg"></div>
					</div>
				</div>

			</div>
		</div>
        <hr v-if="dai > 0"  class="border-prod-inbrija-yellow my-2.5">
	</section>
</template>
