import React from 'react'
import HotelCard from './HotelCard'


const hotels=[{
    name:'7Seasons Apartments',price:'65,00',location:'Kensington / London',image:'/images/room2.jpg'
},{
    name:'Along With The Villa',price:'65,00',location:'Hungary / Budapest',image:'/images/room5.jpg'
},{
    name:'Resort and Recreation',price:'65,00',location:'Williamstreet / Boxon',image:'/images/room6.jpg'
},{
    name:'Beautiful and Classy',price:'65,00',location:'Citadines Opera Paris / France',image:'/images/room4.jpg'
},{
    name:'Permanent Peace',price:'65,00',location:'Sugar Apartments / Brazil',image:'/images/room7.jpg'
}]
const HotelsSection = () => {
  return (
    <div className='mb-5 max-w-[1000p]'>
 <div className="mb-5 flex items-center justify-between pr-3">

<h2 className=" font-semibold text-2xl">Best Offers</h2>
<div className=" flex items-center gap-3">
  <button className="text-lg cursor-pointer border-primaryColor hover:border-b-[2px] text-primaryColor">View all</button>
</div>
</div>
<div className="flex pb-5 justify-between gap-5 overflow-x-auto">
    {hotels.map((hotel,i)=>
    <HotelCard {...hotel} key={'hotel'+i}/>
    )}
</div>
    </div>
  )
}

export default HotelsSection