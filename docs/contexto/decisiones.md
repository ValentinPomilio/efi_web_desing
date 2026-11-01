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
- **Estado**: Superado por ADR-015
- **Contexto**: Ajuste previo para video de fondo con transparencia.

---

### [ADR-015] Retiro del Video, Implementación de Hero con `img/fondo_imagen.png` y Nueva Paleta Cromática Institucional (#20309A, #FFFFFF, #BB232B)
- **Fecha y Hora**: 2026-10-30 16:00:00
- **Estado**: Aceptado e Implementado
- **Contexto**: Solicitud explícita del usuario para retirar el video de fondo (`img/fondo.mp4`) y toda su lógica de animación por scroll, reemplazándolo por una Hero section con la imagen `img/fondo_imagen.png` ubicada debajo del menú, y unificar toda la estética de la aplicación bajo una tríada cromática institucional:
  1. **Retiro Completo del Video y Animación Lerp**:
     - Eliminación del tag `<video id="scrollBgVideo">` y estilos CSS de fijación.
     - Supresión total del motor JS de sincronización de video por scroll (`initScrollDrivenVideoEngine`), liberando uso de CPU y decodificación de hardware.
  2. **Hero Section con `img/fondo_imagen.png`**:
     - Sección destacada (`min-h-[75vh] md:min-h-[85vh]`) debajo del menú de navegación.
     - Integración de `img/fondo_imagen.png` con overlay gradiente en `#20309A` para contraste tipográfico de alta legibilidad (WCAG AAA).
     - Incorporación de dos botones de acción directa: "Explorar Centros en Mapa" (blanco `#FFFFFF` con texto `#20309A`) y "Llamar al 107" (rojo `#BB232B` con texto `#FFFFFF`).
  3. **Identidad Visual y Paleta Cromática (#20309A, #FFFFFF, #BB232B)**:
     - **Azul Primario (`#20309A`)**: Color dominante para el navbar sticky, bordes estructurados, cabeceras de modales, botones de acción principal, badges y títulos de sección.
     - **Blanco Puro (`#FFFFFF`)**: Color base de superficies (cards en modo claro), botones de alto impacto visual y tipografías en contraste sobre fondos azules y rojos.
     - **Rojo de Emergencia (`#BB232B`)**: Color de máxima prioridad sanitaria para llamadas de auxilio (Línea 107, FAB flotante, botón de confirmación de donaciones, alerta de WhatsApp y especialidades médicas).
     - Mantenimiento estricto del modo claro y oscuro calibrados con los nuevos tokens.

---

### [ADR-016] Hero Limpio sin Superposición y Menú con Efecto Glassmorphism
- **Fecha y Hora**: 2026-10-30 16:15:00
- **Estado**: Superado por ADR-017
- **Contexto**: Ajuste previo de Hero y menú.

---

### [ADR-017] Header Fino con Glass Effect, Retiro de Foto de Ambulancia, Inversión Light/Dark y Footer al Ras
- **Fecha y Hora**: 2026-10-30 16:26:00
- **Estado**: Superado por ADR-018
- **Contexto**: Ajustes previos de layout y tipografía.

---

### [ADR-020] Integración de Hero con Imagen Hero.jpg de Ancho Completo y Título a la Izquierda
- **Fecha y Hora**: 2026-11-01 09:50:00
- **Estado**: Aceptado e Implementado
- **Contexto**: Solicitud del usuario para implementar una sección Hero de ancho completo (`w-full`) con la fotografía oficial `img/Hero.jpg`.
- **Decisión y Características**:
  1. **Ancho Completo y Composición Visual**: La sección abarca el 100% del viewport sin recortes laterales artificiales (`w-full overflow-hidden`).
  2. **Posicionamiento Estratégico del Encabezado**: Dado que la fotografía presenta a 3 profesionales médicos sobre el cuadrante derecho, el contenido textual (badge institucional, título oficial `SaludBarrial`, subtítulo y encabezado principal) se ubicó alineado a la izquierda (`text-left`, `max-w-xl lg:max-w-2xl`).
  3. **Overlay de Alto Contraste (WCAG AAA)**: Se incorporó un degradado asimétrico (`from-[#06152d]/95 via-[#0a2347]/80 to-transparent`) que garantiza lectura impecable en fondo oscuro en la izquierda sin opacar ni ocultar la imagen nítida de los profesionales en la derecha.
  4. **Adaptabilidad Móvil**: En pantallas reducidas (360px-412px), el gradiente se gradúa suavemente para proteger el texto y mantener la armonía estética sin desbordes horizontales (`overflow-x-hidden`).

---

### [ADR-021] Ajustes de jerarquía visual y modal de emergencia sin scroll
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**:
  1. Afinar la altura del header y el peso visual de los enlaces del menú principal; redondear sutilmente las esquinas del Hero.
  2. Reducir el alto visual de las cards de líneas rápidas y unificar los íconos del directorio en el estetoscopio.
  3. Mostrar la fotografía de Hero en donaciones con el mismo degradado azul institucional y aplicar `#20309A` al encabezado del modal de sugerencias.
  4. Mantener el asistente de emergencias completo dentro del viewport, compactando sus espacios en ventanas bajas y evitando depender del scroll. El estado activo del triaje se resuelve por escenario y no por el evento global del navegador.

---

### [ADR-022] Hero a ancho completo antes del layout publicitario
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**: El Hero ocupa todo el ancho disponible bajo el header y se muestra antes del layout de contenido con anuncios laterales. El layout publicitario comienza debajo del Hero para que los banners no compartan su primera pantalla ni reduzcan su ancho.

---

### [ADR-023] Promociones internas en espacios publicitarios
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**: Completar los espacios publicitarios con accesos internos a funciones existentes de SaludBarrial (mapa, directorio, donaciones y llamada al 107), en vez de anuncios externos o contenido comercial inventado. Mantener variantes adaptadas a laterales de escritorio y banner fijo de móvil/tablet.
- **Responsive**: El banner móvil/tablet ocupa el borde inferior; el FAB se ubica por encima para mantener ambos accesos visibles.

---

### [ADR-024] Separación de anuncios, rediseño de donaciones y categorías publicitarias
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**:
  1. Separar levemente los anuncios laterales del borde de la ventana en escritorio.
  2. Rediseñar la tarjeta de donaciones siguiendo la referencia compartida: fotografía, tratamiento azul, datos bancarios, llamada a la acción roja y acentos decorativos; aumentar la separación con el footer.
  3. Asignar un lateral a autos y el otro a productos de computación. El banner compacto presenta ambos rubros con enlaces a búsquedas genéricas, sin atribuir ofertas a comercios no confirmados.

---

### [ADR-025] Banner publicitario móvil a ancho completo y FAB compacto
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**: En anchos menores a 1200 px, fijar el banner publicitario al borde inferior y extenderlo al ancho completo de la ventana. Mantener el botón de emergencia por encima del banner; en móviles menores a 768 px, mostrar únicamente el ícono telefónico y conservar un `aria-label` descriptivo.

---

### [ADR-026] Modal de emergencias de tamaño estable con esquemas locales
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**:
  1. Aplicar al encabezado del buzón de sugerencias el degradado azul marino del Hero y de donaciones.
  2. Mantener una altura fija y adaptable al viewport para la tarjeta de emergencias, independientemente del escenario de triaje elegido.
  3. Usar material gráfico local para cada situación, sin llamadas a APIs ni dependencias de terceros. Las imágenes son orientativas y remiten a seguir las indicaciones del operador del 107.

---

### [ADR-027] Acceso visual a escenarios de emergencia
- **Fecha**: 2026-11-01
- **Estado**: Aceptado e Implementado
- **Decisión**: Mantener cuatro botones textuales de triaje. Al seleccionar un escenario, reemplazar el contenido explicativo de abajo por su infografía correspondiente, respetando el orden RCP, atragantamiento, hemorragia y desmayo/caída. Las imágenes se guardan en `img/guias-emergencia/`; los botones conservan el estado seleccionado y navegación por teclado.
