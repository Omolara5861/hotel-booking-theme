import Image from 'next/image';
import React from 'react'
import { PiMapPin, PiStar, PiStarFill } from 'react-icons/pi';

const formatCurrency=(amt:number)=>amt?.toLocaleString('en-US');
interface CardProps{image:string;
    title:string;location:string;price:number;
}
const ExploreFranceCard:React.FC<CardProps> = ({title, location, price, image}) => {
  return (
    <div className='flex-shrink-0 flex bg-white py-5 px-3 rounded-3xl gap-4 w-1/3'>
        <div className="rounded-[18px] self-center overflow-hidden flex-shrink-0 w-[100px] h-[70px]">
            <Image alt='' src={image} width={'100'} height={'50'} className='object-cover h-full w-full'/>
        </div>
        <div className="pr-3">
            <h3 className='text-xl font-black text-primaryColor'>{title || 'Eiffel Tower, Paris, France'}</h3>
            <div className="mt-2 flex justify-between">
                <div>
            <span className="text-gray-400 text-xs"> {location}</span>
                </div>
                <span className="text-lg font-semibold">${formatCurrency(price)}</span>
            </div>
        </div>
    </div>
  )
}

export default ExploreFranceCard