// app.test.js
const request = require('supertest');
const app = require('./app');

describe('Pruebas de la API REST', () => {
    
    // Prueba 1: Revisa el endpoint health.
    it('Debe responder OK en /api/health', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('OK');
    });

    // Prueba 2: Revisa que devuelva usuarios.
    it('Debe obtener la lista de usuarios', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    // Prueba 3: Revisa que se pueda crear un usuario.
    it('Debe crear un usuario nuevo', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'Nuevo Usuario' });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Nuevo Usuario');
    });

    // Prueba 4: Revisa que devuelva un usuario por ID
    it('Debe obtener un usuario por ID', async () => {
        const res = await request(app).get('/api/users/1');
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Aleek');
    });

    // Prueba 5: Revisa que actualice un usuario
    it('Debe actualizar un usuario', async () => {
        const res = await request(app)
            .put('/api/users/1')
            .send({ name: 'Beto' });
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Beto');
    });

    // Prueba 6: Revisa que elimine un usuario
    it('Debe eliminar un usuario', async () => {
        const res = await request(app).delete('/api/users/1');
        expect(res.statusCode).toBe(200);
    });
});