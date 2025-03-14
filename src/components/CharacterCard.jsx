const CharacterCard = ({ character }) => {

  const reproducirSonido = () => {
    const audio = new Audio(character.sonido);
    audio.play().then(() => {
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reinicia el audio al inicio
      }, 5000); // ⏳ Detiene el sonido a los 5 segundos
    }).catch(error => console.error("Error al reproducir sonido:", error));
  };

  return (
    <div className="card">
      <img src={character.image} alt={character.nombre} />

      <h3>{character.nombre}</h3>
      <p> RAZA: {character.raza}</p>
      <p> KI: {character.ki}</p>
      <p> TECNICA: {character.poder}</p>
      <button className="boton-sonido" onClick={reproducirSonido}>grito</button>
    </div>
    
  );
};

export default CharacterCard;
