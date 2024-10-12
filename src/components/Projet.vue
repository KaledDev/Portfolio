<!-- src/components/Projets.vue -->
<template>
    <section class="projets my-10 px-6">
      <h2 class="text-3xl font-bold text-center text-white mb-6">Mes Projets</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(projet, index) in projets" :key="index" class="bg-[#080808] shadow-lg rounded-lg overflow-hidden">
          <!-- Image en haut -->
          <div v-if="projet.apercu" class="h-auto w-full">
            <img :src="projet.apercu" alt="Aperçu du projet" class="w-full h-full object-cover"/>
          </div>
          <!-- Titre du projet et contenu -->
          <div class="p-4">
            <h3 class="text-xl font-semibold text-white mb-2">{{ projet.titre }}</h3>
            <!-- Technologies utilisées (sans phrase) -->
            <p class="text-gray-300 font-semibold mb-4">Technologies : {{ projet.technologies }}</p>
            <!-- Description du projet -->
            <p class="text-gray-300 mb-4">{{ projet.description }}</p>
          <!-- Lien vers plus de détails -->
          <RouterLink :to="projet.details" class="text-[#3ccf91] font-semibold">
            Voir le code sur Github
          </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  const projets = [
    {
      titre: "Application web collaborative pour les professionnels de l'IT",
      description: "Développée après 3 mois de formation en developpement fullstack à Orange Digital Center(ODC).",
      technologies: "Laravel, PHP, MySQL, HTML, CSS, JavaScript",
      details: "/", 
      apercu: "images/WhatsApp Image 2024-10-11 à 18.55.46_3effd63a.jpg" 
    },
    {
      titre: "Application de covoiturage",
      description: "Application en cours de développement pour faciliter la mise en relation entre conducteurs et passagers.",
      technologies: "Laravel, PHP, TailwindCss, MySQL",
      details: "/",
      apercu: "images/bandicam 2024-10-11 18-59-11-917.jpg" 
    },
    {
      titre: "Mini application Grocery Store",
      description: "Application mobile pour gérer un magasin d'épicerie.",
      technologies: "Kotlin, Jetpack Compose,",
      details: "/", 
      apercu: "images/bandicam 2024-10-12 00-38-39-896.jpg" 
    }
  ];
  </script>
  