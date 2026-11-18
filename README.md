**PROYECTO**

Este es un **proyecto final** de una asignatura universitaria.

En vez de un PDF, mi hoja de vida es un sitio web con seis páginas conectadas entre sí, pensado para que cualquier persona pueda conocer mi perfil académico, mi experiencia, mis habilidades y mis proyectos de una forma agradable. El código está separado en archivos HTML, CSS y JavaScript.

## Páginas

| Página | Archivo | Qué contiene |
|---|---|---|
| Inicio | `index.html` | Portada con saludo, sobre mí, datos rápidos y accesos a las demás páginas |
| Formación | `formacion.html` | Línea de tiempo de estudios y tabla de formación complementaria |
| Experiencia | `experiencia.html` | Experiencia laboral, de lo más reciente a lo más antiguo |
| Habilidades | `habilidades.html` | Barras de nivel, conocimientos técnicos y habilidades personales |
| Proyectos | `proyectos.html` | Tarjetas de proyectos con enlaces a GitHub |
| Contacto | `contacto.html` | Datos de contacto y formulario con validación |

## Lo que se implementó

- **Variables CSS** para manejar todos los colores desde un solo lugar.
- **Modo oscuro** con un botón, usando `classList` y `localStorage` para recordar la elección.
- **Flexbox y CSS Grid** (`auto-fit` y `minmax`) para acomodar la barra, las columnas y las tarjetas.
- **Barra de navegación fija** con `position: sticky`.
- **Efectos al pasar el mouse** con `hover`, `transition`, sombras y bordes redondeados.
- **Animaciones** con `@keyframes`: barras de nivel que se llenan e ilustración que flota.
- **Pseudo-elementos** (`::before`, `::selection`) para dibujar la línea de tiempo.
- **Diseño responsive** con media queries y `clamp()`, con menú tipo hamburguesa en el celular.
- **Etiquetas semánticas de HTML5**: `header`, `nav`, `main`, `section`, `article` y `footer`.
- **Tablas completas** con `thead`, `tbody`, `tfoot` y `colspan`.
- **Formulario de contacto** con validación en JavaScript.
- **Saludo según la hora del día** con el objeto `Date`.
- **Imágenes propias en SVG** y favicon, sin depender de imágenes externas.

## Estructura del repositorio

```text
Hoja-de-Vida/
├── index.html
├── formacion.html
├── experiencia.html
├── habilidades.html
├── proyectos.html
├── contacto.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── img/
    └── (ilustraciones SVG, logo y favicon)
```

## Cómo verlo en tu computador

1. Descarga el repositorio con **Code → Download ZIP** y descomprímelo.
2. Abre el archivo `index.html` con tu navegador.

No necesita instalar nada ni conexión a un servidor; solo las fuentes de Google Fonts necesitan internet.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Google Fonts (Poppins e Inter)
- GitHub Pages para la publicación
