<script setup>
import { ref, onMounted } from 'vue';
import { listProducts } from '../services/api.js';

const productos = ref([]);

onMounted(async () => {
    productos.value = await listProducts();
});

</script>

<template>

    
</template>