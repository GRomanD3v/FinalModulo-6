import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { listProducts } from "../services/api";

export const useProductosStore = defineStore("productos", () => {
  // 1. STATE: Estado reactivo (Fuente de Verdad)
  const productos = ref([]); 
  const terminoBusqueda = ref("");
  const isLoading = ref(false);
  const error = ref(null);

  // 2. GETTERS: Lógica de lectura y derivación de estado
  const productosFiltrados = computed(() => {
    if (isLoading.value || error.value) return [];

    const termino = terminoBusqueda.value.toLowerCase().trim();

    if (!termino) {
      return productos.value; 
    }

    return productos.value.filter((producto) => {
      // Campos a buscar: nombre, descripcion, descripcion2, categoria
      return (
        producto.nombre.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino) ||
        producto.descripcion2.toLowerCase().includes(termino) ||
        producto.categoria.toLowerCase().includes(termino)
      );
    });
  });

  // Getter 1: Conteo Total de Productos (cantidad de documentos)
  const conteoProductos = computed(() => productos.value.length);

  // Getter 2: Conteo Total de Stock (suma del campo 'stock' de todos los productos)
  const stockTotal = computed(() => {
    // Usamos reduce para sumar el stock de cada producto, iniciando la suma en 0
    return productos.value.reduce((sum, producto) => sum + producto.stock, 0);
  });
  
  // Getter de Conteo de Resultados de Búsqueda
  const conteoResultadosBusqueda = computed(
    () => productosFiltrados.value.length
  );

  // Getter para saber si la búsqueda no arrojó resultados
  const busquedaVacia = computed(
    () =>
      productosFiltrados.value.length === 0 && terminoBusqueda.value.length > 0
  );

  // 3. ACTIONS: Lógica de modificación
  const fetchProductos = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const data = await listProducts();
      productos.value = data; 
    } catch (err) {
      console.error("Error al cargar productos:", err);
      error.value = "No fue posible cargar los productos. Intente más tarde.";
    } finally {
      isLoading.value = false;
    }
  };

  // Acción para actualizar el estado de búsqueda (sincrónico)
  const setTerminoBusqueda = (nuevoTermino) => {
    terminoBusqueda.value = nuevoTermino;
  };

  // 4. RETURN: Hacer el state, getters y actions públicos
  return {
    //State
    productos,
    terminoBusqueda,
    isLoading,
    error,
    //Getters
    productosFiltrados,
    conteoProductos,
    stockTotal, // <-- Añadido el nuevo Getter
    conteoResultadosBusqueda,
    busquedaVacia,
    //Actions
    fetchProductos,
    setTerminoBusqueda,
  };
});