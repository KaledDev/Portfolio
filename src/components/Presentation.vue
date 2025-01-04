<template>
  <!-- Container principal avec padding-top pour la nav fixed -->
  <div class="max-w-7xl lg:ml-24 px-4 lg:px-8">
    <!-- Section Hero avec flex -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[calc(100vh-6rem)] pt-28">
      <!-- Colonne gauche -->
      <div class="ml-4 scroll-fadeIn lg:w-1/2">
        <h1 class="text-[#3ccf91] text-2xl mb-2 font-medium scroll-slideInLeft">
          Salut <span class="animate-wave text-3xl ml-2">👋</span> je suis
        </h1>
        <h2 class="text-5xl font-extrabold text-white scroll-slideInLeft-delay">Sanguisso</h2>
        <h2 class="text-5xl font-extrabold text-white scroll-slideInLeft-delay">Kaled.</h2>
        <p class="mt-6 text-lg text-[#8f9094] font-bold scroll-slideInLeft-delay max-w-2xl">
          <span class="text-white">
            <span ref="typewriter" class="text-white"></span>
          </span>
          <br/>
          Je suis étudiant en informatique de gestion et développeur fullstack autodidacte.
        </p>
        <!-- Card Section -->
        <div class="flex items-center mt-6 space-x-4 scroll-slideInUp">
          <a href="https://github.com/KaledDev" 
             target="_blank" 
             rel="noopener noreferrer"
             class="flex items-center bg-[#292929] p-2 rounded-lg hover:bg-[#363636] transition-colors duration-300">
            <img src="/images/sv3.svg" alt="GitHub" class="w-6 h-6 mr-2" />
            <span class="text-white text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kaled-sanguisso-81aa67268/" 
             target="_blank"
             rel="noopener noreferrer" 
             class="flex items-center bg-[#292929] p-2 rounded-lg hover:bg-[#363636] transition-colors duration-300">
            <img src="/images/sv2.svg" alt="LinkedIn" class="w-6 h-6 mr-2" />
            <span class="text-white text-sm">LinkedIn</span>
          </a>
          <a href="mailto:sanguisso74@icloud.com" 
             class="flex items-center bg-[#292929] p-2 rounded-lg hover:bg-[#363636] transition-colors duration-300">
            <img src="/images/sv1.svg" alt="Email" class="w-6 h-6 mr-2" />
            <span class="text-white text-sm">Email</span>
          </a>
        </div>
      </div>

      <!-- Colonne droite -->
      <div class="flex justify-center mt-8 scroll-scaleIn lg:mt-0 lg:w-1/2">
        <img 
          src="/images/Tommy.jpg" 
          alt="Sanguisso Kaled" 
          class="lg:w-96 lg:h-96 w-80 h-80 rounded-full object-cover shadow-lg hover:shadow-xl hover:shadow-[#3ccf91]/10 transition-shadow duration-300" 
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col p-8 mt-12 scroll-fadeIn lg:px-16 lg:py-20 mx-4 lg:mt-0 lg:ml-32 lg:mr-24 lg:justify-center lg:items-center bg-gradient-to-br from-[#2b2b2b] via-[#1e1e1e] to-[#121212] rounded-lg shadow-lg">
    <div class="mb-8 text-center">
      <h2 class="scroll-slideInUp text-4xl font-extrabold text-white lg:text-5xl">⚡À Propos de moi</h2>
    </div>
    <p class="scroll-slideInUp mt-4 text-lg text-[#e0e0e0] max-w-3xl lg:text-xl lg:leading-relaxed">
      Je suis étudiant en <span class="font-semibold text-[#3ccf91]">3ème année d'informatique de gestion</span> et passionné par la technologie. J'ai de solides compétences en 
      <span class="font-semibold text-[#3ccf91]">développement web</span> et je m'initie actuellement au 
      <span class="font-semibold text-[#3ccf91]">développement mobile</span>.
    </p>
    <p class="scroll-slideInUp mt-6 text-lg text-[#e0e0e0] max-w-3xl lg:text-xl lg:leading-relaxed">
      Mon objectif est de concevoir des applications intuitives qui améliorent l'expérience utilisateur. J'aime relever des défis techniques et je cherche toujours à apprendre et à évoluer dans ce domaine.
    </p>
  </div>
  
<Skills/>
</template>

<script setup>
import Typewriter from 'typewriter-effect/dist/core';
import { onMounted, ref } from 'vue';
import Skills from './Skills.vue';

const typewriter = ref(null);

onMounted(() => {
  const typewriterInstance = new Typewriter(typewriter.value, {
    loop: true,
    deleteSpeed: 50,
  });

  typewriterInstance
    .typeString("Développeur fullstack </>")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Développeur mobile")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Développeur autodidacte")
    .pauseFor(1500)
    .start();

  const elements = document.querySelectorAll('.scroll-fadeIn, .scroll-slideInLeft, .scroll-slideInLeft-delay, .scroll-slideInUp, .scroll-scaleIn');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* Keyframes for slower animations */
@keyframes fadeInSlow {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeftSlow {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInUpSlow {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleInSlow {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Classes for scroll-triggered animations */
.scroll-fadeIn { opacity: 0; }
.scroll-slideInLeft { opacity: 0; }
.scroll-slideInLeft-delay { opacity: 0; }
.scroll-slideInUp { opacity: 0; }
.scroll-scaleIn { opacity: 0; }

/* Visible state with slower animations */
.scroll-fadeIn.is-visible { animation: fadeInSlow 1.5s ease forwards; }
.scroll-slideInLeft.is-visible { animation: slideInLeftSlow 1.5s ease forwards; }
.scroll-slideInLeft-delay.is-visible { animation: slideInLeftSlow 1.8s ease forwards; }
.scroll-slideInUp.is-visible { animation: slideInUpSlow 1.5s ease forwards; }
.scroll-scaleIn.is-visible { animation: scaleInSlow 1.5s ease forwards; }

/* Wave animation */
@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
}

.animate-wave { display: inline-block; animation: wave 0.6s infinite; }
</style>
