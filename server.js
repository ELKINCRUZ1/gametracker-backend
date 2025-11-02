const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const juegosRoutes = require('./routes/juegos');
const reseñasRoutes = require('./routes/reseñas');

app.use('/juegos', juegosRoutes);
app.use('/reseñas', reseñasRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenido a GameTracker API");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
