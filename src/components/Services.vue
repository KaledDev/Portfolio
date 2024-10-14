<template>
    <section class="text-center py-12 bg-black text-white mt-20">
      <h2 class="text-4xl font-bold text-[#3ccf91] mb-10">Mes Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="bg-[#10232D] rounded-lg shadow-lg p-6 text-center text-black hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
        >
          <div class="bg-[#3ccf91] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <font-awesome-icon :icon="service.icon" class="text-3xl" />
          </div>
          <h3 class="text-xl text-white font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-gray-300">{{ service.description }}</p>
        </div>
      </div>
    </section>
    <Footer/>
  </template>
  
<script setup>
import Footer from '@/components/Footer.vue';
import { faDatabase, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
  
  // Définition des services
  const services = ref([
    {
      id: 1,
      title: 'Création de sites webs',
      description: 'Développement de sites web modernes et responsives.',
      icon: faLaptopCode,
    },
    {
      id: 2,
      title: 'Applications web et mobiles',
      description: 'Développement d’applications web et mobiles performantes.',
      icon: faMobileAlt,
    },
    {
      id: 3,
      title: 'Gestion des bases de données',
      description: 'Conception et gestion efficace de bases de données.',
      icon: faDatabase,
    },
  ]);
</script>

  