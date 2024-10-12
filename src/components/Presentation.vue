<template>
    <div class="flex flex-col p-4 mt-20">
      <div class=" ml-4">
        <h1 class="text-[#3ccf91] text-2xl mb-2 font-medium">Salut <span class="animate-wave text-3xl ml-2">👋</span> je suis</h1>
        <h2 class="text-5xl font-extrabold text-white">Sanguisso</h2>
        <h2 class="text-5xl font-extrabold text-white">Kaled.</h2>
        <p class="mt-6 text-lg text-[#8f9094] font-bold">
          <span class="text-white">
            <span ref="typewriter" class="text-white"></span>
          </span>
          <br />
          Je suis étudiant en informatique de gestion et développeur fullstack autodidacte.
        </p>
            <!-- Card Section -->
            <div class="flex items-center mt-6 space-x-4">
                <a
                  href="https://github.com/KaledDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center bg-[#292929] p-2 rounded-lg"
                >
                  <img
                    src="/images/sv3.svg"
                    alt="GitHub"
                    class="w-6 h-6 mr-2"
                  />
                  <span class="text-white text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kaled-sanguisso-81aa67268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center bg-[#292929] p-2 rounded-lg"
                >
                  <img
                    src="/images/sv2.svg"
                    alt="LinkedIn"
                    class="w-6 h-6 mr-2"
                  />
                  <span class="text-white text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:sanguisso74@icloud.com"
                  class="flex items-center bg-[#292929] p-2 rounded-lg"
                >
                  <img
                    src="/images/sv1.svg"
                    alt="Email"
                    class="w-6 h-6 mr-2"
                  />
                  <span class="text-white text-sm">Email</span>
                </a>
              </div>
            </div>

              <div class="flex flex-col p-4 mt-16">
                  <div class="mb-4">
                    <h2 class="text-3xl font-bold text-white">⚡À Propos de moi</h2>
                  </div>
              
                <p class="mt-2 text-lg text-[#e0e0e0]">
                  Je suis étudiant en <span class="font-semibold text-[#3ccf91]">3ème année d'informatique de gestion</span>
                  et passionné par la technologie. J'ai de solides compétences en <span class="font-semibold text-[#3ccf91]">
                  développement web</span> et je m'initie actuellement au <span class="font-semibold text-[#3ccf91]">
                  développement mobile</span>.
                </p>

                <p class="mt-4 text-lg text-[#e0e0e0]">
                  Mon objectif est de concevoir des applications intuitives qui améliorent l'expérience utilisateur.
                  J'aime relever des défis techniques et je cherche toujours à apprendre et à évoluer dans ce domaine.
                </p>

                <div class="flex justify-center mt-8">
                  <img src="/images/Tommy.jpg" alt="Sanguisso Kaled" class="w-76 h-76 rounded-full object-cover shadow-lg"/>
                </div>
              
              </div>
              <Skills/>
    </div>
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
});
</script>


<style scoped>
@keyframes wave {
    0% {
      transform: rotate(0deg) translateY(0);
    }
    25% {
      transform: rotate(15deg) translateY(-2px);
    }
    50% {
      transform: rotate(0deg) translateY(0);
    }
    75% {
      transform: rotate(-15deg) translateY(2px);
    }
    100% {
      transform: rotate(0deg) translateY(0);
    }
  }
  
  .animate-wave {
    display: inline-block;
    animation: wave 0.6s infinite;
  }
</style>