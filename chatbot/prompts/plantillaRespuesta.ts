import { FragmentoDocumental } from '../tipos';

/**
 * Construye el prompt de generacion a partir de fragmentos documentales ya recuperados.
 * El prompt exige que el modelo responda unicamente con base en el contexto entregado
 * y que declare cuando la informacion no esta documentada (docs/lineamientos.md #9).
 */
export function construirPromptRespuesta(pregunta: string, fragmentos: FragmentoDocumental[]): string {
  const contexto = fragmentos
    .map((fragmento) => `[${fragmento.idDocumento}] ${fragmento.titulo}\n${fragmento.contenido}`)
    .join('\n\n');

  return [
    'Eres el asistente de orientacion de Labor Social / Compromiso Social UP.',
    'Responde unicamente con base en el CONTEXTO. No debes usar conocimiento externo.',
    'Si el CONTEXTO no contiene la respuesta, indica que debe verificarse con el area responsable.',
    'No confirmes inscripciones, liberacion de creditos, autorizaciones ni excepciones.',
    '',
    'CONTEXTO:',
    contexto || '(sin fragmentos disponibles)',
    '',
    `PREGUNTA: ${pregunta}`,
  ].join('\n');
}
