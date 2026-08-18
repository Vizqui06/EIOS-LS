import { ContextoRegla, Regla } from '../modelos/regla';

/**
 * Motor de reglas deterministico. Las decisiones criticas (autorizaciones,
 * excepciones, confirmaciones de inscripcion o liberacion) NUNCA deben
 * depender del LLM; se evaluan aqui de forma explicita y auditable.
 *
 * Las reglas listadas son ejemplos de estructura. Deben completarse y
 * validarse contra docs/lineamientos.md antes de usarse en produccion;
 * no se debe inventar contenido normativo no documentado.
 */
const reglas: Regla[] = [
  {
    id: 'no-confirmar-inscripcion',
    descripcion: 'El asistente no puede confirmar ni ejecutar una inscripcion.',
    evaluar: (contexto: ContextoRegla) =>
      contexto.etapa === 'inscripcion' && /confirma|inscribeme|inscribir/.test(contexto.mensaje.toLowerCase()),
    mensajeBloqueo:
      'No puedo confirmar inscripciones. Esta accion debe realizarse en el sistema institucional correspondiente.',
  },
  {
    id: 'no-autorizar-excepcion',
    descripcion: 'El asistente no puede autorizar excepciones o casos especiales.',
    evaluar: (contexto: ContextoRegla) =>
      contexto.etapa === 'casoEspecial' || /excepcion|autorizame|autorizar/.test(contexto.mensaje.toLowerCase()),
    mensajeBloqueo:
      'Los casos especiales y excepciones requieren autorizacion del area responsable, no puedo resolverlos directamente.',
  },
];

/**
 * Evalua el mensaje contra el conjunto de reglas y determina si el flujo
 * puede continuar hacia la generacion de respuesta o debe bloquearse.
 */
export function evaluarReglas(contexto: ContextoRegla): { permite: boolean; motivo?: string } {
  const reglaBloqueante = reglas.find((regla) => regla.evaluar(contexto));

  if (reglaBloqueante) {
    return { permite: false, motivo: reglaBloqueante.mensajeBloqueo };
  }

  return { permite: true };
}
