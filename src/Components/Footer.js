import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaDiscord, FaEnvelopeOpenText, FaGithub, FaInstagram, FaLinkedin, FaLock, FaMailBulk, FaPhone, FaRupeeSign, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (

    <footer className="bg-gray-900 ">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Explore Us</h2>
                <ul className="text-gray-400 font-medium">
                    <NavLink to="/accelerons">
                      <li className="mb-4">
                          <a className=" hover:underline hover:text-red-500">Team Accelerons</a>
                      </li>
                    </NavLink>
                    <NavLink to="/nitrox">
                      <li className="mb-4">
                          <a className=" hover:underline hover:text-red-500">Team Nitrox</a>
                      </li>
                    </NavLink>
                    <NavLink to="/autokriti">
                      <li className="mb-4">
                          <a className=" hover:underline hover:text-red-500">Autokriti</a>
                      </li>
                    </NavLink>
                    <NavLink to="/blogs">
                      <li className="mb-4">
                          <a className=" hover:underline hover:text-red-500">Blogs</a>
                      </li>
                    </NavLink>
                    <NavLink to="/sponsors">
                      <li className="mb-4">
                          <a className=" hover:underline hover:text-red-500">Sponsors</a>
                      </li>
                    </NavLink>
                    <NavLink to="/contactus">
                      <li className="mb-4">
                          <a className=" hover:underline hover:text-red-500">Contact Us</a>
                      </li>
                    </NavLink>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Social</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4 flex items-center gap-2" >
                        <a>Team Accelerons</a>
                        <a href='https://www.instagram.com/accelerons_nitkkr/' target='_blank' className='hover:text-red-500'>
                          <FaInstagram/>
                        </a>
                        <a href='https://www.facebook.com/teamaccelerons/' target='_blank' className='hover:text-red-500'>
                          <FaFacebook/>
                        </a>
                    </li>
                    <li className="mb-4 flex items-center gap-2">
                        <a>Team Nitrox</a>
                        <a href='https://www.instagram.com/nitroxteam/' target='_blank' className='hover:text-red-500'>
                          <FaInstagram/>
                        </a>
                        <a href='https://www.facebook.com/teamnitrox/' target='_blank' className='hover:text-red-500'>
                          <FaFacebook/>
                        </a>
                    </li>
                    <li className="mb-4 flex items-center gap-2">
                        <a>Autokriti</a>
                        <a href='https://www.instagram.com/autokriti/' target='_blank' className='hover:text-red-500'>
                          <FaInstagram/>
                        </a>
                        <a href='https://www.facebook.com/autokriti/' target='_blank' className='hover:text-red-500'>
                          <FaFacebook/>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact Us</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4 flex gap-2 items-center">
                        <a href='mailto: saenitkkr@nitkkr.ac.in' className='hover:text-red-500'>
                          <FaMailBulk/>
                        </a>
                        <a href="mailto: saenitkkr@nitkkr.ac.in" className="hover:underline hover:text-red-500">Send email</a>
                    </li>
                    <li className="mb-4 flex gap-2 items-center">
                        <a href='https://www.linkedin.com/company/sae-nit-kkr/mycompany/' target='_blank' className='hover:text-red-500'>
                          <FaLinkedin/>
                        </a>
                        <a href="https://www.linkedin.com/company/sae-nit-kkr/mycompany/" target='_blank' className="hover:underline hover:text-red-500">LinkedIN</a>
                    </li>
                    <li className="mb-4 flex gap-2 items-center">
                        <a href='contactus' className='hover:text-red-500'>
                          <FaPhone className=' scale-x-[-1]'/>
                        </a>
                        <a href="contactus" className="hover:underline hover:text-red-500">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Guidelines</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4 flex gap-2 items-center">
                        <a href='termsandconditions' className='hover:text-red-500'>
                          <FaEnvelopeOpenText/>
                        </a>
                        <a href="/termsandconditions" className="hover:underline hover:text-red-500">Terms & Conditions</a>
                    </li>
                    <li className="mb-4 flex gap-2 items-center">
                        <a href='privacypolicy' className='hover:text-red-500'>
                          <FaLock/>
                        </a>
                        <a href="privacypolicy" className="hover:underline hover:text-red-500">Privacy Policy</a>
                    </li>
                    <li className="mb-4 flex gap-2 items-center">
                        <a href='refundpolicy' className='hover:text-red-500'>
                          <FaRupeeSign/>
                        </a>
                        <a href="refundpolicy" className="hover:underline hover:text-red-500">Refund & Cancel Policy</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
          <NavLink to="/">
            <a className="flex items-center space-x-3 rtl:space-x-reverse relative">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">SAE NIT Kurukshetra</span>
            </a>
          </NavLink>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                  <a href="#" className="text-gray-400 hover:text-white">
                      <FaFacebook/>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                      <FaInstagram/>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                      <FaTwitter/>
                  </a>
                  <a href='https://www.linkedin.com/company/sae-nit-kkr/mycompany/' target='_blank' className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <FaLinkedin/>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                      <FaDiscord/>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                      <FaGithub/>
                  </a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer