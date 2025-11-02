const mongoose = require('mongoose');

const reseñaSchema = new mongoose.Schema({
  juegoId: mongoose.Schema.Types.ObjectId,
  autor: String,
  contenido: String,
  estrellas: Number
});

module.exports = mongoose.model('Reseña', reseñaSchema);
