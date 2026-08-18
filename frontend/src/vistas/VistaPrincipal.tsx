import { BarraEtapas } from '../componentes/BarraEtapas';
import { PanelChat } from '../componentes/PanelChat';
import './VistaPrincipal.css';

export function VistaPrincipal() {
  return (
    <main className="vista-principal">
      <header className="vista-principal__cabecera">
        <p className="vista-principal__eyebrow">Compromiso Social UP</p>
        <h1>Orientacion de Labor Social</h1>
        <p className="vista-principal__subtitulo">
          Resuelve dudas sobre el proceso. Para tramites, autorizaciones o casos especiales,
          el asistente te dirige con el area responsable.
        </p>
      </header>

      <div className="vista-principal__cuerpo">
        <aside className="vista-principal__barra">
          <BarraEtapas />
        </aside>
        <PanelChat />
      </div>
    </main>
  );
}
