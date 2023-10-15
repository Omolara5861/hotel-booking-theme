import Image from 'next/image';
import React from 'react'
import { PiStar, PiStarFill } from 'react-icons/pi';

const formatCurrency=(amt:number)=>amt?.toLocaleString('en-US');
interface CardProps{image:string;
    title:string;desc:string;price:number,rating:number;
}
const DestinationCard:React.FC<CardProps> = ({title,desc,price,rating,image}) => {
  return (
    <div className='flex-shrink-0 flex bg-white py-5 px-3 rounded-3xl gap-4 w-1/3'>
        <div className="rounded-[18px] self-center overflow-hidden flex-shrink-0 w-[100px] h-[100px]">
            <Image alt='' src={image} width={'100'} height={'100'} className='object-cover h-full w-full'/>
        </div>
        <div className="pr-3">
            <div className="flex items-center justify-between">

            <h3 className='text-xl font-extrabold text-primaryColor'>{title||'MontMarte, France'}</h3>
<div className='flex items-center gap-1'><span className='text-yellow-500'><PiStarFill/></span> {rating||4}/5</div>
            </div>
            <span className='text-gray-400 text-sm'>{desc}</span>
            <div className="mt-2">
                <span className="text-lg font-semibold">${formatCurrency(price)}</span>
            </div>
        </div>
    </div>
  )
}

export default DestinationCard