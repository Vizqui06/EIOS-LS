# CLAUDE.md

## Propósito

Manual persistente para Claude Code de Labor Social / Compromiso Social
UP. `lineamientos.md` contiene la especificación funcional extensa.
`/docs` contiene documentación técnica detallada (`lineamientos.md`).

## Prioridades

1.  Exactitud institucional.
2.  Seguridad y privacidad.
3.  Código probado y mantenible.
4.  Reducción de carga operativa.
5.  Experiencia sencilla para el alumno. No completar vacíos mediante
    suposiciones. Si un requisito, fecha, contacto, excepción,
    consecuencia o regla no está documentado, marcarlo para
    verificación.

## Stack y comandos

Usar el stack y las versiones definidos por el repositorio. Revisar
`package.json` y configuración antes de cambiar tecnología. No inventar
versiones ni agregar frameworks innecesarios.

## Comandos Principales
- Iniciar desarrollo: `npm run dev`
- Ejecutar pruebas: `npm test`
- Correr linter: `npm run lint`
- De necesitarse: `npm run format`, `npm run build`

## Reglas de Código
- Usar TypeScript con tipado estricto (evitar `any`).
- Mantener la lógica de negocio en `src/services/` y las rutas en `src/routes/`.
- Documentar las funciones principales con JSDoc.

## Restricciones (Qué NUNCA hacer)
- No instales nuevas librerías sin consultar primero.
- No modifiques archivos dentro de `.env`.
- Tras realizar un cambio, ejecuta `npm test` para validar.

Si existen componentes Python:

``` bash
pytest
```

Antes de entregar cambios ejecutar formato, lint, pruebas y build. No
afirmar pruebas ejecutadas si no se ejecutaron.

## Arquitectura

``` text
/frontend        Interfaz y experiencia conversacional
/backend         API, sesiones, reglas y seguridad
/ia              Prompts, recuperación y orquestación LLM
/conocimiento    Documentos, metadatos y versiones
/integraciones   Servicios institucionales autorizados
/pruebas         Pruebas automatizadas
/docs            Documentación extensa
```

Respetar la estructura real del repositorio si difiere.

## IA y reglas

Flujo:

``` text
Pregunta → intención → recuperación documental → reglas → generación → validación → respuesta/escalamiento
```

-   El LLM funciona detrás del backend.
-   Priorizar documentos institucionales vigentes.
-   Separar información vigente, temporal e histórica.
-   Las reglas críticas deben ser determinísticas cuando sea posible.
-   El LLM no decide asuntos institucionales.
-   Nunca afirmar inscripción, validación, liberación, autorización o
    modificación sin evidencia.
-   Si la información no está documentada, no inventarla. Separar
    responsabilidades en funciones como `analizarPregunta()`,
    `obtenerContexto()`, `validarReglas()`, `generarRespuesta()` y
    `crearEscalamiento()`.

## Seguridad

-   HTTPS en producción.
-   Secretos solo en servidor y variables de entorno.
-   Mínimo privilegio, validación de entradas y control de acceso.
-   Rate limiting cuando corresponda.
-   No almacenar datos personales innecesarios.
-   No registrar secretos ni datos sensibles.
-   Auditar acciones críticas.
-   Manejar timeouts y errores.
-   Nunca mostrar stack traces al usuario.

## APIs y dependencias

Cada API o dependencia debe justificar propósito, necesidad, datos,
permisos, autenticación, retención, riesgos, costo y alternativas. Nunca
exponer API keys en frontend, enviar datos personales a terceros sin
necesidad y autorización, agregar dependencias por comodidad, integrar
Student/Blackboard por métodos no autorizados ni usar una API si una
solución local segura basta.

## Código

El código nuevo se escribe en español. - `camelCase` para variables y
funciones. - Nombres descriptivos. - Funciones pequeñas y
responsabilidad única. - Tipado estricto cuando exista.

``` javascript
const proyectoSeleccionado = obtenerProyecto(idProyecto);
function validarInscripcion(datosAlumno) {
    // Se valida la información requerida.
}
```

Comentarios: tercera persona del singular, breves, sin emojis y solo
para intención o decisiones no evidentes.

## Interfaz y UX

La experiencia debe parecerse a un LLM moderno: limpia, conversacional,
responsive, con jerarquía clara, historial, Markdown, fuentes cuando
correspondan y herramientas accesibles. No convertirla en copia de
Student o Blackboard. No existe una paleta HEX aprobada en la
documentación disponible. No inventar colores institucionales.
Centralizar colores mediante variables/tokens y usar HEX solo cuando
exista especificación aprobada.

``` text
Necesidad → etapa → información → acción → plataforma → confirmación → ayuda humana
```

## Escalamiento

Escalar cuando falte información documentada, exista
excepción/autorización, se requiera revisión documental, haya bloqueo
administrativo, deba verificarse un registro, exista discrepancia entre
sistemas o deba modificarse información institucional. Recopilar cuando
aplique:

``` text
Motivo | Etapa | Situación | Proyecto | Plataforma | Error | Evidencia | Pregunta
```

## Errores y pruebas

Toda dependencia externa puede fallar:

``` text
timeout → reintento controlado → respuesta alternativa → registro técnico
```

Nunca mostrar secretos, credenciales, stack traces ni errores internos.
Priorizar pruebas para reglas, recuperación documental, escalamiento,
autenticación/autorización, validaciones, integraciones y casos límite.
No eliminar pruebas ni desactivar controles de seguridad para hacer
pasar una implementación.

## Qué NUNCA hacer

-   Nunca inventar requisitos, fechas, contactos o excepciones.
-   Nunca prometer autorizaciones ni afirmar estados institucionales sin
    evidencia.
-   Nunca modificar directamente la base de datos de producción.
-   Nunca ejecutar migraciones destructivas en producción sin
    autorización.
-   Nunca probar con datos reales si existen datos de prueba.
-   Nunca guardar secretos en Git ni enviar información sensible al LLM
    sin necesidad.
-   Nunca agregar APIs o dependencias sin justificación.
-   Nunca llamar desde frontend a servicios que requieren secretos.
-   Nunca convertir recomendaciones técnicas en reglas institucionales.
-   Nunca mezclar presentación con lógica institucional crítica.
-   Nunca ocultar errores para obtener una compilación limpia.
-   Nunca usar emojis en código, comentarios o interfaz.
-   Nunca usar guiones largos (em dash) en textos generados por el
    sistema.
-   Nunca modificar archivos fuera del alcance de la tarea sin
    justificarlo.
-   Nunca realizar cambios irreversibles con riesgo sin confirmación
    explícita.

## Documentación

Consultar `lineamientos.md` en `/docs` para la definición general del producto.
Consultar `/docs` antes de modificar arquitectura, reglas,
integraciones, seguridad, flujos, datos, prompts o procesos de Labor
Social. Mantener `CLAUDE.md` conciso. Las explicaciones extensas
pertenecen a `/docs`.
