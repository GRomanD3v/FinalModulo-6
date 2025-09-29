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
    <div class="cart-container d-flex flex-column h-100">

        <h3 class="cart-title">Carrito de compras</h3>

        <!-- Mensaje si está vacío -->
        <div class="cart-items flex-grow-1 overflow-auto">
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in carrito" :key="index">
                        <td>{{ item.id }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}</td>

                    
                        <td>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-carrito btn-outline-secondary p-0 rounded-circle"
                                @click="disminuir(index)">
                                <i class="bi bi-dash"></i>
                            </button>
                            <span class="mx-2">{{ item.cantidad }}</span>
                            <button class="btn btn-carrito btn-outline-secondary p-0 rounded-circle"
                                @click="aumentar(index)">
                                <i class="bi bi-plus"></i>
                            </button>
                            </div>
                        </td>

                        <td>{{ (item.precio * item.cantidad).toLocaleString('es-CL', {
                            style: 'currency', currency:
                                'CLP'
                        })
                        }}</td>

                        <td>
                            <button class="btn  btn-sm" @click="eliminar(index)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <footer class="cart-footer mt-auto d-flex flex-column align-items-end border-top pt-3">
            <h6 class="mb-3" v-if="carrito.length > 0">
                Total: {{ total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}
            </h6>
            <div>
                <a class="me-3" @click="vaciar" :disabled="carrito.length === 0">Vaciar Carrito</a>
                <button class="btn btn-primary" @click="comprar" :disabled="carrito.length === 0">Comprar</button>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.btn-primary {
    background-color: #8B4513;
    border-color: #8B4513;
}

.btn-primary:hover {
    background-color: #654321;
    border-color: #654321;
}

.cart-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.cart-items {
    flex-grow: 1;
    overflow-y: auto;
}

.cart-footer {
    flex-shrink: 0;
}

table tbody td {
    vertical-align: middle;
}

td.d-flex.align-items-center {
    display: table-cell;
    /* fuerza que la celda se comporte como celda normal de tabla */
    vertical-align: middle;
}

.btn-carrito {
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

}
</style>