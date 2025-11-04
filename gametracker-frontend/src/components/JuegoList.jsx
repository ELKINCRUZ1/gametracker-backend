import React, { useEffect, useState } from 'react';
import JuegoCard from './JuegoCard';

function JuegoList() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    fetch('/juegos')
      .then(res => res.json())
      .then(data => setJuegos(data))
      .catch(err => console.error('Error al cargar juegos:', err));
  }, []);

  return (
    <div>
      <h2>Lista de Juegos</h2>
      {juegos.length === 0 ? (
        <p>No hay juegos disponibles.</p>
      ) : (
        juegos.map(juego => (
          <JuegoCard key={juego._id} juego={juego} />
        ))
      )}
    </div>
  );
}

export default JuegoList;
