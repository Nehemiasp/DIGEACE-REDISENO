# Ficha del proyecto · Rediseño del inicio de DIGEACE

Entrega 1 (brief, sección 9): ficha del proyecto y propuesta visual. Con la aprobación para seguir, el resto del inicio, los estados, la página de ejemplo y el reporte están construidos: ver `REPORTE-ENTREGA.md`.

> El Estándar Lumacode v2 no venía en los archivos adjuntos (solo el brief y capturas del sitio actual), así que esta ficha sigue la estructura del brief. Si el estándar exige otros campos, se completan en la siguiente ronda.

## 1. Datos generales

| Campo | Valor |
|---|---|
| Proyecto | Rediseño de la página de inicio de https://digeace.mineduc.gob.gt/ |
| Naturaleza | **Propuesta conceptual.** No consta que la institución la haya solicitado. La página lleva un aviso visible: "No es el sitio oficial de DIGEACE ni de MINEDUC". Debe quitarse solo si la institución la adopta. |
| Trabajo principal de la página | Encontrar el trámite correcto y llegar a sus requisitos |
| Idea central | "Una ventanilla clara": sobria, directa y confiable. El elemento memorable es el buscador de trámites en la primera pantalla |
| Formato de entrega | Prototipo HTML/CSS (sin dependencias de compilación). Figma queda a criterio del coordinador |
| Voz | Trato de usted, frases cortas |

## 2. Usuarios

Personas egresadas o estudiantes · docentes y tutores · directores y administradores de centros · instituciones de cursos libres · editoriales, ONG y organizaciones · público general y prensa.

## 3. Sistema visual aplicado

| Aspecto | Decisión |
|---|---|
| Color | `#192854` azul institucional (títulos, botón principal) · `#014F86` azul de acción (enlaces, foco) · `#F3F5F9` superficie · `#D8DEE8` línea · `#1C2433` texto · `#556274` texto secundario. Sin naranja. *Pendiente de validar con el manual de identidad vigente.* |
| Tipografía | Una sola familia: **Public Sans** (400, 600, 700) desde Google Fonts, con `system-ui` de respaldo. H1 de 40 px en escritorio y 30 px en móvil |
| Forma | Radio único de 6 px. Sin degradados, vidrio, viñetas ni sombras de tarjeta. La única sombra está en el menú desplegable de sugerencias y en el menú móvil, como indica el brief |
| Espacio | Escala de 8 px, contenido a 1200 px máximo, retícula de 12 columnas |
| Íconos | Un solo set de línea (trazo de 2 px, estilo Lucide) |

## 4. Qué incluye esta entrega

- **Encabezado:** fondo blanco sólido, logos juntos a tamaño legible, navegación Inicio · Quiénes somos · Trámites · Noticias · Contacto y acceso "Buscar". En móvil, botón con el texto "Menú".
- **Hero:** un solo H1 fijo, sin carrusel ni video. Descripción del brief, buscador grande con etiqueta "¿Qué trámite necesita realizar?", botón "Buscar trámite", botón para borrar dentro del campo y los cuatro trámites más solicitados. Foto real del equipo a un lado (debajo en móvil).
- **Buscador funcional:** sugerencias mientras se escribe (ignora tildes y mayúsculas, admite varias palabras), navegación completa con teclado (↑ ↓ Enter Esc), mensaje de "sin resultados" con el texto del brief y anuncio de resultados para lectores de pantalla.
- Enlace "Saltar al contenido" y foco visible.

Capturas en `preview/`: escritorio (1440 px) y móvil (390 px), con sugerencias, sin resultados, foco y menú móvil abierto.

Para verlo: abrir `index.html` en el navegador.

## 5. Cómo se verificó

- El campo de búsqueda queda dentro de la primera pantalla: base del campo a 525 px en escritorio (viewport de 900 px) y a 455 px en móvil (viewport de 844 px).
- Un solo `h1`; sin desbordamiento horizontal a 390 px.
- Revisión visual de los estados en Chromium con Playwright.
- Pendiente (no medido aún): LCP y CLS reales, y contraste AA con herramienta. Los pares de color se eligieron para cumplirlo, pero conviene medirlo en la entrega final.

## 6. Supuestos

1. "Procesos" pasa a llamarse **Trámites** en la navegación (brief 5.1; validar con la institución).
2. Los cuatro "más solicitados" son los del brief (Reposición de títulos, Equivalencias, Equiparaciones, Papelería de fin de ciclo); falta elegirlos con visitas reales.
3. La agrupación de trámites por tipo de solicitante es la propuesta del brief (5.3).
4. Solo el trámite de ejemplo (Reposición de títulos y diplomas) tiene página; los demás trámites avisan que su página no forma parte de la propuesta.

## 7. Marcadores pendientes y puntos a revisar

| Tema | Detalle |
|---|---|
| **Logos** | No se pudieron descargar del sitio (la red del entorno lo bloquea). Los logos de Gobierno/MINEDUC/DIGEACE se recortaron de una captura de pantalla y tienen baja resolución. **Reemplazar por los archivos oficiales (SVG o PNG al tamaño de uso).** |
| **Foto del equipo** | Recortada de la captura de "Quiénes somos" (468 × 366 px). Funciona a este tamaño, pero hay que sustituirla por la original en WebP/AVIF. |
| **Cifra de trámites** | El brief habla de 24 trámites, pero la lista agrupada de 5.3 suma **23** (6 + 10 + 4 + 3). El sitio actual muestra "24 resultados" porque cuenta "Unidad de Seguimiento y Monitoreo", que el brief saca de la lista. Propongo que el contador diga **23 trámites**; si falta uno, hay que identificarlo con la institución. |
| Horario, teléfono, correo | No se inventan. Van como marcadores visibles en "Atención al público". |
| Aviso de propuesta | Franja azul superior; quitar si la institución adopta el diseño. |

## 8. Cambios técnicos para quien mantenga el sitio (adelanto)

La lista completa está en `REPORTE-ENTREGA.md`. Adelanto:

- Eliminar el video del hero (exportado de WhatsApp), el carrusel y el CSS personalizado que sobrescribe estilos.
- Cargar una sola familia tipográfica con los pesos usados.
- Definir colores y tipografía en los estilos globales del tema (si sigue en WordPress con Elementor).
- Servir el logo a su tamaño de uso, no a 2560 px.

## 9. Siguiente paso

Revisión de la entrega completa (`REPORTE-ENTREGA.md`).
