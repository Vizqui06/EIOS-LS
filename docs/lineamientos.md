# Instructions

## Documentación compacta del proyecto
### Plataforma web + asistente de IA para Labor Social / Compromiso Social UP

> Documento de definición funcional y técnica inicial.  
> Propósito: establecer qué se debe desarrollar, qué debe evitarse y cómo debe estructurarse el sistema antes de comenzar la implementación.

---

# 1. Propósito del proyecto

El proyecto consiste en desarrollar una **plataforma web institucional que funcione como interfaz principal de orientación de Labor Social**, incorporando un asistente de IA capaz de resolver consultas, guiar procesos y canalizar casos que requieran intervención humana.

La plataforma **no sustituye a Student, Blackboard ni otros sistemas institucionales**. Su función es convertirse en una **capa inteligente de orientación, consulta, diagnóstico y automatización** alrededor del ecosistema existente.

El sistema debe reducir:

- Correos repetitivos.
- Consultas de procedimiento.
- Confusión entre plataformas.
- Errores de inscripción.
- Consultas sobre requisitos ya documentados.
- Solicitudes incompletas al área.
- Carga operativa innecesaria.

Y debe aumentar:

- Autonomía del alumno.
- Claridad del proceso.
- Trazabilidad.
- Calidad de la información.
- Capacidad de atención personalizada.
- Tiempo disponible del equipo para casos humanos.

El proyecto debe conservar la visión formativa y social de Compromiso Social: la tecnología debe **liberar capacidad humana, no eliminar el trato humano**. La documentación institucional identifica la formación social y profesional de los alumnos como parte del propósito de Labor Social.

---

# 2. Principio rector

## La plataforma orienta; los sistemas institucionales registran.

### La plataforma debe:

- Explicar.
- Buscar.
- Filtrar.
- Diagnosticar.
- Guiar.
- Prevalidar información.
- Mostrar documentación.
- Ayudar a interpretar procesos.
- Preparar solicitudes.
- Detectar casos que requieren intervención humana.
- Canalizar correctamente.

### La plataforma no debe:

- Inventar información.
- Modificar registros institucionales sin integración oficialmente autorizada.
- Aprobar alumnos.
- Inscribir proyectos por cuenta propia.
- Liberar créditos.
- Autorizar excepciones.
- Modificar calificaciones.
- Desbloquear cuentas.
- Sustituir decisiones del área responsable.

La inscripción y los registros oficiales deben continuar en los sistemas institucionales correspondientes.

---

# 3. Usuarios principales

## Alumno

Usuario principal de la plataforma.

Necesita:

- Información.
- Orientación.
- Consulta de proyectos.
- Ayuda para entender su situación.
- Instrucciones paso a paso.
- Diagnóstico de errores.
- Acceso a documentación.
- Canalización cuando el sistema no puede resolver el caso.

## Área de Compromiso Social / Labor Social

Usuario operativo.

Necesita:

- Reducir consultas repetitivas.
- Recibir solicitudes estructuradas.
- Identificar casos prioritarios.
- Consultar trazabilidad.
- Administrar conocimiento.
- Actualizar información.
- Revisar conversaciones escaladas.
- Detectar problemas recurrentes.

## Institución receptora

Puede requerir funcionalidades específicas en fases posteriores, pero **no debe mezclarse inicialmente con la experiencia del alumno**.

---

# 4. Concepto de la experiencia

La web debe sentirse como un **LLM cotidiano**:

- Pantalla limpia.
- Interfaz conversacional.
- Campo de entrada central.
- Historial de conversación.
- Respuestas claras.
- Markdown.
- Listas.
- Tablas cuando sean útiles.
- Botones contextuales.
- Fuentes/documentos cuando corresponda.
- Diseño responsive.
- Sin sensación de sistema administrativo antiguo.

Pero debajo de esa interfaz debe existir un sistema institucional mucho más estructurado.

> **La simplicidad visual no debe significar simplicidad arquitectónica.**

---

# 5. Arquitectura conceptual

```text
USUARIO
   │
   ▼
WEB / INTERFAZ CHAT
   │
   ▼
API / BACKEND
   │
   ├── Autenticación
   ├── Control de sesión
   ├── Motor de reglas
   ├── Orquestador de IA
   ├── Base de conocimiento
   ├── Recuperación documental
   ├── Gestión de escalamiento
   ├── Auditoría
   └── Analítica
   │
   ├───────────────┐
   ▼               ▼
LLM             SISTEMAS
               INSTITUCIONALES
                  │
          ┌───────┴────────┐
          ▼                ▼
       Student          Blackboard
```

