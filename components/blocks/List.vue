<script setup>
const props = defineProps({ data: Object })
</script>

<template>
	<div class="px-6 2xl:px-0">
		<div class="max-w-5xl mx-auto py-8">

			<ul class="space-y-3 md:space-y-4">
				<li 
					v-for="(item, i) in data.innerBlocks"
					:key="`item-${Math.floor(Math.random() * 1000000).toString()}`">
					
					<p class="flex gap-x-4">

						<span v-if="data.attrs.ordered">{{ i+1 }}.</span>

						<span v-else class="relative -top-1">
							<i class="ri-checkbox-blank-circle-fill text-[4px]"></i>
						</span>

						<p 
							v-html="item.innerHTML"
							:class="{
								'text-sm': item.attrs.fontSize === 'small',
								'text-xl': item.attrs.fontSize === 'large',
								'text-2xl': item.attrs.fontSize === 'x-large'
							}" />

					</p>

				</li>
			</ul>

		</div>
	</div>
	<!-- <pre>{{ data }}</pre> -->
</template>