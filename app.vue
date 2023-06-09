<script setup>
import Loader from '@/components/Loader'
import ModalLogin from '@/components/ModalLogin'
import ModalProfesionalSanitario from '@/components/ModalProfesionalSanitario'
import { ref } from 'vue'

const nuxtApp = useNuxtApp()
const loading = ref(false)

nuxtApp.hook("page:start", () => {
	loading.value = true
})

nuxtApp.hook("page:finish", () => {
	setTimeout(() => {
		loading.value = false
	}, 300)
})
</script>


<template>
	<div>
		<NuxtLayout>
			<Loader v-if="loading" />
			<NuxtPage />
		</NuxtLayout>
	</div>

	<teleport to="body">
		<ModalLogin />
		<ModalProfesionalSanitario />
	</teleport>
</template>