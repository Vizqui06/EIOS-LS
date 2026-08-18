import { Router } from 'express';
import { manejarConsultaProyectos } from '../controladores/controladorProyectos';

export const rutaProyectos = Router();

rutaProyectos.get('/', manejarConsultaProyectos);
