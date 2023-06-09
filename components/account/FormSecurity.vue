<script setup>
import InputError from '@/components/Form/InputError.vue'
import InputLabel from '@/components/Form/InputLabel.vue'
import TextInput from '@/components/Form/TextInput.vue'
import Loader from '@/components/account/Loader'
import SubmitButton from '@/components/account/SubmitButton'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { change_password } from '@/composables/api'

defineProps({ sending: Boolean })

const user = JSON.parse(localStorage.getItem('user_snc'))
const form = reactive({
	usu_email: user.usu_email,
	usu_password: '',
	usu_newpwd: '',
})
const password_confirm = ref('')

const emit = defineEmits(['formInProgress'])

const errors = reactive({
	password_confirm: false
})

// Crea una instancia de formulario con las reglas de validación
const schema = yup.object().shape({
  usu_password: yup.string().required('Antes de cambiar la contraseña debes ingresar la contraseña actual')
})

const passwordConfirm = () => {
	if( '' === password_confirm.value ){
		errors.password_confirm = false
		return
	}

	if( form.usu_newpwd !== password_confirm.value ){
		errors.password_confirm = true
		return false
	}else{
		errors.password_confirm = false
		return true
	}
}

const onSubmit = () => {

	if( !password_confirm.value ){
		errors.password_confirm = true
		return
	}

	if( !passwordConfirm() ) return

	emit('formInProgress', true)

	change_password(
		form.usu_email, 
		form.usu_password,
		form.usu_newpwd
	)
	.then((res) => {
		emit('formInProgress', false)
	})
	.catch(error => {
		console.log('error: ', error.message)
		emit('formInProgress', false)
	})
}
</script>

<template>
<div class="border-b border-stone-200 text-purple text-sm font-bold pb-2 select-none">Seguridad</div>

<Form 
	@submit="onSubmit" 
	:validation-schema="schema" 
	:initial-values="form" 
	class="relative"
	:class="{'pointer-events-none opacity-50': sending}">

	<Loader v-if="sending" />

	<div class="grid md:grid-cols-2 md:gap-x-5">
		<div class="mt-7">
			<InputLabel for="password" value="Contraseña actual"/>
			<Field name="usu_password" v-slot="{ field, errorMessage }">
				<TextInput
					v-bind="field"
					id="password"
					type="password"
					class="mt-1 block w-full"
					v-model="form.usu_password"
					autocomplete="new-password"
				/>
				<InputError class="mt-2" :message="errorMessage"/>
			</Field>
		</div>
	</div>

	<div class="grid md:grid-cols-2 md:gap-x-5">
		<div class="mt-7">
			<InputLabel for="new_password" value="Nueva contraseña"/>
			<Field name="usu_newpwd" v-slot="{ field, errorMessage }">
				<TextInput
					v-bind="field"
					id="new_password"
					type="password"
					class="mt-1 block w-full"
					v-model="form.usu_newpwd"
					autocomplete="new-password"
					@keyup="passwordConfirm()"/>
				<InputError class="mt-2" :message="errorMessage"/>
			</Field>
		</div>

		<div class="mt-7">
			<InputLabel for="password_confirm" value="Confirmar contraseña"/>
			<Field name="password_confirm" v-slot="{ field, errorMessage }">
				<TextInput
					v-bind="field"
					id="password_confirm"
					type="password"
					class="mt-1 block w-full"
					v-model="password_confirm"
					autocomplete="new-password"
					@keyup="passwordConfirm()"/>
				
				<InputError v-if="errors.password_confirm" class="mt-2" message="Las contraseñas no coinciden"/>
			</Field>
		</div>
	</div>

	<SubmitButton />
</Form>
</template>