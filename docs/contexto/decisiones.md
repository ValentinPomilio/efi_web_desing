# Registro de Decisiones de Arquitectura (ADR) - SaludBarrial

Este documento registra cronológicamente las decisiones técnicas y de diseño adoptadas en el proyecto. 

> [!IMPORTANT]
> **POLÍTICA DE CONTROL DE GUARDAS (GUARDRAILS)**:
> Queda terminantemente prohibido alterar los esquemas de datos, cambiar la paleta de colores nuclear, agregar dependencias externas o modificar flujos de emergencia sin **notificar el impacto técnico y solicitar autorización previa explícita** al usuario.

---

### [ADR-001] Adopción del Antigravity Operating System (AG-OS)
- **Fecha**: 2026-10-15 16:07:00
- **Decisión**: Integrar los 6 pilares maestros del AG-OS con directiva `always_on` y memoria activa persistente.

---

### [ADR-002] Stack Técnico Ligero (HTML5 Semántico + TailwindCSS v3 CDN + Vanilla JS)
- **Fecha**: 2026-10-15 16:14:00
- **Decisión**: Maquetar en un único documento `index.html` utilizando TailwindCSS cargado por CDN y lógica interactiva en JavaScript nativo.

---

### [ADR-003] Priorización de UX de Emergencia (Botón SOS 107 y Marcado Directo)
- **Fecha**: 2026-10-15 16:14:30
- **Decisión**: Integrar acceso inmediato al discado de ambulancia mediante protocolo `tel:107`.

---

### [ADR-004] Modo Claro por Defecto con Alternancia a Modo Oscuro
- **Fecha**: 2026-10-15 16:14:45
- **Decisión**: Iniciar en Modo Claro con alternancia a Modo Oscuro persistente en `localStorage`.

---

### [ADR-005] Catálogo de Centros Reactivo en Memoria del Cliente
- **Fecha**: 2026-10-15 16:15:00
- **Decisión**: Filtrado reactivo multicriterio en cliente sin peticiones al servidor.

---

### [ADR-006] Auditoría y Poda Inteligente del Catálogo de Skills
- **Fecha**: 2026-10-15 16:26:00
- **Decisión**: Conservar 51 skills hiper-especializadas en frontend y podar 2.547 herramientas no utilizadas.

---

### [ADR-007] Fondo Fotográfico de Río Cuarto Difuminado y Botón Flotante de Emergencia
- **Fecha**: 2026-10-15 16:47:00
- **Decisión**: Implementar botón flotante de emergencias con triaje interactivo.

---

### [ADR-008] Unificación de Mapa en Catálogo Central y Módulo de Donaciones
- **Fecha**: 2026-10-15 16:48:00
- **Decisión**: Incorporar mapa y donaciones sobre el footer.

---

### [ADR-009] Reestructuración Visual, Integración de Mapa y Directorio Profesional
- **Fecha y Hora**: 2026-10-15 16:58:00
- **Estado**: Superado por ADR-010
- **Contexto**: Retiro de imagen con opacidad en favor de colores limpios estándar (`slate-50`/`slate-900`), reubicación de contactos de emergencia en el Hero y prototipado del directorio médico del Colegio de Médicos.

---

### [ADR-010] Mobile-First Estricto, Mapa Google Real Gratuito, Directorio Scrolleable Único y Buzón Flotante Modal
- **Fecha y Hora**: 2026-10-15 17:08:00
- **Estado**: Aceptado e Implementado
- **Contexto**: Para optimizar la experiencia en smartphones (Mobile-First 360px-414px) y resolver la congestión vertical del maquetado:
  1. El buzón de sugerencias se extrajo del flujo principal y se convirtió en un modal flotante accesible exclusivamente desde el menú ("Sugerencias").
  2. Los profesionales médicos se consolidaron dentro de una única card contenedora con lista scrolleable estilizada (`max-h-[500px] overflow-y-auto custom-scrollbar`), evitando generar decenas de tarjetas dispersas.
  3. La sección de donaciones barriales se expandió al 100% del ancho de pantalla (`w-full`) con gradiente esmeralda.
  4. Para garantizar un mapa 100% funcional, gratuito y sin fallos de renderizado de canvas o API keys, se implementó un Google Maps Embed con búsqueda nativa de hospitales y dispensarios de Río Cuarto, complementado con cálculo de coordenadas GPS (`navigator.geolocation`).

---

### [ADR-011] Fondos Celeste Suave y Azul Marino Profundo
- **Fecha**: 2026-10-15
- **Estado**: Superado por ADR-012
- **Contexto**: Se ajustó el fondo general de la página para dar más presencia al color sin sacrificar legibilidad.
- **Decisión**: Usar los tokens `page.light` (`#E3EFF7`) y `page.dark` (`#07182D`) para el fondo general. Las tarjetas, formularios y otras superficies mantienen sus propios fondos para conservar contraste y jerarquía visual.

