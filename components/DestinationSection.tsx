import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import DestinationCard from "./DestinationCard";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);

const destinations = [
  {
    title: 'MontMartre, France',
    desc: 'Visiting the best tourist areas chosen by the audience',
    price: 45000000,
    image: '/images/montmartre.jpg',
    rating: 4
  },
  {
    title: 'Istanbul, Turkey',
    desc: 'One of our best-selling tours to Turkey and visiting its regions...',
    image: '/images/istanbul.webp',
    rating: 5,
    price: 6000000
  },
  {
    title: 'London, UK',
    image: '/images/london.jpg',
    desc: 'London is one of the most beautiful places to visit that...',
    price: 36000000,
    rating: 5
  }
];

const DestinationSection = () => {
  const swiperOpts = {
    pagination: {
      clickable: true,
    },
    slidesPerView: 3,
  };

  return (
    <div className="my-6">
      <div className="mb-5 flex items-center justify-between pr-3">
        <h2 className="font-semibold text-2xl">Trending Destination</h2>
        <div className="flex items-center gap-3">
          <button className="rounded-[10px] outline-none p-1 text-lg border-2 border-gray-500 cursor-pointer hover:bg-gray-800 hover:text-white text-gray-500"><RxChevronLeft /></button>
          <button className="rounded-[10px] border-gray-500 text-lg cursor-pointer p-1 border-2 bg-gray-800 text-white"><RxChevronRight /></button>
        </div>
      </div>

      {/* <Swiper {...swiperOpts}>
        {destinations.map((destination, i) => (
          <SwiperSlide key={'destination' + i}>
            <DestinationCard {...destination} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="flex justify-between gap-5 overflow-hidden pt-2 pb-4">
        {destinations.map((destination, i) =>
          <DestinationCard {...destination} key={'destinaion' + i} />)}
      </div>

    </div>
  );
}

export default DestinationSection;
