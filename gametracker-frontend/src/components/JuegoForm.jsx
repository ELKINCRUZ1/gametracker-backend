import { useState } from 'react';

const JuegoForm = () => {
  const [juego, setJuego] = useState({
    titulo: '',
    plataforma: '',
    genero: '',
    lanzamiento: ''
  });

  const handleChange = (e) => {
    setJuego({ ...juego, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/juegos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(juego)
    });
    const data = await res.json();
console.log('Juego guardado:', JSON.stringify(data, null, 2));
    setJuego({ titulo: '', plataforma: '', genero: '', lanzamiento: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar nuevo juego</h2>
      <input name="titulo" value={juego.titulo} onChange={handleChange} placeholder="Título" />
      <input name="plataforma" value={juego.plataforma} onChange={handleChange} placeholder="Plataforma" />
      <input name="genero" value={juego.genero} onChange={handleChange} placeholder="Género" />
      <input name="lanzamiento" value={juego.lanzamiento} onChange={handleChange} placeholder="Lanzamiento (YYYY-MM-DD)" />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default JuegoForm;
