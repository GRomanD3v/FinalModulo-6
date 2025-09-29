<script setup>
import Carrousel from '../components/Carrousel.vue';
import SearchBar from '../components/SearchBar.vue';
import Destacados from '../components/Destacados.vue';
import Products from "../components/Products.vue";

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
		<div class="row">
			<div class="col-md-12">
				<h2 class="text-center">
					Nuestros Productos
				</h2>
			</div>
		</div>
		<div>
			<Products @agregar-al-carrito="props.onAgregarAlCarrito" />
		</div>
	</div>


</template>