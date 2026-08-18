const URL_BASE = import.meta.env.VITE_URL_API ?? 'http://localhost:4000';

export interface RespuestaChat {
  idConversacion: string;
  texto: string;
  fuentes: string[];
  escalado: boolean;
}

/**
 * Envia un mensaje al backend y devuelve la respuesta del asistente.
 * No contiene logica de negocio; solo el contrato de comunicacion con la API.
 */
export async function enviarMensaje(
  mensaje: string,
  idConversacion?: string,
): Promise<RespuestaChat> {
  const respuesta = await fetch(`${URL_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mensaje, idConversacion }),
  });

  if (!respuesta.ok) {
    throw new Error('No fue posible obtener respuesta del asistente.');
  }

  return respuesta.json();
}
