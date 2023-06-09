<script setup>
import InputError from '@/components/Form/InputError'
import InputLabel from '@/components/Form/InputLabel'
import TextInput from '@/components/Form/TextInput'
import Dropdown from '@/components/Form/Dropdown'
import Option from '@/components/Form/DropdownOption'
import Loader from '@/components/account/Loader'
import SubmitButton from '@/components/account/SubmitButton'

import { Form, Field, ErrorMessage } from 'vee-validate'
import { user_update } from '@/composables/api'

import {
  countries_dropdown_options,
  provinces_dropdown_options,
	population_dropdown_options
} from '@/composables/register.js'

defineProps({ sending: Boolean })
const form = reactive({...JSON.parse(localStorage.getItem('user_snc'))})
const country_dropdown = ref('España')
const provinces_dropdown = ref('Elige una provincia')
const population_dropdown = ref('Elige una población')
let population_dropdown_options_filtered = ref('')

const emit = defineEmits(['formInProgress'])

const triggerDropdown = (opt, dropdown) => {
	switch (dropdown) {
		case 'provinces':
			provinces_dropdown.value = opt.label
			form.usu_provincia = opt.value
			population_dropdown_options_filtered = population_dropdown_options.filter(
				population => population.province == opt.value
			);
			break;
		case 'population':
			population_dropdown.value = opt.label
			form.usu_poblacion = opt.value
			break;
	}
}


if( '' !== form.usu_provincia ){
	const _user_province = provinces_dropdown_options.filter(e => e.value === form.usu_provincia)[0]
	if( _user_province ) triggerDropdown(_user_province, 'provinces')
}

if( '' !== form.usu_poblacion && '' !== form.usu_provincia ){
	const _user_population = population_dropdown_options.filter(e => (e.value === form.usu_poblacion && e.province === form.usu_provincia))[0]
	if( _user_population ) triggerDropdown(_user_population, 'population')
}



const onSubmit = () => {
	console.log('form', form)
	if( 
		'' === form.usu_codpais 
		|| '' === form.usu_provincia
		|| '' === form.usu_poblacion
		|| '' === form.usu_cp
		|| '' === form.usu_direccion
		|| '' === form.usu_telefono
	) return

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
<div class="border-b border-stone-200 text-purple text-sm font-bold pb-2 select-none">Locación</div>

<Form 
	@submit="onSubmit" 
	:initial-values="form" 
	class="relative"
	:class="{'pointer-events-none opacity-50': sending}">

	<Loader v-if="sending" />

	<div class="grid md:grid-cols-2 md:gap-x-5">

		<div class="mt-7">
			<InputLabel for="country" value="País"/>
			<Field name="usu_codpais" v-slot="{ field, errorMessage }">
				<Dropdown>
					<template #trigger>
						{{ country_dropdown }}
					</template>

					<template #content>
						<Option v-for="opt in countries_dropdown_options" :key="opt.value"
								@click="triggerDropdown(opt, 'country')">{{ opt.label }}
						</Option>
					</template>
				</Dropdown>
				<InputError class="mt-2" :message="errorMessage"/>
			</Field>
		</div>


		<div class="mt-7">
			<InputLabel for="province" value="Provincia"/>
			<Dropdown>
				<template #trigger>
					{{ provinces_dropdown }}
				</template>

				<template #content>
					<Option v-for="opt in provinces_dropdown_options" :key="opt.value"
							@click="triggerDropdown(opt, 'provinces')">
								{{ opt.label }}
					</Option>
				</template>
			</Dropdown>
			<InputError v-if="'' === form.usu_provincia" class="mt-2" message="Este campo es obligatorio"/>
			<input type="hidden" name="" v-model="form.usu_provincia"/>
		</div>
	</div>

	<div class="grid md:grid-cols-2 md:gap-x-5">
		<div class="mt-7">
			<InputLabel for="population" value="Población" />
			<Dropdown>
					<template #trigger>
							{{ population_dropdown }}
					</template>

					<template #content>
							<Option v-for="opt in population_dropdown_options_filtered" :key="opt.value"
									@click="triggerDropdown(opt, 'population')">{{
										opt.label }}
							</Option>
					</template>
			</Dropdown>
			<InputError v-if="'' === form.usu_poblacion" class="mt-2" message="Este campo es obligatorio"/>
			<input type="hidden" name="" v-model="form.usu_poblacion"/>
		</div>

		<div class="mt-7">
			<InputLabel for="zip" value="Código postal"/>
				<Field name="usu_cp" v-slot="{ field, errorMessage }">
					<TextInput v-bind="field" id="zip" type="text" class="mt-1 block w-full" v-model="form.usu_cp" autocomplete="zip"/>
					<InputError v-if="'' === form.usu_cp" class="mt-2" message="Este campo es obligatorio"/>
				</Field>
		</div>
	</div>

	<div class="mt-7">
		<InputLabel for="usu_direccion" value="Dirección"/>

		<Field name="usu_direccion" v-slot="{ field, errorMessage }">
			<TextInput
				v-bind="field"
				id="address"
				type="text"
				class="mt-1 block w-full"
				v-model="form.usu_direccion"
				autocomplete="address"/>

			<InputError v-if="'' === form.usu_direccion" class="mt-2" message="Este campo es obligatorio"/>
		</Field>
	</div>

	<!-- <div class="mt-7 hidden">
		<Field name="usu_telefono" v-slot="{ field, errorMessage }">
			<InputLabel for="phone" value="Teléfono"/>
			<TextInput v-bind="field" id="phone" type="text" class="mt-1 block w-full" v-model="form.usu_telefono" autocomplete="phone"/>
			<InputError class="mt-2" :message="errorMessage"/>
		</Field>
	</div> -->
	<input type="hidden" v-model="form.usu_telefono" />

	<SubmitButton />
</Form>
</template>