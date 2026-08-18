import { FragmentoDocumental, RespuestaGenerada } from '../tipos';
import { construirPromptRespuesta } from '../prompts/plantillaRespuesta';

/**
 * Genera una respuesta a partir del contexto documental recuperado.
 * Pendiente: conectar con el proveedor de LLM elegido (ver backend/.env.example: LLM_API_KEY).
 * Esta funcion NO decide si la respuesta es apta para el usuario; esa decision
 * corresponde al modulo de validacion.
 */
export async function generarRespuesta(
  pregunta: string,
  fragmentos: FragmentoDocumental[],
): Promise<RespuestaGenerada> {
  const prompt = construirPromptRespuesta(pregunta, fragmentos);

  // TODO: sustituir por la llamada real al proveedor de LLM.
  console.debug('Prompt de generacion construido (pendiente de envio a LLM):', prompt.length);

  return {
    texto: 'Funcionalidad de generacion pendiente de integracion con el proveedor de IA.',
    fuentes: fragmentos.map((fragmento) => fragmento.idDocumento),
  };
}
