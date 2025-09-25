<script setup>
import { ref } from "vue";
import { login } from "../services/Auth.js";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/AuthStore.js";

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();
const authStore = useAuthStore();

const errorMessage = ref("");

const handleLogin = async () => {
  errorMessage.value = "";
  try {
    const user = await login({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    console.log("Login exitoso:", user);
    authStore.login(user);
    router.push('/');

  } catch (error) {
    errorMessage.value = error.message;
    console.error("Error de login:", error);
  }
};
</script>

<template>
  <div class="login-bg-container">
    <img src="../assets/img/c-3.jpeg" alt="Fondo" class="bg-blur-img" />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="login-box p-4">
            <h2 class="text-center mb-4" style="color: black;">Iniciar Sesión</h2>
            <form @submit.prevent="handleLogin">
              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Contraseña:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                />
              </div>

              <button type="submit" class="btn" style="background-color: saddlebrown; color:white">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-bg-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
.bg-blur-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-color: black;
  filter: blur(4px) brightness(0.7);
  z-index: 0;
}
.container,
.login-box {
  position: relative;
  z-index: 1;
}
.login-box {
  margin-top: 10em;
  background: rgba(233, 233, 233, 0.445);
  border-radius: 20px;
  border: 1px solid rgba(43, 43, 43, 0.3);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  backdrop-filter: blur(1px);
}
</style>
