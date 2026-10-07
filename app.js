// app.js
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Aleek' }];

// 1. Health check (para saber si la API está viva)
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// 2. Obtener todos los usuarios
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

// 3. Crear un usuario
app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 4. Obtener un usuario por ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
});

// 5. Actualizar un usuario
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    user.name = req.body.name;
    res.status(200).json(user);
});

// 6. Eliminar un usuario
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(200).json({ message: 'Usuario eliminado' });
});

module.exports = app; // Exportamos la app, pero NO la encendemos aquí