import React from 'react'
import nitlogo from '../images/nitlogo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<nav class="border-gray-200 bg-gray-900 fixed top-0 w-full z-10">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to="/">
      <a class="flex items-center space-x-3 rtl:space-x-reverse relative">
          <img src={nitlogo} class="h-24 absolute left-[-30%]" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SAE NIT Kurukshetra</span>
      </a>
    </NavLink>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
        <li>
          <NavLink to="/">
            <a class="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/autokriti">
            <a class="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Autokriti</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/accelerons">
            <a class="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Accelerons</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/nitrox">
            <a class="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Nitrox</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsors">
            <a class="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Sponsors</a>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar