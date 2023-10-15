import Image from 'next/image';
import React from 'react';
import { PiHeart, PiMapPin } from 'react-icons/pi';

interface HotelCardProps {
  name: string;
  image: string;
  location: string;
  price: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ name, image, location, price }) => {
  return (
    <div className="bg-white flex-shrink-0 rounded-2xl py-2 px-2 w-[240px]">
<div className="h-32">

      <Image width={250} height={150} src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
</div>
      <div className="px-2 mt-5">
        <h2 className=" font-extrabold text-primaryColor mb-1">{name}</h2>
        <div className="flex items-center">
<span className='text-gray-400 mr-1'><PiMapPin/></span>
        <span className="text-gray-400 text-xs">{location}</span>
        </div>
        <div className="mt-3 flex items-center justify-between mb-3">
<span>

        <span className="text-lg mt-2 font-semibold">${price}</span> <span className="text-xs text-gray-400">/ night</span>
</span>
<button className='border-[1px] rounded-xl p-2 text-gray-500'><PiHeart/></button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
