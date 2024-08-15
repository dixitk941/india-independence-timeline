import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} India's Independence Timeline. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://neocodenex.tech" className="text-saffron-600 hover:text-white transition duration-300">
            NeoCodeNex
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;