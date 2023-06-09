<script setup>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { onMounted } from 'vue';

defineProps({
	navbarColor: String
})

onMounted(() => {
  const tarteaucitronScript = document.createElement('script');
  tarteaucitronScript.src = '/tarteaucitron/tarteaucitron.js';
  tarteaucitronScript.defer = true;

  const cookieScript = document.createElement('script');
  cookieScript.src = '/tarteaucitron/cookie.js';
  cookieScript.defer = true;

  tarteaucitronScript.addEventListener('load', () => {
    document.body.appendChild(cookieScript);

    loadTarteaucitron(tarteaucitron)
  });

  document.body.appendChild(tarteaucitronScript);

});

const loadTarteaucitron = (tarteaucitron) => {
    tarteaucitron.load();
}
</script>

<template>
  <div>
		<Header :navbarColor="navbarColor ?? ''"/>
    <slot />
		<Footer />
  </div>
</template>

<style scoped>

</style>

