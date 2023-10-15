import React from 'react';
import  {PiArrowDown, PiListChecksLight, PiMapPin, PiTagChevron, PiUser} from 'react-icons/pi'
import  { RxChevronDown } from 'react-icons/rx'
const HeroSection = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-[200px] rounded-3xl mb-20">
      <div className="bg-primaryColor bg-opacity-30 h-[200px] rounded-3xl">
      </div>
        <form className=" flex gap-4 bg-white rounded-[20px] w-[88%] mx-auto min-h-[60px] p-4 -mt-6 font-bold">
          <div className="flex-1 flex gap-2">

          <div className="flex items-center gap-3 border-r-[1px] mr-4 pr-4">
            <div className="text-gray-400 text-[20px]">

<PiMapPin />
            </div>
            <input type="text"  className="outline-none w-[170px]" placeholder='Where Are You Going?' />
      <div className="ml-3">

            <RxChevronDown/>
      </div>
          </div>
          <div className="flex items-center gap-3 border-r-[1px] mr-4 pr-4">
            <div className="text-gray-400 text-[20px]">

<PiListChecksLight />
            </div>
            <input type="text" className="outline-none w-[150px]" placeholder='Check-In Date'/>

          <div className="ml-3">

<RxChevronDown/>
</div>
            </div>
            <div className="flex items-center gap-3 ">
            <div className="text-gray-900 text-[20px]">

<PiUser />
            </div>
            <input type="text" className="outline-none w-[150px] placeholder-gray-900" placeholder='3 adults' />

          <div className="ml-3">

<RxChevronDown/>
</div>
            </div>
          </div>
            <button className=" bg-primaryColor px-7 py-3 rounded-[15px] text-white hover:opacity-50">Search</button>
        </form>
    </div>
  );
};

export default HeroSection;
