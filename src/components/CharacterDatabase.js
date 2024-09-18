import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import '../App.css';
import { Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import About from '../About';

const CharacterDatabase = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [originFilter, setOriginFilter] = useState(''); // Nuovo stato per il filtro dell'origine
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(20);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        let allCharacters = [];
        let nextPage = 'https://rickandmortyapi.com/api/character';

        while (nextPage) {
          const response = await fetch(nextPage);
          if (!response.ok) {
            throw new Error('Impossibile recuperare i personaggi');
          }
          const data = await response.json();
          allCharacters = [...allCharacters, ...data.results];
          nextPage = data.info.next;
        }

        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters);
      } catch (error) {
        console.error('Errore nel recupero dei personaggi:', error);
        setError('Impossibile recuperare i personaggi. Per favore, riprova.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);


  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  useEffect(() => {
    const filtered = characters.filter(character => 
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === '' || character.status === statusFilter) &&
      (speciesFilter === '' || character.species === speciesFilter) &&
      (genderFilter === '' || character.gender === genderFilter) &&
      (typeFilter === '' || character.type.toLowerCase().includes(typeFilter.toLowerCase())) &&
      (originFilter === '' || character.origin.name.toLowerCase().includes(originFilter.toLowerCase()))
    );
    setFilteredCharacters(filtered);
    setCurrentPage(1); // Resetta la pagina corrente quando i filtri cambiano
  }, [searchTerm, statusFilter, speciesFilter, genderFilter, typeFilter, originFilter, characters]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);


  const nextPage = () => {
    if (currentPage < Math.ceil(filteredCharacters.length / charactersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="pb-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="flex justify-between items-center mb-8 mt-2 ">
        
        <Navbar onShowAbout={toggleAbout} />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white mt-10 "
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      {showAbout ? (
        <About />
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Cerca per nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-el w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none form-el w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                <option value="">Tutti gli stati</option>
                <option value="Alive">Vivo</option>
                <option value="Dead">Morto</option>
                <option value="unknown">Sconosciuto</option>
              </select>
              <input
                type="text"
                placeholder="Filtra per specie"
                value={speciesFilter}
                onChange={(e) => setSpeciesFilter(e.target.value)}
                className="form-el w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="appearance-none form-el w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                <option value="">Tutti i generi</option>
                <option value="Male">Maschio</option>
                <option value="Female">Femmina</option>
                <option value="Genderless">Senza genere</option>
                <option value="unknown">Sconosciuto</option>
              </select>
              <input
                type="text"
                placeholder="Filtra per tipo"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="form-el w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <input
                type="text"
                placeholder="Filtra per origine"
                value={originFilter}
                onChange={(e) => setOriginFilter(e.target.value)}
                className="form-el w-full p-3 sm:p-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          {loading ? (
            <div className="text-center mb-6">
              <p className="text-xl">Caricamento di tutti i personaggi...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCharacters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </div>
              <div className="mt-8 flex justify-center items-center space-x-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-lg font-semibold">
                  Pagina {currentPage} di {Math.ceil(filteredCharacters.length / charactersPerPage)}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === Math.ceil(filteredCharacters.length / charactersPerPage)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterDatabase;