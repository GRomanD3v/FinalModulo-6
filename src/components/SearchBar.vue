<script setup>
import { ref } from 'vue';

const emit = defineEmits(['Buscar']);

const busqueda = ref("");

const realizarBusqueda = () => {
    emit('Buscar', busqueda.value);
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
.card img {
    max-height: 120px;
    object-fit: contain;
}
</style>