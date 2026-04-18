# Portafolio - Cristian Torres

Portafolio personal moderno y responsivo desarrollado con **Astro** y **Tailwind CSS**. Showcasing de proyectos, experiencia profesional, estudios y certificaciones.

---

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Comandos Disponibles](#comandos-disponibles)
- [Variables de Entorno](#variables-de-entorno)
- [Deployment](#deployment)
- [Contacto](#contacto)

---

## 🎯 Descripción

Este es un portafolio profesional personal que muestra:

- **Presentación personal** con información sobre mí
- **Proyectos destacados** con descripción de tecnologías utilizadas
- **Experiencia profesional** y trayectoria laboral
- **Formación académica** y certificaciones
- **Cursos completados** en plataformas especializadas
- **Tema oscuro/claro** para mejor experiencia de usuario
- **Diseño responsive** optimizado para todos los dispositivos

---

## ✨ Características

- ⚡ **Alto rendimiento** - Generado estáticamente con Astro
- 🎨 **Diseño moderno** - Tailwind CSS para estilos responsivos
- 🌓 **Theme Toggle** - Soporte para modo claro y oscuro
- 📱 **Totalmente responsive** - Optimizado para mobile, tablet y desktop
- 🚀 **Optimización SEO** - Meta tags y estructura semántica
- 🖼️ **Galería de proyectos** - Showcase interactivo de trabajos
- 📜 **Certificaciones** - Sección dedicada a certificados profesionales
- 🔗 **Enlaces sociales** - Integración con redes profesionales
- 🎯 **Fácil de mantener** - Componentes reutilizables y código limpio

---

## 🛠️ Tecnologías

### Frontend

- **[Astro 5.5.5](https://astro.build/)** - Framework moderno basado en JavaScript
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utilidad CSS para diseños eficientes
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript

### Hosting & Deployment

- **[Vercel](https://vercel.com/)** - Hosting optimizado con integración automática

### Desarrollo

- **Node.js** - Runtime de JavaScript
- **npm** - Gestor de paquetes

---

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── assets/                # Recursos estáticos (imágenes, certificados)
│   │   └── certificados/      # Certificaciones profesionales
│   ├── components/            # Componentes reutilizables
│   │   ├── Aboutme.astro      # Sección sobre mí
│   │   ├── Courses.astro      # Sección de cursos
│   │   ├── Experience.astro   # Experiencia profesional
│   │   ├── Footer.astro       # Pie de página
│   │   ├── Header.astro       # Encabezado/Navegación
│   │   ├── Hero.astro         # Sección héroe
│   │   ├── Studies.astro      # Formación académica
│   │   ├── ThemeToggle.astro  # Toggle de tema oscuro/claro
│   │   ├── Welcome.astro      # Bienvenida
│   │   ├── icons/             # Componentes de iconos
│   │   └── projects.astro     # Componente de proyectos
│   ├── layouts/               # Layouts reutilizables
│   ├── pages/                 # Rutas del sitio
│   │   ├── index.astro        # Página principal
│   │   └── proyectos.astro    # Página de proyectos
│   └── styles/                # Estilos globales
├── public/                    # Archivos públicos servidos directamente
│   ├── proyectos/            # Imágenes de proyectos
│   ├── torres.webp           # Foto de perfil
│   ├── torres-full.webp      # Foto de perfil completa
│   └── favicon.svg           # Ícono del sitio
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.js        # Configuración de Tailwind CSS
├── tsconfig.json             # Configuración de TypeScript
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

---

## 📦 Instalación

### Requisitos previos

- **Node.js** (versión 18.14 o superior)
- **npm** (versión 9 o superior)

### Desplegar con Vercel

El proyecto está preconfigurado para funcionar con Vercel:

1. **Conectar el repositorio**
   - Inicia sesión en [Vercel](https://vercel.com)
   - Conecta tu repositorio de GitHub

2. **Configuración automática**
   - Vercel detectará Astro automáticamente
   - Usará los comandos correctos de build

3. **Despliegue automático**
   - Cada push a `main` se desplegará automáticamente
   - Los PRs tendrán previews automáticos

### Otras plataformas

- **Netlify**: Compatible con Astro
- **GitHub Pages**: Requiere configuración adicional
- **Self-hosting**: Genera estático con `npm run build`

---

## 📝 Cómo Personalizar

### Agregar nuevos proyectos

1. Ve a `src/components/projects.astro`
2. Añade un nuevo proyecto al array de datos
3. Las imágenes van en `public/proyectos/`

### Modificar información personal

1. Edita los componentes en `src/components/`
2. Actualiza `Aboutme.astro` con tu información
3. Reemplaza las imágenes de perfil en `public/`

### Cambiar colores

1. Modifica `tailwind.config.js`
2. Usa clases de Tailwind en los componentes

---

## 📱 Optimizaciones

- ✅ Imágenes optimizadas en formato WebP
- ✅ CSS crítico inline para faster first paint
- ✅ Code splitting automático con Astro
- ✅ Lazy loading de componentes
- ✅ Minificación de producción

---

## 📞 Contacto

**Cristian Torres**

- 🌐 [Portafolio](https://portafolio-nine-umber.vercel.app/)
- 📧 Email: ps4cristiantorr@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/cristiantorr)
- 🐙 [GitHub](https://github.com/cristiantorr)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- [Astro](https://astro.build/) por el framework increíble
- [Tailwind CSS](https://tailwindcss.com/) por los utilidades CSS
- [Vercel](https://vercel.com/) por el hosting confiable
- Inspiración en la comunidad midudev

---

**Última actualización:** 2026
