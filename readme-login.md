# Documentación del Módulo de Login y Autenticación
## Resumen Ejecutivo

Se ha desarrollado y completado un módulo de inicio y cierre de sesión que cumple con todos los requisitos del proyecto. La solución es robusta, utiliza las mejores prácticas de Vue 3 (Composition API) y gestiona el estado de manera centralizada con Pinia, lo que garantiza la escalabilidad y facilidad de mantenimiento.

### Requisitos Cumplidos
A continuación, se detalla cómo se abordó cada requerimiento específico del login:

### - Control del Login y Cierre de Sesión:

- Se creó un servicio Auth.js que simula una API de autenticación, manejando la lógica de inicio de sesión (login) y de cierre de sesión (logout).

- El estado de la sesión se gestiona a través de un store de Pinia centralizado, en lugar de localStorage, lo que permite un control reactivo y global de la sesión del usuario en toda la aplicación.

### - Formulario de Login (Login.vue):

- Se construyó un formulario con campos para nombre, correo electrónico y contraseña.

- Se utilizó la directiva v-model para la vinculación de datos y la directiva v-if para mostrar un mensaje de error cuando las credenciales son incorrectas.

### - Gestión de la Autenticación en Navbar.vue:

- La barra de navegación (Navbar.vue) consume el estado del store de Pinia para determinar si un usuario está autenticado.

- Se utilizó v-if para mostrar el menú "Login" cuando el usuario no está autenticado.

- Se utilizó v-else para mostrar el nombre del usuario y la opción de "Logout" cuando el usuario sí está autenticado.

### - Verificación del Flujo de Login:

- Se verificó que el formulario en Login.vue muestra un error cuando las credenciales de acceso son inválidas.

- Se verificó que, al iniciar sesión exitosamente, el componente Login.vue redirige al usuario a la vista /home utilizando vue-router.

---

### Arquitectura de la Solución
La solución está dividida en tres partes principales que trabajan en conjunto:

### 1.Servicio de Autenticación 
(Auth.js): Actúa como el modelo de datos. Simula la comunicación con un servidor, resolviendo una Promise en caso de éxito o rechazándola con un Error en caso de fallo. Contiene la lógica para el login y el logout.

### 2. El Store de Pinia 
(stores/auth.js): Actúa como el centro de estado de la aplicación. Mantiene el objeto del usuario logueado. Sus acciones (actions) son llamadas por los componentes para modificar el estado, y sus getters permiten a los componentes leer el estado de manera reactiva.

### 3. Los Componentes de Interfaz de Usuario 
(Login.vue y Navbar.vue): Actúan como la vista. Login.vue es el componente de entrada de datos que se comunica con el servicio y el store. Navbar.vue lee el estado del store para ajustar su interfaz dinámicamente.

### Diagrama de Flujo del Login
#### 1. El usuario ingresa sus credenciales en Login.vue y hace clic en "Submit".

#### 2. Login.vue llama a la función login del servicio Auth.js.

#### 3. Auth.js devuelve una Promise.

#### 4. Si la Promise se resuelve:

- Login.vue llama a la acción login del store de Pinia, pasándole los datos del usuario.

- El store de Pinia actualiza su estado.

- Login.vue redirige al usuario a /home.

- Navbar.vue (y otros componentes) detecta el cambio en el estado del store de Pinia y actualiza su interfaz para mostrar el nombre del usuario.

#### 5. Si la Promise es rechazada:

- Login.vue captura el error y actualiza su variable errorMessage, lo que hace que el mensaje de error se muestre en el formulario.

---