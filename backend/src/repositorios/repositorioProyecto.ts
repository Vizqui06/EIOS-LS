import { Proyecto } from '../modelos/proyecto';

/**
 * Repositorio en memoria, unicamente para desarrollo local.
 * Pendiente: reemplazar por la fuente de datos real (sincronizada desde el
 * sistema institucional autorizado, ver docs/lineamientos.md #15).
 */
const proyectos: Proyecto[] = [];

export async function listarProyectos(): Promise<Proyecto[]> {
  return [...proyectos];
}

export async function buscarProyectos(texto: string): Promise<Proyecto[]> {
  const termino = texto.toLowerCase();
  return proyectos.filter(
    (proyecto) =>
      proyecto.nombre.toLowerCase().includes(termino) ||
      proyecto.area.toLowerCase().includes(termino) ||
      proyecto.organizacion.toLowerCase().includes(termino),
  );
}
