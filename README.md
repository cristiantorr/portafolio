# Portafolio de Cristian Torres

Portafolio profesional personal con información sobre experiencia, estudios, certificaciones y proyectos. El proyecto incluye un frontend en Astro y un backend en Node.js que alimenta un asistente conversacional basado en el perfil profesional.

## Contenido

- [Características](#características)
- [Arquitectura](#arquitectura)
- [Tecnologías](#tecnologías)
- [Estructura](#estructura)
- [Requisitos](#requisitos)
- [Instalación y desarrollo](#instalación-y-desarrollo)
- [Variables de entorno](#variables-de-entorno)
- [API del backend](#api-del-backend)
- [Scripts](#scripts)
- [Despliegue](#despliegue)
- [Personalización](#personalización)
- [Contacto](#contacto)

## Características

- Página principal con presentación, experiencia, estudios y cursos.
- Página de proyectos con sus tecnologías y enlaces.
- Diseño responsive con tema claro y oscuro.
- Componentes Astro reutilizables y estilos con Tailwind CSS.
- Chat de IA para consultar el perfil profesional.
- Perfil profesional centralizado en un archivo JSON.
- Modelo local con Ollama durante el desarrollo y Google Gemini en producción.

## Arquitectura

```text
Navegador
   |
   v
Frontend Astro (puerto 4321)
   |
   | POST /api/chat
   v
Backend Express (puerto 3000)
   |
   +--> Ollama en desarrollo
   |
   +--> Google Gemini en producción
```

El frontend obtiene la URL del chat desde `PUBLIC_BACKEND_URL`. Si la variable no existe, usa `http://localhost:3000/api/chat`. El backend carga `src/data/cristian.json` como fuente única de información para el asistente.

## Tecnologías

### Frontend

- [Astro 5](https://astro.build/), con salida `server` y adaptador de Vercel.
- [Tailwind CSS 4](https://tailwindcss.com/) mediante el plugin de Vite.
- TypeScript para la configuración y el chequeo del proyecto Astro.

### Backend

- Node.js y [Express 5](https://expressjs.com/).
- `cors`, `dotenv` y `nodemon`.
- [LangChain](https://js.langchain.com/) para construir el contexto de la conversación.
- `@langchain/ollama` para desarrollo local.
- `@langchain/google-genai` para producción.

## Estructura

```text
portafolio/
├── src/                         # Frontend Astro
│   ├── assets/                  # Imágenes y certificados importados
│   ├── components/              # Secciones y componentes de la interfaz
│   │   ├── AIChat.astro         # Interfaz del asistente de IA
│   │   ├── Aboutme.astro        # Información personal
│   │   ├── Courses.astro        # Cursos y certificaciones
│   │   ├── Experience.astro     # Experiencia profesional
│   │   ├── Hero.astro           # Presentación principal
│   │   ├── projects.astro       # Proyectos destacados
│   │   └── ...
│   ├── layouts/                # Layouts compartidos
│   ├── pages/                  # Rutas del sitio
│   │   ├── index.astro         # Página de inicio
│   │   └── proyectos.astro     # Página de proyectos
│   └── styles/                 # Estilos globales
├── public/                     # Archivos servidos directamente
├── backend/
│   ├── src/
│   │   ├── data/cristian.json  # Datos usados por el asistente
│   │   ├── routes/chat.js      # Endpoint POST /api/chat
│   │   ├── services/ai.js      # Modelo, prompt e historial
│   │   └── server.js           # Aplicación Express
│   ├── package.json
│   └── README.md               # Caso de estudio del asistente
├── astro.config.mjs
├── package.json
└── README.md
```

## Requisitos

- Node.js 18.14 o superior.
- npm 9 o superior.
- Ollama y un modelo instalado para ejecutar el chat localmente.
- Una API key de Google Gemini para ejecutar el backend en producción.

## Instalación y desarrollo

Instala las dependencias de cada aplicación desde la raíz del proyecto:

```bash
npm install
cd backend
npm install
```

### 1. Configurar el backend

Crea `backend/.env`:

```env
PORT=3000
NODE_ENV=development
OLLAMA_MODEL=llama3.2
OLLAMA_BASE_URL=http://localhost:11434
```

Inicia Ollama y asegúrate de tener el modelo disponible:

```bash
ollama pull llama3.2
```

Después inicia el backend desde `backend/`:

```bash
npm run dev
```

### 2. Configurar el frontend

Para desarrollo local no es obligatorio crear un `.env`, porque el componente de chat usa `http://localhost:3000/api/chat` por defecto. Si el backend está en otra URL, crea `.env` en la raíz:

```env
PUBLIC_BACKEND_URL=http://localhost:3000/api/chat
```

En otra terminal, desde la raíz del proyecto, inicia Astro:

```bash
npm run dev
```

Abre la URL que muestre Astro, normalmente `http://localhost:4321`.

## Variables de entorno

### Frontend: `.env` en la raíz

| Variable             | Uso                               | Ejemplo                          |
| -------------------- | --------------------------------- | -------------------------------- |
| `PUBLIC_BACKEND_URL` | URL completa del endpoint de chat | `http://localhost:3000/api/chat` |

Las variables con prefijo `PUBLIC_` se exponen al navegador. No coloques secretos en este archivo.

### Backend: `backend/.env`

| Variable          | Requerida        | Uso                                                       |
| ----------------- | ---------------- | --------------------------------------------------------- |
| `PORT`            | No               | Puerto del servidor; por defecto `3000`.                  |
| `NODE_ENV`        | No               | Usa `development` para Ollama y `production` para Gemini. |
| `OLLAMA_MODEL`    | No               | Modelo local; por defecto `llama3.2`.                     |
| `OLLAMA_BASE_URL` | No               | URL de Ollama; por defecto `http://localhost:11434`.      |
| `GEMINI_API_KEY`  | Sí en producción | Credencial privada de Google Gemini.                      |
| `GEMINI_MODEL`    | No               | Modelo de Gemini; por defecto `gemini-3.6-flash`.         |

No publiques `GEMINI_API_KEY` ni subas archivos `.env` al repositorio.

## API del backend

### `GET /`

Comprueba que el servidor está activo.

Respuesta:

```json
{
  "message": "Backend del portafolio funcionando correctamente"
}
```

### `GET /api/profile`

Devuelve el contenido de `backend/src/data/cristian.json`.

### `POST /api/chat`

Genera una respuesta del asistente usando el perfil y el historial enviado.

Solicitud:

```json
{
  "message": "¿Qué experiencia tiene Cristian con React?",
  "history": [
    { "role": "user", "content": "Hola" },
    { "role": "assistant", "content": "Hola, ¿en qué puedo ayudarte?" }
  ]
}
```

Respuesta exitosa:

```json
{
  "response": "..."
}
```

El campo `message` es obligatorio. El historial acepta mensajes con roles `user`, `assistant` o `model`; el servidor descarta otros roles antes de enviarlos al modelo.

## Scripts

Desde la raíz:

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo de Astro. |
| `npm run build`   | Genera el build de producción de Astro.    |
| `npm run preview` | Sirve localmente el build generado.        |

Desde `backend/`:

| Comando       | Descripción                                             |
| ------------- | ------------------------------------------------------- |
| `npm run dev` | Inicia Express con recarga automática mediante Nodemon. |

El backend todavía no define un script de producción ni una suite de pruebas automatizada.

## Despliegue

### Frontend

El frontend está configurado con `@astrojs/vercel` y `output: "server"`. En Vercel:

1. Configura la raíz del proyecto en la carpeta `portafolio`.
2. Añade `PUBLIC_BACKEND_URL` con la URL pública del backend y el path `/api/chat`.
3. Usa `npm run build` como comando de build.

### Backend

El backend debe desplegarse como un servicio Node.js independiente que ejecute `backend/src/server.js`. Configura como mínimo `NODE_ENV=production` y `GEMINI_API_KEY`; opcionalmente define `PORT` y `GEMINI_MODEL`.

La URL pública del servicio debe ser accesible desde el dominio del frontend y debe incluirse en `PUBLIC_BACKEND_URL`.

## Personalización

- Actualiza la información del asistente en `backend/src/data/cristian.json`.
- Modifica el prompt y la selección del modelo en `backend/src/services/ai.js`.
- Edita las secciones visuales en `src/components/`.
- Añade o modifica rutas en `src/pages/`.
- Guarda imágenes públicas en `public/` y recursos importados en `src/assets/`.

## Contacto

**Cristian Torres**

- Portafolio: [portafolio-nine-umber.vercel.app](https://portafolio-nine-umber.vercel.app/)
- Email: [ps4cristiantorr@gmail.com](mailto:ps4cristiantorr@gmail.com)
- LinkedIn: [linkedin.com/in/cristiantorr](https://linkedin.com/in/cristiantorr)
- GitHub: [github.com/cristiantorr](https://github.com/cristiantorr)
