<script setup>
import Carrousel from './components/Carrousel.vue';
import FooterComponent from './components/FooterComponent.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'
</script>

<template>
    <Navbar />
    <Carrousel />
    <FooterComponent/>
    <RouterView />
</template>
