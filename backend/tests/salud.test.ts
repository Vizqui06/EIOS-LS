import request from 'supertest';
import { crearAplicacion } from '../src/aplicacion';

describe('GET /salud', () => {
  it('responde con estado ok', async () => {
    const aplicacion = crearAplicacion();
    const respuesta = await request(aplicacion).get('/salud');

    expect(respuesta.status).toBe(200);
    expect(respuesta.body).toEqual({ estado: 'ok' });
  });
});
