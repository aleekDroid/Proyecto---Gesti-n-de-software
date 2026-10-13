# Pipeline CI/CD Automatizado para API REST

API REST desarrollada en Node.js y Express con integración y despliegue continuo automatizado utilizando GitHub Actions, Docker Hub y AWS EC2.

## Arquitectura del Flujo

1. **Push a rama `main`:** Dispara el flujo automatizado en GitHub Actions.
2. **Pruebas y Cobertura:** Ejecución de suites con Jest y Supertest (umbral >70%).
3. **Construcción y Registro:** Empaquetado en contenedor Docker y publicación en Docker Hub con tags `:latest` y commit SHA.
4. **Despliegue Continuo (CD):** Conexión vía SSH hacia AWS EC2, actualización del contenedor y mapeo en el puerto 80.

## Endpoints de la API

- `GET /api/health` - Comprobación de estado del servicio
- `GET /api/users` - Lista todos los usuarios
- `POST /api/users` - Registra un nuevo usuario
- `GET /api/users/:id` - Consulta de usuario por identificador
- `PUT /api/users/:id` - Actualización de usuario por identificador
- `DELETE /api/users/:id` - Eliminación de usuario por identificador

## Comandos para Ejecución Local

Instalar dependencias:
```bash
npm install