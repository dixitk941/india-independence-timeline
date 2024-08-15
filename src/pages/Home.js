import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat animate-fadeIn" style={{ backgroundImage: `url('/path/to/background-image.jpg')` }}>
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center animate-slideUp max-w-md mx-4 md:mx-auto mb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600 animate-pulse">India's Independence Timeline</h1>
        <p className="mt-4 text-base md:text-lg text-gray-700">Explore the journey to freedom, with a modern twist.</p>
        <Link to="/timeline">
          <button className="px-4 py-2 md:px-6 md:py-3 mt-8 text-white bg-green-600 hover:bg-[#FF9933] rounded-lg transition duration-300 animate-bounce">
            Explore Timeline
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#FF9933]"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#138808]"></div>
    </div>
  );
}

export default Home;