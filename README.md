# EIOS-LS

Plataforma de orientacion para Labor Social / Compromiso Social UP, con un
asistente de IA que responde unicamente con base en informacion institucional
documentada y escala a una persona cuando no puede responder con certeza.

Este proyecto sigue las reglas de `CLAUDE.md` y, con mayor jerarquia,
`docs/lineamientos.md`. Leer ambos antes de contribuir.

## Estructura

Ver `documentacion/arquitectura.md` para el detalle completo de la Fase 1.

```
frontend/   Interfaz del alumno (React + TypeScript + Vite)
backend/    API, reglas de negocio y seguridad (Node + Express + TypeScript)
chatbot/    Prompts, recuperacion documental, orquestacion y validacion de IA
```

## Requisitos
- Node.js 20+
- npm 10+

## Instalacion

```bash
npm install
```

Esto instala las dependencias de los tres workspaces (`backend`, `frontend`, `chatbot`).

## Variables de entorno

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

## Desarrollo

```bash
npm run dev            # backend (puerto 4000) y frontend (puerto 5173) en paralelo
npm run dev:backend    # solo backend
npm run dev:frontend   # solo frontend
```

## Calidad

```bash
npm run lint
npm run test           # pruebas del backend
npm run build
```

## Estado actual (Fase 1)

Estructura base, seguridad minima (helmet, CORS, rate limiting) y el flujo
completo de orquestacion (`pregunta -> intencion -> recuperacion -> reglas ->
generacion -> validacion -> respuesta/escalamiento`) estan implementados como
esqueleto, con puntos de extension marcados como `TODO`. No hay persistencia
real, autenticacion, integraciones institucionales ni proveedor de LLM
conectado todavia; ver `documentacion/arquitectura.md` para el detalle.
