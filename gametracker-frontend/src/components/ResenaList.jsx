import React, { useEffect, useState } from 'react';

function ResenaList() {
  const [resenas, setResenas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/resenas')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar resenas');
        return res.json();
      })
      .then(data => setResenas(data))
      .catch(err => {
        console.error('Error al cargar resenas:', err);
        setError('No se pudo conectar con el backend');
      });
  }, []);

  return (
    <div>
      <h3>Resenas registradas</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {resenas.length === 0 && !error ? (
        <p>No hay resenas disponibles.</p>
      ) : (
        resenas.map((r, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1rem',
            background: '#f0f0f0'
          }}>
            <p><strong>Juego:</strong> {r.juegoId?.nombre || r.juegoId}</p>
            <p><strong>Comentario:</strong> {r.comentario}</p>
            <p><strong>Puntuación:</strong> {r.puntuacion}</p>
            <p><strong>Usuario:</strong> {r.usuario || 'Anónimo'}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ResenaList;
