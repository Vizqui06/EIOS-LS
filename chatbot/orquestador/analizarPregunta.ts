import { IntencionDetectada } from '../tipos';

/**
 * Detecta la etapa del proceso de Labor Social a la que pertenece la pregunta del alumno.
 * Version inicial basada en palabras clave; puede evolucionar a un clasificador dedicado
 * sin cambiar el contrato de esta funcion.
 */
export function analizarPregunta(mensaje: string): IntencionDetectada {
  const texto = mensaje.toLowerCase();

  if (texto.includes('inscri')) {
    return { etapa: 'inscripcion', resumen: mensaje };
  }
  if (texto.includes('proyecto')) {
    return { etapa: 'consultaProyectos', resumen: mensaje };
  }
  if (texto.includes('curso')) {
    return { etapa: 'cursoLaborSocial', resumen: mensaje };
  }
  if (texto.includes('actividad') || texto.includes('bitacora')) {
    return { etapa: 'actividades', resumen: mensaje };
  }
  if (texto.includes('cierre') || texto.includes('constancia')) {
    return { etapa: 'cierre', resumen: mensaje };
  }

  return { etapa: 'informacionGeneral', resumen: mensaje };
}
