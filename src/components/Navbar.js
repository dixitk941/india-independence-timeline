import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Independence Timeline
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/timeline" className="text-lg text-gray-700 hover:text-saffron-600">
            Timeline
          </Link>
          <Link to="/freedom-fighters" className="text-lg text-gray-700 hover:text-saffron-600">
            Freedom Fighters
          </Link>
          <Link to="/independence-day-events" className="text-lg text-gray-700 hover:text-saffron-600">
            Events
          </Link>
          <Link to="/coronaera" className="text-lg text-gray-700 hover:text-saffron-600">
            CoronaEra
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;