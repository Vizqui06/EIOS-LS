import { NextFunction, Request, Response } from 'express';
import { ErrorAplicacion } from './errorAplicacion';

/**
 * Middleware final de manejo de errores.
 * Nunca debe devolver stack traces, mensajes de excepcion internos ni
 * detalles de infraestructura al cliente. El detalle tecnico se registra
 * unicamente en el log del servidor.
 */
export function manejarErrores(
  error: unknown,
  _peticion: Request,
  respuesta: Response,
  _siguiente: NextFunction,
): void {
  if (error instanceof ErrorAplicacion) {
    respuesta.status(error.codigoEstado).json({ error: error.message });
    return;
  }

  // Error no esperado: se registra tecnicamente y se responde de forma generica.
  console.error('Error interno no controlado:', error);
  respuesta.status(500).json({
    error: 'Ocurrio un problema al procesar la solicitud. Intente nuevamente mas tarde.',
  });
}
