<script setup>
import Layout from '@/layouts/Layout'

import BtnCTA from '@/components/BtnCallToAction.vue'
import TextInput from '@/components/Form/TextInput.vue'
import { ref, reactive} from "vue";
import { resetPassword } from '@/composables/api';

const {intro} = defineProps({
  intro: {
    type: Object,
    default: () => ({
      title: '¿Has olvidado tu<br class="hidden sm:block"> contraseña?',
      intro: 'Escribe tu correo electrónico y recibirás las instrucciones para cambiarla.'
    })
  },
  canResetPassword: {
    type: Boolean,
    default: () => {

    }
  },
  status: {
    type: String,
    default: () => {

    }
  },
});

const form = reactive({
  processing: false,
  usu_email: '',
});


let code_success = ref(false)
let code_error = ref(false)
const clearErrors = () => {
  code_error.value = false
  code_success.value = false
}

const submit = () => {
  form.processing = true

  resetPassword(form)
  .then( (res) => {
    form.processing = false
    code_success.value = "Se ha enviado un correo electrónico a tu dirección registrada con instrucciones para recuperar tu contraseña. Por favor, revisa tu bandeja de entrada y sigue las indicaciones proporcionadas en el correo electrónico. Si no encuentras el correo electrónico, verifica también la carpeta de correo no deseado."
  })
  .catch((error) => {
    form.processing = false
    code_error.value = error
  })
}
</script>

<template>
  <Layout navbarColor="dark">
    <section id="login" class="bg-[url('/img/bg-forms-header.svg')] bg-opacity-50 bg-no-repeat bg-left-top">
      <div class="container global max-w-5xl mx-auto">

        <div class="grid grid-cols-1 sm:grid-cols-5">
          <div class="col-span-1 sm:col-span-2 flex justify-center items-center">
            <img alt="" src="/img/brand-white.svg">
          </div>
          <div class="col-span-1 sm:col-span-3 text-right py-4 sm:py-16">
            <h2 class="font-bold text-3xl" v-html="intro.title"></h2>
            <div class="intro" v-html="intro.intro"></div>

            <form
                @submit.prevent="submit"
                class="max-w-xl float-right px-8">

              <div v-if="(code_error)" class="my-7">
                <div class="bg-[#FFF7D8] px-5 py-3 select-none rounded-xl">
                  <div class="flex gap-x-10 items-center">
                    <div class="font-bold leading-tight flex-1 text-gray-700">
                      Por favor,
                      <nuxt-link
                          to="/contacto"
                          class="text-primary font-bold hover:underline">
                        Contacta
                      </nuxt-link>
                      con nosotros.
                    </div>

                    <div class="w-10">
                      <button @click.prevent="clearErrors()" class="hover:opacity-90 text-gray-700">
                        <!-- <img src="/img/btn-close.svg" alt="cerrar" class="w-full"> -->
												Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="(code_success)" class="my-7">
                <div class="bg-white px-5 py-3 select-none rounded-xl">
                  <div class="flex gap-x-10 items-center">
                    <div class="leading-tight flex-1 text-gray-700">
                      {{ code_success }}
                    </div>

                    <div class="w-10">
                      <button @click.prevent="clearErrors()" class="hover:opacity-90 text-gray-700">
                        <!-- <img src="/img/btn-close.svg" alt="cerrar" class="w-full"> -->
												Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-7 inline-block">
                <TextInput
                    id="email"
                    type="email"
                    placeholder="Correo electrónico*"
                    class="mt-3 block w-full"
                    v-model="form.usu_email"
                    required
                    autofocus
                    autocomplete="username"
                    :rounded="true"
                />
              </div>
              <div class="mt-6 w-10 inline-block"
                   :class="{ 'opacity-25 pointer-events-none': form.processing }">
                <BtnCTA
                    className="relative -top-[5px] w-full mt-1 ml-3 w-20 h-10 bg-[url('/img/icon-link.svg')] bg-no-repeat bg-contain bg-center"
                    type="submit">
                </BtnCTA>
              </div>

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
#login {
  @apply bg-purple-dark text-white mt-0 px-6 py-14
  md:px-12 xl:px-0;
}

h2 {
  @apply text-3xl leading-none lg:text-5xl;
}

.intro {
  @apply leading-tight mt-3;
}
</style>


