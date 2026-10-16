# Reporte de entrega · Rediseño del inicio de DIGEACE

Propuesta conceptual. No es el sitio oficial de DIGEACE ni de MINEDUC (la página lleva un aviso visible que se quita si la institución la adopta).

Para verla: abrir `index.html` en el navegador. Las capturas de revisión están en `preview/`.

## 1. Qué se construyó

| Entregable del brief | Dónde está |
|---|---|
| 1. Ficha del proyecto y propuesta visual | `FICHA-PROYECTO.md` y el hero de `index.html` |
| 2. Inicio completo, escritorio (1440 px) y móvil (390 px) | `index.html` · `preview/inicio-escritorio-completo.png`, `preview/inicio-movil-completo.png` |
| 3. Estados | Ver tabla de la sección 2 |
| 4. Página de un trámite (opcional) | `tramite-reposicion.html` (Reposición de títulos y diplomas) |
| 5. Reporte de entrega | Este documento |

Además, `quienes-somos.html` contiene el organigrama en HTML accesible (destino de "Conozca nuestra estructura") y la Unidad de Seguimiento y Monitoreo con su propio destino.

Secciones del inicio, en el orden actual: encabezado · hero con buscador · trámites (lista agrupada) · comunicados y noticias · quiénes somos · atención al público · pie.

## 2. Estados mostrados

| Estado | Captura (en `preview/`) |
|---|---|
| Buscador con sugerencias | `hero-escritorio-sugerencias.png`, `hero-movil-sugerencias.png` |
| Buscador sin resultados | `hero-escritorio-sin-resultados.png`, `hero-movil-sin-resultados.png` |
| Búsqueda del hero aplicada a la lista | `estado-escritorio-busqueda-hero-en-lista.png`, `estado-movil-busqueda-hero-en-lista.png` |
| Filtro activo (Cursos libres) | `estado-escritorio-filtro-activo.png`, `estado-movil-filtro-activo.png` |
| Lista sin resultados | `estado-escritorio-lista-sin-resultados.png`, `estado-movil-lista-sin-resultados.png` |
| Menú móvil abierto | `hero-movil-menu.png` |
| Foco de teclado | `hero-escritorio-foco.png`, `estado-escritorio-foco-fila.png` y sus versiones móvil |

## 3. Checklist del brief (sección 10)

| Punto | Resultado |
|---|---|
| Buscador visible en la primera pantalla, escritorio y móvil | Cumple. Base del campo a 525 px (viewport de 900) y a 455 px (viewport de 844) |
| Un solo H1 fijo; ningún carrusel en el inicio | Cumple |
| Los 24 trámites en la lista, agrupados, con una línea de descripción | **Cumple con una diferencia: son 23.** Ver sección 5 |
| "Unidad de Seguimiento y Monitoreo" fuera de la lista, con enlace corregido | Cumple en el prototipo: vive en Quiénes somos con destino propio (`#seguimiento-monitoreo`). En el sitio real hay que crearle su propia página |
| Una familia tipográfica y una familia de azules; sin naranja | Cumple (Public Sans; sin naranja) |
| Sin degradados, vidrio, sombras de tarjeta, píldoras decorativas, flechas ni emojis | Cumple. Las únicas sombras están en el desplegable de sugerencias y en el menú móvil. Los filtros son botones rectangulares de 6 px |
| Noticias con títulos completos y fechas legibles | Cumple |
| Atención al público con dirección y marcadores | Cumple |
| Redes una sola vez; sin barra flotante ni contador de visitas | Cumple (solo en el pie) |
| Trato de usted | Cumple |
| `alt` en todas las imágenes con contenido; contraste AA; teclado | `alt` en las 11 imágenes de las tres páginas. Contraste calculado (ver abajo). Teclado probado en el buscador (flechas, Enter, Esc) y foco visible en filas, enlaces y campos; filtros, grupos y menú son botones y elementos nativos |
| Página móvil más corta que 7.200 px | Cumple: **5.521 px** el inicio (sin pliegue de grupos serían 9.338 px) |

Contrastes calculados (mínimo AA = 4,5:1): texto 15,6 · texto secundario 6,2 (5,7 sobre superficie) · azul de acción 8,5 · blanco sobre azul institucional 14,3 · borde de campos 3,1 (mínimo 3:1 para controles).

No se midieron LCP ni CLS: el prototipo corre desde archivos locales y la cifra no sería representativa. Conviene medirlos en el sitio publicado.

## 4. Decisiones que se apartan del brief o lo interpretan

