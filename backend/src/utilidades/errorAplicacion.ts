/**
 * Error controlado de la aplicacion. Permite distinguir fallos esperados
 * (validacion, autorizacion, datos no encontrados) de fallos internos,
 * de forma que el manejador de errores pueda responder sin exponer detalles tecnicos.
 */
export class ErrorAplicacion extends Error {
  public readonly codigoEstado: number;
  public readonly esOperacional: boolean;

  constructor(mensaje: string, codigoEstado = 400) {
    super(mensaje);
    this.codigoEstado = codigoEstado;
    this.esOperacional = true;
    Object.setPrototypeOf(this, ErrorAplicacion.prototype);
  }
}
