import React from 'react';

function HomePage (){
  return (
    <section
      id="heroshop"
      className="bg-gradient-to-r from-purple-300 to-pink-300 text-center py-16 px-6 min-h-screen" // Added min-h-screen
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Hero Content */}
        <div>
          <h1 className="text-5xl font-bold text-purple-800">Welcome to Lilac Luxe</h1>
          <p className="mt-4 text-lg text-purple-700">
            Your go-to destination for trendy, stylish, and high-quality fashion. Express your personality with our curated collection.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600">
            Shop Now
          </button>
        </div>

        {/* Right: Featured Products */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={require('../assets/Heropic01.jpg')} // Replace with correct image path
              alt="Trendy Outfit 1"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={require('../assets/Heropic02.jpg')} // Replace with correct image path
              alt="Trendy Outfit 2"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={require('../assets/Heropic03.jpg')} // Replace with correct image path
              alt="Trendy Outfit 3"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={require('../assets/Heropic04.jpg')} // Replace with correct image path
              alt="Trendy Outfit 4"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
