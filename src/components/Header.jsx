import React from "react";
import logo from "/logo.png";
import "@fontsource/playfair-display";

const Header = () => {
  return (
    <header className="bg-purple-500 text-white fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo and Shop Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Lilac Luxe Logo"
            className="h-10 w-10 rounded-full mr-3"
          />
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Lilac Luxe
          </h1>
        </div>
        {/* Navigation */}
        <nav className="space-x-6">
          <a href="#heroshop" className="hover:text-purple-200">
            Home
          </a>
          <a href="#about" className="hover:text-purple-200">
            About
          </a>
          <a href="#collections" className="hover:text-purple-200">
            Collections
          </a>
          <a href="#download" className="hover:text-purple-200">
            Download
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
