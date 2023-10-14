import React from 'react';

interface HotelCardProps {
  name: string;
  image: string;
  location: string;
  price: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ name, image, location, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-lg mt-2">{price} / night</p>
      </div>
    </div>
  );
};

export default HotelCard;
