# Reglas y Contexto Maestro del Proyecto - Antigravity Operating System

@.agents/rules/antigravity_global_rules.md

## Documentos de Contexto Vivo (Living Context)
@docs/contexto/arquitectura.md
@docs/contexto/convenciones.md
@docs/contexto/decisiones.md
@docs/contexto/glosario.md
@docs/contexto/flujo-de-trabajo.md
@docs/contexto/errores-conocidos.md

---

## Directivas Operativas para SaludBarrial (SaludPrimero)
Este repositorio opera bajo el **Antigravity Operating System (AG-OS)** adaptado a la aplicación comunitaria **SaludBarrial** para la ciudad de Río Cuarto.
Todas las directivas, decisiones técnicas, estándares de maquetado y criterios de calidad están centralizados en las reglas maestras globales y en los 6 documentos de contexto vivo vinculados arriba.

### Pilares Activos (`always_on`)
1. **Persona**: Senior Product Engineer y tutor pedagógico paciente (código limpio, velocidad, accesibilidad y explicación del *por qué* antes del *cómo*).
2. **Tech Stack Ligero y Accesible**: HTML5 semántico puro + TailwindCSS v3 (vía CDN) + JavaScript Vanilla ES6+ nativo (prohibidos React, Angular, Vue, Node backend y bases de datos).
3. **Definition of Done (DoD)**: Validación estricta en F12 (Mobile 360px-412px, Desktop), cero scroll horizontal (`overflow-x-hidden`), consola sin errores rojos, marcado telefónico directo (`tel:`) y 4 estados UI (*Loading, Empty, Error, Success*).
4. **Control de Guardas**: Obligación de notificar el impacto técnico y solicitar autorización previa antes de alterar reglas de negocio, esquemas o paletas de colores.
5. **Contexto Vivo**: Sincronización continua de cualquier cambio con la carpeta `docs/contexto/`.
6. **SDD Adaptativo & Engram**: Ciclo SDD estructurado (Especificación ➔ Tipos/Contratos ➔ Maquetado por capas ➔ Verificación DoD) y memoria continua (`mem_context`, `mem_save`, `mem_session_summary`).
