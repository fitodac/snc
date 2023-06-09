<script setup>
defineProps({
  data: Object
})
</script>


<template>
  <section class="bg-prod-treatments-blue-light text-white px-6 py-20 xl:px-0 hidden">
    <div class="max-w-5xl mx-auto">
      <h4 class="text-2xl font-bold leading-none text-center">Encuesta SNC</h4>
      <div
          class="bg-[url('/img/products/treatments/quiz-alzerta.webp')] bg-center bg-cover text-center max-w-2xl py-10 px-12 mx-auto mt-5 rounded-xl shadow-xl">
        <h3 class="text-2xl font-bold leading-none">Doctor, ¿ya conoce Alzerta dos por semana?</h3>
        <div class="h-36"></div>
        <div class="flex justify-center gap-16 mt-8"><a
            class="bg-white text-gray-800 text-center font-medium w-28 py-1 rounded-lg transition-all hover:opacity-80"
            href="/tratamientos">Sí</a><a
            class="bg-white text-gray-800 text-center font-medium w-28 py-1 rounded-lg transition-all hover:opacity-80"
            href="/tratamientos">No</a></div>
      </div>
    </div>
  </section>
</template>