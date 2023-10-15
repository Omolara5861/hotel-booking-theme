import { RxChevronLeft, RxChevronRight } from "react-icons/rx"

import {Swiper,SwiperSlide} from 'swiper/react'
// import {Navigation, Pagination,} from 'swiper'
import ExploreFranceCard from "./ExploreFranceCard"


const destinations=[{
title:'Eiffel Tower, Paris, France',location:'Paris / France',price:65000,image:'/images/montmartre.jpg'
},
{
  title:'L\'Arc de Triomphe de l\'Etoile',location:'Paris / France',price:65000,image:'/images/montmartre.jpg'
  },
  {
    title:'Paris, France',location:'Paris / France',price:65000,image:'/images/montmartre.jpg'
    }]
const ExploreFranceSection = () => {
  const swiperOpts={
    pagination:true,slidesPerView:3
  }
  return (
    <div className="my-6 ">
      <div className="mb-5 flex items-center justify-between pr-3">

        <h2 className=" font-semibold text-2xl">Explore France</h2>
      </div>

<div className="flex justify-between gap-5 overflow-hidden pt-2 pb-4">

{destinations.map((destination,i)=>
<ExploreFranceCard {...destination} key={'destinaion'+i}/>)}
</div>

    </div>
  )
}

export default ExploreFranceSection