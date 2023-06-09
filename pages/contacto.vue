<script setup>
import Layout from '@/layouts/Layout'

import InputError from '@/components/Form/InputError.vue'
import InputLabel from '@/components/Form/InputLabel.vue'
import TextInput from '@/components/Form/TextInput.vue'
import Dropdown from '@/components/Form/Dropdown.vue'
import Option from '@/components/Form/DropdownOption.vue'
import Checkbox from '@/components/Form/Checkbox.vue'

const config = useRuntimeConfig()
const sending = ref(false)
const sent = ref(false)

const {specialty_options} = defineProps({
  specialty_options: {
    type: Array,
    default: () => ([
      {
        value: 'neurologia',
        label: 'Neurología'
      },
      {
        value: 'psiquiatria',
        label: 'Psiquiatría'
      },
      {
        value: 'geriatria',
        label: 'Geriatría'
      },
      {
        value: 'medicina-familiar',
        label: 'Medicina Familiar'
      },
      {
        value: 'medicina-general',
        label: 'Medicina General'
      },
    ])
  }
})

const form = reactive({
  processing: false,

	name: '',
  lastname: '',
  email: '',
  speciality: '',
  work_center: '',
  phone: '',
  message: '',
  acceptance: false,

  errors: {
    name: '',
    lastname: '',
    email: '',
    speciality: '',
    work_center: '',
    phone: '',
    message: '',
  }
})


const specialty_dropdown = ref('')

const triggerDropdown = (opt) => {
  specialty_dropdown.value = opt.label
  form.speciality = opt.value
}


const submit = async () => {
	sending.value = true
  console.log(form)
	const API_URL = config.public.API_URL.replace('/wp/', '/contact/')
	const {data, error} = await useFetch(`${API_URL}/send`, {
		method: 'POST',
		body: form
	})

	if( data.value.errors ){
		let first_error = null
		Object.keys(data.value.errors).forEach(key => {
			if( !first_error ) first_error = key
			form.errors[key] = data.value.errors[key]
		})

		window.scrollTo({ top: document.getElementById(first_error).offsetTop + 60, behavior: 'smooth' })

	}else{
		
		window.scrollTo({ top: 0, behavior: 'smooth' })
		sent.value = true

	}

	sending.value = false
}


const clearError = key => form.errors[key] = ''
</script>

<template>
  <Layout navbarColor="dark">

    <form
			class="border-t pb-20 relative"
			:class="{'pointer-events-none opacity-50': sending}"
			@submit.prevent="submit">

			<div 
				v-if="sending"
				class="bg-white bg-opacity-80 inset-0 absolute flex justify-center items-end py-36 z-30">
				<div class="border-4 border-stone-200 border-t-purple w-6 h-6 rounded-full animate-spin"></div>
			</div>

      <section class="px-6 2xl:px-0">
				<div v-if="!sent" class="max-w-3xl mx-auto">
					<div class="text-center py-12">
						<h2 class="text-purple font-bold text-3xl my-2 select-none md:text-3xl">CONTACTO</h2>
						<div class="leading-tight font-semibold">Contáctanos mediante el formulario que tienes a continuación:</div>
					</div>


					<div class="grid gap-y-6">
						<div class="grid gap-6 md:grid-cols-2">
							<div class="">
								<InputLabel value="Nombre*" />

								<TextInput
									id="name"
									type="text"
									class="mt-2 block w-full"
									@keyup="clearError('name')"
									v-model="form.name"/>

								<InputError class="mt-2" :message="form.errors.name"/>
							</div>

							<div class="">
								<InputLabel value="Apellido*"/>

								<TextInput
									id="lastname"
									type="text"
									class="mt-2 block w-full"
									@keyup="clearError('lastname')"
									v-model="form.lastname"/>

								<InputError class="mt-2" :message="form.errors.lastname"/>
							</div>
						</div>

						<div class="">
							<InputLabel value="Correo electrónico*"/>

							<TextInput
								id="email"
								type="text"
								class="mt-2 block w-full"
								v-model="form.email"/>

							<InputError class="mt-2" :message="form.errors.email"/>
						</div>


						<div class="">
							<InputLabel value="Especialidad"/>

							<Dropdown>
								<template #trigger>
									{{ specialty_dropdown }}
								</template>

								<template #content>
									<Option
										v-for="opt in specialty_options"
										:key="opt.value"
										@click="triggerDropdown(opt)">
										{{ opt.label }}
									</Option>
								</template>
							</Dropdown>

							<InputError class="mt-2" :message="form.errors.speciality"/>
						</div>


						<div class="">
							<InputLabel value="Centro de trabajo"/>

							<TextInput
								id="workcenter"
								type="text"
								class="mt-2 block w-full"
								v-model="form.work_center"/>

							<InputError class="mt-2" :message="form.errors.work_center"/>
						</div>


						<div class="">
							<InputLabel value="Teléfono"/>

							<TextInput
								id="phone"
								type="text"
								class="mt-2 block w-full"
								v-model="form.phone"/>

							<InputError class="mt-2" :message="form.errors.phone"/>
						</div>


						<div class="">
							<InputLabel value="Mensaje"/>

							<textarea
								id="message"
								class="bg-white border border-gray-400 text-gray-600
								leading-none w-full h-40 px-4 py-2.5
								mt-2 block rounded-lg resize-none
								focus:outline-0 focus:ring-0 focus:border-gray-400"
								@keyup="clearError('message')"
								v-model="form.message"></textarea>

							<InputError class="mt-2" :message="form.errors.message"/>
						</div>


						<div class="block select-none">
							<label class="inline-flex items-center">
								<Checkbox 
									name="remember" 
									v-model:checked="form.acceptance"/>

								<span class="text-gray-600 cursor-pointer pl-3">He leído y acepto la
									<a
										href="https://www.esteveagora.com/es/privacidad"
										target="_blank"
										class="text-purple font-bold pl-0.5 hover:underline">
										política de privacidad
									</a>*
								</span>
							</label>
							<InputError class="mt-2" :message="form.errors.acceptance"/>
						</div>
						
						<div class="pt-8">
							<div class="flex justify-center">
								<button
									type="submit"
									class="bg-purple text-white text-sm font-medium py-3 px-32 transition-all select-none rounded-lg hover:opacity-80">
									<span>ENVIAR</span>
								</button>

							</div>
						</div>
					</div>

				</div>

				
				<div v-else class="max-w-3xl mx-auto">
					<div class="text-center pt-32 pb-20">
						<h3 class="text-xl leading-tight text-purple select-none">Muchas gracias por su contacto {{ form.name }}, <br>responderemos a la brevedad posible.</h3>
					</div>
				</div>

      </section>


    </form>
  </Layout>
</template>

<style scoped></style>
