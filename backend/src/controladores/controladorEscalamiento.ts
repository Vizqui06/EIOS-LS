import { NextFunction, Request, Response } from 'express';
import { listarEscalamientos } from '../repositorios/repositorioEscalamiento';

/**
 * Expone los casos escalados al area responsable.
 * Pendiente: restringir con autenticacion/autorizacion de personal antes de produccion.
 */
export async function manejarListaEscalamientos(
  _peticion: Request,
  respuesta: Response,
  siguiente: NextFunction,
): Promise<void> {
  try {
    const escalamientos = await listarEscalamientos();
    respuesta.json({ escalamientos });
  } catch (error) {
    siguiente(error);
  }
}
