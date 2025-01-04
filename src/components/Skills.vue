<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
    duration: 800, // controls speed of animations
    easing: 'ease-in-out', // controls easing
  });
});


  const skills = [
    {image: '/images/4.svg' },
    {image: '/images/8.svg' },
    {image: '/images/11.svg' },
    {image: '/images/1_KTAstxDm8yEG17u94avrXw-removebg-preview.png' },
    {image: '/images/18.svg' },
    {image: '/images/21 (1).svg' },
    {image: '/images/24.svg' },
    {image: '/images/laravel-logo.png'},
    {image: '/images/1673469266375-removebg-preview.png'},
    {image: '/images/30.svg' },
    {image: '/images/com037-scaled-removebg-preview.png' },
    {image: '/images/kotlin-logo-3-removebg-preview.png' },
    {image: '/images/33.svg' },
    {image: '/images/jetpack_compose_icon_RGB-removebg-preview.png' },
    {image: '/images/Angular_full_color_logo.svg.png'},
    {image: '/images/ionic-removebg-preview.png'},
    {image: '/images/elephant.png'},
  ];

  const tools = [
    {icon: '/images/images-removebg-preview.png'},
    {icon: '/images/imagesAndroid-removebg-preview.png'},
    {icon: '/images/Visual-Studio-Code-est-un-editeur-de-code-solide-pour-removebg-preview.png'},
    {icon: '/images/85f69649-5387-44c2-ba45-81ae13812e36-cover-removebg-preview.png'},
    {icon: '/images/Microsoft-Word-Logo-removebg-preview.png'},
    {icon: '/images/excel-logo-0-removebg-preview.png'},
    {icon: '/images/avnac-removebg-preview.png'},
    {icon: '/images/npm-logo-red.svg'},
  ];
  </script>

<template>
  <div class="p-4 mt-8">
    <h2 class="text-2xl font-bold text-center text-white mb-10">Compétences Techniques</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-6 lg:justify-items-center lg:grid-cols-4 lg:mx-64">
      <div v-for="skill in skills" :key="skill.image" data-aos="flip-left" class="card text-center p-4 bg-[#292929] rounded-lg shadow-lg lg:w-36 lg:h-30">
        <img :src="skill.image" alt="skills" class="w-24 h-24 mx-auto mb-4"/>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold text-center text-white mb-8">Outils</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:justify-items-center lg:gap-6 r lg:mx-64">
        <div v-for="tool in tools" :key="tool.icon" data-aos="flip-left" class="card text-center p-4 bg-[#292929] rounded-lg shadow-lg lg:w-36 lg:h-30">
          <img :src="tool.icon" alt="tool" class="w-24 h-24 mx-auto mb-4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.card:hover {
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}
</style>
