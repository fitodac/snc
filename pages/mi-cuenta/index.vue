<script setup>
import Layout from '@/layouts/Layout'

import FormPersonalInfo from '@/components/account/FormPersonal'
import FormProfessionalInfo from '@/components/account/FormProfessional'
import FormLocationInfo from '@/components/account/FormLocation'
import FormSecurityInfo from '@/components/account/FormSecurity'
import FormPreferencesInfo from '@/components/account/FormPreferences'

const tab = ref('personal')
const tabnav = val => tab.value = val

const sending = ref(false)

const sendingForm = event => sending.value = event
</script>

<template>
  <Layout navbarColor="dark">

    <section id="form" class="px-6 2xl:px-0">
			<div class="max-w-3xl mx-auto pb-16">
				<div class="text-center py-6">
					<h2 class="text-purple font-bold text-3xl my-2 select-none md:text-3xl">MI CUENTA</h2>
				</div>


				<div class="grid grid-cols-5 gap-0 sm:grid-cols-7 md:grid-cols-12 md:gap-8">
					
					<div class="md:col-span-4">
						<div class="space-y-2">
							<button 
								class="text-sm font-medium whitespace-nowrap w-10 h-10 grid place-content-center rounded-md
								md:w-full md:flex md:items-center md:justify-start md:px-4"
								@click="tabnav('personal')"
								:disabled="tab === 'personal'"
								:class="tab === 'personal' ? 'bg-purple bg-opacity-10 text-purple' : 'bg-purple text-white'">
								<i class="ri-user-2-fill text-xl md:hidden"></i>
								<span class="hidden md:block">Información personal</span>
							</button>

							<button 
								class="text-sm font-medium whitespace-nowrap w-10 h-10 grid place-content-center rounded-md
								md:w-full md:flex md:items-center md:justify-start md:px-4"
								@click="tabnav('profesional')"
								:disabled="tab === 'profesional'"
								:class="tab === 'profesional' ? 'bg-purple bg-opacity-10 text-purple' : 'bg-purple text-white'">
								<i class="ri-pass-valid-fill text-xl md:hidden"></i>
								<span class="hidden md:block">Información profesional</span>
							</button>

							<button 
								class="text-sm font-medium whitespace-nowrap w-10 h-10 grid place-content-center rounded-md
								md:w-full md:flex md:items-center md:justify-start md:px-4"
								@click="tabnav('location')"
								:disabled="tab === 'location'"
								:class="tab === 'location' ? 'bg-purple bg-opacity-10 text-purple' : 'bg-purple text-white'">
								<i class="ri-map-pin-user-fill text-xl md:hidden"></i>
								<span class="hidden md:block">Localización</span>
							</button>

							<button 
								class="text-sm font-medium whitespace-nowrap w-10 h-10 grid place-content-center rounded-md
								md:w-full md:flex md:items-center md:justify-start md:px-4"
								@click="tabnav('security')"
								:disabled="tab === 'security'"
								:class="tab === 'security' ? 'bg-purple bg-opacity-10 text-purple' : 'bg-purple text-white'">
								<i class="ri-lock-fill text-xl md:hidden"></i>
								<span class="hidden md:block">Seguridad</span>
							</button>

							<button 
								class="text-sm font-medium whitespace-nowrap w-10 h-10 grid place-content-center rounded-md
								md:w-full md:flex md:items-center md:justify-start md:px-4"
								@click="tabnav('preferences')"
								:disabled="tab === 'preferences'"
								:class="tab === 'preferences' ? 'bg-purple bg-opacity-10 text-purple' : 'bg-purple text-white'">
								<i class="ri-checkbox-multiple-fill text-xl md:hidden"></i>
								<span class="hidden md:block">Preferencias</span>
							</button>
						</div>
						
					</div>


					<div class="col-span-4 sm:col-span-6 md:col-span-8">
						<div :class="{'hidden': tab !== 'personal'}">
							<FormPersonalInfo 
								:sending="sending" 
								@formInProgress="sendingForm" />
						</div>
						
						<div :class="{'hidden': tab !== 'profesional'}">
							<FormProfessionalInfo 
								:sending="sending" 
								@formInProgress="sendingForm" />
						</div>
						
						<div :class="{'hidden': tab !== 'location'}">
							<FormLocationInfo 
								:sending="sending"
								@formInProgress="sendingForm" />
						</div>
						
						<div :class="{'hidden': tab !== 'security'}">
						<FormSecurityInfo 
							:sending="sending"
							@formInProgress="sendingForm" />
						</div>
						
						<div :class="{'hidden': tab !== 'preferences'}" >
							<FormPreferencesInfo 
								:sending="sending"
								@formInProgress="sendingForm" />
						</div>
					</div>

				</div>


			</div>




			<!-- 
			<Form @submit="onSubmit" :validation-schema="schema" :initial-values="form">
				<div class="max-w-3xl mx-auto">

					

					

				</div>

			</Form> 
			-->
    </section>

    <!-- <section v-if="submitted">
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
    </section> -->

		<div class="h-12"></div>
  </Layout>
</template>

<style scoped></style>
