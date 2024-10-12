<script setup>
import { ref } from 'vue';

const isOpen = ref(false); // État pour contrôler l'ouverture/fermeture du menu

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black text-white shadow">
    <!-- Nom à gauche -->
    <div class="text-xl font-bold">&lt;Khaled/&gt;</div>

    <!-- Menu hamburger à droite (visible sur petits écrans) -->
    <div class="lg:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <i 
          class="pi text-white text-2xl transition-transform duration-300" 
          :class="isOpen ? 'pi-times rotate-90' : 'pi-bars'"
        ></i>
      </button>
    </div>

    <!-- Menu déroulant sur petits écrans avec animation -->
    <transition 
      name="fade" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @leave="leave"
    >
      <div v-if="isOpen" 
           class="absolute top-16 right-4 text-white rounded-lg shadow-lg p-4 lg:hidden transition-all duration-300 ease-in-out">
        <ul class="flex flex-col space-y-2">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">A propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
