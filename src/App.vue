<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
<Analytics/>
<NavBar/>
<RouterView/>
</template>

