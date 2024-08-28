import React from 'react';

const navItems = [
  {
    title: "All",
    url: "/",
  },
  {
    title: "Production",
    url: "/production",
  },
  {
    title: "Prototype",
    url: "/prototype",
  },
  
];

const Navigation = () => {
  return (
    <div className='border-b-2 p-3 flex items-center position-sticky w-full justify-between z-10 bg-[#ffffff]'>
      <div className='flex items-center'>
      <img src="" alt="logo" />
      <span>APIs</span>
      </div>
      <div className='flex items-center'>
      <select name="" id="">
        <option value="">All</option>
        <option value="">Production</option>
        <option value="">Prototype</option>
      </select>
      <div className="">
        <input type="text" placeholder='search...' />
      </div>
      </div>
      <div className='flex items-center justify-between'>
      grid
      <div>Grids</div>
      </div>
    </div>
  )
}

export default Navigation