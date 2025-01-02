<template>
    <footer class="py-4 bg-[#171e25]">
      <p class="text-center text-white font-medium">&copy; {{ currentYear }} Sanguisso Kaled - Tous droits réservés.</p>
    </footer>
</template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const currentYear = ref(0);
  
  onMounted(() => {
    currentYear.value = new Date().getFullYear();
  });
</script>
  