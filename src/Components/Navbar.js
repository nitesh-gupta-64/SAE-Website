import React from 'react'
import nitlogo from '../images/nitlogo.png'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import saeLogo from '../images/saeLogo.png'

const Navbar = () => {
  return (
<nav className="border-gray-200 bg-gray-900 top-0 w-full text-white ">
  <div className="max-w-screen-xl flex justify-center mx-auto">
    <div className='fixed w-full flex justify-between mx-auto p-4 z-10 bg-transparent backdrop-blur-sm'>
      <NavLink to="/">
        <a className="flex items-center space-x-3 rtl:space-x-reverse relative md:ml-20 ml-9">
            <img src={saeLogo} className="h-12 absolute left-[-20%]" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SAE NIT Kurukshetra</span>
        </a>
      </NavLink>
      <a href="/navpage">
        <FaBars className='mt-1 text-2xl md:mr-12'/>
      </a>
    </div>
    
  </div>
</nav>

  )
}

export default Navbar