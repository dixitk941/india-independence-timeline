import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Independence Timeline
        </Link>
        <div className="space-x-6">
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
