<script setup>
import postBlocks from '@/composables/postBlocks'

import Layout from '@/layouts/Layout'
import PostHeader from '@/components/PostHeader'
import PostContent from '@/components/PostContent'


const config = useRuntimeConfig()
const { params } = useRoute()

const { data, pending, error} = await useFetch(`${config.public.API_URL}/posts/?slug=${params.slug}`)

if( error.value ) console.log(`Error: ${error.value}`)

const { blocks } = data.value[0]
const _blocks = postBlocks(blocks)

const related_posts = data.value[0].acf?.related_posts ?? []
</script>


<template>
	<Layout>
		<PostHeader bg="purple-dark" />

		<PostContent
			:error="error"
			:blocks="_blocks" 
			:related="related_posts"
			color="purple-dark" />

	</Layout>
</template>