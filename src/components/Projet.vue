<template>
  <!-- Ajout de container et mx-auto pour centrer avec des marges automatiques -->
  <section class="projets container mx-auto px-6 mt-24">
    <h2 class="text-3xl font-bold text-center text-white mb-16 mt-32">💼 Mes Projets</h2>
    <!-- Modification de la grille avec max-w-7xl pour limiter la largeur maximale -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div v-for="(projet, index) in projets" :key="index" class="card bg-[#080808] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
        <!-- Le reste du contenu reste identique -->
        <div v-if="projet.apercu" class="h-48 w-full">
          <img :src="projet.apercu" alt="Aperçu du projet" class="w-full h-full object-cover"/>
        </div>
        <div class="p-4">
          <h3 class="text-xl font-semibold text-white mb-2">{{ projet.titre }}</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="(tech, techIndex) in projet.technologies" :key="techIndex" class="badge">
              {{ tech }}
            </span>
          </div>
          <p class="text-gray-300 mb-4">{{ projet.description }}</p>
          <a :href="projet.details" class="text-[#3ccf91] font-semibold hover:underline">
            Voir le code sur Github
          </a>
        </div>
      </div>
    </div>
    <!-- Centrage du bouton également -->
    <div class="mt-10 flex justify-center">
      <a 
        href="https://github.com/KaledDev" 
        target="_blank"
        class="px-6 py-3 mb-6 lg:mb-6 bg-[#3ccf91] text-black font-semibold rounded-md shadow-md hover:bg-[#34b57f] transition duration-300">
        Voir tous les projets
      </a>
    </div>
  </section>
  <Footer v-if="showFooter"/>
</template>

<script setup>
import Footer from './Footer.vue';

defineProps({
  showFooter: {
    type: Boolean,
    default: true,
  },
});

// Liste des projets avec les technologies sous forme de tableau
const projets = [
  {
    titre: "Application web collaborative pour les professionnels de l'IT",
    description: "Développée après 3 mois de formation en developpement fullstack à Orange Digital Center(ODC).",
    technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS", "JavaScript"],
    details: "https://github.com/juanprince30/Plateformes_IT", 
    apercu: "images/WhatsApp Image 2024-10-11 à 18.55.46_3effd63a.jpg"
  },
  {
    titre: "Application de covoiturage",
    description: "Application en cours de développement pour faciliter la mise en relation entre conducteurs et passagers.",
    technologies: ["Laravel", "PHP", "TailwindCSS", "MySQL"],
    details: "https://github.com/KaledDev/Carpooling",
    apercu: "images/bandicam 2024-10-11 18-59-11-917.jpg"
  },
  {
    titre: "Mini application Grocery Store",
    description: "Application mobile pour gérer un magasin d'épicerie.",
    technologies: ["Kotlin", "Jetpack Compose"],
    details: "https://github.com/KaledDev/Grocery-store-app", 
    apercu: "images/bandicam 2024-10-12 00-38-39-896.jpg"
  },
  {
    titre: "Site vitrine de glacier",
    description: "Site web interactif pour un glacier offrant une interface utilisateur attrayante avec des animations.",
    technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
    details: "https://github.com/KaledDev/Site-web-Cold-Stone-Creamery",
    apercu: "images/bandicam 2024-10-13 22-33-32-440.jpg"
  },
  {
    titre: "Site vitrine de glacier",
    description: "Site vitrine pour un glacier mettant en avant les produits et les services offerts, avec une présentation moderne.",
    technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
    details: "https://github.com/KaledDev/Tea_House",
    apercu: "images/bandicam 2024-10-13 22-38-17-092.jpg"
  }
];
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: scale(1.05) translateY(-5px); /* Effet d'agrandissement et de déplacement */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5); /* Ombre plus marquée */
}
.badge {
  display: inline-block;
  background-color: #3ccf91; /* Couleur du badge */
  color: #000; /* Couleur du texte */
  font-size: 0.875rem; /* Taille du texte */
  font-weight: 600; /* Texte semi-gras */
  padding: 0.25rem 0.75rem; /* Espacement interne */
  border-radius: 9999px; /* Bordures arrondies pour un effet pill */
  transition: background-color 0.3s ease;
}
.badge:hover {
  background-color: #34b57f; /* Couleur au survol */
}
</style>
