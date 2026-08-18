# Pruebas

Pruebas de integracion y extremo a extremo que cruzan capas (API + reglas + IA).

Las pruebas unitarias de cada paquete viven junto a su codigo:
- `backend/tests`
- (agregar `frontend/tests` y `chatbot/tests` cuando existan casos que probar)

Este directorio se usa para pruebas que no pertenecen a un solo paquete,
por ejemplo flujos completos de conversacion o escenarios de escalamiento.