La integración con sistemas institucionales debe considerarse **independiente del chatbot**.

---

# 6. Capas del sistema

## 6.1 Frontend

Responsable de la experiencia del usuario.

Debe incluir:

- Inicio.
- Chat.
- Historial.
- Búsqueda de proyectos.
- Centro de información.
- Guías de procesos.
- Preguntas frecuentes.
- Estado de conversación.
- Escalamiento.
- Accesos a plataformas oficiales.
- Avisos institucionales.

---

## 6.2 Backend

Debe concentrar toda la lógica sensible.

Responsabilidades:

- Autenticación.
- Autorización.
- Gestión de sesiones.
- Validación de solicitudes.
- Reglas de negocio.
- Recuperación de información.
- Comunicación con APIs.
- Gestión del LLM.
- Control de errores.
- Registro de eventos.
- Escalamiento.
- Seguridad.
- Auditoría.

**El navegador nunca debe contener secretos ni llaves de APIs.**

---

# 7. Motor de conocimiento

El chatbot no debe depender únicamente del conocimiento general del modelo de IA.

Debe utilizar una **base documental institucional controlada**.

### Fuentes prioritarias

1. Reglamentos.
2. Manuales.
3. Procedimientos.
4. Guías oficiales.
5. Calendarios.
6. Comunicados.
7. Bancos de preguntas.
8. Materiales de Blackboard.
9. Información vigente de proyectos.
10. Criterios operativos autorizados.

Los documentos disponibles muestran que el proceso involucra diferentes fuentes y plataformas, por lo que la base de conocimiento debe organizarse por **etapa del proceso**, no únicamente por archivo.

---

# 8. Organización de la información

La información debe estructurarse aproximadamente así:

```text
LABOR SOCIAL
│
├── Información general
│   ├── Qué es
│   ├── Objetivo
│   ├── Actores
│   └── Reglas
│
├── Curso Labor Social 2.0
│   ├── Requisito
│   ├── Acceso
│   ├── Módulos
│   └── Acreditación
│
├── Consulta de proyectos
│   ├── Búsqueda
│   ├── Filtros
│   ├── Vacantes
│   ├── Créditos
│   └── Requisitos
│
├── Inscripción
│   ├── Preparación
│   ├── Student
│   ├── Selección
│   └── Problemas frecuentes
│
├── Actividades
│   ├── Inicio
│   ├── Inducción
│   ├── Seguimiento
│   └── Comunicación
│
├── Cierre
│   ├── Requisitos
│   ├── Evidencias
│   └── Validación
│
└── Casos especiales
    ├── Bajas
    ├── Inscripción manual
    ├── Bloqueos
    └── Escalamiento
```

---

# 9. Regla fundamental de IA

El modelo debe operar bajo un principio de **respuesta sustentada**.

```text
Pregunta del alumno
        ↓
¿Existe información institucional?
        ↓
      SÍ ──────► Responder con fuente
        │
       NO
        ↓
¿Puede inferirse sin riesgo?
        ↓
      NO
        ↓
Escalamiento humano
```

Cuando la información no esté documentada:

> **“La información no aparece en las fuentes disponibles. Debe verificarse con el área responsable de LaborSocial.”**

No debe completarse el vacío mediante conocimiento general del modelo.

---

# 10. Motor de reglas

El LLM no debe ser el único responsable de las reglas críticas.

Las reglas obligatorias deben implementarse, cuando sea posible, como **lógica determinística**.

Ejemplo:

```text
IF alumno_tiene_creditos_completos
THEN informar que debe revisar su situación conforme al proceso vigente.

IF curso_labor_social_no_acreditado
THEN impedir recomendar inscripción como si estuviera habilitado.

IF alumno_reporta_bloqueo_financiero
THEN explicar que debe revisar su situación con el área correspondiente.

IF caso_requiere_autorizacion
THEN escalar_a_humano.

IF informacion_no_documentada
THEN no_generar_respuesta_normativa.
```

La IA interpreta lenguaje.

El motor de reglas controla decisiones críticas.

---

# 11. Consulta de proyectos

La consulta de proyectos debe ser una de las principales herramientas de la plataforma.

Debe permitir:

