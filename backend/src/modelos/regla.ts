export interface Regla {
  id: string;
  descripcion: string;
  evaluar: (contexto: ContextoRegla) => boolean;
  mensajeBloqueo: string;
}

export interface ContextoRegla {
  etapa: string;
  mensaje: string;
}
