<template>
    <footer class="bg-gray-100 py-4 b">
      <p class="text-center font-medium">&copy; {{ currentYear }} Sanguisso Kaled - Tous droits réservés.</p>
    </footer>
</template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  // Création d'une référence réactive pour l'année actuelle
  const currentYear = ref(0);
  
  // Mettre à jour l'année lorsque le composant est monté
  onMounted(() => {
    currentYear.value = new Date().getFullYear();
  });
</script>
  