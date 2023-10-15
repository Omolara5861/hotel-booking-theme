import Image from 'next/image';
import React from 'react';
import { PiEnvelope, PiHeart, PiHouseFill, PiSignOut } from 'react-icons/pi';
import { RxDashboard, RxPencil2 } from 'react-icons/rx';
import { TbCategory, TbCategory2, TbHeart, TbHome2, TbMail, TbSettings2, TbSquareRoundedChevronRight } from 'react-icons/tb';

const Sidebar = () => {
  const btnClassnames = "text-primaryColor flex items-center gap-4 text-lg hover:font-bold transition"
  return (
    <div className="flex-none left-0 top-0 w-[250px] bg-white min-h-full rounded-r-3xl " >
      <div className="flex h-full gap-20 justify-between flex-col  pt-6 items-center">

        <div>
          <h2 className='text-center text-primaryColor  font-black text-2xl mb-7'>Mima<span className='text-gray-500'>Booking</span></h2>

          <div className="flex flex-col items-center justify-between pb-10">
            <div className="rounded-full p-[6px] w-[100px] h-[100px] relative border-[1px] border-primaryColor bg-gray-200">
              <Image width={100} height={100} alt='' src={'/images/girl2.jpg'} className='w-full object-cover rounded-full object-top h-full' />

              <button className=" absolute left-[50%] transform translate-x-[-50%] bottom-[-12px] rounded-full bg-primaryColor p-2 text-white"><RxPencil2 /></button>
            </div>
            <div className="font-semibold text-gray-500 text-2xl mt-10">
              <span>ilia jan</span>
            </div>
          </div>
        </div>

        <ul className="  flex flex-col buttonst-none  gap-5">
          <li>

            <button className="flex font-bold items-center gap-4">
              <span className="text-xl">

                <TbHome2 />
              </span>
              <span>
                Dashboard
              </span>
            </button>
          </li>
          <li>

            <button className={btnClassnames}>
              <TbCategory /> <span>
                Explore
              </span>
            </button>
          </li>
          <li>

            <button className={btnClassnames}>
              <TbMail />
              <span>
                Ticket
              </span>
            </button>
          </li>
          <li>

            <button className={btnClassnames}>
              <TbHeart />
              <span>
                Favorite
              </span>
            </button>

          </li>
          <li>
            <button className={btnClassnames}>
              <TbSettings2 />
              <span>
                Setting
              </span>
            </button>
          </li>
        </ul>

        <div className="-ml-8 flex-1 flex -mb-[150px]">
          <button className={btnClassnames}><TbSquareRoundedChevronRight /> Logout</button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
