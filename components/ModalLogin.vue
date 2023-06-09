<script setup>
import BtnCTA from '@/components/BtnCallToAction.vue'
import TextInput from '@/components/Form/TextInput.vue'

import { ref, reactive } from "vue";
import { login } from '@/composables/api';
import { onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'


const form = reactive({
	processing: false,
	usu_email: '',
	usu_password: '',
	remember: false,
	errors: {
		general: '',
	}
});

let code_error = ref(false)
const clearErrors = () => {
	code_error.value = false
}

const submit = () => {
	login(form)
		.then((res) => {
			localStorage.setItem('user_snc', JSON.stringify(res))
			localStorage.setItem('isAuthenticated', true)
			return navigateTo({ path: '/' });
		})
		.catch(error => {
			if (error.message === 'KO') {
				form.errors.general = 'Nombre de usuario o contraseña erróneo'
			} else {
				code_error.value = error
			}
		})
}

const route = useRoute()
const isAuthenticated = ref(false)
const showModal = ref(false)
const excludedRoutes = ["/", "/login", "/registro", "/olvido", "/contacto", "/login/", "/registro/", "/olvido/", "/contacto/"];

onBeforeMount(() => {
	isAuthenticated.value = window.localStorage.getItem('isAuthenticated') === 'true'
	if ((!isAuthenticated.value || isAuthenticated.value === 'false') && !excludedRoutes.includes(route.path)) {
		showModal.value = true
	} else {
		showModal.value = false
	}
})

watch(() => route.path, () => {
	isAuthenticated.value = window.localStorage.getItem('isAuthenticated') === 'true'
	if ((!isAuthenticated.value || isAuthenticated.value === 'false') && !excludedRoutes.includes(route.path)) {
		showModal.value = true
	} else {
		showModal.value = false
	}
})

</script>

<template>
	<div class="bg-white bg-opacity-80 inset-0 fixed backdrop-blur-md z-50"  v-if="showModal">
		<div class="w-full h-full grid grid-cols-1 place-content-center px-6 2xl:px-0">
			<div class="flex justify-center">

				<div class="bg-purple text-white w-full max-w-5xl p-10">
					<div class="grid md:grid-cols-2 gap-10">

						<div class="">
							<div class="text-3xl font-bold leading-none
								md:text-4xl md:leading-none
								lg:text-5xl lg:leading-none">
								Este contenido es privado
							</div>

							<div class="font-light mt-3">
								Entra con tu correo electrónico y contraseña para obtener acceso completo
							</div>

							<form @submit.prevent="submit">

								<div v-if="(form.errors.general || code_error)" class="mt-7">
									<div class="bg-[#FFF7D8] px-5 py-3 select-none rounded-xl">
										<div class="flex gap-x-10 items-center">
											<div class="font-bold leading-tight flex-1 text-gray-700">
												<p v-if="form.errors.general">{{ form.errors.general }}</p>
												<div v-if="code_error">
													Por favor,
													<nuxt-link
														to="/contacto"
														class="text-primary font-bold hover:underline">
													Contacta
													</nuxt-link>
													con nosotros.
												</div>
											</div>

											<div class="w-10">
												<button @click.prevent="clearErrors()"  class="hover:opacity-90 text-gray-700">
													Cerrar
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class="mt-4">
									<TextInput
										id="email"
										type="email"
										placeholder="Email *"
										class="mt-1 block w-full"
										v-model="form.usu_email"
										required
										autofocus
										autocomplete="username"
										:rounded="false"
									/>

								</div>

								<div class="mt-4">
									<TextInput
										id="password"
										type="password"
										placeholder="Contraseña *"
										class="mt-1 block w-full"
										v-model="form.usu_password"
										required
										autocomplete="current-password"
										:rounded="false"
									/>
								</div>

								<div class="pl-2 pt-1">
									<nuxt-link
										to="/olvido"
										class="text-xs leading-none hover:underline">
									¿Olvidaste la contraseña?
									</nuxt-link>
								</div>

								<div class="mt-6" :class="{ 'opacity-25 pointer-events-none': form.processing }">
									<BtnCTA className="w-full !bg-aqua" type="submit">
										<span>Entrar</span>
									</BtnCTA>
								</div>
							</form>
						</div>

						<div class="grid items-center">
							<div class="bg-aqua p-8 space-y-10 rounded-3xl md:px-12 py-14">
								<div class="text-2xl font-bold leading-none text-center
								md:text-3xl md:leading-none">
									¿Aún no te has registrado?
								</div>

								<div class="flex justify-center">
									<nuxt-link
										to="/registro"
										class="bg-white bg-opacity-40 text-white text-sm text-center font-medium inline-flex px-20 py-3 rounded-lg transition-all hover:bg-opacity-20">
										REGÍSTRATE AQUÍ
									</nuxt-link>
								</div>

								<div class="text-sm text-center font-light leading-tight">
									Tendrás acceso a materiales para tí y para tus pacientes, cursos, artículos, entre otros recursos de interés.
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>