1. **Grupos plegables en móvil.** Con la lista de 23 trámites completa, la página móvil medía 9.338 px, más que la actual. En móvil cada grupo se pliega (muestra su nombre y cuántos trámites tiene) y la búsqueda o el filtro abren los grupos con resultados. En escritorio todo está abierto.
2. **Encabezados H3/H4.** Los nombres de grupo son H3 y los trámites H4, para que la jerarquía sea válida. El brief pedía H3 por trámite, pero con grupos eso salta niveles.
3. **Quiénes somos sin valores ni galería.** Se eliminó la galería de valores. No se convirtió en línea de texto porque no se tiene el texto institucional de misión, visión y valores.
4. **Corrección de texto.** En los pasos del trámite de ejemplo, el sitio actual dice "Unidad de Acreditamiento y Certificación". Se escribió "Acreditación".
5. **Descripciones de trámites** resumidas por mí a partir del texto del sitio actual (máximo 120 caracteres). Hay que validarlas con la institución, sobre todo las de los trámites cuya página no se vio.
6. **Aviso en la lista:** al hacer clic en un trámite sin página, el prototipo avisa que su página no forma parte de la propuesta y enlaza al ejemplo. Solo "Reposición de títulos y diplomas" tiene página.

## 5. Supuestos y puntos a validar con la institución

| Tema | Detalle |
|---|---|
| Nombre "Trámites" | Reemplaza "Procesos" en toda la navegación |
| **Cifra de trámites** | El brief dice 24, pero la agrupación suma 23 (6 + 10 + 4 + 3). El sitio actual muestra "24 resultados" porque cuenta la Unidad de Seguimiento y Monitoreo. El contador del prototipo dice "23 trámites". Si falta uno, hay que identificarlo |
| Trámites más solicitados | Son los cuatro del brief; falta elegirlos con visitas reales |
| Agrupación por solicitante | Propuesta del brief; falta validarla |
| **Organigrama** | Se armó a partir de una captura. La captura no deja claro de quién dependen la Subdirección General y las unidades. En el prototipo la Subdirección va como rama junto a las dos direcciones y las tres unidades aparecen aparte como "Unidades de la Dirección General". **Validar con el organigrama oficial** |
| Colores | Propuesta; validar con el manual de identidad de gobierno vigente |
| Texto de quiénes somos | Tomado del sitio actual (incluye el Acuerdo Gubernativo 225-2008). Falta el texto de misión, visión y valores |

## 6. Marcadores pendientes (visibles en la página)

| Dónde | Qué falta |
|---|---|
| Atención al público | Horario, teléfono, correo institucional, mapa o foto de la entrada |
| Pie | Direcciones de Facebook, YouTube y Sistema BPM MINEDUC (los enlaces apuntan al propio pie) |
| Trámite de ejemplo | Enlaces de los tres servicios en línea y de los dos videos; base legal |
| Noticias | Los enlaces y "Ver todas las noticias" apuntan a la sección; falta la página de noticias |
| Encabezado y pie | Logos oficiales (ver abajo) |

## 7. Material gráfico provisional

El entorno no puede acceder al sitio, así que todo el material salió de las capturas que usted envió:

- **Logos Gobierno / MINEDUC / DIGEACE:** recortados de una captura, con fondo quitado por proceso automático. Baja resolución. **Reemplazar por los archivos oficiales (SVG o PNG al tamaño de uso).**
- **Foto del equipo** (hero y Quiénes somos): 468 × 366 px. Reemplazar por la original.
- **Fotos de las tres noticias:** 246 × 164 px ampliadas al doble; se ven suaves. Hay que recortarlas desde las originales a 3:2 y en WebP o AVIF.

## 8. Cambios técnicos para quien mantenga el sitio

Del diagnóstico del brief (sección 2.3), qué cambia en el sitio real:

- Quitar `URL_FONDO_BLOQUE.jpg` y revisar el CSS personalizado en busca de otros restos de código sin terminar.
- Eliminar el video del hero (exportado de WhatsApp), el carrusel del hero, el de trámites y el de noticias.
- Quitar la barra flotante de redes y el contador de visitas de terceros (Flag Counter).
- Cargar una sola familia tipográfica (Public Sans, pesos 400, 600 y 700) y eliminar Poppins y las demás.
- Definir colores y tipografía en los estilos globales del tema y eliminar el CSS personalizado que los sobrescribe (si el sitio sigue en WordPress con Elementor). Los tokens están al inicio de `css/styles.css`.
- Servir el logo a su tamaño de uso, no a 2560 px.
- Agregar `alt` a las 34 imágenes que hoy no lo tienen.
- Crear una página propia para la Unidad de Seguimiento y Monitoreo y corregir el enlace duplicado.
- Imágenes en WebP o AVIF con ancho y alto declarados (el prototipo ya lo hace).
- Ajuste de nombres: "Procesos" pasa a "Trámites" en menú, migas, URL (si se decide cambiarlas, con redirecciones) y pie.

Estructura del prototipo: HTML estático, una hoja de estilos (`css/styles.css`) y cuatro scripts pequeños (`buscador.js`, `lista.js`, `menu.js`, `tramites.js`) sin dependencias. Los datos de los trámites están en `js/tramites.js`; la lista del inicio está escrita en el HTML para que funcione sin JavaScript (el JavaScript solo filtra).

## 9. Siguiente paso

Revisión de esta entrega. Con sus comentarios, ajusto. Lo que más conviene resolver primero: cifra de trámites (23 o 24), organigrama oficial y archivos originales de logos y fotos.
