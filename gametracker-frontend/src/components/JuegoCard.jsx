const JuegoCard = ({ juego }) => {
  return (
    <div className="juego-card">
      <h3>{juego.titulo}</h3>
      <p><strong>Plataforma:</strong> {juego.plataforma}</p>
      <p><strong>Género:</strong> {juego.genero}</p>
      <p><strong>Lanzamiento:</strong> {new Date(juego.lanzamiento).toLocaleDateString()}</p>
    </div>
  );
};

export default JuegoCard;
