import React, { useState, useEffect, useCallback } from 'react';
import CharacterCard from '../CharacterCard';
import '../App.css';

const CharacterDatabase = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Impossibile recuperare i personaggi');
      }
      const data = await response.json();
      setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
    } catch (error) {
      console.error('Errore nel recupero dei personaggi:', error);
      setError('Impossibile recuperare i personaggi. Per favore, riprova.');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="pb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 dark:text-white text-black">Database dei Personaggi</h2>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 sm:mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {!loading && characters.length > 0 && (
        <div className="text-center mb-6 sm:mb-8">
          <button 
            onClick={loadMore} 
            className="w-full sm:w-auto bg-morty hover:bg-rick text-black font-bold py-4 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
            Carica altri
          </button>
        </div>
      )}
      {loading && (
        <div className="text-center mb-6 sm:mb-8">
          <p>Caricamento...</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDatabase;