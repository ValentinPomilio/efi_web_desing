# Bitácora de Errores Conocidos y Gotchas de Maquetado - SaludBarrial

Este documento compila las fallas y dificultades típicas ("gotchas") que suelen presentarse en el maquetado web responsive con TailwindCSS y JavaScript, detallando sus causas raíces y las soluciones preventivas adoptadas en SaludBarrial.

---

## Matriz de Gotchas y Medidas Preventivas

| Gotcha / Problema Típico | Causa Raíz Frecuente | Medida Preventiva Obligatoria en SaludBarrial |
| :--- | :--- | :--- |
| **1. Scroll horizontal roto en celulares** | Uso de anchos rígidos (`w-[500px]`), márgenes negativos no contenidos o tablas que superan el ancho de la pantalla. | Aplicar clases responsivas fluidas (`w-full max-w-7xl mx-auto px-4`) y blindar el elemento raíz con `overflow-x-hidden` tanto en `<html>` como en `<body>`. |
| **2. Botones no accesibles ni cliqueables por teclado** | Uso de etiquetas `<div>` o `<span>` con evento `onclick`, impidiendo la navegación con tecla Tab y lectores de pantalla. | Utilizar exclusivamente la etiqueta nativa `<button type="button">` o enlaces `<a>`, acompañados de atributos `aria-label` claros cuando contengan solo íconos. |
| **3. Enlaces telefónicos no interactivos** | Colocar números de teléfono en formato de texto plano (`107`), obligando al usuario en emergencia a memorizar el número y abrir otra app. | Implementar invariablemente el protocolo de marcado telefónico directo: `<a href="tel:107">`, permitiendo llamar en un solo toque táctil. |
| **4. Pobre contraste visual en textos** | Uso de tonos de texto grisáceos (`text-gray-400`) sobre fondos blancos, o textos oscuros no alternados al pasar a modo oscuro. | Establecer tokens de alto contraste (`text-slate-900` para fondos claros y `text-slate-100` con `dark:text-white` para modo oscuro), superando el umbral WCAG AA. |
| **5. Parpadeo o reinicio del tema al recargar** | Cargar el script de detección del tema al final del `<body>`, lo que genera un destello blanco (*FOUC - Flash of Unstyled Content*). | Colocar una pequeña función inline en el `<head>` que lea `localStorage.getItem('theme')` o `window.matchMedia` antes de renderizar el DOM para asignar la clase `dark` de inmediato. |
| **6. Pantalla en blanco en búsquedas sin resultados** | Si un filtro combinado (ej. Barrio Alberdi + Traumatología) no arroja resultados, la grilla queda vacía sin avisar al usuario. | Diseñar e inyectar el componente de **Empty State** con mensaje comprensible: *"No encontramos centros de salud con esos criterios"* y un botón para *"Restablecer filtros"*. |
| **7. Botón SOS fuera de vista en emergencias** | En pantallas móviles, si el usuario hace scroll hacia abajo, el botón de llamado puede quedar oculto arriba. | Diseñar una barra inferior anclada (*Sticky Bottom Bar*) fija con `fixed bottom-0 left-0 right-0 z-50 md:hidden` para mantener el acceso al 107 siempre al alcance del pulgar. |
| **8. Bloqueo de scroll al cerrar modales** | Al abrir un modal se suele colocar `overflow-hidden` en el `body`, pero si se olvida removerlo al cerrar, la página queda congelada. | Centralizar la lógica de modales en funciones de apertura y cierre limpias que añadan y remuevan la clase de forma simétrica, admitiendo cierre por tecla `Escape`. |
| **9. Controles del encabezado que no reciben el mouse** | Una notificación transparente con `position: fixed` y `z-index` alto puede solaparse con los controles del encabezado aunque esté desplazada y tenga opacidad cero. | Los avisos no interactivos deben usar `pointer-events-none` para no interceptar clics ni impedir los estados hover de controles subyacentes. |
