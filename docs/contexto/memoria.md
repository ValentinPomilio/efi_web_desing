# Memoria Activa y Continua (Engram / mem_save)

Este documento almacena los acuerdos, directivas permanentes y contexto consolidado del proyecto.

---

## Directivas Permanentes Registradas

### [2026-10-15] Inicialización del Antigravity Operating System (AG-OS)
- **Estado**: Activo / Permanente (`always_on`).
- **Ubicación de Reglas**: [.agents/rules/antigravity_global_rules.md](file:///c:/Users/pomil/Desktop/ALL/ITEC/segundo/Diseño%20Web/EFI/.agents/rules/antigravity_global_rules.md) y [GEMINI.md](file:///c:/Users/pomil/Desktop/ALL/ITEC/segundo/Diseño%20Web/EFI/GEMINI.md).
- **Pilares Fijados**: Persona (Senior Product Engineer), Tech Stack (HTML5 + Tailwind v3 + Vanilla JS), DoD estricto, Control de Guardas, Contexto Vivo y SDD Adaptativo.

---

### [2026-10-15] Contexto Consolidado del Proyecto: "SaludBarrial" (Entidad SaludPrimero)
- **Propósito Central**: Guía accesible e inmediata de salud pública y privada para vecinos de Río Cuarto.
- **Identidad Gráfica**: Logo oficial en `img/logo.jpg` y paleta estándar de alto contraste (`slate-50` / `slate-900`).
- **Restricción Férrea**: HTML5 semántico puro, TailwindCSS v3 CDN, JS Vanilla, sin frameworks SPA ni servidores backend.

---

### [2026-10-15] Poda Inteligente de Skills (.agents/skills/)
- 51 skills activas en `.agents/skills/` (Tailwind, accesibilidad WCAG, ingeniería UI/UX, JS nativo, SDD Gentle-AI) y 2.547 podadas.

---

### [2026-10-15] Reestructuración Visual, Mapa Real y Directorio Profesional (ADR-009)
- **Fondo Estándar**: Eliminada la foto con opacidad, trabajando con fondos limpios de alto contraste (`slate-50` en claro y `slate-900` en oscuro).
- **Botón Modo Oscuro/Claro**: Hover corregido milimétricamente en el encabezado.
- **Hero con Contactos**: Las 4 cards de auxilio (107, CardioMed, Policía y WhatsApp) reubicadas en la cabecera.

---

### [2026-10-15] Consolidación Mobile-First, Mapa Google Gratuito, Directorio Scrolleable y Modal Flotante (ADR-010)
- **Mobile-First Estricto**: Todo el layout (`index.html`) optimizado para pantallas móviles (360px-414px), con navegación desplegable responsive y padding adaptativo sin scroll horizontal.
- **Buzón Flotante Modal**: La sección fija de sugerencias fue removida del cuerpo de la página y convertida en una card modal flotante que se abre exclusivamente al hacer clic en "Sugerencias" en el menú principal (tanto desktop como móvil).
- **Directorio Scrolleable Único**: El listado de médicos matriculados del Colegio de Médicos de Córdoba (Río Cuarto) se agrupó en una sola card contenedora con lista scrolleable interna (`max-h-[500px] overflow-y-auto custom-scrollbar`), con filtros y buscador reactivo sin dispersión visual.
- **Donaciones al 100%**: Card comunitaria expandida a ancho completo (`w-full`) con gradiente esmeralda, CBU/Alias transparente y modal de aporte.
- **Mapa Real y Gratuito 100% Funcional**: Google Maps Embed integrado sin API keys ni fallos de canvas, con botón de geolocalización GPS (`navigator.geolocation`) que ubica y guía en tiempo real al dispensario u hospital más cercano.

---

### [2026-10-22] Landing Page Inmersiva con Video Controlado por Scroll (ADR-013)
- **Video Background Fixed**: Integración de `img/fondo.mp4` a pantalla completa (`100vw`, `100vh`, `fixed`, `z-index: -1`, `object-fit: cover`) con la ambulancia en primer plano sobre fondo verde quirúrgico (`#143830`).
- **Scroll-Driven Video Engine**: Algoritmo nativo Vanilla JS ES6+ con interpolación lineal (`Lerp`, factor 0.08) y `requestAnimationFrame` que mapea el progreso del scroll al `currentTime` del video sin saltos (scrub ~0.6s) hacia adelante y hacia atrás.
- **Hero Zone 100vh**: Composición limpia de alto impacto visual con menú transparente (`backdrop-blur-none`, tipografía blanca) y tarjeta esmerilada inferior con título, subtítulo e indicador de scroll.
- **Efecto Frosted Glass**: Las 4 tarjetas de auxilio, el mapa interactivo, el directorio médico y el módulo de donaciones suben sobre el video (`z-index: 10`) con fondo traslúcido y `backdrop-blur-md`, preservando contraste accesible y cero scroll horizontal.

---

### [2026-10-22] Transparencia Total de Frames y Botón GPS Blanco (ADR-014)
- **Estado**: Superado por ADR-015.

---

### [2026-10-30] Reemplazo de Video por Hero con `fondo_imagen.png` y Paleta Tricolor Institucional (ADR-015)
- **Eliminación del Video**: Retiro total del `<video id="scrollBgVideo">`, estilos de video fijo y la función JS de sincronización con lerp/requestAnimationFrame.
- **Hero Section Debajo del Menú**: Posicionamiento directo bajo el navbar con la imagen `img/fondo_imagen.png`, overlay degradado en `#20309A` para máxima legibilidad, botones CTA "Explorar Centros en Mapa" (blanco) y "Llamar al 107" (rojo), e indicador animado de scroll.
- **Paleta Cromática Institucional (#20309A, #FFFFFF, #BB232B)**:
  - **Azul Primario (`#20309A`)**: Navbar sticky, botones principales, bordes de sección, títulos destacados, badge de médicos y encabezados de modales.
  - **Blanco Puro (`#FFFFFF`)**: Superficies limpias en modo claro, tarjetas de doctores y mapa, tipografía sobre fondos oscuros/azules y botones de alto impacto.
  - **Rojo de Emergencia (`#BB232B`)**: Card de auxilio Línea 107, FAB flotante con pulso, botón de llamado en modal de triaje y botón de confirmación de donaciones.
- **Consistencia y Accesibilidad**: Cero scroll horizontal (`overflow-x-hidden`), validación completa de scripts sin errores y soporte nativo para conmutación de modo claro y oscuro.

---

### [2026-11-01] Card de Donaciones con Paleta y Degradado del Hero
- **Coherencia Visual**: La card de donaciones (`#donaciones`) adopta el mismo degradado del Hero: `from-[#06152d] → #0a2347 → #071534`.
- **Light Mode**: Fondo sólido con el degradado del Hero sin imagen visible (`.donation-hero-img { opacity: 0 }`). El overlay `.donation-overlay` cubre la imagen al 100%.
- **Dark Mode**: La imagen `Hero.jpg` aparece con opacidad `0.28` en el lateral derecho (`.dark .donation-hero-img { opacity: 0.28 }`), camuflándose bajo el mismo overlay degradado del Hero para lograr continuidad visual.
- **Técnica**: Se usó CSS nativo (`.donation-hero-img` y `.donation-overlay`) en vez de clases Tailwind `dark:opacity-*`, ya que las variantes `dark:` de Tailwind CDN no se aplican sobre `style=""` inline ni en clases dinámicas fuera del HTML inicial.
- **Imagen Oficial Hero (`img/Hero.jpg`)**: Ocupa el 100% del ancho del viewport (`w-full`) con encuadre a la derecha (`object-right md:object-[85%_center] lg:object-right`) para preservar con total nitidez la figura de los 3 profesionales de salud.
- **Título Institucional a la Izquierda**:
  - Badge institucional: `RED BARRIAL DE SALUD PRIMARIA • RÍO CUARTO`.
  - Título oficial de la aplicación: `SaludBarrial` con acento en `Barrial` (`#FF5451`) y bajada `SaludPrimero • Río Cuarto`.
  - Encabezado descriptivo: `Encontrá tu dispensario, guardia médica y turnos en tu barrio`.
  - Enlace indicador de navegación: Desplazamiento fluido hacia `#lineas-urgencia`.
- **Degradado Asimétrico Accesible**: Overlay `from-[#06152d]/95 via-[#0a2347]/80 to-transparent` que otorga contraste superior a 14:1 (WCAG AAA) sobre el texto en el lateral izquierdo sin entorpecer la visual de los profesionales de la derecha.

### [2026-11-01] Refinamiento de cards y modales
- Menú principal más compacto; Hero con esquinas suavemente redondeadas y cards de urgencia más bajas.
- Directorio médico con estetoscopio unificado; imagen de donaciones visible bajo el degradado azul del Hero y header de sugerencias en `#20309A`.
- Asistente de emergencia ajustado a la altura del viewport para mostrar la card completa sin scroll; selección de triaje ligada al escenario seleccionado.

### [2026-11-01] Hero de ancho completo y anuncios debajo
- Hero renderizado a todo el ancho debajo del header, antes del layout de anuncios; los espacios publicitarios comienzan después de la sección.

### [2026-11-01] Espacios publicitarios con contenido útil
- Se reemplazaron los placeholders vacíos por promociones internas para el mapa, el directorio, las donaciones y la línea 107, adaptadas a banners laterales y al banner móvil/tablet.
- El banner fijo móvil/tablet ocupa el borde inferior, con el FAB de emergencias por encima para evitar superposición de controles.

### [2026-11-01] Anuncios de autos y computación; actualización visual de donaciones
- Los anuncios laterales se separaron del borde de la ventana y se asignaron a categorías de autos y productos de computación; el banner móvil incluye ambas.
- La tarjeta de donaciones adopta el diseño de referencia compartido, conserva la fotografía y los datos bancarios y gana espacio antes del footer.

### [2026-11-01] Banner móvil a pantalla completa y acceso de emergencia compacto
- El banner de anuncios en móvil/tablet queda fijado al borde inferior y ocupa todo el ancho de la pantalla.
- El FAB de emergencia queda por encima del banner; en móvil muestra solo el ícono telefónico y mantiene su etiqueta accesible.

### [2026-11-01] Modal de emergencia estable y guía visual local
- El encabezado del buzón de sugerencias usa el degradado azul marino compartido por Hero y donaciones.
- La card de emergencias conserva la misma altura entre los cuatro escenarios y muestra guías visuales locales, sin API externa.
- El material gráfico se presenta como orientación y no sustituye la formación ni las instrucciones del operador del 107.

### [2026-11-01] Botones de triaje con imágenes aportadas
- Los botones del modal de emergencia conservan texto e íconos. Al elegir uno, el contenido explicativo inferior se reemplaza por la infografía correspondiente, almacenada localmente en `img/guias-emergencia/`.
- Se conserva la selección visible, `aria-pressed` y el texto accesible de cada botón.

### [2026-11-01] Footer móvil arriba del anuncio fijo
- Mientras el banner publicitario móvil/tablet está visible, el documento reserva solo sus 61 px de alto para que el footer quede inmediatamente encima del banner.
- Al cerrar el banner, se quita la reserva inferior; el footer vuelve al final de la página.

### [2026-11-18] Modularización Completa del Proyecto y Creación de Estudio de Mercado (ADR-029)
- **Modularización Front-End**:
  - `assets/css/main.css`: Variables, scrollbars, sombras azules y layout de anuncios.
  - `assets/css/components.css`: Estilos de donaciones, modales y asistente de emergencias.
  - `assets/js/`: Entrypoint `app.js`, datos en `data/doctors.data.js`, y 8 submódulos funcionales (`theme.js`, `navigation.js`, `geolocation.js`, `doctors.js`, `emergency.js`, `suggestions.js`, `donations.js`, `toast.js`).
- **Organización de Carpetas**:
  - `presentation/`: Centralización de presentaciones HTML (`slides/`), PDFs (`pdf/`) y guión de defensa (`guion/`).
  - `tools/`: Reubicación de scripts de captura (`capture_clean_modules.py`, `generate_screenshots.py`, `update_dark_shots.py`) y sus assets generados (`tools/assets/`).
  - `docs/estudio-de-mercado/`: 4 documentos técnicos (`01_resumen_ejecutivo.md`, `02_problematica_local.md`, `03_analisis_mercado.md`, `04_impacto_y_solucion.md`) documentando la problemática de la salud barrial en Río Cuarto, el mapa de actores y el impacto de SaludBarrial.
- **Invarianza**: El diseño, paleta, animaciones, accesibilidad y comportamiento funcional se mantuvieron 100% idénticos.
