<script setup>
import { ref, computed, onMounted } from 'vue';

const emit = defineEmits(['buscar']);

// Input del buscador
const busqueda = ref("");


</script>


<template>
    <div class="container mt-4">

        <!-- Input del buscador con lupa -->
    
        <div class="container mt-4">
            <div class="d-flex justify-content-center">
                <div class="input-group mb-3 w-50">
                    <input type="text" class="form-control" placeholder="Buscar productos..."
                    v-model="busqueda"
                    @keyup.enter="$emit('buscar', busqueda)"
                        aria-label="buscador" aria-describedby="buscador">
                    <button class="btn btn-outline-secondary" type="button" id="buscador"
                    @click="$emit('buscar', busqueda)">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Resultados -->
        <section v-if="busqueda.length > 0" class="d-flex my-5 col col-lg-12 flex-wrap gap-3 justify-content-center">
            <div v-for="(producto, index) in productosFiltrados" :key="index" class="card p-3 shadow-sm"
                style="width: 200px;">
                <img v-if="producto.urlImagen" :src="producto.urlImagen" :alt="producto.nombre"
                    class="img-fluid mb-2" />

                <h5 class="text-center">{{ producto.nombre }}</h5>
                <p class="text-muted text-center">{{ producto.precio }} USD</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.card img {
    max-height: 120px;
    object-fit: contain;
}
</style>