import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm sm:text-base text-center">
            &copy; {new Date().getFullYear()} Rick and Morty Character Search
          </p>
          <p className="text-xs sm:text-sm text-center text-gray-400">
            Tutti i diritti riservati. Dati forniti dall'API di Rick and Morty.
          </p>
          <nav className="mt-4">
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              <li>
                <button className="text-gray-400 hover:text-white">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white">
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
