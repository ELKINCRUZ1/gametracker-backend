import React, { useState } from 'react';

const ReseñaForm = ({ juegoId, onReseñaGuardada }) => {
  const [usuario, setUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [puntuacion, setPuntuacion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuario || !comentario || !puntuacion) {
      setMensaje('❌ Todos los campos son obligatorios.');
      return;
    }

    const puntuacionNum = parseInt(puntuacion);
    if (isNaN(puntuacionNum) || puntuacionNum < 1 || puntuacionNum > 5) {
      setMensaje('❌ La puntuación debe estar entre 1 y 5.');
      return;
    }

    const nuevaReseña = {
      usuario,
      comentario,
      puntuacion: puntuacionNum,
      juegoId
    };

    try {
      console.log('Enviando reseña:', nuevaReseña);
      // Usar ruta ASCII para POST
      const res = await fetch('http://localhost:3000/resenas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaReseña)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al guardar reseña');
      }

      const reseñaGuardada = await res.json();
      console.log('Reseña guardada:', reseñaGuardada);
      setMensaje('✅ Reseña guardada exitosamente.');
      setUsuario('');
      setComentario('');
      setPuntuacion('');
      onReseñaGuardada(); // Activar el refresco de la lista de reseñas
    } catch (error) {
      setMensaje('❌ Error al guardar la reseña.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar reseña</h3>

      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />

      <textarea
        placeholder="Comentario"
        value={comentario}
        onChange={e => setComentario(e.target.value)}
      />

      <input
        type="number"
        placeholder="Puntuación (1-5)"
        value={puntuacion}
        onChange={e => setPuntuacion(e.target.value)}
        min="1"
        max="5"
      />

      <button type="submit">Guardar reseña</button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default ReseñaForm;
