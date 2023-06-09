<script setup>
import Checkbox from '@/components/Form/Checkbox.vue'
import Loader from '@/components/account/Loader'
import SubmitButton from '@/components/account/SubmitButton'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { user_update } from '@/composables/api'

defineProps({ sending: Boolean })
const user = JSON.parse(localStorage.getItem('user_snc'))
const form = reactive({...user, mailing: user.mailing === 'S' ? true : false})

const emit = defineEmits(['formInProgress'])

const onSubmit = () => {
	emit('formInProgress', true)

	user_update(form)
	.then((res) => {
		console.log('res', res)
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
<div class="border-b border-stone-200 text-purple text-sm font-bold pb-2 select-none">Preferencias</div>

<Form 
	@submit="onSubmit" 
	:initial-values="form" 
	class="relative"
	:class="{'pointer-events-none opacity-50': sending}">

	<Loader v-if="sending" />

	<div class="mt-7">
		<label class="flex items-center select-none">
			<Checkbox name="mailing" v-model:checked="form.mailing"/>
			<span class="ml-2 text-base text-gray-600 cursor-pointer">
				Deseo recibir <strong>comunicaciones comerciales de parte de Esteve.</strong>
			</span>
		</label>
	</div>

	<SubmitButton />
</Form>
</template>