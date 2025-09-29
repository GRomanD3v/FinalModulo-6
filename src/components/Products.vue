<script setup>

import Card from './Card.vue';

const props = defineProps({
    productos: {
        type: Array,
        required: true //
    },
    termino: { 
        type: String, 
        default: '' 
    } 
});

const emit = defineEmits(['agregar-al-carrito']);

function agregarAlCarrito(producto) {
    emit('agregar-al-carrito', producto)
}

</script>
<template>
    <h3 v-if="props.termino" class="text-center my-4">
        Resultados para: "{{ props.termino }}"
    </h3>
    <div class="d-flex products-container">
      <div class="row">
        <Card v-for="producto in productos" 
         :key="producto.id" 
         :producto="producto"
         @agregar="agregarAlCarrito"/>
                
       </div>
    </div>

</template>