- Buscar por palabras clave.
- Buscar por institución.
- Buscar por proyecto.
- Filtrar por carrera.
- Filtrar por modalidad.
- Filtrar por género cuando corresponda a la información publicada.
- Consultar vacantes.
- Consultar créditos.
- Consultar horarios.
- Consultar ubicación.
- Consultar actividades.
- Consultar recursos requeridos.
- Consultar código/sección.

### Importante

La plataforma debe dejar extremadamente claro:

> **Consultar un proyecto no significa estar inscrito en él.**

La consulta de proyectos y la inscripción deben mantenerse claramente diferenciadas.

---

# 12. Chatbot

## Debe poder

- Comprender preguntas naturales.
- Detectar intención.
- Identificar etapa del proceso.
- Recuperar información institucional.
- Hacer preguntas de diagnóstico.
- Entregar instrucciones paso a paso.
- Mostrar documentos relevantes.
- Enviar al usuario a la plataforma correspondiente.
- Identificar inconsistencias.
- Preparar una solicitud de soporte.
- Escalar casos.

## No debe

- Responder con información no sustentada.
- Dar por hecho que un registro existe.
- Inventar excepciones.
- Asegurar que un alumno está inscrito.
- Asegurar que los créditos están liberados.
- Dar autorizaciones.
- Modificar información institucional.
- Resolver mediante "sentido común" una regla administrativa.

---

# 13. Escalamiento humano

El escalamiento debe ser una **función diseñada**, no un simple botón de "contacto".

### Debe ocurrir cuando:

- Falta información institucional.
- Existe una excepción.
- Se requiere autorización.
- Se requiere revisión documental.
- Existe un bloqueo administrativo.
- Existe un problema de inscripción real.
- Se necesita verificar información en Student.
- Se necesita verificar información en Blackboard.
- Se requiere modificar un registro.
- Existe una discrepancia entre sistemas.
- Existe una consecuencia administrativa potencial.

### Antes de escalar

El sistema debe recopilar:

```text
Motivo
Etapa del proceso
Situación detectada
Alumno
Proyecto, si aplica
Plataforma involucrada
Mensaje de error, si existe
Evidencia disponible
Pregunta concreta
```

Así, el área recibe **un caso estructurado y no otro correo de cinco párrafos intentando reconstruir qué ocurrió**.

---

# 14. Integraciones

## Primera etapa

La plataforma debe funcionar principalmente como:

```text
Información
+
IA
+
Reglas
+
Consulta
+
Orientación
+
Escalamiento
```

No necesita integración profunda con todos los sistemas desde el primer día.

## Segunda etapa

Podría incorporar integraciones autorizadas para:

- Consulta de estatus.
- Validación de información.
- Datos de proyectos.
- Información académica limitada.

## Tercera etapa

Únicamente si existe viabilidad técnica y autorización institucional:

- Integración con Student.
- Integración con Blackboard.
- Automatización de determinadas operaciones.
- Sincronización de estados.

La arquitectura debe permitir esas posibilidades sin depender de ellas para funcionar.

---

# 15. APIs

## Principio

**Cada API debe justificar su existencia.**

No se debe incorporar una API simplemente porque "puede ser útil".

### Cada API debe documentar:

- Propósito.
- Proveedor.
- Datos enviados.
- Datos recibidos.
- Autenticación.
- Permisos.
- Retención de datos.
- Ubicación del procesamiento.
- Riesgos.
- Dependencias.
- Costo.
- Alternativa sin API.
- Responsable.

Las APIs deben utilizarse con el principio de **mínimo privilegio y mínima exposición de datos**.

---

# 16. Uso del LLM

El LLM debe estar aislado detrás del backend.

```text
Frontend
   ↓
Backend
   ↓
Orquestador
   ↓
Recuperación documental
   ↓
Reglas
   ↓
LLM
```

No:

```text
Frontend
   ↓
API del LLM
```

El modelo no debe recibir información innecesaria.

Debe utilizarse **mínima información necesaria para resolver la consulta**.

---

# 17. Seguridad

La seguridad debe considerarse desde el diseño inicial.

### Requisitos mínimos

- HTTPS.
- Gestión segura de sesiones.
- Autenticación institucional cuando corresponda.
- Autorización por roles.
- Secretos exclusivamente en servidor.
- Variables de entorno para credenciales.
- Cifrado de información sensible.
- Protección contra inyección.
- Validación de entradas.
- Rate limiting.
- Control de tamaño de solicitudes.
- Protección contra abuso del chatbot.
- Logs sin información sensible.
- Auditoría de acciones críticas.
- Backups.
- Recuperación ante errores.
- Control de acceso administrativo.

### No debe almacenarse innecesariamente:

- Contraseñas.
- Tokens de Student.
- Tokens de Blackboard.
- Información académica completa.
- Información financiera.
- Datos personales no necesarios.
- Conversaciones indefinidamente.

---

# 18. Privacidad

El proyecto debe adoptar el principio:

> **Si un dato no es necesario para resolver el caso, no se solicita ni se almacena.**

La IA no debe utilizar información académica o personal únicamente porque técnicamente pueda acceder a ella.

La integración debe diseñarse bajo **mínimo privilegio**.

---

# 19. Administración de contenidos

Debe existir un panel administrativo separado del frontend del alumno.

Debe permitir:

- Crear documentos.
- Actualizar documentos.
- Versionar información.
- Activar/desactivar contenido.
- Marcar vigencia.
- Asociar documentos con procesos.
- Administrar preguntas frecuentes.
- Administrar reglas.
- Revisar respuestas escaladas.
- Consultar métricas.

### Cada contenido debería tener:

```text
ID
Título
Tipo
Proceso
Versión
Fecha de publicación
Fecha de vigencia
Fecha de actualización
Responsable
Estado
Fuente
```

---

# 20. Versionamiento institucional

Esto es crítico.

Labor Social tiene información que cambia por ciclo.

Por tanto, la base de conocimiento debe diferenciar:

```text
Regla permanente
Regla temporal
Información por ciclo
Información histórica
Información vigente
```

El sistema no debe utilizar automáticamente una fecha o procedimiento histórico para responder una consulta de un ciclo posterior.

---

# 21. Arquitectura del código

El código debe mantenerse modular.

Ejemplo:

```text
/proyecto
│
├── frontend/
│   ├── componentes/
│   ├── vistas/
│   ├── servicios/
│   └── estilos/
│
├── backend/
│   ├── controladores/
│   ├── servicios/
│   ├── reglas/
│   ├── modelos/
│   ├── repositorios/
│   ├── integraciones/
│   ├── seguridad/
│   └── utilidades/
│
├── ia/
│   ├── prompts/
│   ├── recuperacion/
│   ├── orquestador/
│   └── validacion/
│
├── conocimiento/
│   ├── documentos/
│   ├── metadatos/
│   └── versiones/
│
├── pruebas/
│
└── documentacion/
```

---

# 22. Convenciones de programación

El código debe estar escrito en **español**, incluyendo:

- Variables.
- Funciones.
- Clases.
- Métodos.
- Estructuras de datos.
- Nombres de módulos.

Ejemplo:

```javascript
const proyectoSeleccionado = obtenerProyecto(idProyecto);

function validarInscripcion(datosAlumno) {
    // Se verifica la información requerida.
}
```

Los comentarios deben:

- Estar en tercera persona del singular.
- Ser breves.
- Explicar únicamente lo necesario.
- Evitar narrar obviedades.
- No utilizar emojis.
- No convertirse en bloques gigantes de documentación.

Correcto:

```javascript
// Se valida la información requerida.
```

---

# 23. Separación de responsabilidades

Cada módulo debe tener una responsabilidad clara.

No debe existir una función que:

```text
reciba la pregunta
+
consulte la base
+
llame al LLM
+
valide reglas
+
guarde conversación
+
mande correo
```

Debe separarse:

```text
analizarPregunta()
obtenerContexto()
validarReglas()
generarRespuesta()
registrarConversacion()
crearEscalamiento()
```

Esto facilita:

- Pruebas.
- Mantenimiento.
- Seguridad.
- Escalabilidad.
- Corrección de errores.

---

# 24. Manejo de errores

Toda integración externa debe asumir que puede fallar.

Debe contemplarse:

```text
API no disponible
↓
Timeout
↓
Reintento controlado
↓
Si falla
↓
Respuesta alternativa
↓
Registro técnico
```

El usuario nunca debe recibir:

```text
500 Internal Server Error
NullPointerException
API timeout
Stack trace
```

Debe recibir una respuesta comprensible.

---

# 25. Rendimiento

La plataforma debe optimizar:

- Carga inicial.
- Consultas documentales.
- Respuestas del LLM.
- Imágenes.
- Archivos.
- Consultas repetitivas.
- Uso de APIs.
- Consultas a base de datos.

Debe utilizarse caché cuando sea seguro.

La IA no debe consultar nuevamente información estática que puede recuperarse eficientemente.

---

# 26. Observabilidad

El sistema debe saber qué está ocurriendo.

Debe registrar métricas como:

- Consultas realizadas.
- Intenciones más frecuentes.
- Preguntas sin respuesta.
- Escalamientos.
- Errores.
- Tiempo de respuesta.
- Uso de tokens.
- Fallos de APIs.
- Documentos consultados.
- Procesos con mayor confusión.

Esto permitirá convertir el chatbot en una **herramienta de mejora continua del proceso**.

---

# 27. Métrica principal

No debe medirse únicamente:

> "¿Cuántas conversaciones tuvo el chatbot?"

Las métricas importantes son:

### Resolución

¿Cuántas consultas fueron resueltas sin intervención humana?

### Calidad

¿Cuántas respuestas fueron correctas y sustentadas?

### Contención

¿Cuántos correos o casos repetitivos dejaron de llegar al área?

### Escalamiento

¿Cuántos casos realmente necesitaron intervención humana?

### Fricción

¿En qué pasos se concentran las dudas?

### Experiencia

¿El alumno logró completar el proceso?

---

# 28. Diseño de la página

## Inicio

Debe presentar una experiencia limpia y directa:

```text
                 Labor Social
              Compromiso Social UP

                ¿En qué puede ayudar?

             [ Escribir una pregunta... ]

       [ Información general ]
       [ Buscar proyectos ]
       [ Inscripción ]
       [ Curso Labor Social 2.0 ]
       [ Seguimiento ]
       [ Cierre ]
```

## Chat

Debe ofrecer una experiencia similar a un LLM moderno:

```text
                 Labor Social

        ¿En qué puede ayudar hoy?

             [ pregunta ]

      ─────────────────────────

              conversación
```

## Herramientas

El usuario debe poder acceder a herramientas sin tener que preguntarle todo al chatbot:

- Buscar proyectos.
- Consultar proceso.
- Revisar requisitos.
- Consultar preguntas frecuentes.
- Ver guías.
- Acceder a Student.
- Acceder a Blackboard.
- Solicitar orientación.

---

# 29. Qué NO debe hacerse en la interfaz

No debe convertirse en:

- Un portal lleno de botones.
- Un menú administrativo.
- Un PDF gigantesco disfrazado de página web.
- Un chatbot flotante pequeño e incómodo.
- Una página saturada de información.
- Un sistema que obliga a escribir una pregunta para cualquier acción.
- Una copia de Blackboard.
- Una copia de Student.

La información debe aparecer **cuando es relevante para la decisión del alumno**.

---

# 30. Principio UX central

La interfaz debe responder a esta secuencia:

```text
¿Qué necesita hacer?
        ↓
¿En qué etapa está?
        ↓
¿Qué debe saber?
        ↓
¿Qué debe hacer?
        ↓
¿Dónde debe hacerlo?
        ↓
¿Terminó correctamente?
        ↓
¿Necesita ayuda humana?
```

No:

```text
Aquí están 47 documentos.
Buena suerte.
```

---

# 31. MVP recomendado

La primera versión debe concentrarse en:

### Módulo 1
**Chat institucional**

### Módulo 2
**Base de conocimiento**

### Módulo 3
**Consulta de proyectos**

### Módulo 4
**Guías de procesos**

### Módulo 5
**Diagnóstico de consultas**

### Módulo 6
**Escalamiento estructurado**

### Módulo 7
**Panel administrativo de conocimiento**

### Módulo 8
**Analítica básica**

Esto permitiría generar valor sin esperar una integración profunda con todos los sistemas.

---

# 32. Funciones que pueden automatizarse

| Función | Automatización |
|---|---:|
| Preguntas frecuentes | Alta |
| Información general | Alta |
| Explicación de procesos | Alta |
| Guía de inscripción | Alta |
| Búsqueda de proyectos | Alta |
| Diagnóstico inicial | Alta |
| Consulta documental | Alta |
| Preparación de solicitudes | Alta |
| Clasificación de casos | Alta |
| Escalamiento | Alta |
| Validación documental | Parcial |
| Consulta de estatus real | Requiere integración |
| Inscripción | Requiere integración/autorización |
| Modificación de registros | Humana / integración autorizada |
| Excepciones | Humana |
| Liberación de créditos | Humana / sistema institucional |

---

# 33. Flujo general

```text
ALUMNO
  │
  ▼
PLATAFORMA
  │
  ▼
IDENTIFICACIÓN DE INTENCIÓN
  │
  ├── Información
  │      ↓
  │   Base documental
  │
  ├── Proyectos
  │      ↓
  │   Motor de búsqueda
  │
  ├── Procedimiento
  │      ↓
  │   Guía paso a paso
  │
  ├── Problema
  │      ↓
  │   Diagnóstico
  │      ↓
  │   ¿Puede resolverse?
  │      ├── Sí → solución
  │      └── No → escalamiento
  │
  └── Caso sensible
         ↓
      Intervención humana
```

---

# 34. Regla de oro del proyecto

> **La IA no debe tomar decisiones institucionales que corresponden a la Universidad. Debe ayudar al alumno a tomar correctamente las acciones que sí le corresponden.**

El sistema debe orientar al alumno hacia Student cuando la acción corresponde a Student y hacia Blackboard cuando corresponde a Blackboard.

---

# 35. Definición resumida del producto

```text
PRODUCTO

Una plataforma web institucional de Labor Social
con experiencia conversacional tipo LLM,

que combina:

IA
+
Base de conocimiento institucional
+
Motor de reglas
+
Buscador de proyectos
+
Guías de procesos
+
Diagnóstico
+
Escalamiento humano
+
Analítica

para reducir la carga operativa de Compromiso Social
y aumentar la autonomía del alumno,

sin sustituir los sistemas ni las decisiones institucionales.
```

---

# 36. Criterio para aprobar una funcionalidad

Antes de incorporar cualquier funcionalidad debe responderse:

1. **¿Qué problema operativo resuelve?**
2. **¿Está sustentada institucionalmente?**
3. **¿Qué dato necesita?**
4. **¿Por qué necesita ese dato?**
5. **¿Puede resolverse sin una API?**
6. **¿Qué riesgo de seguridad introduce?**
7. **¿Qué ocurre si falla?**
8. **¿Puede automatizarse de manera determinística?**
9. **¿Requiere intervención humana?**
10. **¿Reduce realmente trabajo al área?**

Si una funcionalidad no supera esta revisión, **no debe incorporarse por el simple hecho de que técnicamente sea posible**.

---

# 37. Prioridad de desarrollo

```text
FASE 1
Arquitectura + seguridad + conocimiento

        ↓

FASE 2
Frontend + experiencia LLM

        ↓

FASE 3
Chatbot + RAG + reglas

        ↓

FASE 4
Buscador de proyectos + herramientas

        ↓

FASE 5
Escalamiento + panel administrativo

        ↓

FASE 6
Analítica + optimización

        ↓

FASE 7
Integraciones institucionales autorizadas
```

---

# 38. Resultado esperado

El resultado no debe ser simplemente **"un chatbot para Labor Social"**.

Debe ser una **capa digital inteligente de operación y servicio**, donde el chatbot sea solamente la interfaz conversacional de un sistema más amplio.

El ecosistema actual distribuye responsabilidades entre Student, Blackboard, consulta de proyectos, instituciones receptoras y Compromiso Social. La oportunidad del proyecto consiste en **ordenar esa complejidad para el alumno sin alterar las reglas que gobiernan el proceso**.

---

# 39. Criterios no negociables

El desarrollo debe mantener permanentemente los siguientes principios:

1. **Exactitud institucional antes que capacidad de respuesta.**
2. **Seguridad antes que conveniencia.**
3. **Mínimo acceso a datos.**
4. **Mínimo número de APIs.**
5. **No inventar información.**
6. **No sustituir decisiones humanas.**
7. **Separar reglas de IA generativa.**
8. **Mantener trazabilidad documental.**
9. **Separar claramente información, orientación y operación.**
10. **Diseñar para reducir carga operativa real.**
11. **Mantener la experiencia sencilla aunque la arquitectura sea robusta.**
12. **Usar tecnología para liberar tiempo humano para la atención de mayor valor.**

---

# 40. Principio final de diseño

> **La mejor plataforma no es la que hace más cosas automáticamente, sino la que hace automáticamente todo aquello que puede hacerse de forma segura, confiable y documentada, y reserva a las personas aquello que requiere criterio, autorización, empatía o decisión institucional.**
