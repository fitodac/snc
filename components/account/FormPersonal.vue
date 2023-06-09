<script setup>
import InputError from '@/components/Form/InputError'
import InputLabel from '@/components/Form/InputLabel'
import TextInput from '@/components/Form/TextInput'
import Loader from '@/components/account/Loader'
import SubmitButton from '@/components/account/SubmitButton'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { user_update } from '@/composables/api'

defineProps({ sending: Boolean })
const form = reactive({...JSON.parse(localStorage.getItem('user_snc'))})

const emit = defineEmits(['formInProgress'])

// Crea una instancia de formulario con las reglas de validación
const schema = yup.object().shape({
  usu_nombre: yup.string().required('Este campo es obligatorio'),
  usu_ape1: yup.string().required('Este campo es obligatorio'),
  usu_email: yup.string().email('El correo electrónico no es válido').required('Este campo es obligatorio')
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
<div class="border-b border-stone-200 text-purple text-sm font-bold pb-2 select-none">Información personal</div>

<Form 
	@submit="onSubmit" 
	:validation-schema="schema" 
	:initial-values="form" 
	class="relative"
	:class="{'pointer-events-none opacity-50': sending}">

	<Loader v-if="sending" />

	<div class="mt-7">
		<InputLabel for="usu_nombre" value="Nombre"/>

		<Field name="usu_nombre" v-slot="{ field, errorMessage }">
			<TextInput
				v-bind="field"
				id="name"
				type="text"
				class="mt-1 block w-full"
				v-model="form.usu_nombre"
				autocomplete="name"/>

			<InputError class="mt-2" :message="errorMessage"/>
		</Field>
	</div>

	<div class="grid md:grid-cols-2 md:gap-x-5">

		<div class="mt-7">
			<InputLabel for="first_last_name" value="Primer apellido"/>
			<Field name="usu_ape1" v-slot="{ field, errorMessage }">
				<TextInput
					v-bind="field"
					id="first_last_name"
					type="text"
					class="mt-1 block w-full"
					v-model="form.usu_ape1"
					autocomplete="first_last_name"/>
				<InputError class="mt-2" :message="errorMessage"/>
			</Field>
		</div>

		<div class="mt-7">
			<InputLabel for="second_last_name" value="Segundo apellido"/>
				<TextInput
					id="second_last_name"
					type="text"
					class="mt-1 block w-full"
					v-model="form.usu_ape2"
					autocomplete="second_last_name"/>
		</div>

	</div>

	<div class="mt-7">
		<InputLabel for="email" value="Email"/>
		<Field name="usu_email" v-slot="{ field, errorMessage }">
			<TextInput
				v-bind="field"
				id="email"
				type="email"
				class="mt-1 block w-full"
				v-model="form.usu_email"
				autocomplete="email"/>
				<InputError class="mt-2" :message="errorMessage"/>
		</Field>
	</div>

	<SubmitButton />
</Form>
</template>