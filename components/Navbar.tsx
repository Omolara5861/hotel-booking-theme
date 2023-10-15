import React from 'react';
import { TbBell, TbSearch } from 'react-icons/tb';

const Nav = () => {
  return (
    <nav className="bg-white rounded-3xl px-8 py-4 flex justify-between mb-7">
      <form>
        <div className="flex items-center relative">
<span className='text-gray-400 absolute left-4'><TbSearch/></span>
        <input type="text" placeholder="Search any things ..." className=" px-4 py-3 w-[350px] pl-10 border border-grey-200 rounded-xl"/>
        </div>
      </form>
      <div className="flex self-center mr-4">
        <span className='font-semibold text-lg mr-3'>Saturday, may 3, 2023</span>
        <div className="w-[20px] h-[20px] text-sm rounded-full ml-3 mr-1.5 -mt-2  shadow-md shadow-red-300 bg-red-400 text-white flex items-center justify-center">3</div>
        <span className='border-[1px] rounded-xl p-2 text-gray-500'>
          <TbBell/>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
