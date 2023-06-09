<script setup>
import BtnIconLink from '@/components/ButtonIconLink'

const props = defineProps({ 
	data: Array,
	color: String
})

const config = useRuntimeConfig()
const promises = []
const posts = reactive([])

props.data.forEach(id => {
	promises.push(new Promise(async (resolve, reject) => {
		const { data } = await useFetch(`${config.public.API_URL}/posts/${id}?_fields=id,title,featured_media,_links,slug,_embedded&_embed`)
		resolve(data.value)
	}))
})


await Promise.all(promises).then(arr => {
	arr.forEach(v => posts.push({
										...v,
										image: v._embedded['wp:featuredmedia'][0].media_details ? v._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : null,
										category: v._embedded['wp:term'][0][0].name,
										tag: v._embedded['wp:term'][1][0].name
									}))
})
</script>


<template>
	<section 
		class="px-6 py-16 lg:py-20 2xl:px-0"
		:class="color ? `bg-${color}-50` : ''">
		<div class="max-w-5xl mx-auto">
			
			<h3 
				class="text-xl leading-none text-center font-semibold select-none sm:text-2xl md:text-3xl"
				:class="color ? `text-${color}` : ''">
				TAMBIÉN PUEDE INTERESARTE
			</h3>

			<div class="grid grid-cols-3 gap-10 mt-8 select-none">
				<div 
					v-for="(p,i) in posts"
					:key="p.id"
					class="">

					<div class="w-full aspect-video rounded-3xl overflow-hidden">
						<nuxt-link 
							v-if="p.image"
							:to="p.slug">
							<img 
								:src="p.image" 
								:alt="p.title"
								class="w-full h-full object-cover pointer-events-none" />
						</nuxt-link>

						<div 
							v-else 
							class="bg-pink-200 text-pink-50 grid place-content-center aspect-video rounded-xl opacity-50">
							<i class="ri-camera-off-fill text-4xl"></i>
						</div>
					</div>

					<div class="ml-1 mt-4">
						<div class="text-slate-500 text-xs uppercase leading-none space-x-1.5">
							<span 
								class="font-semibold"
								:class="color ? `text-${color}` : ''">
								{{ p.category }}
							</span>
							<span class="">|</span>
							<span 
								class="">
								{{ p.tag }}
							</span>
						</div>

						<h4 
							class="text-lg font-medium leading-tight mt-1.5 
							md:text-xl md:leading-tight">
							{{ p.title.rendered }}
						</h4>
					</div>

					<div class="mt-14">
						<nuxt-link :to="p.slug">
							<BtnIconLink />
						</nuxt-link>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>