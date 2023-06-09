<script setup>
import Layout from '@/layouts/Layout'

// import Intro from '@/components/Pages/Intro.vue'
import InputError from '@/components/Form/InputError.vue'
import InputLabel from '@/components/Form/InputLabel.vue'
import TextInput from '@/components/Form/TextInput.vue'
import Dropdown from '@/components/Form/Dropdown.vue'
import Option from '@/components/Form/DropdownOption.vue'
import Checkbox from '@/components/Form/Checkbox.vue'
import {reactive} from "vue";
import * as yup from 'yup';
import {
  Form,
  Field,
  ErrorMessage
} from "vee-validate";
import { register } from '~/composables/api';

import {
  countries_dropdown_options,
  provinces_dropdown_options,
  population_dropdown_options,
  profile_dropdown_options,
  specialties_dropdown_options
} from '@/composables/register.js'

const intro = ref({
  title: 'REGISTRO',
  intro: 'Gracias por tu interés en CANAL ESTEVE SNC.\n' +
      '<br><strong>Por favor introduce tus datos.</strong>',
  content: '',
});

const form = reactive({
  usu_nombre: '',
  usu_email: '',
  usu_password: '',
  usu_ape1: '',
  usu_ape2: '',
  usu_dni: '',
  usu_codpais: '042',
  usu_codprovestado: '',
  usu_ciudad: 'no introducido',
  usu_direccion: '',
  usu_cp: '',
  usu_telefono: '666666666',
  usu_codperfil: 'ME',
  usu_codespecialidad: '',
  usu_codpoblacion: '',
  usu_empresa: '',
  mailing: false,
  terms: false,
  doctor: false,
});

const profile_dropdown = ref('Médico')
const country_dropdown = ref('España')
const provinces_dropdown = ref('Elige una provincia')
const population_dropdown = ref('Elige una población')
const specialty_dropdown = ref('Elige una especialidad')
let population_dropdown_options_filtered = ref('')

const triggerDropdown = (opt, dropdown) => {
  switch (dropdown) {
    case 'profile':
      profile_dropdown.value = opt.label
      form.usu_codperfil = opt.value
      break;
    case 'provinces':
      provinces_dropdown.value = opt.label
      form.usu_codprovestado = opt.value
      population_dropdown_options_filtered = population_dropdown_options.filter(
          population => population.province == opt.value
      );
      break;
    case 'population':
      population_dropdown.value = opt.label
      form.usu_codpoblacion = opt.value
      break;
    case 'specialty':
      specialty_dropdown.value = opt.label
      form.usu_codespecialidad = opt.value
      break;
  }
};

// Crea una instancia de formulario con las reglas de validación
const schema = yup.object().shape({
  usu_email: yup.string().email('El correo electrónico no es válido').required('Este campo es obligatorio'),
  usu_password: yup.string().required('Este campo es obligatorio'),
  usu_nombre: yup.string().required('Este campo es obligatorio'),
  usu_ape1: yup.string().required('Este campo es obligatorio'),
  usu_codperfil: yup.string().required('Este campo es obligatorio'),
  usu_codespecialidad: yup
    .string().test('is-valid-specialidad', 'Este campo es obligatorio', (value) => {

    if (form.usu_codespecialidad) {
      return true;
    }

    return false; // Permitir campo vacío si no es requerido
  }),
  usu_codpais: yup.string().required('Este campo es obligatorio'),
  usu_codprovestado: yup
    .string().test('is-valid-estado', 'Este campo es obligatorio', (value) => {

    if (form.usu_codprovestado) {
      return true;
    }

    return false; // Permitir campo vacío si no es requerido
  }),
  usu_codpoblacion: yup
    .string().test('is-valid-poblacion', 'Este campo es obligatorio', (value) => {

      if (form.usu_codpoblacion) {
        return true;
      }

      return false; // Permitir campo vacío si no es requerido
    }),
  usu_ciudad: yup.string().required('Este campo es obligatorio'),
  usu_cp: yup.string().required('Este campo es obligatorio'),
  usu_direccion: yup.string().required('Este campo es obligatorio'),
  usu_telefono: yup.string().required('Este campo es obligatorio'),
  terms: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones').label('Debes aceptar los términos y condiciones'),
  doctor: yup
    .bool()
    .oneOf([true], 'Debes aceptar los términos y condiciones').label('Debes aceptar los términos y condiciones'),
});

