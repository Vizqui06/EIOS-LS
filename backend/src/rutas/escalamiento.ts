import { Router } from 'express';
import { manejarListaEscalamientos } from '../controladores/controladorEscalamiento';

export const rutaEscalamiento = Router();

rutaEscalamiento.get('/', manejarListaEscalamientos);
