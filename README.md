# 🧢 Dreamcaps — Landing Page

> Landing page moderna, inmersiva y de alto impacto visual para la exhibición y venta directa de gorras New Era importadas y exclusivas en San Luis, Argentina.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 📖 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Primeros Pasos](#-primeros-pasos)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
  - [Ejecución en Desarrollo](#ejecución-en-desarrollo)
  - [Scripts Disponibles](#scripts-disponibles)
- [Gestión y Configuración de Productos](#-gestión-y-configuración-de-productos)
- [Optimizaciones y SEO](#-optimizaciones-y-seo)
- [Accesibilidad (a11y)](#-accesibilidad-a11y)

---

## 🎯 Acerca del Proyecto

**Dreamcaps** es una tienda especializada en la venta de gorras New Era 100% originales e importadas, con base en San Luis y cobertura de envíos a toda Argentina.

Esta plataforma fue desarrollada como una **landing page de conversión directa**, diseñada con una estética *dark premium* y animaciones de nivel cinematográfico que destacan los detalles de cada producto y facilitan la compra inmediata conectando al usuario con el canal de atención por WhatsApp e Instagram.

---

## ✨ Características Principales

- **🎬 Hero Section de Alto Impacto**:
  - Animación inicial de entrada del logo con destello continuo (*pulse glow*).
  - Título con revelación carácter por carácter mediante stagger y perspectiva 3D.
  - Efecto de paralaje (*parallax*) fluido al hacer scroll.
  - Textura de ruido analógico (*noise overlay*) para un acabado visual refinado.
- **🧢 Showcase Individual de Productos (Showcase Grid)**:
  - Distribución alternada en zig-zag para una navegación visual dinámica.
  - **Efecto 3D Tilt Interactivo**: Las tarjetas e imágenes reaccionan a la posición del cursor con inclinación tridimensional y reflejo de luz dinámico (*dynamic glare*).
  - Botones de llamada a la acción (CTA) con enlaces directos a WhatsApp, incluyendo mensajes preconfigurados personalizados para cada modelo.
- **🌊 Desplazamiento Ultra Suave (Smooth Scroll)**:
  - Integración de **Lenis Scroll** sincronizado con el ticker de animación de **GSAP ScrollTrigger**.
- **💬 Botón Flotante de Contacto (WhatsApp FAB)**:
  - Acceso directo y permanente en la esquina inferior derecha para consultas generales.
- **📱 100% Responsivo y Mobile-First**:
  - Adaptación impecable en dispositivos móviles, tablets y monitores de alta resolución.

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Herramientas / Librerías |
| :--- | :--- |
| **Framework Principal** | [Next.js 16](https://nextjs.org/) (App Router, Server Components) |
| **Biblioteca de UI** | [React 19](https://react.dev/) |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Estilos y Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) |
| **Animaciones e Interacción** | [GSAP 3.15](https://greensock.com/gsap/) + `@gsap/react`, [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Tipografía** | Bebas Neue (Títulos/Display) y Space Grotesk (Cuerpo/Sans) |

---

## 📂 Estructura del Proyecto

```plaintext
dreamcaps-landing-page/
├── public/
│   └── images/              # Fotografías de productos (.webp) y logo (.jpeg)
├── src/
│   ├── app/
│   │   ├── globals.css      # Configuración de Tailwind CSS v4, fuentes y temas
│   │   ├── layout.tsx       # Layout raíz, configuración de metadatos SEO y OpenGraph
│   │   ├── page.tsx         # Página principal y datos estructurados JSON-LD
│   │   ├── robots.ts        # Generador de robots.txt
│   │   └── sitemap.ts       # Generador de sitemap.xml
│   ├── components/
│   │   ├── Footer.tsx       # Pie de página con enlaces a redes sociales y copyright
│   │   ├── HeroSection.tsx  # Sección principal con animaciones GSAP y parallax
│   │   ├── ProductGrid.tsx  # Contenedor de la lista de productos
│   │   ├── ProductSection.tsx # Tarjeta de producto individual con efecto 3D Tilt
│   │   ├── SmoothScroll.tsx # Wrapper de desplazamiento suave con Lenis
│   │   └── WhatsAppFab.tsx  # Botón flotante interactivo de WhatsApp
│   ├── data/
│   │   └── products.ts      # Catálogo de gorras, mensajes de WhatsApp y enlaces sociales
│   ├── hooks/
│   │   ├── useReducedMotion.ts # Hook para detectar preferencias de movimiento reducido
│   │   └── useTilt3D.ts        # Hook personalizado para efectos de inclinación 3D
│   └── lib/
│       └── gsap.ts          # Inicialización y registro de plugins de GSAP
├── next.config.ts           # Configuración de Next.js
├── package.json             # Dependencias y scripts del proyecto
├── postcss.config.mjs       # Configuración de PostCSS
└── tsconfig.json            # Configuración de TypeScript
```

---

## 🚀 Primeros Pasos

### Prerrequisitos

Asegúrate de contar con:
- [Node.js](https://nodejs.org/) (versión 18.18 o superior recomendada).
- Gestor de paquetes: `npm`, `pnpm`, `yarn` o `bun`.

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/dreamcaps-landing-page.git
   cd dreamcaps-landing-page
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto (opcional en desarrollo, recomendado para producción):

```env
NEXT_PUBLIC_SITE_URL=https://dreamcaps.com.ar
```

### Ejecución en Desarrollo

Inicia el servidor local de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila y optimiza la aplicación para producción.
- `npm run start`: Inicia el servidor de producción.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores.

---

## ⚙️ Gestión y Configuración de Productos

Toda la información de los productos y canales de contacto se gestiona de forma centralizada en [`src/data/products.ts`](file:///src/data/products.ts):

### Parámetros de Contacto

```typescript
export const WHATSAPP_NUMBER = "542664172006";
export const INSTAGRAM_HANDLE = "@dreamcaps_sl";
export const INSTAGRAM_URL = "https://www.instagram.com/dreamcaps_sl/";
```

### Agregar o Modificar un Producto

Para añadir un nuevo modelo, agrega un objeto al array `products`:

```typescript
{
  id: "mi-nueva-gorra",
  name: "New Era Modelo Exclusivo",
  image: "/images/mi-nueva-gorra.webp",
  alt: "Gorra New Era Modelo Exclusivo",
  whatsappMessage: "Hola! Me interesa la New Era Modelo Exclusivo. ¿Está disponible?",
}
```

> **Nota**: Coloca las imágenes optimizadas en formato `.webp` dentro de la carpeta `public/images/`.

---

## 🔍 Optimizaciones y SEO

- **Datos Estructurados (JSON-LD)**: Marcado semántico de `ItemList` y `Product` para mejorar la indexación y visualización enriquecida en motores de búsqueda (Google Rich Snippets).
- **Metadatos Open Graph y Twitter Cards**: Configurados para generar vistas previas atractivas al compartir enlaces en WhatsApp, Instagram, X/Twitter y Facebook.
- **Sitemap y Robots Dinámicos**: Generación automática de `sitemap.xml` y `robots.txt` mediante las rutas de Next.js (`app/sitemap.ts` y `app/robots.ts`).
- **Optimización de Imágenes**: Carga optimizada con `next/image`, uso de formatos modernos (`.webp`), priorización en imágenes *above-the-fold* y tamaños responsivos (`sizes`).

---

## ♿ Accesibilidad (a11y)

- **Soporte `prefers-reduced-motion`**: Si el usuario tiene activada la reducción de animaciones en su sistema operativo, el hook [`useReducedMotion`](file:///src/hooks/useReducedMotion.ts) desactiva automáticamente las transiciones y efectos de tilt 3D pesados.
- **Navegación por Teclado y Skip Links**: Enlace directo para saltar al catálogo (`#productos`) y foco visible (`focus-visible`) estilizado en elementos interactivos.
- **Textos Alternativos (alt)** y etiquetas `aria-label` en enlaces e iconos interactivos.

---

## 📄 Licencia

Este proyecto es de uso privado para **Dreamcaps**. Todos los derechos reservados.
