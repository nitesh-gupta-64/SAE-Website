import React from 'react'
import './NavPage.css'

const NavPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen overflow-hidden'>
        <div className="w-full block md:w-auto z-10" id="n">
            <ul>
                <li><a href="/" data-text="Home">Home</a></li>
                <li><a href="/autokriti" data-text="Autokriti">Autokriti</a></li>
                <li><a href="/accelerons" data-text="Accelerons">Accelerons</a></li>
                <li><a href="/nitrox" data-text="Nitrox">Nitrox</a></li>
                <li><a href="/sponsors" data-text="Sponsors">Sponsors</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavPage