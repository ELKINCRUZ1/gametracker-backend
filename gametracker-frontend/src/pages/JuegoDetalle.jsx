import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function JuegoDetalle() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    fetch(`/juegos/${id}`)
      .then(res => res.json())
      .then(data => setJuego(data))
      .catch(err => console.error('Error al cargar juego:', err));
  }, [id]);

  if (!juego) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{juego.nombre}</h2>
      <p>Género: {juego.genero}</p>
      <p>Plataforma: {juego.plataforma}</p>
      <p>Reseñas: {juego.reseñas?.length || 0}</p>
    </div>
  );
}

export default JuegoDetalle;
