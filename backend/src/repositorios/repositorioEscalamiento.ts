import { Escalamiento } from '../modelos/escalamiento';

/**
 * Repositorio en memoria, unicamente para desarrollo local.
 * Pendiente: reemplazar por persistencia real antes de cualquier ambiente compartido.
 */
const escalamientos: Escalamiento[] = [];

export async function guardarEscalamiento(escalamiento: Escalamiento): Promise<Escalamiento> {
  escalamientos.push(escalamiento);
  return escalamiento;
}

export async function listarEscalamientos(): Promise<Escalamiento[]> {
  return [...escalamientos];
}
