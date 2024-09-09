import React, { useState } from 'react';
import './App.css';
import './index.css';
import CharacterSearch from './CharacterSearch';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <div className="flex-grow mt-10">
        <CharacterSearch />
      </div>
      <div className="text-center my-4">
        <button
          onClick={toggleAbout}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          {showAbout ? 'Nascondi Informazioni' : 'Mostra Informazioni'}
        </button>
      </div>
      {showAbout && <About />}
      <Footer />
    </div>
  );
};

export default App;