<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductosStore } from '../store/productos';
import Carrousel from '../components/Carrousel.vue';
import SearchBar from '../components/SearchBar.vue';
import Destacados from '../components/Destacados.vue';
import Products from "../components/Products.vue";
import Ayuda from '../components/Ayuda.vue';

const props = defineProps({
	carrito: Array,
	onAgregarAlCarrito: Function
 });

//Obtener instancia del store
const productosStore = useProductosStore();

// 2. Usar storeToRefs para desestructurar propiedades reactivas (Getters y State)
// Esto asegura que sigan siendo reactivos cuando los uses en el template.
const {
	productos,
	productosFiltrados,
	isLoading,
	error,
	conteoProductos,
	stockTotal,
	conteoResultadosBusqueda,
} = storeToRefs(productosStore);
// 3. Obtener la acción para la carga inicial (no es reactiva, no necesita storeToRefs)
const { fetchProductos } = productosStore;
// 4. Llamar a la acción de carga al montar el componente
onMounted(() => {
	// Aquí disparamos la carga asíncrona de productos
	fetchProductos();
});
</script>

<template>
    <Carrousel />
    <Destacados />
    <h2 class="text-center m-4">Nuestros Productos</h2>

    <SearchBar class="mb-5" />

    <div class="container">
        
        <!-- Contadores de Estado Global (Se muestran siempre, excepto durante la carga) -->
        <div v-if="!isLoading" class="d-flex justify-content-between p-3 mb-4 bg-light rounded-3 shadow-sm">
            <p class="mb-0 text-dark fw-bold">
                Total de Productos Registrados: <span class="badge bg-primary">{{ conteoProductos }}</span>
            </p>
            <p class="mb-0 text-dark fw-bold">
                Stock Total Disponible: <span class="badge bg-success">{{ stockTotal }} unidades</span>
            </p>
        </div>
        
        <div v-if="isLoading" class="text-center p-5">
            <p>Cargando productos...</p>
        </div>
        <div v-else-if="error" class="text-center p-5 text-danger">
            <p>{{ error }}</p>
        </div>
        <div v-else>
            <p class="text-muted text-center fw-semibold">
                Mostrando {{ conteoResultadosBusqueda }} productos encontrados.
            </p>
            <Products 
                :productos="productosFiltrados"
                @agregar-al-carrito="props.onAgregarAlCarrito" 
            />
        </div>
    </div>
    <Ayuda/>
</template>