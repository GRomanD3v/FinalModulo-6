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

const props = defineProps({
    producto: {
        type: Object
    }
})

</script>



<template>

     <div class="col-md-4 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm">
            <!-- Imagen del producto -->
            <img :src="urlImagen" class="card-img-top" alt="Bombones chocolate amargo"
                style="height: 200px; object-fit: cover;">

            <div class="card-body d-flex flex-column">
                <!-- Categoría y etiqueta -->
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="badge bg-secondary" style="font-size: 12px;" >{{ producto.categoria }}</span>
                    <span class="badge bg-light text-dark" style="font-size: 11px;">{{ producto.etiqueta }}</span>
                </div>

                <!-- Nombre del producto -->
                <h4 class="card-title">{{ producto.nombre }}</h4>

                <!-- Descripción -->
                <p class="card-text flex-grow-1">{{ producto.descripcion }}</p>

                <!-- Precio y stock -->
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <h4 class="text-primary">{{ producto.precio }}</h4>
                    <small class="text-muted">Stock: {{ producto.stock }}</small>
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