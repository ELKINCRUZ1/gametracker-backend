import { useEffect, useState } from 'react';
import JuegoCard from './JuegoCard';

const JuegoList = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchJuegos = async () => {
      const res = await fetch('http://localhost:3000/juegos');
      const data = await res.json();
      setJuegos(data);
    };
    fetchJuegos();
  }, []);

  return (
    <div>
      <h2>Juegos guardados</h2>
      <div className="juegos-container">
        {juegos.map(juego => (
          <JuegoCard key={juego._id} juego={juego} />
        ))}
      </div>
    </div>
  );
};

export default JuegoList;
