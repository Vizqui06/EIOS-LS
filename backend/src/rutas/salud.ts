import { Router } from 'express';

export const rutaSalud = Router();

rutaSalud.get('/', (_peticion, respuesta) => {
  respuesta.json({ estado: 'ok' });
});
