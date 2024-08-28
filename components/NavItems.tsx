import Link from 'next/link';
import { title } from 'process';
import React from 'react'

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "APIs",
    url: "/apis",
  },
  {
    title: "Applications",
    url: "/apps",
  },
  {
    title: "Docs",
    url: "/docs",
  },
  {
    title: "Get Started",
    url: "/navigation",
  },
  {
    title: "FAQ",
    url:"/questions"
  },
];

const NavItems = ({activeItem = 0}: {activeItem?: number}) => {
  return (
    <div className='md:block hidden'>
      {navItems.map((item,index)=>(<Link key={item.url} href={item.url} className={`px-5 text-[15px] text-[#265b41] font-Poppins font-[1000]'
      ${activeItem === index && "text-[#7bc243]"}`}
      >{item.title}</Link>))}
    </div>
  )
}

export default NavItems