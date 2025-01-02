<script setup>
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
<SpeedInsights/>
<Analytics/>
<NavBar/>
<RouterView/>
</template>

