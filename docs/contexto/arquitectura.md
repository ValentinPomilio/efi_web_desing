# Arquitectura del Sistema - SaludBarrial

## 1. Propósito y Alcance del Producto
**SaludBarrial** es una plataforma web desarrollada para la entidad **SaludPrimero**, orientada a facilitar el acceso a la salud pública y comunitaria para los vecinos de la ciudad de **Río Cuarto** (con cobertura específica en barrios como Alberdi, Banda Norte, Villa Dalcar y Centro). Permite la consulta de dispensarios y guardias en un mapa real de la ciudad, directorio de profesionales matriculados del Colegio de Médicos de Córdoba (Río Cuarto), botón de asistencia inmediata con GPS y marcado rápido a servicios de auxilio.

---

## 2. Stack Tecnológico Oficial
| Capa | Tecnología Seleccionada | Justificación Técnica |
| :--- | :--- | :--- |
| **Estructura** | **HTML5 Semántico** | Accesibilidad nativa, SEO local y soporte universal en navegadores móviles. |
| **Estilos** | **TailwindCSS v3 (vía CDN)** | Utilidades modernas, soporte dark mode, diseño responsive y glassmorphism (`backdrop-blur-md`). |
| **Fondo Multimedia** | **Video MP4 de Alta Resolución (`img/fondo.mp4`)** | Video fijo a pantalla completa (`100vw`, `100vh`, `fixed`, `z-index: -1`, `object-fit: cover`) con ambulancia y fondo verde quirúrgico (`#143830`). |
| **Sincronización Video** | **JavaScript Vanilla ES6+ (RAF + Lerp)** | Scrub de video controlado por scroll con interpolación lineal fluida (0.5s - 0.8s) hacia adelante y hacia atrás. |
| **Tipografía** | **Google Fonts ('Inter')** | Alta legibilidad para personas de todas las edades. |
| **Mapa Real** | **Google Maps Embed + Geolocation API** | Mapa callejero real en vivo de Río Cuarto sin dependencias complejas, con cálculo GPS al centro más cercano. |
| **Datos Médicos** | **Colegio de Médicos de Córdoba** | Modelo de datos de profesionales con Matrícula Profesional (MP), lugar de atención y horarios. |
| **Interactividad** | **JavaScript Vanilla (ES6+)** | Lógica de filtrado reactivo, geolocalización, triaje médico y modales sin dependencias pesadas. |

---

## 3. Jerarquía de Secciones (Vertical Layout)

0. **Fondo de Video Controlado por Scroll**:
   - Elemento `<video id="scrollBgVideo">` posicionado fixed con `pointer-events-none` y `z-index: -1`. Reproducción sincronizada con la posición vertical del scroll (`currentTime` mapeado de 0 a fin).

1. **Header y Navegación**:
   - Completamente transparente en el Hero (`backdrop-blur-none`, tipografía blanca y esmeralda).
   - Efecto vidrio esmerilado suave al descender en la página (`bg-slate-950/80 backdrop-blur-md`).
   - Logo oficial (`img/logo.jpg`), enlaces directos, conmutador de modo claro/oscuro y menú hamburguesa accesible en móvil.

2. **Hero Zone Despejada (100vh)**:
   - Primera pantalla de impacto visual con la ambulancia del video como protagonista en el centro/derecha.
   - Espacio superior amplio y despejado.
   - Tarjeta esmerilada inferior con etiqueta de red barrial, título principal, subtítulo explicativo e indicador de scroll animado.

3. **Cards de Contacto Directo de Auxilio Rápido**:
   - 4 tarjetas de auxilio con efecto glassmorphism: **107 (Ambulancia)**, **CardioMed (0800 444 5454)**, **Policía (911/101)** y **Ojos en Alerta (WhatsApp)**.

4. **Mapa Real Interactivo de la Ciudad de Río Cuarto**:
   - Google Maps Embed callejero de Río Cuarto con geolocalización GPS (`navigator.geolocation`) que guía en tiempo real al dispensario u hospital más cercano.

5. **Directorio Profesional en Tarjeta Única Scrolleable**:
   - Buscador por texto/matrícula y filtros por especialidad y barrio.
   - Contenedor scrolleable (`max-h-[500px] custom-scrollbar`) que agrupa a todos los médicos sin dispersión vertical.

6. **Módulo de Donaciones Comunitarias**:
   - Tarjeta al 100% de ancho con datos bancarios oficiales (Alias / CBU) y botón hacia modal de aporte.

7. **Footer Institucional**:
   - Constitución 988, Río Cuarto, redes comunitarias y créditos institucionales con fondo traslúcido.

8. **Botón Flotante de Emergencia (FAB 107) y Modales**:
   - Botón rojo pulsante anclado abajo a la derecha (`fixed bottom-6 right-4 md:right-8 z-50`).
   - Asistente interactivo de triaje (RCP, Heimlich, Hemorragia, Desmayo) con marcación directa al 107.
   - Modal flotante para el buzón de sugerencias y modal de confirmación de donaciones.
