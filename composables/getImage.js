const getImage = async id => {

	const config = useRuntimeConfig()
	const { data, error } = await useFetch(`${config.public.API_URL}/media/${id}`, {
		headers: {
			Authorization: `Basic ${btoa(config.public.WP_REST_AUTH.USER+':'+config.public.WP_REST_AUTH.PASS)}`
		}
	})

	if( error.value ){
		console.log(`Se ha productido un error al cargar la imagen ${id}`, error)
		return { src: null, alt: '' }
	}else{
		return {
			src: data.value.guid.rendered,
			alt: data.value.slug
		}
	}

}


export default getImage