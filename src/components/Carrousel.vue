<template>
     <!-- Carousel -->
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style="height:500px;">
    <div class="carousel-item active h-100" >
      <img src="../assets/img/c-1.jpeg" class="d-block w-100 h-100 object-fit-cover" alt="...">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div class="carousel-caption d-none d-md-block">
        <h2>La perfección se moldea en cacao puro y selecto.</h2>
        <p>El arte de la chocolatería en cada pieza.</p>
      </div>
    </div>
    <div class="carousel-item h-100">
      <img src="../assets/img/c-2.jpeg" class="d-block w-100 h-100 object-fit-cover" alt="...">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div class="carousel-caption d-none d-md-block">
        <h2>Disfrute el lujo de un momento Vangod.</h2>
        <p>Un viaje al placer más profundo y sensorial.</p>
      </div>
    </div>
    <div class="carousel-item h-100">
      <img src="../assets/img/c-3.jpeg" class="d-block w-100 h-100 object-fit-cover" alt="...">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div class="carousel-caption d-none d-md-block">
        <h2>Descubra nuestras Colecciones de Edición Limitada.</h2>
        <p>Un lujo artesanal solo para conocedores.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style>
.carousel-inner {
background: rgba(0,0,0,0.35);
}
</style>