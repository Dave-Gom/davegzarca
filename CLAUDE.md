# CLAUDE.md — davegzarca portfolio

Portfolio personal de David Gómez, Senior Fullstack Mobile & Web Developer. Sitio en producción: **https://davegzarca.dev**

---

## Stack

| Tecnología | Versión |
|---|---|
| Next.js (App Router) | 16.2.1 |
| React | 19 |
| TypeScript | 5 (strict) |
| Tailwind CSS | 4 |
| ESLint | 9 (eslint-config-next) |

No hay base de datos, ni estado global, ni autenticación. Es un sitio estático con i18n.

---

## Estructura de directorios

```
/
├── app/
│   ├── layout.tsx                    # Root layout (pass-through, sin lógica)
│   ├── page.tsx                      # Root redirect a /en
│   ├── robots.ts
│   └── [lang]/
│       ├── layout.tsx                # Layout principal: HTML, fuentes, Navbar, Footer, JSON-LD, metadata
│       ├── page.tsx                  # Home
│       ├── opengraph-image.tsx       # OG image dinámica por locale
│       ├── about/page.tsx
│       ├── experience/page.tsx
│       └── contact/page.tsx
├── infrastructure/
│   ├── types/
│   │   ├── locale.ts                 # export type Locale = "en" | "es" | "de"
│   │   ├── dictionary.ts             # Re-export de Dictionary
│   │   └── translations/
│   │       ├── index.ts              # Re-exports de todos los tipos
│   │       ├── common.ts             # MetadataTranslations, FooterTranslations
│   │       ├── navigation.ts         # NavbarTranslations
│   │       └── screens.ts            # TODOS los tipos de content por pantalla
│   └── translations/
│       ├── dictionaries.ts           # getDictionary, hasLocale, locales, defaultLocale
│       └── locales/
│           ├── index.ts              # loadLocale (merge de los 3 módulos)
│           ├── common/es.ts|en.ts|de.ts    # metadata + footer
│           ├── navigation/es.ts|en.ts|de.ts # navbar
│           └── screens/es.ts|en.ts|de.ts   # todo el content de las páginas
├── lib/
│   └── components/
│       ├── Navbar.tsx               # "use client"
│       ├── Footer.tsx               # Server component
│       ├── ProjectCard.tsx          # "use client" (carrusel de imágenes)
│       ├── ProjectsSection.tsx      # Home: 2 proyectos (Ploutos, Mango)
│       ├── ExperienceSection.tsx    # Home: resumen de experiencia
│       ├── ExperienceRole.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── SkillCard.tsx
│       ├── ContactSection.tsx
│       ├── SectionHeader.tsx
│       ├── HeroSection.tsx
│       ├── about/                   # Componentes exclusivos de /about
│       └── experience/              # Componentes exclusivos de /experience
│           ├── ExperienceProjectsSection.tsx  # 5 proyectos
│           ├── ExperienceTimeline.tsx
│           ├── TimelineItem.tsx
│           ├── ExperienceHeader.tsx
│           └── ExperienceCta.tsx
├── proxy.ts                         # Middleware: detección de locale por Accept-Language
└── public/
    └── assets/
        ├── images/
        │   ├── me/                  # Fotos del portfolio (david_principal.jpeg, etc.)
        │   └── projects/
        │       ├── ploutos/         # P1-Dashboard.jpg … P6-Settings.jpg
        │       ├── mango/           # image.png … image6.png
        │       ├── contimovil/      # image.png … image7.png
        │       ├── ContiEmpresas/   # ContiEmpresas1.webp … ContiEmpresas5.webp
        │       └── Padelsys/        # Padelsys1.webp … Padelsys5.webp
        └── docs/resume/             # cv-es.pdf, cv-en.pdf, cv-de.pdf
```

---

## i18n — Regla fundamental

**Todo el texto visible vive en los archivos de traducción.** Nunca hardcodear strings de UI en componentes.

### Los 3 módulos por locale

Cada locale (`en`, `es`, `de`) tiene 3 archivos que se mergen en un único `Dictionary`:

