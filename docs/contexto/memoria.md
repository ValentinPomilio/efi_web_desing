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
- **Navbar Siempre Transparente**: Desactivado el oscurecimiento por scroll; la barra de navegación se mantiene 100% transparente en cualquier posición de la página.
- **Hero Frame Transparente**: Eliminada la caja contenedora del Hero para exhibir la ambulancia con tipografía en alto contraste y sombras.
- **Mapa y Botón GPS**: Marco del mapa completamente transparente (`bg-transparent`); botón *"Ver el centro más cercano (GPS)"* estilizado en blanco con tipografía negra (`bg-white text-black font-black`).
- **Directorio Médico**: Contenedor principal 100% transparente; tarjetas individuales de médicos con opacidad esmerilada equilibrada (`bg-black/45 backdrop-blur-md border border-white/20`).
- **Donaciones y Footer Transparentes**: Secciones de donaciones y pie de página con fondos transparentes y bordes limpios sin cortar la visibilidad del video.



