<template>
  <footer class="py-8 bg-gradient-to-r from-[#10232d] to-[#171e25] relative overflow-hidden">
    <!-- Effet de particules/lumière en arrière-plan -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/3 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
    </div>
    
    <!-- Conteneur principal avec effet de glassmorphisme -->
    <div class="relative">
      <p class="text-center">
        <span class="relative inline-block px-6 py-2 text-white/90 font-medium bg-white/5 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
          &copy; {{ currentYear }} 
          <span class="bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text font-semibold">
            Sanguisso Kaled
          </span> 
          - Tous droits réservés
        </span>
      </p>
    </div>
  </footer>
 </template>
 
 <script setup>
 import { onMounted, ref } from 'vue';
 
 const currentYear = ref(0);
 
 onMounted(() => {
  currentYear.value = new Date().getFullYear();
 });
 </script>