import React, { useState } from 'react';

const JuegoForm = () => {
  const [titulo, setTitulo] = useState('');
  const [plataforma, setPlataforma] = useState('');
  const [genero, setGenero] = useState('');
  const [lanzamiento, setLanzamiento] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!titulo || !plataforma || !genero || !lanzamiento) {
      setMensaje('❌ Todos los campos son obligatorios.');
      return;
    }

    const nuevoJuego = { titulo, plataforma, genero, lanzamiento };

    try {
      const res = await fetch('http://localhost:3000/juegos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoJuego)
      });

      if (!res.ok) throw new Error('Error al guardar juego');

      setMensaje('✅ Juego guardado exitosamente.');
      setTitulo('');
      setPlataforma('');
      setGenero('');
      setLanzamiento('');
    } catch (error) {
      console.error('❌ Error al guardar juego:', error);
      setMensaje('❌ Error al guardar el juego.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Agregar nuevo juego</h2>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Plataforma"
        value={plataforma}
        onChange={e => setPlataforma(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Género"
        value={genero}
        onChange={e => setGenero(e.target.value)}
        required
      />
      <br />
      <input
        type="date"
        value={lanzamiento}
        onChange={e => setLanzamiento(e.target.value)}
        required
      />
      <br />
      <button type="submit">Guardar juego</button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default JuegoForm;
