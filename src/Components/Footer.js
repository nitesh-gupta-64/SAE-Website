import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaDiscord, FaEnvelopeOpenText, FaGithub, FaInstagram, FaLinkedin, FaLock, FaMailBulk, FaPhone, FaRupeeSign, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (

    <footer class="bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Explore Us</h2>
                <ul class="text-gray-400 font-medium">
                    <NavLink to="/accelerons">
                      <li class="mb-4">
                          <a class=" hover:underline hover:text-red-500">Team Accelerons</a>
                      </li>
                    </NavLink>
                    <NavLink to="/nitrox">
                      <li class="mb-4">
                          <a class=" hover:underline hover:text-red-500">Team Nitrox</a>
                      </li>
                    </NavLink>
                    <NavLink to="/autokriti">
                      <li class="mb-4">
                          <a class=" hover:underline hover:text-red-500">Autokriti</a>
                      </li>
                    </NavLink>
                    <NavLink to="/blogs">
                      <li class="mb-4">
                          <a class=" hover:underline hover:text-red-500">Blogs</a>
                      </li>
                    </NavLink>
                    <NavLink to="/sponsors">
                      <li class="mb-4">
                          <a class=" hover:underline hover:text-red-500">Sponsors</a>
                      </li>
                    </NavLink>
                    <NavLink to="/contactus">
                      <li class="mb-4">
                          <a class=" hover:underline hover:text-red-500">Contact Us</a>
                      </li>
                    </NavLink>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Social</h2>
                <ul class="text-gray-400 font-medium">
                    <li class="mb-4 flex items-center gap-2" >
                        <a>Team Accelerons</a>
                        <a href='https://www.instagram.com/accelerons_nitkkr/' target='_blank' className='hover:text-red-500'>
                          <FaInstagram/>
                        </a>
                        <a href='https://www.facebook.com/teamaccelerons/' target='_blank' className='hover:text-red-500'>
                          <FaFacebook/>
                        </a>
                    </li>
                    <li class="mb-4 flex items-center gap-2">
                        <a>Team Nitrox</a>
                        <a href='https://www.instagram.com/nitroxteam/' target='_blank' className='hover:text-red-500'>
                          <FaInstagram/>
                        </a>
                        <a href='https://www.facebook.com/teamnitrox/' target='_blank' className='hover:text-red-500'>
                          <FaFacebook/>
                        </a>
                    </li>
                    <li class="mb-4 flex items-center gap-2">
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
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Contact Us</h2>
                <ul class="text-gray-400 font-medium">
                    <li class="mb-4 flex gap-2 items-center">
                        <a href='mailto: saenitkkr@nitkkr.ac.in' className='hover:text-red-500'>
                          <FaMailBulk/>
                        </a>
                        <a href="mailto: saenitkkr@nitkkr.ac.in" class="hover:underline hover:text-red-500">Send email</a>
                    </li>
                    <li class="mb-4 flex gap-2 items-center">
                        <a href='https://www.linkedin.com/company/sae-nit-kkr/mycompany/' target='_blank' className='hover:text-red-500'>
                          <FaLinkedin/>
                        </a>
                        <a href="https://www.linkedin.com/company/sae-nit-kkr/mycompany/" target='_blank' class="hover:underline hover:text-red-500">LinkedIN</a>
                    </li>
                    <li class="mb-4 flex gap-2 items-center">
                        <a href='contactus' className='hover:text-red-500'>
                          <FaPhone className=' scale-x-[-1]'/>
                        </a>
                        <a href="contactus" class="hover:underline hover:text-red-500">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Guidelines</h2>
                <ul class="text-gray-400 font-medium">
                    <li class="mb-4 flex gap-2 items-center">
                        <a href='termsandconditions' className='hover:text-red-500'>
                          <FaEnvelopeOpenText/>
                        </a>
                        <a href="termsandconditions" class="hover:underline hover:text-red-500">Terms & Conditions</a>
                    </li>
                    <li class="mb-4 flex gap-2 items-center">
                        <a href='privacypolicy' className='hover:text-red-500'>
                          <FaLock/>
                        </a>
                        <a href="privacypolicy" class="hover:underline hover:text-red-500">Privacy Policy</a>
                    </li>
                    <li class="mb-4 flex gap-2 items-center">
                        <a href='refundpolicy' className='hover:text-red-500'>
                          <FaRupeeSign/>
                        </a>
                        <a href="refundpolicy" class="hover:underline hover:text-red-500">Refund & Cancel Policy</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
          <NavLink to="/">
            <a class="flex items-center space-x-3 rtl:space-x-reverse relative">
              <span class="self-center text-xl font-semibold whitespace-nowrap text-white">SAE NIT Kurukshetra</span>
            </a>
          </NavLink>
            <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                  <a href="#" class="text-gray-400 hover:text-white">
                      <FaFacebook/>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                      <FaInstagram/>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                      <FaTwitter/>
                  </a>
                  <a href='https://www.linkedin.com/company/sae-nit-kkr/mycompany/' target='_blank' class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <FaLinkedin/>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                      <FaDiscord/>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                      <FaGithub/>
                  </a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer