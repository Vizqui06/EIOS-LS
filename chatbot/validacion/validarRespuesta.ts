import { ContextoRecuperado, ResultadoValidacion } from '../tipos';

/**
 * Valida que la respuesta generada este sustentada en el contexto documental.
 * Regla no negociable (docs/lineamientos.md #9): ante informacion insuficiente,
 * ambigua o no documentada, se debe escalar en lugar de responder con supuestos.
 */
export function validarRespuesta(contexto: ContextoRecuperado): ResultadoValidacion {
  if (!contexto.tieneInformacionSuficiente || contexto.fragmentos.length === 0) {
    return {
      estaSustentada: false,
      requiereEscalamiento: true,
      motivo: 'No se encontro informacion documentada suficiente para responder con certeza.',
    };
  }

  return {
    estaSustentada: true,
    requiereEscalamiento: false,
  };
}
