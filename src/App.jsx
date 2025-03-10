import { useState, useEffect } from "react"; 
import SearchBar from "./components/SearchBar"; // Componente para la barra de búsqueda
import CharacterList from "./components/CharacterList"; // Componente que muestra la lista de personajes
import personajes from "./data/personajes.json"; // Importa los datos de los personajes desde un archivo JSON
import "./styles.css"; // Importa los estilos CSS

export default function App() {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para almacenar los personajes filtrados
  const [filteredCharacters, setFilteredCharacters] = useState(personajes);

  // Estado para manejar el estado de carga
  const [loading, setLoading] = useState(true);

  // Estado para manejar el modo oscuro o claro
  const [darkMode, setDarkMode] = useState(false);

  // Simula una carga inicial con un retraso de 1 segundo
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Filtra los personajes según el término de búsqueda cada vez que cambia searchTerm
  useEffect(() => {
    const filtered = personajes.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchTerm]);

  return (
    <div 
      className={darkMode ? "dark" : "light"} // Aplica la clase CSS según el modo oscuro/claro
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }} 
    >
      {/* Botón para alternar entre modo claro y oscuro */}
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>

      <h1>Personajes de disney</h1>

      {/* Componente de barra de búsqueda */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Muestra un mensaje de carga mientras se inicializan los datos */}
      {loading ? <p>Cargando personajes...</p> : <CharacterList characters={filteredCharacters} />}
    </div>
  );
}
