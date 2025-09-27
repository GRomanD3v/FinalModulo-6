<script setup>
import Destacados from '../components/Destacados.vue';
import Carrousel from '../components/Carrousel.vue';
import Products from "../components/Products.vue";

</script>

<template>

	<Carrousel />
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
			<Products />
		</div>
	</div>


</template>