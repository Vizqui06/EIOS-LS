import dotenv from 'dotenv';
import { crearAplicacion } from './aplicacion';

dotenv.config();

const puerto = Number(process.env.PORT) || 4000;
const aplicacion = crearAplicacion();

aplicacion.listen(puerto, () => {
  // Se informa el arranque del servidor sin exponer configuracion sensible.
  console.log(`Backend de Labor Social escuchando en el puerto ${puerto}`);
});
