# Arquitectura del Sistema - SaludBarrial

## 1. Propósito y Alcance del Producto
**SaludBarrial** es una plataforma web desarrollada para la entidad **SaludPrimero**, orientada a facilitar el acceso a la salud pública y comunitaria para los vecinos de la ciudad de **Río Cuarto** (con cobertura específica en barrios como Alberdi, Banda Norte, Villa Dalcar y Centro). Permite la consulta de dispensarios y guardias en un mapa real de la ciudad, directorio de profesionales matriculados del Colegio de Médicos de Córdoba (Río Cuarto), botón de asistencia inmediata con GPS y marcado rápido a servicios de auxilio.

---

## 2. Stack Tecnológico Oficial
| Capa | Tecnología Seleccionada | Justificación Técnica |
| :--- | :--- | :--- |
| **Estructura** | **HTML5 Semántico** | Accesibilidad nativa, SEO local y soporte universal en navegadores móviles. |
| **Estilos** | **TailwindCSS v3 (vía CDN)** | Utilidades modernas, paleta tricolor institucional (`#20309A`, `#FFFFFF`, `#BB232B`), soporte dark mode y diseño responsive. |
| **Hero Multimedia** | **Imagen Hero (`img/fondo_imagen.png`)** | Imagen de alta resolución situada directamente debajo del menú con overlay degradado que maximiza el contraste tipográfico. |
| **Tipografía** | **Google Fonts ('Inter')** | Alta legibilidad para personas de todas las edades. |
| **Mapa Real** | **Google Maps Embed + Geolocation API** | Mapa callejero real en vivo de Río Cuarto sin dependencias complejas, con cálculo GPS al centro más cercano. |
| **Datos Médicos** | **Colegio de Médicos de Córdoba** | Modelo de datos de profesionales con Matrícula Profesional (MP), lugar de atención y horarios. |
| **Interactividad** | **JavaScript Vanilla (ES6+)** | Lógica de filtrado reactivo, geolocalización, triaje médico y modales sin dependencias pesadas ni frameworks. |

---

## 3. Jerarquía de Secciones (Vertical Layout)

1. **Header Fino con Efecto Vidrio (Glass Effect)**:
   - Barra superior sticky reducida en altura (`h-14 sm:h-16`) con efecto vidrio esmerilado (`bg-[#20309A]/80 dark:bg-[#0A1026]/85 backdrop-blur-md border-b border-white/20`).
   - Logo tipográfico `SaludBarrial` sin recuadros ni imagen, botones interactivos sutiles y menú móvil desplegable translúcido (`backdrop-blur-xl`).

2. **Sección de Presentación Principal**:
   - Bloque inicial tipográfico con badge barrial, título uniforme sin colores diferenciados (*"Encontrá tu dispensario, guardia médica y turnos en tu barrio"*), subtítulo y botones de acción rápida ("Explorar Centros en Mapa" y "Llamar al 107").

3. **Cards de Contacto Directo de Auxilio Rápido**:
   - 4 tarjetas de auxilio con bordes destacados y estados interactivos claros: **107 (Ambulancia - Rojo #BB232B)**, **CardioMed (0800 444 5454 - Azul #20309A)**, **Policía (911/101 - Azul #20309A)** y **Ojos en Alerta (WhatsApp - Rojo #BB232B)**.

4. **Mapa Real Interactivo de la Ciudad de Río Cuarto**:
   - Google Maps Embed callejero de Río Cuarto con geolocalización GPS (`navigator.geolocation`) que guía en tiempo real al dispensario u hospital más cercano.

5. **Directorio Profesional en Tarjeta Única Scrolleable**:
   - Buscador por texto/matrícula y filtros por especialidad y barrio.
   - Contenedor scrolleable (`max-h-[500px] custom-scrollbar`) que agrupa a todos los médicos sin dispersión vertical.

6. **Módulo de Donaciones Comunitarias**:
   - Tarjeta al 100% de ancho con datos bancarios oficiales (Alias / CBU) y botón hacia modal de aporte.

7. **Footer Institucional Fino al Ras**:
   - Posicionado exactamente en el pie de página (`mt-auto`) sin separación inferior, con estructura compacta y tipográfica.

8. **Botón Flotante de Emergencia (FAB 107) y Modales**:
   - Botón rojo pulsante anclado abajo a la derecha (`fixed bottom-6 right-4 md:right-8 z-50`).
   - Asistente interactivo de triaje (RCP, Heimlich, Hemorragia, Desmayo) con marcación directa al 107.
   - Modal flotante para el buzón de sugerencias y modal de confirmación de donaciones.
