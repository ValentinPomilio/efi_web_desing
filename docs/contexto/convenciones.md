# Convenciones de Diseño, Estilo y Código - SaludBarrial

## 1. Etiquetas Semánticas HTML5 Obligatorias
Cada componente y sección debe utilizar la etiqueta HTML5 adecuada para garantizar accesibilidad, indexabilidad y orden estructural:
- `<header>`: Para la barra superior de navegación y títulos de sección.
- `<nav>`: Para bloques de enlaces y selectores de navegación.
- `<main>`: Para el cuerpo central que contiene los filtros, tarjetas y mapas.
- `<section>`: Para agrupar cada bloque temático (Alerta, Filtros, Catálogo, Directorio, Reportes).
- `<article>`: Para cada tarjeta individual de centro de salud o consultorio.
- `<button>`: Para todos los elementos interactivos que ejecutan acciones en JavaScript (filtros, abrir modales, conmutar tema). Prohibido usar `<div>` o `<span>` con evento clic.
- `<a>`: Exclusivamente para enlaces que navegan o disparan llamadas (`href="tel:..."`) o mapas (`href="https://maps.google.com/..."`).
- `<footer>`: Para el pie de página institucional con derechos, teléfonos de guardia y redes.

---

## 2. Paleta de Colores y Design Tokens (TailwindCSS)
| Rol Semántico | Código HEX | Equivalente TailwindCSS | Uso en la Interfaz |
| :--- | :--- | :--- | :--- |
| **Primario Institucional** | `#0284c7` | `bg-sky-600` / `text-sky-600` | Logotipo, bordes activos, enlaces principales. |
| **Primario Secundario** | `#0e7490` | `bg-cyan-700` / `text-cyan-700` | Encabezados de sección y estados activos secundarios. |
| **Acción / Éxito** | `#10b981` | `bg-emerald-500` / `text-emerald-600` | Badges de "Atiende sin obra social", disponibilidad y confirmaciones. |
| **Alerta / Crítico / SOS** | `#dc2626` | `bg-red-600` / `text-red-600` | Botón SOS 107, banner de emergencia y badges de "Guardia 24hs". |
| **Fondo Modo Claro** | `#C7DCEB` | `bg-page-light` | Fondo general celeste opaco en modo claro. |
| **Fondo Modo Oscuro** | `#10243A` | `dark:bg-page-dark` | Fondo general azul marino opaco en modo oscuro. |
| **Fondo Video Quirúrgico** | `#143830` | `bg-[#143830]` | Fondo inicial de carga y atmósfera del video `img/fondo.mp4`. |
| **Cards Glass Claro** | `#DCEAF4` (90% opaco) | `bg-surface-light/90 backdrop-blur-md` | Superficie traslúcida esmerilada de tarjetas en modo claro. |
| **Cards Glass Oscuro** | `#18364F` (90% opaco) | `dark:bg-surface-dark/90 backdrop-blur-md` | Superficie traslúcida esmerilada de tarjetas en modo oscuro. |
| **Superficies internas Claro** | `#EAF3F9` | `bg-surface-insetLight` | Campos y paneles internos de tarjetas en modo claro. |
| **Superficies internas Oscuro** | `#21445F` | `dark:bg-surface-insetDark` | Campos y paneles internos de tarjetas en modo oscuro. |
| **Footer** | `#DCEAF4` / `#18364F` (95% opaco) | `bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md` | Pie institucional con desenfoque de fondo. |
| **Texto Principal Claro** | `#0f172a` | `text-slate-900` | Títulos y párrafos sobre fondos claros (máximo contraste). |
| **Texto Principal Oscuro** | `#f8fafc` | `dark:text-slate-100` | Títulos y párrafos en modo oscuro. |
| **Texto Atenuado** | `#475569` / `#94a3b8` | `text-slate-600` / `dark:text-slate-300` | Información secundaria con contraste suficiente en fondos celestes. |

---

## 3. Tipografía y Jerarquía Visual
- **Fuentes**: Google Fonts `'Inter', sans-serif` o `'Poppins', sans-serif`.
- **Pesos y Jerarquías**:
  - Títulos principales (`h1`): `text-2xl md:text-4xl font-extrabold tracking-tight`.
  - Títulos de tarjeta (`h3`): `text-lg md:text-xl font-bold text-slate-900 dark:text-white`.
  - Textos de contenido: `text-sm leading-relaxed text-slate-600 dark:text-slate-300`.
  - Etiquetas/Badges: `text-xs font-semibold px-2.5 py-1 rounded-full`.
- **Criterio de Accesibilidad**: Todos los textos deben superar una relación de contraste mínima de 4.5:1 (estándar WCAG AA) para usuarios de edad avanzada o lectura con brillo solar en la vía pública.

---

## 4. Diseño Responsive y Adaptabilidad a Celulares (Mobile-First)
- **Móviles (< 768px)**:
  - Disposición en 1 sola columna vertical (`grid-cols-1`).
  - Menú hamburguesa desplegable con botón accesible.
  - **Sticky Bottom Bar**: Barra fija en el borde inferior con el botón "SOS 107" y selector rápido, garantizando acceso con el pulgar.
  - Botones de acción anchos (`w-full`) con altura mínima táctil de 44px (`h-11`).
- **Tablets (768px a 1023px)**:
  - Grilla de tarjetas a 2 columnas (`md:grid-cols-2`).
- **Escritorio (>= 1024px)**:
  - Grilla de tarjetas a 3 columnas (`lg:grid-cols-3`).
  - Menú de navegación completamente expandido.
  - Contenedor central limitado a `max-w-7xl mx-auto px-4`.
- **Secciones destacadas**: Usar una grilla mobile-first que reorganice contenido y acciones en una columna en móvil y en columnas según el espacio disponible. La tarjeta de donaciones debe conservar separación interior, bordes redondeados y evitar desbordes de textos largos.

---

## 5. Micro-interacciones y Efectos Visuales
- **Efecto Hover en Tarjetas**: Elevación suave con sombra (`hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-in-out`).
- **Botones y Filtros**: Transición de luminosidad al pasar el cursor y reducción sutil al presionar (`active:scale-95 transition-transform`).
- **Botón SOS 107**: Animación de pulso continuo y suave (`animate-pulse`) para captar la vista en situaciones de urgencia.
