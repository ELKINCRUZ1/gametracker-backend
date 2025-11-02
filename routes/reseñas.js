const express = require('express');
const router = express.Router();
const Reseña = require('../models/Reseña');

// Obtener todas las reseñas
router.get('/', async (req, res) => {
  const reseñas = await Reseña.find();
  res.json(reseñas);
});

// Crear una nueva reseña
router.post('/', async (req, res) => {
  const nuevaReseña = new Reseña(req.body);
  const reseñaGuardada = await nuevaReseña.save();
  res.json(reseñaGuardada);
});

// Actualizar una reseña
router.put('/:id', async (req, res) => {
  const reseñaActualizada = await Reseña.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(reseñaActualizada);
});

// Eliminar una reseña
router.delete('/:id', async (req, res) => {
  await Reseña.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Reseña eliminada' });
});

module.exports = router;
