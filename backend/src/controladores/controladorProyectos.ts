import { NextFunction, Request, Response } from 'express';
import { buscarProyectosPorTexto } from '../servicios/servicioProyectos';

export async function manejarConsultaProyectos(
  peticion: Request,
  respuesta: Response,
  siguiente: NextFunction,
): Promise<void> {
  try {
    const texto = typeof peticion.query.q === 'string' ? peticion.query.q : '';
    const proyectos = await buscarProyectosPorTexto(texto);
    respuesta.json({ proyectos });
  } catch (error) {
    siguiente(error);
  }
}
