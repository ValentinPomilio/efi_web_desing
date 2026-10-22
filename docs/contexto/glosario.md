# Glosario del Proyecto - SaludBarrial

Este glosario define el vocabulario de dominio del negocio y los componentes de interfaz utilizados en toda la documentación y el código fuente.

---

## 1. Términos del Negocio y Dominio de Salud
- **SaludBarrial**: Aplicación web de guía asistencial comunitaria orientada a la descentralización y divulgación de información médica para los vecinos de Río Cuarto.
- **SaludPrimero**: Entidad impulsora de la iniciativa que nuclea los servicios de salud municipal y comunitaria.
- **Dispensario / Centro Barrial**: Centro de atención primaria de la salud pública municipal ubicado en los distintos barrios de la ciudad (ej. Banda Norte, Alberdi, Villa Dalcar) para atención médica general, vacunación y enfermería básica.
- **Guardia 24hs**: Servicio de atención médica continua para urgencias graves, emergencias y cuadros agudos que requieren atención inmediata en cualquier horario.
- **Matrícula Profesional (MP)**: Número oficial otorgado por el Colegio de Médicos de la Provincia de Córdoba que valida la habilitación legal de cada profesional para ejercer la medicina.
- **Atención sin Obra Social**: Modalidad pública y gratuita que garantiza atención sin costo ni necesidad de carnet médico o coseguro.
- **Atención con Obra Social / Prepaga**: Servicios de centros que reciben entidades sindicales o empresas de cobertura privada (OSDE, Swiss Medical, Apross, PAMI, etc.).
- **Módulo 107 / Botón SOS**: Sistema de enlace telefónico prioritario con la central de emergencias médicas de Río Cuarto.
- **CardioMed**: Empresa privada de emergencias médicas de alta complejidad y traslados cardiológicos en ambulancia.
- **Ojos en Alerta**: Red de alerta temprana y seguridad ciudadana coordinada con la central de operaciones de la ciudad.

---

## 2. Componentes y Elementos de la Interfaz (UI)
- **Header Institucional**: Barra superior con logotipo, selector de barrio, conmutador de tema y botón SOS principal.
- **Hero / Banner de Alerta Crítica**: Franja destacada de advertencia médica ("¿Emergencia en marcha?") con consejos de primeros auxilios y botón de marcado instantáneo.
- **Barra de Filtros Reactivos**: Contenedor con controles desplegables (dropdowns) y campo de texto para filtrar centros en tiempo real.
- **Tarjeta de Centro (Card)**: Unidad visual estructurada que contiene foto/ícono, nombre, badge de cobertura, horario, médicos y botones de acción.
- **Sticky Bottom Bar**: Barra flotante anclada al borde inferior de la pantalla en dispositivos móviles para facilitar la pulsación del botón SOS con el pulgar.
- **Modal Emergente (Modal Dialog)**: Ventana superpuesta y accesible para visualizar horarios completos de especialistas o el formulario de sugerencias.
- **Switch de Modo Claro/Oscuro**: Interruptor de interfaz para alternar entre el tema diurno (`light`) y el tema nocturno (`dark`).
- **Empty State (Estado Vacío)**: Contenedor empático con ícono, texto explicativo y botón de restablecimiento que se muestra cuando una combinación de filtros no arroja resultados.
- **Toast / Cartel de Éxito**: Notificación visual flotante no invasiva que confirma que una acción (como el envío de una sugerencia o copia de un teléfono) se completó con éxito.
