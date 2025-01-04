<template>
  <div class="min-h-screen mt-16">
    <main class="container mx-auto px-4">
      <section class="py-20">
        <!-- Titre avec icône -->
        <div class="flex items-center justify-center gap-4 mb-4">
          <Settings class="w-8 h-8 text-emerald-400 animate-spin-slow"/>
          <h2 class="text-4xl md:text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 text-center">
            Mes Services
          </h2>
        </div>
        <p class="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Des solutions sur mesure pour tous vos besoins numériques.
        </p>

        <!-- Conteneur avec background limité -->
        <div class="relative rounded-2xl bg-gradient-to-b from-[#0a1821] to-black p-8 md:p-12">
          <div class="absolute inset-0 bg-[#3ccf91]/5 rounded-2xl backdrop-blur-sm"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div
              v-for="service in services"
              :key="service.id"
              class="group relative service-card"
              @touchstart="handleTouchStart"
              @touchend="handleTouchEnd"
            >
              <div class="h-full bg-[#10232d]/80 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20 border border-emerald-500/10">
                <div class="relative mb-6">
                  <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div class="relative bg-[#3ccf91] rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <component 
                      :is="service.icon" 
                      class="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 class="text-xl font-semibold text-white mb-4 text-center">
                  {{ service.title }}
                </h3>
                <p class="text-gray-400 text-center leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer class="mt-auto" />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import { 
  Settings,
  Globe2,
  Smartphone,
  Database,
} from 'lucide-vue-next'

const services = ref([
  {
    id: 1,
    title: 'Création de sites webs',
    description: 'Développement de sites web modernes et responsives avec une expérience utilisateur optimale.',
    icon: Globe2,
  },
  {
    id: 2,
    title: 'Applications web et mobiles',
    description: 'Développement d\'applications performantes et intuitives adaptées à tous les appareils.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Gestion des bases de données',
    description: 'Conception et administration de bases de données sécurisées et efficaces.',
    icon: Database,
  },
])

const handleTouchStart = (event) => {
  const card = event.currentTarget
  card.classList.add('touch-active')
}

const handleTouchEnd = (event) => {
  const card = event.currentTarget
  card.classList.remove('touch-active')
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes touchPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

/* Animation de rotation lente pour l'icône des services */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);
  opacity: 0;
}

@media (max-width: 768px) {
  .service-card.touch-active {
    animation: touchPulse 0.3s ease-in-out;
  }
  
  .service-card.touch-active > div {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px -10px rgba(60, 207, 145, 0.3);
  }
}

.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>