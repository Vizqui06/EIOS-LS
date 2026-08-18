import { randomUUID } from 'crypto';
import {
  analizarPregunta,
  generarRespuesta,
  obtenerContexto,
  validarRespuesta,
} from 'eios-ls-chatbot';
import { evaluarReglas } from '../reglas/motorReglas';
import { crearEscalamiento } from './servicioEscalamiento';

interface SolicitudChat {
  mensaje: string;
  idConversacion?: string;
}

interface RespuestaChat {
  idConversacion: string;
  texto: string;
  fuentes: string[];
  escalado: boolean;
}

/**
 * Orquesta el flujo documentado en docs/lineamientos.md #16:
 * pregunta -> intencion -> recuperacion documental -> reglas -> generacion
 * -> validacion -> respuesta o escalamiento.
 *
 * Las decisiones criticas se resuelven en el motor de reglas (deterministico),
 * nunca dentro del LLM.
 */
export async function procesarMensaje(solicitud: SolicitudChat): Promise<RespuestaChat> {
  const idConversacion = solicitud.idConversacion ?? randomUUID();

  const intencion = analizarPregunta(solicitud.mensaje);

  const resultadoReglas = evaluarReglas({ etapa: intencion.etapa, mensaje: solicitud.mensaje });
  if (!resultadoReglas.permite) {
    return {
      idConversacion,
      texto: resultadoReglas.motivo ?? 'Esta solicitud no puede resolverse automaticamente.',
      fuentes: [],
      escalado: false,
    };
  }

  const contexto = await obtenerContexto(intencion);
  const validacion = validarRespuesta(contexto);

  if (validacion.requiereEscalamiento) {
    await crearEscalamiento({
      idConversacion,
      mensajeOriginal: solicitud.mensaje,
      motivo: validacion.motivo ?? 'Informacion no documentada.',
    });

    return {
      idConversacion,
      texto:
        'No cuento con informacion suficiente para responder con certeza. ' +
        'Se genero un caso de seguimiento con el area responsable.',
      fuentes: [],
      escalado: true,
    };
  }

  const respuesta = await generarRespuesta(solicitud.mensaje, contexto.fragmentos);

  registrarConversacion(idConversacion, solicitud.mensaje, respuesta.texto);

  return {
    idConversacion,
    texto: respuesta.texto,
    fuentes: respuesta.fuentes,
    escalado: false,
  };
}

/**
 * Registra el turno de conversacion para trazabilidad y auditoria.
 * Pendiente: persistir en almacenamiento real respetando la politica de datos.
 */
function registrarConversacion(idConversacion: string, mensaje: string, respuesta: string): void {
  console.debug('Conversacion registrada:', { idConversacion, mensaje, respuesta });
}
