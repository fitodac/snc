<script setup>
import Layout from '@/layouts/Layout'

import InputError from '@/components/Form/InputError.vue'
import BtnCTA from '@/components/BtnCallToAction.vue'
import TextInput from '@/components/Form/TextInput.vue'

import { login } from '@/composables/api'

const { intro } = defineProps({
  intro: {
    type: Object,
    default: () => ({
        title: 'Inicia sesión',
        intro: 'Si ya estás <strong>dado de alta</strong> en Canal SNC o ESTEVE ÁGORA <br class="hidden sm:block"> introduce tu usuario y contraseña.'
    })
  },
  canResetPassword: {
    type: Boolean,
    default: () =>{

    }
  },
  status: {
    type: String,
    default: () =>{

    }
  },
});

const form = reactive({
  processing: false,
  usu_email: '',
  usu_password: '',
  remember: false,
  errors: {
    general: '',
    usu_email: '',
    usu_password: ''
  }
});


let code_error = ref(false)
const clearErrors = () => {
  code_error.value = false
}

const submit = () => {
  login(form)
  .then( (res) => {
		localStorage.setItem('user_snc', JSON.stringify(res))
    localStorage.setItem('isAuthenticated', true)
    return navigateTo({ path: '/' });
  })
  .catch(error => {
    if(error.message === 'KO') {
      form.errors.general = 'Nombre de usuario o contraseña erróneo'
    } else {
      code_error.value = error
    }
  })
}
</script>

<template>
  <Layout navbarColor="dark">
    <section id="login" class="bg-[url('/img/bg-forms-header.svg')] bg-opacity-50 bg-no-repeat bg-left-top">
      <div class="container global max-w-5xl mx-auto">

        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="col-span-1 sm:col-span-1 flex justify-center items-center">
            <img alt="" src="/img/brand-white.svg">
          </div>
          <div class="col-span-1 sm:col-span-1 text-right">
            <h2 class="font-bold text-3xl">{{ intro.title }}</h2>
            <div class="intro" v-html="intro.intro"></div>

            <form
							@submit.prevent="submit"
							class="max-w-xl float-right">

              <div v-if="(form.errors.general || code_error)" class="my-7">
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
                        <!-- <img src="/img/btn-close.svg" alt="cerrar" class="w-full"> -->
												Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-7">
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

                <InputError class="mt-2" :message="form.errors.usu_email" />
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
                <InputError class="mt-2" :message="form.errors.usu_password" />
              </div>
              <div class="pl-2 pt-1">
                <nuxt-link
                    to="/olvido"
                    class="text-xs leading-none hover:underline">
                  ¿Olvidaste la contraseña?
                </nuxt-link>
              </div>

              <div class="mt-6" :class="{ 'opacity-25 pointer-events-none': form.processing }">
                <BtnCTA
                    className="w-full"
                    type="submit">
                  <span>Entrar</span>
                </BtnCTA>
              </div>
              <nuxt-link
                  to="/registro"
                  class="leading-none hover:underline">
                <span>¿Aún no tienes cuenta?</span> <strong><u>Regístrate</u></strong>
              </nuxt-link>
            </form>
          </div>
        </div>

        <div class="max-w-5xl">
          <span
              class="leading-none text-sm pr-10">
            <strong>Esteve @2023</strong>
          </span>
          <nuxt-link
              to="/contacto"
              class="leading-none hover:underline text-sm pr-10">
            <strong>Contacto</strong>
          </nuxt-link>
          <nuxt-link
              to="/privacidad"
              class="leading-none hover:underline text-sm pr-10">
            <strong>Privacidad</strong>
          </nuxt-link>
          <nuxt-link
              to="/politica-de-cookies"
              class="leading-none hover:underline text-sm pr-10">
            <strong>Política de cookies</strong>
          </nuxt-link>
          <nuxt-link
              to="/aviso-legal"
              class="leading-none hover:underline text-sm pr-10">
            <strong>Aviso legal</strong>
          </nuxt-link>
        </div>


      </div>
    </section>
	</Layout>
</template>


<style lang="scss" scoped>
#login{
  @apply bg-purple-dark text-white mt-0 px-6 py-14
  md:px-12 xl:px-0;
}

h2{
  @apply text-3xl leading-none lg:text-5xl;
}

.intro{
  @apply leading-tight mt-3;
}
</style>


