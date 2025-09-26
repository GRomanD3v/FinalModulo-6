<script setup>
import { ref, onMounted, computed } from 'vue';
const messageTexts = ref([
    {
        principalText : 'ENVÍO GRATIS',
        secondaryText : 'En compras superiores a $60.000'
    },
    {
        principalText : '3x2 EN GALLETAS',
        secondaryText : 'Solo por hoy - No te lo pierdas'
    },
    {
        principalText : 'RETIRA EN TIENDA GRATIS',
        secondaryText : 'Sin costo adicional'
    },
]);

const currentIndex = ref(0)

const currentMessage = computed(() => messageTexts.value[currentIndex.value])

function rotate(){
    currentIndex.value = (currentIndex.value + 1) % messageTexts.value.length
    // primer valor = 0 === (0 + 1) % 3 = 1
    // valor 1 = ( 1 + 1 ) % 3 = 2
    // valor 2 = ( 2 + 1 ) % 3 = 0
}

onMounted(() => {
    setInterval(rotate, 3500)

})
</script>

<template>
  <div class="top-banner">
    <Transition name="fade" mode="out-in">
      <div class="banner-message active" :key="currentIndex">
        🚚 <span class="banner-highlight">{{ currentMessage.principalText }}</span> {{ currentMessage.secondaryText }}
      </div>
    </Transition>
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
  padding: 8px 15px;
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
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
