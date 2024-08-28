import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='border-b-2 p-3 flex items-center position-sticky w-full justify-between z-10 bg-[#eef7e6]'>
      {/* <Link to=''></Link> */}
      <div className="w-[90%] m-auto h-[40px] flex items-center justify-between">
        <div className=""><img src="" alt="logo" /></div>
          <NavItems/>
        
        <div className="">
          Sign In
          {/* <Button/> */}
        </div>
      </div>
    </div>
  )
}

export default Header