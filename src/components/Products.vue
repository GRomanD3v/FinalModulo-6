<script setup>

import Card from './Card.vue';
import { listProducts } from '../services/api';
import { ref, onMounted } from 'vue';

const productos = ref([]);

onMounted(async () => {
    productos.value = await listProducts();
});

</script>

<template>

    <Card v-for="producto in productos" :producto="producto" />


</template>
