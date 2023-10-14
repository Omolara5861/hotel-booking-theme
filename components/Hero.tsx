import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-[200px] rounded-3xl">
      <div className="bg-black bg-opacity-30 h-[200px] rounded-3xl">
      </div>
        <form className="bg-white rounded-3xl w-[85%] m-auto h-[80px] mt-5 p-4 -mt-6">
            <input type="text" className="outline-none" />
            <input type="text" className="outline-none"/>
            <input type="text" className="outline-none" />
            <button className=" bg-black">Search</button>
        </form>
    </div>
  );
};

export default HeroSection;
