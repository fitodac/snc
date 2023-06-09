<script setup>
import FetchError from '@/components/FetchError'
import RelatedPosts from '@/components/RelatedPosts'

import PageTitle 	from '@/components/blocks/PageTitle'
import Hero 			from '@/components/blocks/Hero'
import Heading 		from '@/components/blocks/Heading'
import Paragraph 	from '@/components/blocks/Paragraph'
import Spacer 		from '@/components/blocks/Spacer'
import List 			from '@/components/blocks/List'
import Image 			from '@/components/blocks/Image'
import Download 	from '@/components/blocks/Download'
import Video 			from '@/components/blocks/Video'
import Separator 	from '@/components/blocks/Separator'
import Carousel 	from '@/components/blocks/Carousel'


defineProps({ 
	blocks: Array,
	error: Array,
	color: String,
	related: Array
})
</script>


<template>
	<ClientOnly>
		<div class="post-content pb-20">
			<div v-if="error" class="pt-24">
				<FetchError />
			</div>

			<section 
				v-for="block in blocks"
				:key="`block-${Math.floor(Math.random() * 1000000).toString()}`"
				:ref="block.blockName"
				class="wp-block"
				:class="block.attrs.className"
				v-else>

				<PageTitle 	v-if="'acf/page-title' === block.blockName" 	:data="block"/>
				<Hero 			v-if="'acf/hero' === block.blockName" 				:data="block"/>
				<Heading 		v-if="'core/heading' === block.blockName" 		:data="block"/>
				<Paragraph 	v-if="'core/paragraph' === block.blockName" 	:data="block"/>
				<Spacer 		v-if="'core/spacer' === block.blockName" 			:data="block" />
				<List 			v-if="'core/list' === block.blockName" 				:data="block" />
				<Image 			v-if="'core/image' === block.blockName" 			:data="block" />
				<Download 	v-if="'acf/download' === block.blockName" 		:data="block" />
				<ClientOnly>
					<Video 		v-if="'acf/video' === block.blockName" 				:data="block" />
				</ClientOnly>
				<Separator 	v-if="'core/separator' === block.blockName" 	:data="block" />
				<Carousel 	v-if="'acf/carousel' === block.blockName" 		:data="block" /> 
			</section>
		</div>


		<RelatedPosts 
			v-if="related.length"
			:data="related" 
			:color="color" />
	</ClientOnly>
</template>