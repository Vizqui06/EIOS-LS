import { NextFunction, Request, Response } from 'express';
import { ErrorAplicacion } from '../utilidades/errorAplicacion';
import { procesarMensaje } from '../servicios/servicioChat';

/**
 * Recibe un mensaje del alumno y delega el procesamiento al servicio de chat.
 * El controlador no contiene logica de negocio, solo valida la forma de la solicitud.
 */
export async function manejarMensajeChat(
  peticion: Request,
  respuesta: Response,
  siguiente: NextFunction,
): Promise<void> {
  try {
    const { mensaje, idConversacion } = peticion.body as {
      mensaje?: string;
      idConversacion?: string;
    };

    if (!mensaje || typeof mensaje !== 'string' || mensaje.trim().length === 0) {
      throw new ErrorAplicacion('El mensaje es requerido.', 400);
    }

    const resultado = await procesarMensaje({ mensaje, idConversacion });
    respuesta.json(resultado);
  } catch (error) {
    siguiente(error);
  }
}
