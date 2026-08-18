export type EstadoEscalamiento = 'pendiente' | 'enProceso' | 'resuelto';

export interface Escalamiento {
  id: string;
  idConversacion: string;
  motivo: string;
  mensajeOriginal: string;
  estado: EstadoEscalamiento;
  creadoEn: Date;
}
