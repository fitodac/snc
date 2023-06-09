<script setup>
import BtnCTA from '@/components/BtnCallToAction.vue'
import TextInput from '@/components/Form/TextInput.vue'

import { ref, reactive } from 'vue'

const config = useRuntimeConfig()
const showModal = ref(!sessionStorage.getItem('esteveSncPonentes'))
const error = ref(false)

const form = reactive({
	processing: false,
	password: '',
})


const submit = () => {
	if( '' === form.password ){
		error.value = 'Debes ingresar una contraseña'
	}else if( form.password.toLowerCase() !== config.public.PONENTE_AUTH.toLowerCase() ){
		error.value = 'La contraseña no es correcta'
	} else {
		sessionStorage.setItem('esteveSncPonentes', true)
		showModal.value = false;
	}
}

</script>

<template>
	<div class="bg-white bg-opacity-80 inset-0 fixed backdrop-blur-md z-50"  v-if="showModal">
		<div class="w-full h-full grid grid-cols-1 place-content-center px-6 2xl:px-0">
			<div class="flex justify-center">

				<div class="bg-purple text-white w-full max-w-lg p-10">
					<div class="grid">

						<div class="">
							<div class="text-xl font-bold leading-none
								md:text-2xl md:leading-none
								lg:text-3xl lg:leading-none">
								Este contenido es privado
							</div>

							<div class="font-light mt-3">
								Entra con la contraseña para obtener acceso completo
							</div>

							<form @submit.prevent="submit">
								<div class="mt-4">
									<TextInput
										id="password"
										type="password"
										placeholder="Contraseña *"
										class="mt-1 block w-full"
										v-model="form.password"
										autocomplete="current-password"
										:rounded="false"
										@keyup="error = false"
									/>
								</div>

								<div v-if="error" class="text-white text-sm">{{ error }}</div>

								<div class="mt-6" :class="{ 'opacity-25 pointer-events-none': form.processing }">
									<BtnCTA className="w-full !bg-aqua" type="submit">
										<span>Entrar</span>
									</BtnCTA>
								</div>
							</form>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>