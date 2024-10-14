<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false); // État pour contrôler l'ouverture/fermeture du menu

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Ajouter un watch pour désactiver le scroll du reste de la page quand le menu est ouvert
watch(isOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : 'auto';
});
</script>

<template>
  <!-- Conteneur principal avec fond semi-transparent si le menu est ouvert -->
  <div :class="isOpen ? 'bg-opacity-50' : ''" class="relative">

    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black text-white">
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

      <!-- Menu déroulant sur petits écrans avec animation de glissement -->
      <transition name="slide">
        <div v-if="isOpen" 
             class="absolute top-16 right-0 bg-black bg-opacity-90 text-white rounded-lg shadow-lg p-6 w-60 lg:hidden">
          <ul class="flex flex-col space-y-6">
            <li><RouterLink :to="'/'" @click="toggleMenu">Accueil</RouterLink></li>
            <li><RouterLink :to="'/projets'" @click="toggleMenu">Projets</RouterLink></li>
            <li><RouterLink :to="'/education'" @click="toggleMenu">Éducation</RouterLink></li>
            <li><RouterLink :to="'/services'" @click="toggleMenu">Services</RouterLink></li>
          </ul>
        </div>
      </transition>
    </nav>

    <!-- Le reste de la page devient transparent -->
    <div v-if="isOpen" class="fixed inset-0 bg-black opacity-50 z-40 pointer-events-none"></div>

  </div>
</template>

<style>
/* Animation de glissement du menu */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s, opacity 0.5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Vous pouvez ajouter des styles pour l'élément fixe ici */
</style>
