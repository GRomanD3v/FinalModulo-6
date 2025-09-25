<script setup>
import { ref, onMounted } from 'vue';
import { listProducts } from '../services/api.js';

const productos = ref([]);

onMounted(async () => {
    productos.value = await listProducts();
});

</script>

<template>

    <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100 shadow-sm">
        <!-- Imagen del producto -->
        <img src="../assets/img/c-1.jpeg" 
             class="card-img-top" 
             alt="Bombones chocolate amargo"
             style="height: 200px; object-fit: cover;">
        
        <div class="card-body d-flex flex-column">
            <!-- Categoría y etiqueta -->
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-secondary">{{ productos.categoria }}</span>
                <span class="badge bg-light text-dark">{{ productos.etiqueta }}</span>
            </div>
            
            <!-- Nombre del producto -->
            <h5 class="card-title">{{ productos.nombre }}</h5>
            
            <!-- Descripción -->
            <p class="card-text flex-grow-1">{{ productos.descripcion }}</p>
            
            <!-- Precio y stock -->
            <div class="d-flex justify-content-between align-items-center mt-auto">
                <h4 class="text-primary">{{ productos.precio }}</h4>
                <small class="text-muted">{{ productos.stock }}</small>
            </div>
            
            <!-- Botón de acción -->
            <div class="d-grid gap-2 mt-3">
                <button class="btn btn-primary btn-sm">Agregar al carrito</button>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
.card {
    transition: transform 0.2s;
    border: 1px solid #e0e0e0;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
}

.card-img-top {
    border-bottom: 1px solid #f0f0f0;
}

.badge {
    font-size: 0.7rem;
}

.btn-primary {
    background-color: #8B4513;
    border-color: #8B4513;
}

.btn-primary:hover {
    background-color: #654321;
    border-color: #654321;
}
</style>