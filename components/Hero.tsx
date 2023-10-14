import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-96">
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-semibold">Find Your Perfect Stay</h1>
          <p className="text-lg mt-4">Discover amazing hotels worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
