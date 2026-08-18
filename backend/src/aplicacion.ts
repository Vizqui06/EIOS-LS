import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { limitadorSolicitudes } from './seguridad/limitadorSolicitudes';
import { manejarErrores } from './utilidades/manejarErrores';
import { rutaSalud } from './rutas/salud';
import { rutaChat } from './rutas/chat';
import { rutaProyectos } from './rutas/proyectos';
import { rutaEscalamiento } from './rutas/escalamiento';

/**
 * Construye la aplicacion Express con la configuracion base de seguridad.
 * La logica de negocio vive en servicios/, esta funcion solo ensambla capas.
 */
export function crearAplicacion(): Application {
  const aplicacion = express();

  const origenPermitido = process.env.ORIGEN_PERMITIDO ?? 'http://localhost:5173';

  aplicacion.use(helmet());
  aplicacion.use(cors({ origin: origenPermitido }));
  aplicacion.use(express.json({ limit: '100kb' }));
  aplicacion.use(limitadorSolicitudes);

  aplicacion.use('/salud', rutaSalud);
  aplicacion.use('/api/chat', rutaChat);
  aplicacion.use('/api/proyectos', rutaProyectos);
  aplicacion.use('/api/escalamiento', rutaEscalamiento);

  // El manejador de errores debe ser el ultimo middleware registrado.
  aplicacion.use(manejarErrores);

  return aplicacion;
}
