/**
 * Tipos compartidos del pipeline de IA.
 * Este archivo no contiene logica, solo contratos entre modulos.
 */

export type EtapaProceso =
  | 'informacionGeneral'
  | 'cursoLaborSocial'
  | 'consultaProyectos'
  | 'inscripcion'
  | 'actividades'
  | 'cierre'
  | 'casoEspecial'
  | 'desconocida';

export interface IntencionDetectada {
  etapa: EtapaProceso;
  resumen: string;
}

export interface FragmentoDocumental {
  idDocumento: string;
  titulo: string;
  contenido: string;
  vigente: boolean;
  fuente: string;
}

export interface ContextoRecuperado {
  fragmentos: FragmentoDocumental[];
  tieneInformacionSuficiente: boolean;
}

export interface ResultadoReglas {
  permiteResponder: boolean;
  motivoBloqueo?: string;
}

export interface RespuestaGenerada {
  texto: string;
  fuentes: string[];
}

export interface ResultadoValidacion {
  estaSustentada: boolean;
  requiereEscalamiento: boolean;
  motivo?: string;
}
