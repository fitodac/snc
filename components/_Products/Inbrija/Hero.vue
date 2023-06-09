<script setup>
// import { Link } from '@inertiajs/inertia-vue3'

defineProps({ data: Object })

const base_url = window.location.origin
const bg_img = ``
</script>


<template>
<section
	class="md:bg-[url('../../img/products/inbrija/hero-bg.webp')]
					bg-no-repeat
					bg-contain
					bg-right
					bg-[#3E1546]
					px-6 relative
					md:min-h-[300px]
					xl:px-0"
	:class="[bg_img]">
	<div class="container global">
		<div class="text-white max-w-md pt-12 pb-20  lg:max-w-2xl">

			<div class="text-white text-opacity-50 text-xs font-medium">
				<span
					v-for="(b,i) in data.breadcrumbs"
					:key="b.idx"
					class="">
					<em v-if="i" class="mx-1">/</em>
					{{ b.title }}
				</span>
			</div>

			<div
				v-html="data.title"
				class="text-2xl leading-tight mt-3 select-none
							md:text-3xl md:leading-none
							lg:text-4xl lg:leading-none" />

			<div
				v-if="data.buttons && Object.keys(data.buttons).length"
				class="grid gap-4 mt-6 sm:flex md:gap-4">
				<div
					v-for="btn in data.buttons"
					:key="btn.idx">
					<Link
						:href="route(btn.route)"
						class="border border-white border-opacity-50
									font-medium px-5 py-1 inline-block rounded-lg
									transition-all
									hover:bg-white hover:text-prod-inbrija">
						{{ btn.text }}
					</Link>
				</div>
			</div>

		</div>
	</div>

	<div class="hidden top-0 right-6 absolute pointer-events-none md:block lg:right-10">
		<img
			:src="`${base_url}/img/products/inbrija/hero-tag.webp`"
			alt="Logotipo Inbrija"
			class="w-60 object-cover">
	</div>
</section>

<div class="bg-prod-inbrija-yellow h-3 md:h-4"></div>
</template>