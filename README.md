# M7-ABP3 Almacenamiento de estado en Pinia
## DESARROLLO DE INTERFACES INTERACTIVAS CON FRAMEWORK VUE: CHOCOLATERÍA VANGOD
### Integrantes: 
- María Teresa De La Fuente
- Daniela Garrido 
- Gonzalo Román

### Ruta: https://github.com/GRomanD3v/FinalModulo-6/tree/abp3

---

## Proyecto: Sistema de Gestión de Productos y Buscador (Ecommerce Demo)
Este proyecto es un sistema de listado, conteo y filtrado de inventario desarrollado con Vue 3 y Pinia, cumpliendo todos los requisitos de estado y lógica centralizada.

### Stack Tecnológico
Tecnología

- Vue 3 Framework principal para la construcción de la interfaz (Composition API).

- Pinia Gestión de estado centralizada (sustituyendo a Vuex).

- Vue Router Manejo de las rutas y vistas del sitio.

- Bootstrap Librería CSS utilizada para un diseño limpio y responsivo.

- Async/Await Manejo de operaciones asíncronas para la carga de datos (simulación de una API).

### Instrucciones de Ejecución
Para iniciar el proyecto en un entorno local, sigue estos pasos:

Instalar dependencias:

```npm install```


Ejecutar el servidor de desarrollo:

```npm run dev```


### Acceso:
Abre la URL proporcionada en la consola (usualmente http://localhost:5173/).

✅ Cumplimiento de Requisitos del Proyecto (Detalle)
Se ha utilizado el patrón Setup Store de Pinia para declarar, inicializar y gestionar todas las variables del proyecto de forma reactiva, centralizando la lógica en un único lugar.

1. Estructura y Estilo
Estructura de Vistas: Se implementó una vista principal (Home.vue) y un menú de navegación (Navbar) con vue-router para la navegación.

Diseño y Estilo: Se utilizó Bootstrap para garantizar una interfaz limpia, moderna y adaptable.

2. Gestión de Estado (Pinia)
Uso del State Centralizado: Todas las variables de datos clave (productos, terminoBusqueda, isLoading) se gestionan mediante el patrón State de Pinia. Se utiliza ref() para crear variables reactivas.

Propiedades Computadas: Se utiliza la función computed dentro del store para los filtrados, conteos y estados derivados. Se accede a los Getters desde los componentes usando storeToRefs para mantener la reactividad.
(Nota: El requisito de usar Vuex se sustituyó por Pinia, el estándar actual de Vue 3).

3. Funcionalidad de Inventario
Búsqueda y Filtrado: La búsqueda por nombre y otros campos es instantánea.

Lógica: Se utiliza el Getter productosFiltrados, el cual se re-ejecuta automáticamente cada vez que el terminoBusqueda cambia.

Mostrar Listado de Productos: Se muestran los campos: código, nombre, stock, y precio de los productos disponibles.

Lógica: El componente ```<Products>``` consume directamente el Getter productosFiltrados.

Conteo de Productos Totales: Muestra el número total de ítems únicos registrados en el inventario.

Lógica: Se utiliza el Getter conteoProductos.

Stock Total: Muestra la suma total del stock de todas las unidades de productos registradas.

Lógica: Se utiliza el Getter stockTotal, el cual usa el método reduce para sumar el campo stock de todos los productos.