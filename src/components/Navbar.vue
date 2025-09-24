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
          <h1>Chocolateria Vangod</h1>
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
                <a v-else class="nav-link" href="#" @click.prevent="handleLogout">Hola, {{ authStore.user.name }} (Logout)</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
 
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

h1  {

font-family: "Major Mono Display", monospace;
  font-weight: 500;

}

</style>