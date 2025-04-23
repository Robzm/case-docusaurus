---
sidebar_position: 6
---

# Panel "Application"

El panel **"Application"** en las herramientas de desarrollo del navegador permite inspeccionar y gestionar recursos del lado del cliente que una página web almacena en el navegador del usuario. Es especialmente útil en aplicaciones web modernas que necesitan guardar datos en el navegador.

---

### 📦 ¿Qué puedes ver en el panel "Application"?

#### 1. Local Storage
- Almacena datos clave-valor de forma persistente.
- No se borra al cerrar el navegador.
- Ideal para guardar preferencias del usuario.

```javascript
localStorage.setItem('usuario', 'Juan');
```

#### 2. Session Storage
- Similar al Local Storage, pero los datos se eliminan al cerrar la pestaña.
- Útil para datos temporales de una sesión de usuario.

```javascript
sessionStorage.setItem('token', 'abc123');
```

#### 3. Cookies
- Pequeños fragmentos de datos usados para autenticación, rastreo, etc.
- Puedes ver nombre, valor, dominio, expiración y más.
- Se pueden editar o eliminar desde este panel.

#### 4. IndexedDB
- Una base de datos completa del lado del cliente.
- Permite almacenar objetos complejos y grandes volúmenes de datos.
- Muy usado por aplicaciones web progresivas (PWA).

#### 5. Cache Storage / Service Workers
- Permite ver recursos guardados en caché por un Service Worker.
- Útil para aplicaciones que funcionan sin conexión (offline).
- Puedes inspeccionar archivos cacheados y eliminarlos.

#### 6. Manifest
- Archivo `manifest.json` de la app web.
- Define comportamiento como aplicación instalada (nombre, íconos, tema, etc.).
- Importante para Progressive Web Apps (PWAs).

### 🛠️ Casos de uso comunes
- Verificar si los datos se están guardando correctamente en `localStorage` o `sessionStorage`.
- Probar el inicio de sesión o forzar estados manuales editando cookies.
- Eliminar almacenamiento para hacer una recarga limpia del sitio.
- Comprobar si los recursos están en caché o si un Service Worker está activo.

### ✅ Consejo útil

Haz clic en **"Clear site data"** para borrar todos los datos de almacenamiento del sitio. Esto incluye cookies, caché, almacenamiento local y más. Es muy útil para hacer pruebas desde cero.


