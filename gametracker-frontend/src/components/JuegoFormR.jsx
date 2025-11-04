import React, { useState } from 'react';

function JuegoFormR() {
  const [resena, setResena] = useState({
    juegoId: '',
    comentario: '',
    puntuacion: ''
  });

  const handleChange = (e) => {
    setResena({ ...resena, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/resenas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resena)
    })
      .then(res => res.json())
      .then(data => {
        alert('Reseña guardada');
        setResena({ juegoId: '', comentario: '', puntuacion: '' });
      })
      .catch(err => console.error('❌ Error al guardar reseña:', err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>Agregar reseña</h3>
      <input
        type="text"
        name="juegoId"
        placeholder="ID del juego"
        value={resena.juegoId}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="comentario"
        placeholder="Comentario"
        value={resena.comentario}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="number"
        name="puntuacion"
        placeholder="Puntuación (1-5)"
        value={resena.puntuacion}
        onChange={handleChange}
        min="1"
        max="5"
        required
      />
      <br />
      <button type="submit">Guardar reseña</button>
    </form>
  );
}

export default JuegoFormR;
