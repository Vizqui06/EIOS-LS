# Arquitectura - Fase 1

## Stack elegido

| Capa | Tecnologia | Justificacion |
|---|---|---|
| Backend | Node.js + Express + TypeScript estricto | Simple, ampliamente soportado, permite capas claras (rutas/controladores/servicios) exigidas por CLAUDE.md. |
| Frontend | React + TypeScript + Vite | Requerido por el estilo de interfaz tipo LLM (Fase 2); Vite da un ciclo de desarrollo rapido sin configuracion excesiva. |
| IA / Chatbot | Paquete independiente `chatbot/` (workspace) | Aisla prompts, recuperacion, orquestacion y validacion del resto del backend, tal como pide `docs/lineamientos.md` #21, y evita que logica de negocio institucional dependa del proveedor de LLM. |
| Gestion de paquetes | npm workspaces (`backend`, `frontend`, `chatbot`) | Un solo repositorio, dependencias explicitas entre paquetes, sin necesidad de herramientas adicionales de monorepo. |

## Estructura de carpetas

```
EIOS-LS/
├── frontend/                  Interfaz del alumno (React + TS)
├── backend/                   API, reglas y seguridad
│   └── src/
│       ├── rutas/             Definicion de endpoints (Express Router)
│       ├── controladores/     Adaptan HTTP <-> servicios, sin logica de negocio
│       ├── servicios/         Logica de negocio y orquestacion de alto nivel
│       ├── reglas/            Motor de reglas deterministico (decisiones criticas)
│       ├── modelos/           Tipos e interfaces de dominio
│       ├── repositorios/      Acceso a datos (en memoria por ahora)
│       ├── integraciones/     Clientes hacia sistemas institucionales (pendiente)
│       ├── seguridad/         Middlewares de seguridad (rate limiting, etc.)
│       └── utilidades/        Helpers transversales (errores, manejo de errores)
├── chatbot/                   Paquete de IA (prompts, recuperacion, orquestador, validacion)
├── integraciones/             Documentacion de cada integracion institucional
├── pruebas/                   Pruebas de integracion/E2E multi-paquete
└── documentacion/             Decisiones tecnicas (este archivo)
```

## Reglas de dependencia
- `backend` depende de `chatbot` (via workspace), nunca al reves.
- `frontend` solo conoce la API HTTP del backend; no importa codigo de `backend` ni de `chatbot`.
- Las decisiones criticas (autorizar, confirmar inscripcion, resolver excepciones) se
  resuelven en `backend/src/reglas`, nunca dentro del paquete `chatbot` ni del LLM.

## Pendiente explicito (no resuelto en Fase 1)
- Persistencia real (actualmente repositorios en memoria).
- Autenticacion/autorizacion de alumnos y personal.
- Conexion real a Student y Blackboard (ver `integraciones/`).
- Proveedor de LLM real (actualmente `generarRespuesta` devuelve un texto fijo).
- Base de conocimiento versionada real (Fase 2).
