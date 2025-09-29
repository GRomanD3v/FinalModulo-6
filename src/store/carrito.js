import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: []
  }),
  actions: {
    guardar(carrito) {
      this.items = carrito
      localStorage.setItem('carrito', JSON.stringify(this.items))
    },
    cargar() {
      const data = localStorage.getItem('carrito')
      if (data) this.items = JSON.parse(data)
    }
  }
})