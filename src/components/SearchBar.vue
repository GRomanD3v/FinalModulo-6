<script setup>
import { ref } from 'vue';
import { useProductosStore } from '../store/productos';

// Obtener instancia de pinia 
const productosStore = useProductosStore();
const busqueda = ref('');
// Método para realizar la búsqueda
const realizarBusqueda = () => {
    productosStore.setTerminoBusqueda(busqueda.value);
};
</script>


<template>
        <!-- Input del buscador con lupa -->
        <div class="container mt-4">
            <div class="d-flex justify-content-center">
                <div class="input-group mb-3 w-50">

                    <input type="text" 
                            class="form-control" placeholder="Buscar productos..."
                            v-model="busqueda"
                            @input="realizarBusqueda"

                            @keyup.enter="realizarBusqueda"
                            aria-label="buscador" 
                            aria-describedby="buscador">

                    <button class="btn btn-outline-secondary" 
                            type="button" 
                            id="buscador"
                            @click="realizarBusqueda">
                            <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div> 
</template>

<style scoped>

</style>