import React from 'react';

const Title = () => {
  return (
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
};

const Navbar = ({ onShowAbout }) => {
  return (
    <nav className=" p-5 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Title/>
        <button
          onClick={onShowAbout}
          className="px-4 py-2 bg-rick hover:bg-morty text-white font-bold rounded-lg text-sm transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;