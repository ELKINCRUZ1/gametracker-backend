import { useState } from 'react';

const ReseñaForm = ({ juegoId }) => {
  const [reseña, setReseña] = useState({
    usuario: '',
    comentario: '',
    puntuacion: ''
  });

  const handleChange = (e) => {
    setReseña({ ...reseña, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/reseñas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...reseña, juegoId })
    });
    const data = await res.json();
    console.log('Reseña guardada:', data);
    setReseña({ usuario: '', comentario: '', puntuacion: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar reseña</h3>
      <input name="usuario" value={reseña.usuario} onChange={handleChange} placeholder="Tu nombre" />
      <textarea name="comentario" value={reseña.comentario} onChange={handleChange} placeholder="Comentario" />
      <input name="puntuacion" value={reseña.puntuacion} onChange={handleChange} placeholder="Puntuación (1-5)" />
      <button type="submit">Enviar reseña</button>
    </form>
  );
};

export default ReseñaForm;
