<script setup>
import { ref, computed, onMounted } from 'vue';
import Carrousel from '../components/Carrousel.vue';
import SearchBar from '../components/SearchBar.vue';
import Destacados from '../components/Destacados.vue';
import Products from "../components/Products.vue";
import Ayuda from '../components/Ayuda.vue';

//importar la funcion de la API 
import { listProducts } from '../services/api';
const props = defineProps({
	carrito: Array,
	onAgregarAlCarrito: Function
});
// Definir estados reactivos
const todosLosProductos = ref([]);
const terminoBusqueda = ref('');

//Cargar los productos al iniciar el componente
onMounted(async ()=> {
	todosLosProductos.value = await listProducts();
});

// Función para manejar el evento de la barra de búsqueda
const handleBusqueda = (termino) => {
	// El término de búsqueda se actualiza cada vez que el SearchBar lo emite
	terminoBusqueda.value = termino;
};

// Propiedad Computada para el Filtrado
const productosFiltrados = computed(()=>{
	const termino = terminoBusqueda.value.toLowerCase().trim();
	// Si el término está vacío, muestra toda la lista
	if (!termino) {
		return todosLosProductos.value;
	}
	// Filtra la lista original de productos
	return todosLosProductos.value.filter(producto => {
		// La búsqueda se realiza en el nombre, la descripción, o la categoría
		return producto.nombre.toLowerCase().includes(termino) ||
			   producto.descripcion.toLowerCase().includes(termino) ||
			   producto.categoria.toLowerCase().includes(termino);
	});
});
</script>

<template>

	<Carrousel />
	<SearchBar @buscar="handleBusqueda" />
	<Destacados />

	<div class="container">
		
		<div>
			<Products 
			:productos="productosFiltrados"
			@agregar-al-carrito="props.onAgregarAlCarrito" />
		</div>
		<Ayuda/>
	</div>


</template>