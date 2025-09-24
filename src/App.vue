<script setup>
import Carrousel from './components/Carrousel.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'
</script>

<template>
    <Navbar />
    <RouterView />
    <Carrousel />

</template>
