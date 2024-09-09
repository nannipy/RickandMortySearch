import React, { useState } from 'react';
import './App.css';
import './index.css';
import CharacterSearch from './CharacterSearch';
import Footer from './components/Footer';
import About from './components/About';
import CharacterDatabase from './components/CharacterDatabase';

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);

  const toggleAbout = () => setShowAbout(!showAbout);
  const toggleDatabase = () => setShowDatabase(!showDatabase);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <CharacterSearch />
          <div className="flex flex-col sm:flex-row justify-center items-center my-6 space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={toggleAbout}
              className="w-full sm:w-auto bg-rick hover:bg-morty text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              {showAbout ? 'Nascondi Informazioni' : 'Mostra Informazioni'}
            </button>
            <button
              onClick={toggleDatabase}
              className="w-full sm:w-auto bg-morty hover:bg-rick text-black font-bold py-4 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              {showDatabase ? 'Nascondi Database' : 'Mostra Database'}
            </button>
          </div>
          {showAbout && <About />}
          {showDatabase && <CharacterDatabase />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;