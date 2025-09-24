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
                <router-link to="/Login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
  </nav>

</template>