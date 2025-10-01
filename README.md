# Exámen Final Módulo 6 
## DESARROLLO DE INTERFACES INTERACTIVAS CON FRAMEWORK VUE: CHOCOLATERÍA VANGOD
### Integrantes: 
- María Teresa De La Fuente
- Daniela Garrido 
- Gonzalo Román

### Ruta: https://github.com/GRomanD3v/FinalModulo-6.git

- Objetivo
Implementar una interfaz de usuario web con elementos interactivos
utilizando el framework Vue.js para dar solución a un requerimiento

---
Este documento detalla la implementación de los requisitos principales del proyecto de e-commerce utilizando Vue 3 y Bootstrap 5, enfocado en el despliegue de productos, la gestión del estado del carrito de compras, la funcionalidad de búsqueda y la autenticación de usuarios.

---

### TECNOLOGÍAS Y ARQUITECTURA

El proyecto se construyó bajo una arquitectura moderna de frontend:
- Framework: Vue.js 3 (Composition API con `<script setup>`).
- Estilos: Bootstrap 5 (Clases y componentes estándar).
- Gestión de Estado: Pinia (para persistencia del carrito y estado de autenticación).
- Ruteo: Vue Router (para navegación entre Home y Login).

---

### REQUISITOS CUMPLIDOS

A continuación, se describe cómo se implementó cada requisito fundamental del proyecto:

---
### 1. Despliegue de Productos y Diseño

El componente principal para la visualización es Card.vue, el cual cumple con la estructura visual solicitada:

- Estructura Bootstrap: Utiliza las clases card h-100, card-img-top, d-flex flex-column, mt-auto para asegurar que todas las tarjetas tengan la misma altura y que los precios y botones se alineen en la parte inferior.

- Datos: Cada tarjeta (cards) recibe un objeto producto a través de props que incluye nombre, descripción, precio, stock, categoría e imagen.

- Formato de Precio: El precio se formatea utilizando toLocaleString('es-CL') para asegurar el formato chileno (CLP).

- Botón de Acción: El botón "Añadir al Carrito" se deshabilita automáticamente cuando el stock del producto es 0.

### 1.1 Modal

- Botón Ver Detalle: El botón "Ver Detalle" activa un modal que muestra información completa y detallada del producto seleccionado. Este componente recibe los datos del producto a través de props y se renderiza condicionalmente utilizando v-if para controlar su visualización.

---
### 2. Gestión de Estado y Persistencia (Pinia)

Se utilizó Pinia para centralizar la información clave del usuario y del carrito.
- store/carrito.js: Implementa un Store que gestiona la lista de productos (items) del carrito.
    - Persistencia: Utiliza localStorage mediante las acciones guardar() y cargar() para que el carrito mantenga su estado incluso si el usuario recarga la página.

- App.vue: Es responsable de cargar el carrito desde Pinia al montar (onMounted) y de guardar los cambios automáticamente mediante un watcher (watch) cada vez que el contenido del carrito se modifica.

---

### 3. Funcionalidad de Carrito de Compras
La lógica del carrito está definida en App.vue y se muestra en el componente CartDetail.vue (dentro del offcanvas de la barra de navegación).

- Agregar Producto: La función agregarAlCarrito(producto) en App.vue verifica si el producto ya existe. Si existe, aumenta la cantidad; si no, lo agrega con cantidad: 1.

- Detalle y Gestión: CartDetail.vue maneja eventos (emit) para:
    - aumentar / disminuir la cantidad.
    - eliminar un ítem por índice.
    - vaciar y comprar (con validación de carrito vacío).

- Contador y Total: El contador del carrito (contadorCarrito) y el total (totalCarrito) son propiedades computed en App.vue, asegurando que se actualicen reactivamente con cada cambio.

---

### 4. Búsqueda y Filtrado de Productos

La funcionalidad de búsqueda permite a los usuarios encontrar productos rápidamente:

- SearchBar.vue: Componente encargado de capturar el texto de búsqueda (v-model) y emitir el término (@buscar) al presionar Enter o el botón de la lupa.

- Home.vue: Recibe el término de búsqueda (terminoBusqueda) y utiliza una propiedad productosFiltrados (computed) para:
    
    - Filtrar la lista completa de productos (todosLosProductos).
    - La búsqueda se realiza por coincidencia en el nombre, descripción y categoría del producto.

---
    
### 5. Autenticación de Usuarios

Se implementó un sistema básico de autenticación para diferenciar la experiencia del usuario.

#### Credenciales de inicio de sesión (Login)
- Nombre: usuario
- Correo: usuario@mitienda.com
- Password: 123456
---

- store/AuthStore.js: Utiliza Pinia para gestionar el estado de sesión (user) y un getter isLoggedIn para determinar si el usuario ha iniciado sesión.

- Login.vue: Permite ingresar credenciales (hardcodeadas en services/Auth.js) y al lograr el login exitoso, guarda el usuario en Pinia y redirige a la página principal (/).

- Navbar.vue: Muestra el enlace "Login" o el mensaje "Hola, `[Nombre]` (Logout)" de forma condicional, utilizando authStore.isLoggedIn.

- Corrección de Errores: Se implementó el encadenamiento opcional (?.) en Navbar.vue (authStore.user?.name) para prevenir errores de tipo TypeError al intentar leer propiedades de un objeto nulo después de cerrar sesión o al cargar la aplicación.

---

### Instalación y Ejecución Local

1. Tener Node.js y npm instalados.

2. Navegar a la carpeta principal del proyecto en el terminal.

3. Ejecutar el siguiente comando para instalar las dependencias:
npm install

4. AL finalizar la instalación, iniciar el servidor de desarrollo con:
npm run dev

5. Abrir la URL proporcionada por la terminal (generalmente http://localhost:5173) en el navegador para ver la aplicación en funcionamiento.