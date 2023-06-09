<script setup>
import InputError from '@/components/Form/InputError'
import InputLabel from '@/components/Form/InputLabel'
import Dropdown from '@/components/Form/Dropdown'
import Option from '@/components/Form/DropdownOption'
import Loader from '@/components/account/Loader'
import SubmitButton from '@/components/account/SubmitButton'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { user_update } from '@/composables/api'

import {
  profile_dropdown_options,
  specialties_dropdown_options
} from '@/composables/register.js'

defineProps({ sending: Boolean })
const form = reactive({...JSON.parse(localStorage.getItem('user_snc'))})
const specialty_dropdown = ref('Elige una especialidad')
const profile_dropdown = ref('Médico')

const emit = defineEmits(['formInProgress'])

const triggerDropdown = (opt, dropdown) => {
	switch (dropdown) {
		case 'profile':
			profile_dropdown.value = opt.label
			form.usu_codperfil = opt.value
			break;
		case 'specialty':
			specialty_dropdown.value = opt.label
			form.usu_especialidad = opt.value
			break;
	}
}

const _user_specialty = specialties_dropdown_options.filter(e => e.value === form.usu_especialidad)[0]
if( _user_specialty ) triggerDropdown(_user_specialty, 'specialty')
triggerDropdown(profile_dropdown_options[0], 'profile')

// Crea una instancia de formulario con las reglas de validación
const schema = yup.object().shape({
  usu_codperfil: yup.string().required('Este campo es obligatorio'),
	usu_especialidad: yup
		.string().test('is-valid-specialidad', 'Este campo es obligatorio', (value) => {

		if (form.usu_especialidad) {
			return true;
		}

		return false; // Permitir campo vacío si no es requerido
	})
})


const onSubmit = () => {
	emit('formInProgress', true)

	user_update(form)
	.then((res) => {
		localStorage.setItem('user_snc', JSON.stringify(form))
		emit('formInProgress', false)
	})
	.catch(error => {
		console.log('error: ', error.message)
		emit('formInProgress', false)
	})
}
</script>

<template>
<div class="border-b border-stone-200 text-purple text-sm font-bold pb-2 select-none">Información profesional</div>

<Form 
	@submit="onSubmit" 
	:validation-schema="schema" 
	:initial-values="form" 
	class="relative"
	:class="{'pointer-events-none opacity-50': sending}">

	<Loader v-if="sending" />

	<div class="grid md:grid-cols-2 md:gap-x-5">
		<div class="mt-7">
			<InputLabel value="Perfil de usuario"/>
			<Field name="usu_codperfil" v-slot="{ field, errorMessage }">
				<Dropdown>
					<template #trigger>
						{{ profile_dropdown }}
					</template>

					<template #content>
						<Option
								v-for="opt in profile_dropdown_options" v-bind="field"
								:key="opt.value"
								@click="triggerDropdown(opt, 'profile')">{{ opt.label }}
						</Option>
					</template>
				</Dropdown>
				<InputError class="mt-2" :message="errorMessage"/>
			</Field>

		</div>
		<div class="mt-7">
			<InputLabel value="Especialidad"/>
			<Field name="usu_especialidad" v-slot="{ field, errorMessage }">
				<Dropdown>
					<template #trigger>
						{{ specialty_dropdown }}
					</template>

					<template #content>
						<Option
								:v-bind="field"
								v-for="opt in specialties_dropdown_options"
								:key="opt.value"
								@click="triggerDropdown(opt, 'specialty')">{{ opt.label }}
						</Option>
					</template>
				</Dropdown>
				<InputError class="mt-2" :message="errorMessage"/>
			</Field>
		</div>
	</div>

	<SubmitButton />
</Form>
</template>