let code_error = ref(false)
let submitted = ref(false)
const clearErrors = () => {
  code_error.value = false
}

const onSubmit = () => {
  register(form)
  .then((res) => {
    submitted.value = true
  })
  .catch(error => {
    code_error.value = error.message
  })
}

</script>

<template>
  <Layout navbarColor="dark">

    <section id="form" v-if="!submitted">
      <Form @submit="onSubmit" :validation-schema="schema" :initial-values="form">
        <div class="max-w-3xl mx-auto">

					<div class="text-center py-6">
						<h2 class="text-purple font-bold text-3xl my-2 select-none md:text-3xl">REGISTRO</h2>
						<p class="text-center">
							Si ya estás dado de alta en Canal SNC o ESTEVE ÁGORA, haz
							<nuxt-link
									to="/login"
									class="leading-none hover:underline">
								<strong class="text-fuchsia-800">log-in</strong>
							</nuxt-link>
							con tu usuario y contraseña.
						</p>
					</div>

          <div v-if="(code_error)" class="my-7">
            <div class="bg-[#FFF7D8] px-5 py-3 select-none rounded-xl">
              <div class="flex gap-x-10 items-center">
                <div class="font-bold leading-tight flex-1 text-gray-700">
                  <p>{{ code_error }}</p>
                </div>

                <div class="w-10">
                  <button @click.prevent="clearErrors()" class="hover:opacity-90 text-gray-700">
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
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


          <div class="grid md:grid-cols-2 md:gap-x-5">

            <div class="mt-7">
              <InputLabel for="country" value="País"/>
              <Field name="usu_codciudad" v-slot="{ field, errorMessage }">
                <Dropdown>
                  <template #trigger>
                    {{ country_dropdown }}
                  </template>

                  <template #content>
                    <Option v-for="opt in countries_dropdown_options" :key="opt.value" v-bind="field"
                        @click="triggerDropdown(opt,'country')">{{ opt.label }}
                    </Option>
                  </template>
                </Dropdown>
                <InputError class="mt-2" :message="errorMessage"/>
              </Field>
            </div>


            <div class="mt-7">
              <InputLabel for="province" value="Provincia"/>
              <Field name="usu_codprovestado" v-slot="{ field, errorMessage }">
                <Dropdown>
                  <template #trigger>
                    {{ provinces_dropdown }}
                  </template>

                  <template #content>
                    <Option v-for="opt in provinces_dropdown_options" :key="opt.value" v-bind="field"
                        @click="triggerDropdown(opt, 'provinces')">
                          {{ opt.label }}
                    </Option>
                  </template>
                </Dropdown>
                <InputError class="mt-2" :message="errorMessage"/>
              </Field>
            </div>
          </div>


          <div class="grid md:grid-cols-2 md:gap-x-5">
            <div class="mt-7">
              <InputLabel for="population" value="Población" />
              <Field name="usu_codpoblacion" v-slot="{ field, errorMessage }">
                <Dropdown>
                    <template #trigger>
                        {{ population_dropdown }}
                    </template>

                    <template #content>
                        <Option v-for="opt in population_dropdown_options_filtered" :key="opt.value" v-bind="field"
                            @click="triggerDropdown(opt, 'population')">{{
                              opt.label }}
                        </Option>
                    </template>
                </Dropdown>
                <InputError class="mt-2" :message="errorMessage"/>
              </Field>
            </div>

            <div class="mt-7">
              <InputLabel for="zip" value="Código postal"/>
                <Field name="usu_cp" v-slot="{ field, errorMessage }">
                  <TextInput v-bind="field" id="zip" type="text" class="mt-1 block w-full" v-model="form.usu_cp" autocomplete="zip"/>
                  <InputError class="mt-2" :message="errorMessage"/>
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

              <InputError class="mt-2" :message="errorMessage"/>
            </Field>
          </div>

          <div class="mt-7 hidden">
            <Field name="usu_telefono" v-slot="{ field, errorMessage }">
              <InputLabel for="phone" value="Teléfono"/>
              <TextInput v-bind="field" id="phone" type="text" class="mt-1 block w-full" v-model="form.usu_telefono" autocomplete="phone"/>
              <InputError class="mt-2" :message="errorMessage"/>
            </Field>
          </div>

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
              <Field name="usu_codespecialidad" v-slot="{ field, errorMessage }">
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

          <div class="grid md:grid-cols-2 md:gap-x-5">
            <div class="mt-7">
              <InputLabel for="password" value="Contraseña"/>
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


          <div class="mt-7">
            <label class="flex items-center select-none">
              <Checkbox name="mailing" v-model:checked="form.mailing"/>
              <span class="ml-2 text-base text-gray-600 cursor-pointer">
                Deseo recibir <strong>comunicaciones comerciales de parte de Esteve.</strong>
              </span>
            </label>

            <Field name="terms" type="checkbox" v-slot="{ field, errorMessage }" :value="true">
              <label class="flex items-center mt-3 select-none">
                <Checkbox name="terms" v-model:checked="form.terms" v-bind="field" :value="true"/>
                <span class="ml-2 text-base text-gray-600 cursor-pointer">
                  He leído y acepto el

                  <nuxt-link
                      to="/aviso-legal"
                      class="text-fuchsia-800 hover:underline font-bold">
                    Aviso Legal
                  </nuxt-link>
                  y la
                  <nuxt-link
                      to="/privacidad"
                      class="text-fuchsia-800 hover:underline font-bold">
                    Política de privacidad
                  </nuxt-link>
                </span>
              </label>
              <InputError class="mt-2" :message="errorMessage"/>
            </Field>

            <Field name="doctor" type="checkbox" v-slot="{ field, errorMessage }" :value="true">
              <label class="flex items-center mt-3 select-none">
                <Checkbox name="isDoctor" v-model:checked="form.doctor" v-bind="field" :value="true"/>
                <span class="ml-2 text-base text-gray-600 cursor-pointer">
                  Declaro que soy profesional sanitario facultado para prescribir o dispensar medicamentos en España
                </span>
              </label>
              <InputError class="mt-2" :message="errorMessage"/>
            </Field>
          </div>

        </div>


        <div class="form-footer">
          <div class="container-global">
            <div class="flex justify-center py-10">

              <button
                  type="submit"
                  class="btn-primary text-white bg-fuchsia-800 hover:bg-purple-dark rounded-xl py-4 sm:py-6 px-24 font-bold"
                  :class="{ 'opacity-25': form.processing }"
                  :disabled="form.processing">
                <span>
                  CREAR CUENTA
                </span>
              </button>

            </div>
          </div>
        </div>

      </Form>
    </section>

    <section v-if="submitted">
      <div class="max-w-3xl mx-auto">
				<div class="px-6 mt-12 2xl:px-0">
					<div class="max-w-6xl mx-auto">
						<div class="bg-purple text-white text-xl text-center max-w-md px-14 py-10 mx-auto rounded-2xl md:max-w-full md:text-2xl md:py-16 md:px-32">
							<div
								class="text-primary-500 text-2xl font-bold leading-tight select-none md:text-4xl">
								¡Último paso para registrarte <br>en CANAL ESTEVE SNC!
							</div>

							<div class="text-xl leading-tight">
								Te hemos enviado un correo electrónico de confirmación
								<span class="font-bold">y es necesario que lo valides para completar tu registro</span>.
							</div>

							<div
								class="text-sm leading-tight md:text-base md:leading-tight">
								Si no lo recibiste, ponte en
								<nuxt-link
											to="/contacto"
											class="text-primary font-bold hover:underline">
										contacto
									</nuxt-link>
								con nosotros.
							</div>
						</div>
					</div>
				</div>
      </div>
    </section>

		<div class="h-12"></div>
  </Layout>
</template>

<style scoped></style>
