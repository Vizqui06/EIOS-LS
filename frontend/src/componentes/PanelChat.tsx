import { FormEvent, useState } from 'react';
import { enviarMensaje } from '../servicios/clienteChat';
import './PanelChat.css';

interface Turno {
  autor: 'alumno' | 'asistente';
  texto: string;
  escalado?: boolean;
}

/**
 * Panel conversacional. Contiene unicamente presentacion e interaccion;
 * la logica de negocio y las reglas viven en el backend.
 */
export function PanelChat() {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [entrada, setEntrada] = useState('');
  const [idConversacion, setIdConversacion] = useState<string | undefined>(undefined);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function manejarEnvio(evento: FormEvent<HTMLFormElement>): Promise<void> {
    evento.preventDefault();
    const mensaje = entrada.trim();
    if (!mensaje || enviando) {
      return;
    }

    setTurnos((anteriores) => [...anteriores, { autor: 'alumno', texto: mensaje }]);
    setEntrada('');
    setEnviando(true);
    setError(null);

    try {
      const respuesta = await enviarMensaje(mensaje, idConversacion);
      setIdConversacion(respuesta.idConversacion);
      setTurnos((anteriores) => [
        ...anteriores,
        { autor: 'asistente', texto: respuesta.texto, escalado: respuesta.escalado },
      ]);
    } catch {
      setError('No fue posible contactar al asistente. Intenta de nuevo en un momento.');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="panel-chat" aria-label="Conversacion con el asistente de Labor Social">
      <div className="panel-chat__historial">
        {turnos.length === 0 && (
          <p className="panel-chat__vacio">
            Preguntame sobre el curso, la busqueda de proyecto, tu inscripcion, actividades o cierre.
          </p>
        )}
        {turnos.map((turno, indice) => (
          <div
            key={indice}
            className={
              turno.autor === 'alumno' ? 'panel-chat__turno panel-chat__turno--alumno' : 'panel-chat__turno'
            }
          >
            <p>{turno.texto}</p>
            {turno.escalado && (
              <span className="panel-chat__aviso">Se genero seguimiento con el area responsable.</span>
            )}
          </div>
        ))}
        {enviando && <p className="panel-chat__cargando">Consultando la informacion documentada…</p>}
      </div>

      {error && <p className="panel-chat__error">{error}</p>}

      <form className="panel-chat__formulario" onSubmit={manejarEnvio}>
        <input
          type="text"
          value={entrada}
          onChange={(evento) => setEntrada(evento.target.value)}
          placeholder="Escribe tu pregunta"
          aria-label="Mensaje para el asistente"
        />
        <button type="submit" disabled={enviando}>
          Enviar
        </button>
      </form>
    </section>
  );
}
