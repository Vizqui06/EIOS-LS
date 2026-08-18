import { ContextoRecuperado, IntencionDetectada } from '../tipos';

/**
 * Recupera fragmentos de la base documental institucional relacionados con la intencion detectada.
 * Pendiente: conectar con el almacen de conocimiento definido en el Modulo 2 (base de conocimiento).
 * No debe devolver informacion inventada; si no hay coincidencias, se marca como insuficiente.
 */
export async function obtenerContexto(
  _intencion: IntencionDetectada,
): Promise<ContextoRecuperado> {
  // TODO: reemplazar por consulta real a la base documental versionada (docs/lineamientos.md #7, #20).
  return {
    fragmentos: [],
    tieneInformacionSuficiente: false,
  };
}
