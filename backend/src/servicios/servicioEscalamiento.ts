import { randomUUID } from 'crypto';
import { Escalamiento } from '../modelos/escalamiento';
import { guardarEscalamiento } from '../repositorios/repositorioEscalamiento';

interface DatosEscalamiento {
  idConversacion: string;
  mensajeOriginal: string;
  motivo: string;
}

/**
 * Crea un caso de escalamiento hacia el area responsable cuando el asistente
 * no puede responder con certeza o la solicitud requiere autorizacion humana.
 */
export async function crearEscalamiento(datos: DatosEscalamiento): Promise<Escalamiento> {
  const escalamiento: Escalamiento = {
    id: randomUUID(),
    idConversacion: datos.idConversacion,
    mensajeOriginal: datos.mensajeOriginal,
    motivo: datos.motivo,
    estado: 'pendiente',
    creadoEn: new Date(),
  };

  return guardarEscalamiento(escalamiento);
}