---

### [ADR-012] Paleta Celeste Consistente para Cards y Navegación
- **Fecha**: 2026-10-15
- **Estado**: Aceptado e Implementado
- **Contexto**: Se requiere que las cards y los menús mantengan una identidad celeste coherente en ambos temas, mientras los fondos generales cambian por modo.
- **Decisión**: Usar `page.light` (`#C7DCEB`) y `page.dark` (`#10243A`) como fondos; `surface.light` (`#DCEAF4`) y `surface.dark` (`#18364F`) para cards y menús; y `surface.insetLight` (`#EAF3F9`) / `surface.insetDark` (`#21445F`) para paneles y campos internos. Los estados funcionales críticos (por ejemplo, llamada de emergencia) conservan su color semántico.

---

### [ADR-013] Landing Page Inmersiva con Video Controlado por Scroll (Scroll-Driven Video)
- **Fecha y Hora**: 2026-10-22 17:00:00
- **Estado**: Aceptado e Implementado
- **Contexto**: Transformación visual de alto impacto para la landing page mediante la integración de un video de fondo (`img/fondo.mp4`) en alta resolución sincronizado con el scroll del usuario:
  1. **Fondo de Video Fijo**: El video ocupa todo el viewport (`100vw`, `100vh`, `fixed`, `z-index: -1`, `object-fit: cover`) sin autoplay ni controles, controlándose su avance y retroceso exclusivamente con el scroll vertical.
  2. **Motor de Sincronización Fluida**: Implementación en JavaScript nativo ES6+ mediante `requestAnimationFrame` y algoritmo de interpolación lineal (Lerp con factor 0.08) para lograr un scrub ultra-fluido (0.5s - 0.8s) mapeando `currentTime` desde el fotograma inicial (0s) al fotograma final (100% de la página).
  3. **Hero Zone Despejada (100vh)**: La primera pantalla presenta una vista limpia con la ambulancia sobre fondo verde quirúrgico (`#143830`) como elemento protagónico, con un menú transparente (`backdrop-blur-none`, texto blanco de alto contraste) y los textos principales concentrados en una card de vidrio esmerilado en la parte inferior.
  4. **Contenido Flotante con Glassmorphism**: Las 4 tarjetas de emergencia, el mapa real interactivo, el directorio de profesionales y el módulo de donaciones se desplazan sobre el video (`z-index: 10`) utilizando superficies traslúcidas (`backdrop-filter: blur(12px)` con ligera opacidad), asegurando legibilidad WCAG AA en ambos modos (claro y oscuro).
  5. **Botón Flotante Permanente**: El botón "EMERGENCIA 107" se preserva como elemento flotante fijo en la esquina inferior derecha accesible en todo momento.

---

### [ADR-014] Transparencia Total de Contenedores y Botón GPS de Alto Contraste
- **Fecha y Hora**: 2026-10-22 17:35:00
- **Estado**: Aceptado e Implementado
- **Contexto**: Ajuste de diseño solicitado por el usuario para maximizar la inmersión del video de fondo (`img/fondo.mp4`), eliminando las cajas sólidas o contenedores oscuros de cada sección:
  1. **Navegación Fija Siempre Transparente**: El navbar (`#mainHeader`) permanece 100% transparente en todo momento (`bg-transparent border-none`), retirando cualquier oscurecimiento o fondo blur al scrollear hacia abajo.
  2. **Hero Frame 100% Transparente**: El contenedor de *"Encontrá tu dispensario, guardia médica y turnos en tu barrio"* se despoja de tarjeta/caja opaca, dejando los textos flotando directamente sobre la ambulancia con sombras tipográficas acentuadas (`drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]`).
  3. **Contenedor del Mapa Transparente & Botón GPS Blanco**: El marco exterior del mapa pasa a `bg-transparent`. El botón *"Ver el centro más cercano (GPS)"* se rediseña a fondo blanco sólido con tipografía e ícono negros (`bg-white text-black font-black`), logrando el máximo contraste y accesibilidad.
  4. **Directorio Médico Transparente con Tarjetas Semi-Opacas**: El marco exterior del directorio pasa a ser completamente transparente (`bg-transparent`), mientras que cada fila/tarjeta individual de profesional médico mantiene una ligera opacidad esmerilada (`bg-black/45 backdrop-blur-md border border-white/20`) para asegurar una lectura cómoda sobre el video en movimiento.
  5. **Módulo de Donaciones y Footer Transparentes**: Tanto el contenedor de donaciones como el pie de página (`footer`) adoptan fondo 100% transparente con bordes sutiles (`border-white/10`), permitiendo visualizar la escena final del video sin interrupciones.

