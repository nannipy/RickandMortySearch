import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './App.css';
import './index.css';



const CharacterCard = ({ character }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{character.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
        <span className="font-semibold">Status:</span> 
        <span className={`ml-1 px-2 py-1 rounded-full ${
          character.status === 'Alive' ? 'bg-green-200 text-green-800' :
          character.status === 'Dead' ? 'bg-red-200 text-red-800' :
          'bg-gray-200 text-gray-800'
        }`}>
          {character.status}
        </span>
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Species:</span> {character.species}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Gender:</span> {character.gender}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Origin:</span> {character.origin.name}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Location:</span> {character.location.name}</p>
    </div>
  </div>
);

const CharacterSearch = () => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(20);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(1);

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

  const fetchCharacters = async () => {
    setLoading(true);
    setError(null);
    let url = `https://rickandmortyapi.com/api/character/?page=${page}&`;
    if (name) url += `name=${encodeURIComponent(name)}&`;
    if (status) url += `status=${status}&`;
    if (species) url += `species=${encodeURIComponent(species)}&`;
    if (gender) url += `gender=${gender}&`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const data = await response.json();
      setCharacters(prevCharacters => [...prevCharacters, ...data.results].slice(0, count));
    } catch (error) {
      console.error('Error fetching characters:', error);
      setError('Failed to fetch characters. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setCharacters([]);
    setPage(1);
    fetchCharacters();
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    fetchCharacters();
  };
  const Title = () => (
    
<div className='container'>
<div className='title'>
    Rick
    <span> and </span>
    Morty Character Search
</div>
<div className='title middle'>
    Rick
    <span> and </span>
    Morty Character Search
</div>
<div className='title bottom'>
    Rick
    <span> and </span>
    Morty Character Search 
</div>
</div>
  );

  return (
    
    <div className="p-4 max-w-7xl mx-auto">
          
      <div className="flex justify-between items-center mb-8">
      <Title/>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Character name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="">Select status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <input
            type="text"
            placeholder="Species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="">Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
          <input
            type="number"
            placeholder="Number of characters"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            min="1"
            max="100"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
        </div>
        <button 
          onClick={handleSearch} 
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Searching...
            </span>
          ) : 'Search'}
        </button>
      </div>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {characters.length > 0 && characters.length < count && (
        <div className="mt-8 text-center">
          <button 
            onClick={loadMore} 
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            disabled={loading}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <CharacterSearch />
    </div>
  );
};

export default App;