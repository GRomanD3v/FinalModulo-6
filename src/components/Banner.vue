<script setup>
document.addEventListener('DOMContentLoaded', function () {
    const bannerMessages = document.querySelectorAll('.banner-message');
    let currentIndex = 0;

    function rotateBanner() {
        // Ocultar mensaje actual
        bannerMessages[currentIndex].classList.remove('active');
        bannerMessages[currentIndex].classList.add('fade-out');

        // Calcular siguiente índice
        currentIndex = (currentIndex + 1) % bannerMessages.length;

        // Mostrar siguiente mensaje
        setTimeout(() => {
            bannerMessages.forEach(msg => {
                msg.classList.remove('active', 'fade-out');
            });
            bannerMessages[currentIndex].classList.add('active');
        }, 1000); // Tiempo de transición
    }

    // Rotar cada 3 segundos
    setInterval(rotateBanner, 3000);
});
</script>

<template>
    <div class="top-banner">
        <div class="banner-message active">
            🚚 <span class="banner-highlight">ENVÍO GRATIS</span> En compras superiores a $60.000
        </div>
        <div class="banner-message">
            🎁 <span class="banner-highlight">3x2 EN GALLETAS</span> Solo por hoy - No te lo pierdas
        </div>
        <div class="banner-message">
            📍 <span class="banner-highlight">RETIRA EN TIENDA GRATIS</span> Sin costo adicional
        </div>
    </div>
</template>

<style scoped>
.top-banner {
    background-color: #1d1210;
    /* Color marrón chocolate */
    color: white;
    padding: 10px 0;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    height: 45px;
}

.banner-message {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity 0.8s ease, transform 0.9s ease;
    padding: 8px 15px;
}

.banner-message.active {
    opacity: 1;
    transform: translateY(0);
}

.banner-message.fade-out {
    opacity: 0;
    transform: translateY(100%);
}

.banner-highlight {
    background-color: #f7c886;
    /* Color dorado */
    color: #36231e;
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: bold;
    margin: 0 5px;
}
</style>