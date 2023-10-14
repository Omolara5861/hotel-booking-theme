import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-white rounded-3xl px-10 py-5 flex justify-between mb-7">
      <form>
        <input type="text" placeholder="Search any things ..." className=" p-4 w-[400px] border border-grey-200 rounded-2xl"/>
      </form>
      <div className="flex self-center">
        <span>Saturday, may 3, 2023</span>
        <div className="w-[20px] h-[20px] bg-black rounded-full ml-3 mr-2 -mt-2">3</div>
        icon
      </div>
    </nav>
  );
};

export default Nav;
