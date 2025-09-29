<script setup>
import { ref, computed } from 'vue';

import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue';

const carrito = ref([]);

// Funciones del carrito
function agregarAlCarrito(producto) {
    const index = carrito.value.findIndex(item => item.id === producto.id);
    if (index !== -1) {
        //Producto ya existe --> sumar cantidad
        carrito.value[index].cantidad += 1;
    } else {
        //Producto no existe --> se agrega
        carrito.value.push({ ...producto, cantidad: 1 });
    }
}

function eliminarDelCarrito(index) {
    carrito.value.splice(index, 1);
}

function vaciarCarrito() {
    carrito.value = [];
}

function comprarCarrito() {
    if (carrito.value.length > 0) {
        alert('¡Tu compra se ha realizado con éxito! 🎉');
        carrito.value = [];
    } else {
        alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    }
}

function aumentarCantidad(index) {
    carrito.value[index].cantidad++;
}

function disminuirCantidad(index) {
    if (carrito.value[index].cantidad > 1) {
        carrito.value[index].cantidad--;
    } else {
        carrito.value.splice(index, 1); // Elimina producto si llega a cero
    }
}

// Computed para total y contador del carrito
const totalCarrito = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
);
const contadorCarrito = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.cantidad, 0)
);




</script>

<template>
    <Banner/>
    <Navbar 
     :contadorCarrito="contadorCarrito" 
     :carrito="carrito"
     :total="totalCarrito"
     @eliminar="eliminarDelCarrito"
     @vaciar="vaciarCarrito"
     @comprar="comprarCarrito"
     @aumentar="aumentarCantidad"
     @disminuir="disminuirCantidad"
    />
    <RouterView 
        v-slot="{ Component}"
        >
        <component
        :is="Component"
        :carrito="Carrito"
        :onAgregarAlCarrito="agregarAlCarrito"      
        />
    </RouterView>
    <FooterComponent/>
</template>
