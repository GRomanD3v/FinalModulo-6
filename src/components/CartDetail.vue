<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    carrito: {
        type: Array,
        required: true
    },

    total: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['eliminar', 'vaciar', 'comprar', 'aumentar', 'disminuir']);

function eliminar(index) {
    emit('eliminar', index);
}

function vaciar() {
    emit('vaciar');
}

function comprar() {
    emit('comprar');
}

function aumentar(index) {
    emit('aumentar', index);
}

function disminuir(index) {
    emit('disminuir', index);
}

</script>

<template>
    <div class="cart-container">

        <h3 class="cart-title">Carrito de compras</h3>

        <!-- Mensaje si está vacío -->
        <p v-if="carrito.length === 0"> Tu carrito está vacío</p>

        <!-- Tabla si hay productos -->
        <table v-else class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in carrito" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}</td>

                    <td>
                        <button class="btn btn-xs btn-secondary" @click="disminuir(index)">-</button>
                        <span class="mx-2">{{ item.cantidad }}</span>
                        <button class="btn btn-xs btn-secondary" @click="aumentar(index)">+</button>
                    </td>

                    <td>{{ (item.precio * item.cantidad).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
                    }}</td>

                    <td><button class="btn btn-danger btn-xs" @click="eliminar(index)">X</button></td>
                </tr>
            </tbody>
        </table>

        <footer class="mt-auto d-flex justify-content-end  align-items-center border-top pt-3">
            <p v-if="carrito.length > 0">
                Total: {{ total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}
            </p>

            <a class="me-3" @click="vaciar" :disabled="carrito.length === 0">Vaciar Carrito</a>
            <button class="btn btn-primary" @click="comprar" :disabled="carrito.length === 0">Comprar</button>
        </footer>
    </div>
</template>

<style scoped>
.btn-xs {
    padding: 0.2rem 0.4rem;
    /* padding vertical y horizontal reducido */
    font-size: 0.7rem;
    /* tamaño de letra más pequeño */
    line-height: 1;
    /* opcional para ajustar altura */
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