import { Router } from 'express';
import { manejarMensajeChat } from '../controladores/controladorChat';

export const rutaChat = Router();

rutaChat.post('/', manejarMensajeChat);
