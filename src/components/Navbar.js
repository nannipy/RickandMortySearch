import React from 'react';
import Title from './Title'


const Navbar = () => {
  return (
    <navbar className="">
       <div className="flex justify-between items-center mb-8 mt-2 ">
        <Title/>
       </div>
    </navbar>
  );
};
export default Navbar;