import { Proyecto } from '../modelos/proyecto';
import { buscarProyectos, listarProyectos } from '../repositorios/repositorioProyecto';

export async function obtenerProyectos(): Promise<Proyecto[]> {
  return listarProyectos();
}

export async function buscarProyectosPorTexto(texto: string): Promise<Proyecto[]> {
  if (!texto || texto.trim().length === 0) {
    return listarProyectos();
  }
  return buscarProyectos(texto.trim());
}
