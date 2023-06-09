/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./tailwind-whitelist.txt'
	],
	darkMode: 'class',
  theme: {
    extend: {
			backgroundSize:{
				'70vw': '70vw auto',
				'90%': '90% auto',
				'sz-y-full': 'auto 100%'
			},
			backgroundPosition: {
			},
			colors: {
				pink: {
					50: '#FEF7F8',
					200: '#E6D1D4',
					DEFAULT: '#ED6F82'
				},
				purple: {
					50: '#F2F0F4',
					DEFAULT: '#9A0079',
					dark: '#280245'
				},
				violet: '#310057',
				aqua: '#00829B',
				soft: '#F3F0F5',
				darker: '#252B3C',
				cream: '#C2C2C2',
				navy: {
					50: '#F7FAFC',
					DEFAULT: '#1D4289'
				},
				soft: {
					blue: '#7DA1C4'
				},
				prod: {
					purple: {
						500: '#937EAB',
						DEFAULT: '#9A0079'
					},
					treatments: {
						DEFAULT: '#280245',
						'blue-light': '#7DA1C4'
					},
					xeristar: '#ED6F82',
					alzerta: {
						DEFAULT: '#1D4288',
						lightblue: '#7CA0C4',
						paleblue: '#E6EDF4',
						rose: {
							DEFAULT: '#EE5F79',
							700: '#F394A5'
						},
					},
					'alzerta-dos-por-semana': {
						DEFAULT: '#1C4188',
						tableblue: '#1F2A44'
					},
					inbrija: {
						50: '#ead0f0',
						500: '#7C6991',
						DEFAULT: '#3E1647',
						yellow: '#F9C606'
					}
				}
			}
		},
  },
  plugins: [],
}

