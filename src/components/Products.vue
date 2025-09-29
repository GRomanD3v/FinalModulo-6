<script setup>

import Card from './Card.vue';
import { listProducts } from '../services/api';
import { ref, onMounted } from 'vue';

const productos = ref([]);

onMounted(async () => {
    productos.value = await listProducts();
});

const emit = defineEmits(['agregar-al-carrito']);

function agregarAlCarrito(producto) {
    emit('agregar-al-carrito', producto)
}

</script>

<template>
    <div class="d-flex products-container">
        
        <div class="row">
           <Card v-for="producto in productos" 
    :key="producto.id" 
    :producto="producto"
    @agregar="agregarAlCarrito"/>
                
            </div>
        </div>

</template>
