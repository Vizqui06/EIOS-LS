import './BarraEtapas.css';

const ETAPAS = [
  { id: 'curso', etiqueta: 'Curso' },
  { id: 'proyecto', etiqueta: 'Proyecto' },
  { id: 'inscripcion', etiqueta: 'Inscripcion' },
  { id: 'actividades', etiqueta: 'Actividades' },
  { id: 'cierre', etiqueta: 'Cierre' },
] as const;

interface PropiedadesBarraEtapas {
  etapaActiva?: string;
}

/**
 * Representa el recorrido real del proceso de Labor Social.
 * Sirve como orientacion permanente para el alumno mientras conversa con el asistente.
 */
export function BarraEtapas({ etapaActiva }: PropiedadesBarraEtapas) {
  return (
    <ol className="barra-etapas" aria-label="Etapas del proceso de Labor Social">
      {ETAPAS.map((etapa, indice) => (
        <li
          key={etapa.id}
          className={etapa.id === etapaActiva ? 'barra-etapas__item barra-etapas__item--activa' : 'barra-etapas__item'}
        >
          <span className="barra-etapas__numero">{String(indice + 1).padStart(2, '0')}</span>
          <span className="barra-etapas__etiqueta">{etapa.etiqueta}</span>
        </li>
      ))}
    </ol>
  );
}
