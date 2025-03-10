import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.length > 0 ? (
        characters.map((char) => <CharacterCard key={char.id} character={char} />)
      ) : (
        <p>No se encontraron personajes.</p>
      )}
    </div>
  );
};

export default CharacterList;
