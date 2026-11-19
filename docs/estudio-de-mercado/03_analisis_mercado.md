# Estudio de Mercado: Análisis Competitivo y de Actores
## Benchmark de Soluciones, Mapa de Stakeholders y Matriz FODA

---

### 1. Benchmark Comparativo de Soluciones Existentes

| Criterio de Evaluación | Portales Municipales Tradicionales | Google Maps Estándar | Apps de Prepagas (OSDE, Swiss, etc.) | SaludBarrial (SaludPrimero) |
| :--- | :---: | :---: | :---: | :---: |
| **Tiempo de Acceso al Dato** | Lento (múltiples subpáginas) | Rápido pero genérico | Lento (Login obligatorio) | **Instantáneo (<3 segundos)** |
| **Cobertura Barrial Específica** | Parcial (listas estáticas PDF) | Desactualizado por terceros | Solo prestadores propios | **100% Barrial (Alberdi, BN, Dalcar)** |
| **Distinción Gratuito vs. Obra Social** | Confusa | No disponible | Solo afiliados | **Explícita y con filtros** |
| **Matrícula Médica Verificada** | Ausente | Ausente | Presente | **Matrícula Colegio de Médicos R4** |
| **Marcación Telefónica Directa (`tel:`)** | Parcial | A menudo conmutador central | Chatbot interno | **Directa (107, Dispensarios, Guardias)** |
| **Guía Gráfica de Primeros Auxilios** | No | No | No | **Sí (RCP, Heimlich, Hemorragias)** |
| **Requerimiento de Registro/App** | Varía (CIDI, etc.) | Requiere app Google | App nativa obligatoria | **Cero descarga / 100% Web Liviana** |

---

### 2. Mapa de Actores Clave (Stakeholders)

```mermaid
graph TD
    subgraph Beneficiarios
        V1["Vecinos y Familias"]
        V2["Adultos Mayores"]
        V3["Población sin Cobertura Médica"]
    end

    subgraph Sistema de Salud
        M1["Dispensarios Municipales"]
        M2["Hospital Central S24 / 107"]
        M3["Colegio de Médicos Córdoba Delegación Río IV"]
        M4["Servicios Privados (CardioMed, Obras Sociales)"]
    end

    subgraph SaludBarrial
        PLAT["Plataforma SaludBarrial"]
    end

    Beneficiarios <--> PLAT
    PLAT <--> Sistema de Salud

    style PLAT fill:#2563eb,stroke:#fff,stroke-width:2px,color:#fff
    style Beneficiarios fill:#06152d,stroke:#3b82f6,stroke-width:1px,color:#fff
    style Sistema de Salud fill:#1e293b,stroke:#10b981,stroke-width:1px,color:#fff
```

1. **Ciudadanos y Vecinos**: Acceden de forma anónima, rápida y sin costo a la información que necesitan para tomar decisiones médicas acertadas.
2. **Dispensarios y Centros de Atención Primaria (CAPS)**: Reciben demanda coordinada y oportuna, reduciendo el ausentismo y visibilizando sus horarios reales.
3. **Guardia Central y Servicio 107**: Se descomprime el triage hospitalario, reservando recursos críticos para emergencias de código rojo.
4. **Colegio de Médicos (Delegación Río Cuarto)**: Provee legitimidad deontológica y combate el intrusismo profesional al exhibir la matrícula provincial de cada profesional.

---

### 3. Matriz FODA de SaludBarrial

#### Fortalezas (F)
- Arquitectura web ultra liviana (HTML5 + Tailwind CDN + Vanilla JS ES6+ modular).
- Sin dependencias de backend ni servidores pesados (altísima disponibilidad en situaciones de crisis).
- Experiencia Mobile-First calibrada con modo oscuro/claro nativo y botones de marcado telefónico directo.
- Asistente de triaje visual embebido sin necesidad de conexión de alta velocidad.

#### Oportunidades (O)
- Creciente penetración de smartphones en todos los estratos socioeconómicos de Río Cuarto.
- Fuerte demanda ciudadana de transparencia en servicios públicos de salud.
- Potencial de articulación con programas comunitarios de salud preventiva y donaciones de insumos.

#### Debilidades (D)
- Dependencia del compromiso comunitario para mantener actualizadas las sugerencias de cambios de turnos.
- No reemplaza la emisión formal de turnos electrónicos (orientación y contacto telefónico directo).

#### Amenazas (A)
- Cambios no notificados en la nómina o días de guardia de los centros de salud municipales.
- Sobrecarga de llamadas a las líneas fijas de los dispensarios en días de alta demanda estacional.
