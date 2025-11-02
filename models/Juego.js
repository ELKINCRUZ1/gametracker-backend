const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  titulo: String,
  plataforma: String,
  completado: Boolean,
  horasJugadas: Number,
  puntuacion: Number
});

module.exports = mongoose.model('Juego', juegoSchema);
