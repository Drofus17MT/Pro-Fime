# Fundación PROFIME

Sitio web de la Fundación PROFIME - Pro Facultad de Ingeniería Mecánica y Eléctrica (UANL). Proyecto migrado a React desde HTML/CSS/JS vanilla.

## Estructura del proyecto

```
Pro-Fime/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── TopBar.jsx     # Barra superior (teléfono, redes sociales)
│   │   ├── Header.jsx     # Navegación con logo y menús dropdown
│   │   ├── Footer.jsx     # Pie de página
│   │   ├── Separator.jsx  # Separador entre secciones
│   │   ├── Hero.jsx       # Hero con slider (página principal)
│   │   ├── HeroContact.jsx # Hero verde para páginas internas
│   │   ├── Section.jsx    # Sección con título, subtítulo y contenido
│   │   ├── Card.jsx       # Tarjeta genérica (icono + título + contenido)
│   │   └── ImageGallery.jsx # Grid de imágenes
│   ├── Pages/             # Páginas (una por ruta)
│   │   ├── Index.jsx      # / (home)
│   │   ├── Contacto.jsx   # /contacto
│   │   ├── ConsejoDirectivo.jsx  # /consejo-directivo
│   │   ├── HistorialDePresidentes.jsx  # /historial-de-presidentes
│   │   ├── Donar.jsx      # /donar
│   │   ├── HistorialDonaciones.jsx  # /historial-donaciones
│   │   ├── LogrosFundacion.jsx  # /logros-fundacion
│   │   ├── AlumnosBeneficiados.jsx  # /alumnos-beneficiados
│   │   ├── Generaciones.jsx  # /generaciones
│   │   ├── Becados.jsx    # /becados
│   │   ├── Galerias.jsx   # /galerias
│   │   ├── ComiteAsesores.jsx  # /comite-asesores
│   │   └── Diplomado.jsx  # /diplomado/:id (4, 11, 17, 18)
│   ├── assets/            # Assets estáticos (imágenes, fuentes)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/            # Imágenes servidas estáticamente
├── index-template.html    # Plantilla HTML del home (referencia)
├── plantilla-template.html # Plantilla base de páginas (referencia)
├── pages-template/        # Páginas HTML originales (referencia)
├── js-template/           # JavaScript original (referencia)
├── styles.css-template    # Estilos originales (referencia)
└── images-template/       # Imágenes del sitio original
```

## Componentes

| Componente | Uso |
|------------|-----|
| **TopBar** | Barra superior verde con línea de contacto y enlaces a redes sociales (LinkedIn, Facebook, YouTube) |
| **Header** | Logo, navegación con dropdowns (Acerca de, Logros, Diplomados, Galería, Donativo), opcionalmente búsqueda |
| **Footer** | Enlaces, datos de contacto, logos UANL/FIME, copyright |
| **Separator** | Línea horizontal con gradiente entre secciones |
| **Hero** | Hero con carousel/slider (solo en home) |
| **HeroContact** | Hero con fondo verde para páginas internas (título + subtítulo) |
| **Section** | Contenedor de sección (`.part` / `.part-gris`) con título, subtítulo y contenido |
| **Card** | Tarjeta reutilizable con icono, título y texto (value-card, president-card, contact-card, etc.) |
| **ImageGallery** | Grid de imágenes para galerías (generaciones, becados, diplomados) |

## Páginas y rutas

Cada archivo en `src/Pages/` corresponde a una ruta de la URL:

| Ruta | Componente |
|------|------------|
| `/` | Index.jsx |
| `/contacto` | Contacto.jsx |
| `/consejo-directivo` | ConsejoDirectivo.jsx |
| `/historial-de-presidentes` | HistorialDePresidentes.jsx |
| `/donar` | Donar.jsx |
| `/historial-donaciones` | HistorialDonaciones.jsx |
| `/logros-fundacion` | LogrosFundacion.jsx |
| `/alumnos-beneficiados` | AlumnosBeneficiados.jsx |
| `/generaciones` | Generaciones.jsx |
| `/becados` | Becados.jsx |
| `/galerias` | Galerias.jsx |
| `/comite-asesores` | ComiteAsesores.jsx |
| `/diplomado/:id` | Diplomado.jsx (id: 4, 11, 17, 18) |

Para que las rutas funcionen, instala React Router (`npm install react-router-dom`) y configura las rutas en `App.jsx`.

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
npm run lint     # Ejecutar ESLint
```

## Imágenes

Las imágenes deben estar en `public/images/`. Copia el contenido de `images-template/` a `public/images/` para que los logos, slides, banderas y aliados se muestren correctamente.

## Origen del diseño

El diseño proviene de las plantillas HTML/CSS/JS en:
- `index-template.html` — Home
- `plantilla-template.html` — Base de páginas
- `pages-template/` — Páginas internas
- `styles.css-template` — Estilos
- `js-template/` — Lógica JavaScript
