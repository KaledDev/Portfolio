<script setup>
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import Presentation from '@/components/Presentation.vue';
import Projet from '@/components/Projet.vue';
</script>

<template>
<Presentation/>
<Projet :showFooter="false" />
<Contact/>
<Footer/>
</template>