<script setup>
import Carrousel from '../components/Carrousel.vue';
import SearchBar from '../components/SearchBar.vue';
import Destacados from '../components/Destacados.vue';
import Products from "../components/Products.vue";
import Ayuda from '../components/Ayuda.vue';

const props = defineProps({
	carrito: Array,
	onAgregarAlCarrito: Function
});

</script>

<template>

	<Carrousel />
	<SearchBar />
	<Destacados />

	<div class="container">
		
		<div>
			<Products @agregar-al-carrito="props.onAgregarAlCarrito" />
		</div>
		<Ayuda/>
	</div>


</template>