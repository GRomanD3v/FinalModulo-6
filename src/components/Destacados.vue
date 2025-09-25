<template>
     <section class="product-section m-5">
        <div class="container">
            <h2 class="text-center section-title mb-5">Nuestros Productos</h2>
            
            <div class="row">
                <!-- Producto 1: Calugas Macizos -->
                <div class="col-md-6 col-lg-4">
                    <div class="card product-card">
                        <div class="product-img-container">
                            <img src="/src/assets/img/c-3.jpeg" alt="Calugas Macizos" class="product-img">
                            <div class="product-overlay">
                                <div class="overlay-content">
                                    <h5 class="product-title">Calugas Macizos</h5>
                                    <p>Deliciosos y tradicionales calugas macizos</p>
                                    <button class="btn btn-light">Ver más</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">Calugas Macizos</h5>
                            <p class="card-text">Nuestra selección de calugas macizos tradicionales.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 2: Ideas para Regalar -->
                <div class="col-md-6 col-lg-4">
                    <div class="card product-card">
                        <div class="product-img-container">
                            <img src="/src/assets/img/c-2.jpeg" alt="Ideas para Regalar" class="product-img">
                            <div class="product-overlay">
                                <div class="overlay-content">
                                    <h5 class="product-title">Ideas para Regalar</h5>
                                    <p>Encuentra el regalo perfecto</p>
                                    <button class="btn btn-light">Ver más</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">Ideas para Regalar</h5>
                            <p class="card-text">Selección especial para ocasiones especiales.</p>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 3: Nuevos Sabores -->
                <div class="col-md-6 col-lg-4">
                    <div class="card product-card">
                        <div class="product-img-container">
                            <img src="/src/assets/img/c-1.jpeg" alt="Nuevos Sabores" class="product-img">
                            <div class="product-overlay">
                                <div class="overlay-content">
                                    <h5 class="product-title">Nuevos Sabores</h5>
                                    <p>Descubre nuestras novedades</p>
                                    <button class="btn btn-light">Ver más</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">Nuevos Sabores</h5>
                            <p class="card-text">Innovadoras combinaciones para tu paladar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Sección de Ayuda -->
    <section class="help-section">
        <div class="container text-center pb-5">
            <h2>¿Quieres Ayuda?</h2>
            <p class="lead">Estamos aquí para ayudarte a encontrar lo que buscas.</p>
            <button class="btn" style="background-color: saddlebrown; color:white">Contáctanos</button>
        </div>
    </section>
</template>

<style scoped>

.product-section {
            padding: 60px 0;
            background-color: #f8f9fa;
        }
        
        .product-card {
            border: none;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 30px;
            height: 100%;
        }
        
        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .product-img-container {
            position: relative;
            overflow: hidden;
            height: 250px;
        }
        
        .product-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-img {
            transform: scale(1.1);
        }
        
        .product-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .product-card:hover .product-overlay {
            opacity: 1;
        }
        
        .overlay-content {
            color: white;
            text-align: center;
        }
        
        .product-title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .section-title {
            margin-bottom: 40px;
            color: #333;
            position: relative;
            padding-bottom: 15px;
        }
        
        .section-title:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: #d4a76a;
        }
        
        .help-section {
            background-color: #fff;
            padding: 20px 0;
            margin-top: 40px;
            border-top: 1px solid #eee;
        }

</style>