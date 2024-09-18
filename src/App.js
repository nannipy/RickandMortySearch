import React from 'react';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import CharacterDatabase from './components/CharacterDatabase';

const App = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <CharacterDatabase />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;