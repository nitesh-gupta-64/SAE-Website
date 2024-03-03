import React from 'react'
import nitlogo from '../images/nitlogo.png'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
<nav class="border-gray-200 bg-gray-900 top-0 w-full text-white">
  <div class="max-w-screen-xl flex justify-center mx-auto">
    <div className='fixed w-full bg-gray-900 flex justify-between mx-auto p-4 z-10'>
      <NavLink to="/">
        <a class="flex items-center space-x-3 rtl:space-x-reverse relative md:ml-16 ml-6">
            <img src={nitlogo} class="h-24 absolute left-[-20%]" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SAE NIT Kurukshetra</span>
        </a>
      </NavLink>
      <NavLink to="/navpage">
        <FaBars className='mt-1 text-2xl md:mr-12'/>
      </NavLink>
    </div>
    
  </div>
</nav>

  )
}

export default Navbar