import rateLimit from 'express-rate-limit';

/**
 * Limita solicitudes por IP para mitigar abuso del chatbot y de las APIs publicas.
 * Los valores son un punto de partida y deben ajustarse segun el trafico real.
 */
export const limitadorSolicitudes = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Se alcanzo el limite de solicitudes. Intente nuevamente en un momento.',
  },
});
