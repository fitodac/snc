// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,

	runtimeConfig: {
		public: {
			API_URL: '',
			WP_REST_AUTH_USER: '',
			WP_REST_AUTH_PASS: '',
			PONENTE_AUTH: '',
			ESTEVE_MAIN_URL: '',
			ESTEVE_API_URL: '',
			GTM_CONTAINER_ID: ''
		}
	},

	app: {
		head: {
			title: 'Canal Esteve SNC',
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png'
				},
				{
					rel: 'icon',
					sizes: '32x32',
					href: '/favicon-32x32.png'
				},
				{
					rel: 'icon',
					sizes: '16x16',
					href: '/favicon-16x16.png'
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest'
				}
			],
			htmlAttrs: {
				lang: 'es'
			},
		},
	},

	css: [
		'remixicon/fonts/remixicon.css',
		'@/css/header.scss',
		'@/css/main.scss',
		'plyr/dist/plyr.css'
	],

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],

	googleFonts: {
		families: {
			Barlow: [300, 400, 500, 600, 700, 800, 900]
		}
	},
})