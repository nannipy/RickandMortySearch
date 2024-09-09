import React from 'react';

const CharacterCard = ({ character }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
    <div className="p-3 sm:p-4">
      <h2 className="font-bold text-lg sm:text-xl mb-2 text-gray-800 dark:text-white">{character.name}</h2>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
        <span className="font-semibold">Status:</span> 
        <span className={`ml-1 px-2 py-1 rounded-full ${
          character.status === 'Alive' ? 'bg-green-200 text-green-800' :
          character.status === 'Dead' ? 'bg-red-200 text-red-800' :
          'bg-gray-200 text-gray-800'
        }`}>
          {character.status}
        </span>
      </p>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Species:</span> {character.species}</p>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Gender:</span> {character.gender}</p>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Origin:</span> {character.origin.name}</p>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Location:</span> {character.location.name}</p>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300"><span className="font-semibold">Episodes:</span> {character.episode.length}</p>
    </div>
  </div>
);

export default CharacterCard;