| Módulo | Archivo | Contenido |
|---|---|---|
| `common` | `locales/common/{lang}.ts` | `metadata` (title/desc/keywords por página) + `footer` (copyright, redes) |
| `navigation` | `locales/navigation/{lang}.ts` | `navbar` (links, labels, `resumeFile` path) |
| `screens` | `locales/screens/{lang}.ts` | Todo el contenido de las páginas |

### Estructura de `screens`

```
home.heroSection
home.aboutSection
home.projectsSection          ← project1=Ploutos, project2=Mango
home.experienceSection        ← roles 1-5
home.skillsSection
home.contactSection

about.heroSection
about.philosophySection
about.beyondCodeSection       ← mentoringCard, openSourceCard, speakingCard, appearancesCard

experience.header
experience.projects           ← project1=Mango, project2=ContiMóvil, project3=Ploutos,
                                 project4=ContiEmpresas, project5=PadelSys
experience.timelineSectionLabel / timelineSectionTitle
experience.timeline           ← company1=Mango, company2=BancoContinental,
                                 company3=ArcoSA, company4=Sercicronos, company5=PadelSys
experience.cta

contact.hero
contact.sidebar               ← contactCard, trustIndicator
```

### Flujo de datos en páginas

```tsx
// page.tsx (Server Component)
const dict = await getDictionary(lang as Locale);
<SomeComponent t={dict.experience.projects} />

// SomeComponent.tsx
interface Props { t: ExperienceProjectsSectionTranslations }
const SomeComponent = ({ t }: Props) => { ... }
```

Los componentes **nunca** llaman a `getDictionary` ni usan hooks de i18n. Reciben `t` como prop tipado.

---

## Routing

- Todas las rutas tienen el formato `/{locale}/{page}` → `/es/experience`, `/en/about`
- Locales soportados: `en`, `es`, `de`. Default: `en`
- `proxy.ts` (middleware) detecta el idioma del browser por `Accept-Language` y redirige
- `generateStaticParams` en cada layout/page genera rutas para los 3 locales en build time
- `hasLocale(lang)` valida el locale antes de usar; si no es válido → `notFound()`

---

## Server vs Client Components

- **Por defecto: Server Components.** Sin `"use client"`.
- Usar `"use client"` solo cuando haya `useState`, `useEffect`, `usePathname`, o eventos del DOM.
- Componentes client actuales: `Navbar.tsx`, `ProjectCard.tsx`.
- Las páginas (`page.tsx`) son siempre async Server Components que leen el diccionario.

---

## Proyectos — Datos estáticos

Las imágenes y URLs de proyectos son **hardcodeadas en los componentes** (no en traducciones). Solo el texto (título, descripción, rol, impacto) va en los archivos de locale.

### `ProjectCard` props clave

```tsx
interface ProjectCardProps {
  images: string[];          // paths desde /public, ej: "/assets/images/projects/ploutos/P1-Dashboard.jpg"
  imageAlt: string;          // desde traducción
  tags: string[];            // badges de tech stack, hardcodeados
  title: string;             // desde traducción
  description: string;       // desde traducción
  impact: string;            // desde traducción
  impactLabel: string;       // desde traducción
  icon: string;              // nombre de Material Symbol, hardcodeado
  role: string;              // desde traducción
  imagePosition?: "left" | "right";  // alternado, default "left"
  url?: string;              // URL externa, hace el título clickeable en nueva pestaña
}
```

### Proyectos actuales y sus URLs

| Proyecto | URL | Componente |
|---|---|---|
| Ploutos | https://www.ploutosapp.com.py/ | Home + Experience |
| Billetera Mango | https://mangoapp.com.py/ | Home + Experience |
| PadelSys | https://www.padelsys.com/ | Experience |
| Continental Banca Empresas | https://play.google.com/store/apps/details?id=py.com.konecta.continental&hl=es_419 | Experience |
| Conti Móvil | https://www.bancontinental.com.py/home/mobileBanking/ | Experience |

### Orden en `ExperienceProjectsSection.tsx`

1. Ploutos (left)
2. Billetera Mango (right)
3. PadelSys (left)
4. Continental Banca Empresas (right)
5. Conti Móvil (left)

---

## Checklist: agregar un nuevo proyecto a Experience

1. **Tipo**: en `infrastructure/types/translations/screens.ts`, agregar `projectNAlt/Title/Desc/Impact/ImpactLabel/Role` a `ExperienceProjectsSectionTranslations`
2. **Traducciones**: agregar los campos en `screens/es.ts`, `screens/en.ts`, `screens/de.ts`
3. **Imágenes**: colocar en `public/assets/images/projects/{nombreProyecto}/`
4. **Componente**: agregar `<ProjectCard>` en `ExperienceProjectsSection.tsx` con imágenes, tags, icon, url
5. **Verificar**: `npx tsc --noEmit` sin errores

---

## Styling

### Design tokens (Tailwind CSS 4)

Clases semánticas disponibles (definidas como CSS custom properties):

```
bg-surface                    # fondo base
bg-surface-container-low      # fondo contenedores sutiles
bg-surface-container-high     # fondo contenedores prominentes
bg-surface-container-lowest   # fondo cards de timeline
bg-primary-container          # botones primarios, badges activos
bg-secondary-container        # badges secundarios
text-primary                  # texto principal / títulos
text-on-primary               # texto sobre primary-container
text-on-surface-variant       # texto secundario / descripciones
text-secondary                # texto de tags
text-on-secondary-container   # texto sobre secondary-container
outline-variant               # bordes sutiles
ghost-border                  # clase utilitaria para borde outlined
```

### Convenciones de layout

- **Ancho máximo**: `max-w-7xl mx-auto`
- **Padding horizontal**: `px-6 md:px-12`
- **Espaciado de secciones**: `py-32`
- **Grid**: CSS grid, `grid-cols-1 lg:grid-cols-2` o `md:grid-cols-12`

### Fuente e iconos

- **Fuente**: Inter (`next/font/google`), variable `--font-inter`, clase `font-body`
- **Iconos**: Google Material Symbols Outlined, cargados en `[lang]/layout.tsx` vía `<link>`. Uso: `<span className="material-symbols-outlined">{iconName}</span>`

### Imágenes

Usar `<img>` nativo con el eslint-disable comment, **no** `next/image`:
```tsx
{/* eslint-disable-next-line @next/next/no-img-element */}
<img src={src} alt={alt} className="..." />
```

---

## SEO / Metadata

- **`generateMetadata`** en cada page.tsx y `[lang]/layout.tsx`
- Todo el contenido de metadata viene del diccionario (`dict.metadata.*`)
- hrefLang implementado: `en-US`, `es`, `de-DE` + `x-default=en`
- OG image dinámica en `/[lang]/opengraph-image`
- JSON-LD Schema.org `Person` en `[lang]/layout.tsx`
- `SITE_URL = "https://davegzarca.dev"` está definido localmente en cada archivo que lo necesita

---

## Comandos de desarrollo

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run lint       # ESLint
npx tsc --noEmit   # verificación de tipos TypeScript
```

Ejecutar `npx tsc --noEmit` siempre que se modifiquen tipos o se agreguen campos de traducción.

---

## Links sociales y personales (hardcodeados en componentes)

| Red | URL |
|---|---|
| LinkedIn | https://www.linkedin.com/in/davegzarca/ |
| GitHub | https://github.com/Dave-Gom |
| Instagram | https://www.instagram.com/davegzarca/ |

---

## Reglas que NO romper

1. **Nunca** hardcodear texto de UI en componentes. Va en los archivos de locale.
2. **Siempre** agregar el tipo antes de agregar campos de traducción (`screens.ts`).
3. **Siempre** actualizar los **3 idiomas** (es, en, de) en simultáneo.
4. **Nunca** usar `getDictionary` dentro de un componente, solo en páginas.
5. **Nunca** usar `next/image` — el proyecto usa `<img>` nativo con el eslint-disable.
6. **No** crear helpers o abstracciones para casos de un solo uso.
7. Verificar con `npx tsc --noEmit` después de cada cambio que toque tipos o traducciones.
