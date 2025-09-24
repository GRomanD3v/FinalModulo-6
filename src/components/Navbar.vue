<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/AuthStore';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = () =>  {
    authStore.logout();
    router.push('/Login');
};

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h2>ChocoTienda</h2>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
                <router-link v-if="!authStore.isLoggedIn" to="/Login" class="nav-link">Login</router-link>
                <a v-else class="nav-link" href="#" @click.prevent="handleLogout">Hola, {{ authStore.user.name }} (Logout)</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
 
</template>