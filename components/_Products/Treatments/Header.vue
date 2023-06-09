<template>
	<div 
		id="pageHeader" 
		class="bg-prod-treatments px-6 pb-20 
						sm:pb-28 md:pb-36 lg:pb-44">
		
		<div class="container global">
			<h2 
				class="text-white text-2xl font-extrabold leading-none 
								uppercase select-none sm:text-3xl
								md:text-4xl lg:text-6xl">
				Tratamientos
			</h2>
		</div>

	</div>
</template>


<style lang="scss" scoped>
#pageHeader{
	background-image: url('img/brand-iso.svg');
	background-size: 120% auto;
	background-repeat: no-repeat;
	background-position: center 30px;
	box-shadow: 0 0 0 10000px rgba(40, 2, 69, .9) inset;
	
	padding-top: 80px;

	@media(min-width: 640px){	
		background-size: 100% auto;
		padding-top: 140px; 
	}
	
	@media(min-width: 768px){ 
		padding-top: 250px; 
	}

	@media(min-width: 1200px){ 
		padding-top: 280px; 
	}
}
</style>