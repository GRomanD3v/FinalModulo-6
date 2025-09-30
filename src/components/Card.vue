<script setup>

// const props = defineProps(
//     {
//         Image: {
//             type: String,

//         },
//         nombre: {
//             type: String,

//         },
//         descripcion: {
//             type: String,
//         },
//         precio: {
//             type: Number,

//         },
//         urlImagen: {
//             type: String,
//             defaul: 'https://ejemplo.com/pralines-surtidos.jpg'
//         },
//         stock: {
//             type: Number,
//             defaul: '1'
//         },
//         categoria: {
//             type: String,

//         },
//         etiqueta: {
//             type: String,

//         }
//     }
// )


import { ref, computed } from 'vue';

const props = defineProps({
    producto: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['agregar']);

// Estado para controlar el modal
const mostrarDetalles = ref(false);

// Agregar al carrito
function agregar() {
    emit('agregar', props.producto);
}

//Valores por defecto si no vienen en producto
//const urlImagen = props.producto.urlImagen || 'https://ejemplo.com/pralines-surtidos.jpg';

// Formatear precio chile
function formatoPrecio(precio) {
    if (!precio) return '$0';
    return '$' + precio.toLocaleString('es-CL');
}

// Computada para verificar stock
const tieneStock = computed(() => {
    return props.producto.stock > 0;
});

// Abrir modal de detalles
function abrirDetalles() {
    mostrarDetalles.value = true;
}

// Cerrar modal de detalles
function cerrarDetalles() {
    mostrarDetalles.value = false;
}

</script>

<template>
    <div class="col-md-4 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm">
            <!-- Imagen del producto -->
            <img :src="producto.urlImagen" alt="producto.nombre" style="height: 200px; object-fit: cover;">

            <div class="card-body d-flex flex-column">
                <!-- Categoría y etiqueta -->
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-secondary" style="font-size: 12px;">{{ producto.categoria }}</span>
                    <div>
                        <!-- Alerta "Sin Stock" cuando no hay (roja) -->
                        <span v-if="!tieneStock" class="badge bg-danger me-1" style="font-size: 10px;">SIN STOCK</span>
                        <span class="badge bg-light text-dark" style="font-size: 11px;">{{ producto.etiqueta }}</span>
                    </div>
                </div>

                <!-- Nombre del producto -->
                <h4 class="card-title">{{ producto.nombre }}</h4>

                <!-- Descripción -->
                <p class="card-text flex-grow-1">{{ producto.descripcion }}</p>

                <!-- Precio y stock -->
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <h4 class="text-primary">{{ formatoPrecio(producto.precio) }}</h4>
                    <small class="text-muted" :class="{ 'text-danger': !tieneStock, 'text-success': tieneStock }">
                        Stock: {{ producto.stock }}
                    </small>
                </div>

                <!-- Botón de acción por stock-->
                <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-primary btn-sm" @click="agregar" :disabled="producto.stock === 0">
                        {{ producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito' }}
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" @click="abrirDetalles">
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>
    </div>



    <!-- Modal de detalles del producto -->
    <div v-if="mostrarDetalles" class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5)">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ producto.nombre }}</h5>
                    <button type="button" class="btn-close" @click="cerrarDetalles"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <!-- Galería de imágenes -->
                        <div class="col-md-6">
                            <img :src="producto.urlImagen" :alt="producto.nombre" class="img-fluid rounded mb-3">
                            <!-- Aquí se pueden agregar más imágenes 
                            <div class="row g-2" v-if="producto.imagenesAdicionales && producto.imagenesAdicionales.length">
                                <div class="col-4" v-for="(imagen, index) in producto.imagenesAdicionales" :key="index">
                                    <img :src="imagen" :alt="'Imagen ' + (index + 1)" class="img-thumbnail w-100">
                                </div>
                            </div>-->
                        </div>

                        <!-- Detalles del producto -->
                        <div class="col-md-6">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <span class="badge bg-secondary">{{ producto.categoria }}</span>
                                <span class="badge bg-light text-dark">{{ producto.etiqueta }}</span>
                            </div>

                            <h4 class="text-primary mb-3">{{ formatoPrecio(producto.precio) }}</h4>

                            <p class="mb-3">{{ producto.descripcion }}</p>

                            <div class="mb-3">
                                <h6>Especificaciones:</h6>
                                <ul class="list-unstyled">
                                    <li v-if="producto.marca"><strong>Marca:</strong> {{ producto.marca }}</li>
                                    <li v-if="producto.etiqueta"><strong>Peso:</strong> {{ producto.etiqueta }}</li>
                                    <li v-if="producto.descripcion2"><strong>Descripción detallada:</strong> {{ producto.descripcion2 }}</li>
                                    <!-- Agrega más especificaciones -->
                                </ul>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <span :class="{ 'text-danger': !tieneStock, 'text-success': tieneStock }">
                                    <strong>Stock disponible:</strong> {{ producto.stock }} unidades
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="cerrarDetalles">Cerrar</button>
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        @click="agregar"
                        :disabled="!tieneStock"
                    >
                        {{ tieneStock ? 'Agregar al carrito' : 'Sin stock' }}
                    </button>
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
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
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

.modal {
    backdrop-filter: blur(5px);
}
</style>