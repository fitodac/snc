export default data => {

	if( !data ) return

	const blocks = reactive([...data.filter(e => e.blockName)])

	blocks.forEach((e,i) => {
		let c = 'wp-block-'

		switch(e.blockName){
			case 'acf/page-title': 	c += 'page-title'; 	break;
			case 'acf/hero': 				c += 'hero'; 				break;
			case 'core/heading': 		c += 'heading'; 		break;
			case 'core/paragraph': 	c += 'paragraph'; 	break;
			case 'core/spacer': 		c += 'spacer'; 			break;
			case 'core/list': 			c += 'list'; 				break;
			case 'core/image': 			c += 'image'; 			break;
			case 'acf/video': 			c += 'video'; 			break;
			case 'acf/download': 		c += 'download'; 		break;
			case 'core/separator': 	c += 'separator'; 	break;
			case 'acf/carousel': 		c += 'carousel'; 		break;
		}

		if( e.attrs.className ){
			blocks[i].attrs.className += ` ${c}`
		}else{
			blocks[i].attrs.className = c
		}
	})

	return blocks
}