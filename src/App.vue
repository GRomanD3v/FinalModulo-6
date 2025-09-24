<script setup>
import FooterComponent from './components/FooterComponent.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'
import Banner from './components/Banner.vue';
</script>

<template>
    <Banner/>
    <Navbar />
    <RouterView />
    <FooterComponent/>
</template>
