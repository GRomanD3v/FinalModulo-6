<script setup>

import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/AuthStore';
import CartDetail from './CartDetail.vue';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = () => {
    authStore.logout();
    router.push('/Login');
};

const props = defineProps({
    contadorCarrito: {
        type: Number,
        required: true
    },
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

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <h1 class="text-uppercase animated-title">
                    <span>C</span>
                    <span>h</span>
                    <span>o</span>
                    <span>c</span>
                    <span>o</span>
                    <span>l</span>
                    <span>a</span>
                    <span>t</span>
                    <span>e</span>
                    <span>r</span>
                    <span>i</span>
                    <span>a</span>
                    <span>°</span>
                    <span>V</span>
                    <span>a</span>
                    <span>n</span>
                    <span>g</span>
                    <span>o</span>
                    <span>d</span>
                </h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ms-auto px-3">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="!authStore.isLoggedIn" to="/Login" class="nav-link">Login</router-link>
                        <a v-else class="nav-link" href="#" @click.prevent="handleLogout">Hola, {{ authStore.user.name
                        }} (Logout)</a>
                    </li>

                    <li class="nav-item">
                        <button class="btn btn-dark position-relative" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasCarrito">
                            <i class="bi bi-cart"></i>
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {{ contadorCarrito }}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="offcanvasCarrito">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">

            <CartDetail :carrito="carrito" :total="total" @eliminar="(i) => emit('eliminar', i)"
                @vaciar="() => emit('vaciar')" @comprar="() => emit('comprar')" @aumentar="(i) => emit('aumentar', i)"
                @disminuir="(i) => emit('disminuir', i)" />
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.nav-link {
    color: black;
    font-weight: 500;
}

.animated-title {
    font-family: "Major Mono Display", monospace;
    font-weight: 800;
    margin: 1;
    font-size: 2rem;
}

/* Combinación de ambas animaciones */
.animated-title span {
    display: inline-block;
    opacity: 0;
    transform: translateY(-20px);
    animation: fall-in 0.5s forwards;

    /* Brillo dorado */
    background: linear-gradient(90deg, #6e3309, #D2691E, #F4A460, #D2691E, #8B4513);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fall-in 0.5s forwards, shimmer 3s infinite;
}

/* Retrasos para el efecto de caída */
.animated-title span:nth-child(1) {
    animation-delay: 0.1s, 0s;
}

.animated-title span:nth-child(2) {
    animation-delay: 0.2s, 0.1s;
}

.animated-title span:nth-child(3) {
    animation-delay: 0.3s, 0.2s;
}

.animated-title span:nth-child(4) {
    animation-delay: 0.4s, 0.3s;
}

.animated-title span:nth-child(5) {
    animation-delay: 0.5s, 0.4s;
}

.animated-title span:nth-child(6) {
    animation-delay: 0.6s, 0.5s;
}

.animated-title span:nth-child(7) {
    animation-delay: 0.7s, 0.6s;
}

.animated-title span:nth-child(8) {
    animation-delay: 0.8s, 0.7s;
}

.animated-title span:nth-child(9) {
    animation-delay: 0.9s, 0.8s;
}

.animated-title span:nth-child(10) {
    animation-delay: 1.0s, 0.9s;
}

.animated-title span:nth-child(11) {
    animation-delay: 1.1s, 1.0s;
}

.animated-title span:nth-child(12) {
    animation-delay: 1.2s, 1.1s;
}

.animated-title span:nth-child(13) {
    animation-delay: 1.3s, 1.2s;
}

/* Espacio */
.animated-title span:nth-child(14) {
    animation-delay: 1.4s, 1.3s;
}

.animated-title span:nth-child(15) {
    animation-delay: 1.5s, 1.4s;
}

.animated-title span:nth-child(16) {
    animation-delay: 1.6s, 1.5s;
}

.animated-title span:nth-child(17) {
    animation-delay: 1.7s, 1.6s;
}

.animated-title span:nth-child(18) {
    animation-delay: 1.8s, 1.7s;
}

.animated-title span:nth-child(19) {
    animation-delay: 1.9s, 1.8s;
}

/* Animación de caída */
@keyframes fall-in {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animación de brillo dorado */
@keyframes shimmer {
    0% {
        background-position: -150% 0;
    }

    100% {
        background-position: 150% 0;
    }
}

/* Efecto hover adicional */
.animated-title:hover span {
    animation: fall-in 0.8s forwards, shimmer 2s infinite;
}

/* Responsive */
@media (max-width: 768px) {
    .animated-title {
        font-size: 1.4rem;
    }
}

@media (max-width: 576px) {
    .animated-title {
        font-size: 1.2rem;
    }
}

.custom-offcanvas {
  width: 600px;
  max-width: 100%;
  height: 100%;

}

.custom-offcanvas::before {
  content: "";
  display: block;
  width: 100%;
  height: 8rem; /* altura visible del header */
  background-image: url('../assets/img/c-1.jpeg');
  background-size: cover;           
  background-repeat: no-repeat;
  background-position: center;  
}

.offcanvas-header {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
}

.offcanvas-body{
    padding-top: 0;
    display: flex;
    flex-direction: column;
}


</style>