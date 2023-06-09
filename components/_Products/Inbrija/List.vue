<script setup>
defineProps({ data: Object })
const base_url = window.location.origin
const makeRandomID = (length, dict='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => Array.from({length}, _=>dict[~~(Math.random()*dict.length)]).join('')
</script>


<template>
	<section class="px-6 xl:px-0">
		<div class="max-w-2xl mx-auto">

			<ul class="grid gap-y-7">
				<li
					v-for="(item, i) in data"
					:key="makeRandomID(9)"
					class="flex gap-x-5"
					:class="{'border-t border-prod-inbrija-yellow pt-5': i}">
					
					<img 
						:src="`${base_url}/img/products/inbrija/list-icon.webp`" 
						alt="icono de lista"
						class="w-5 h-6 md:w-6 md:h-7">
					
					<div 
						v-html="item"
						class="leading-tight" />
				</li>
			</ul>
		</div>
	</section>
</template>