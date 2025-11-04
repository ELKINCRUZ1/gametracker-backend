import React from 'react';

function JuegoCard({ juego }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      background: '#f9f9f9'
    }}>
      <h3>{juego.nombre}</h3>
      <p>Género: {juego.genero}</p>
      <p>Plataforma: {juego.plataforma}</p>
    </div>
  );
}

export default JuegoCard;
