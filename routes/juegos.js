const express = require('express');
const router = express.Router();
const Juego = require('../models/Juego');

// Obtener todos los juegos
router.get('/', async (req, res) => {
  const juegos = await Juego.find();
  res.json(juegos);
});

// Crear un nuevo juego
router.post('/', async (req, res) => {
  const nuevoJuego = new Juego(req.body);
  const juegoGuardado = await nuevoJuego.save();
  res.json(juegoGuardado);
});

// Actualizar un juego
router.put('/:id', async (req, res) => {
  const juegoActualizado = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(juegoActualizado);
});

// Eliminar un juego
router.delete('/:id', async (req, res) => {
  await Juego.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Juego eliminado' });
});

module.exports = router;
