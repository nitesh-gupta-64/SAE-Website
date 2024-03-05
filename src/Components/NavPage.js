import React from 'react'
import './NavPage.css'

const NavPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen overflow-hidden'>
        <div className="w-full block md:w-auto z-10" id="n">
            <ul>
                <li><a className=' before:lg:text-[4em] before:md:text-[3em] before:text-[1em]' href="/" data-text="Home">Home</a></li>
                <li><a className=' before:lg:text-[4em] before:md:text-[3em] before:text-[1em]' href="/autokriti" data-text="Autokriti">Autokriti</a></li>
                <li><a className=' before:lg:text-[4em] before:md:text-[3em] before:text-[1em]' href="/accelerons" data-text="Accelerons">Accelerons</a></li>
                <li><a className=' before:lg:text-[4em] before:md:text-[3em] before:text-[1em]' href="/nitrox" data-text="Nitrox">Nitrox</a></li>
                <li><a className=' before:lg:text-[4em] before:md:text-[3em] before:text-[1em]' href="/sponsors" data-text="Sponsors">Sponsors</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavPage