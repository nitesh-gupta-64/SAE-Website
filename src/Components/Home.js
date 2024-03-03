import React from 'react'
import HomePage from '../images/HomePage.webp'
import HeroPhoto from './HeroPhoto'
import AccImg from '../images/Accelerons.jpeg'
import { NavLink } from 'react-router-dom'
import President from '../images/President.6558e3b8.jpg'
import VicePresident from '../images/VicePre.18ad3964.jpg'
import secy from '../images/secyy.71e6c715.jpg'
import lisha from '../images/lisha.900452bb.jpg'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Home = () => {


  return (
    <div className='w-screen h-full bg-gray-900 flex items-center justify-between flex-col gap-10 overflow-x-hidden'>

      <HeroPhoto img={HomePage}/>

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src={AccImg} className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>Who are <span className='bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent'>We?</span></h2>
          <p className=' font-normal'>`
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
          </p>
          <p>We bring our skills to many competitions</p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4'>
            <p>Baja SAE India</p>
            <p>ATVC</p>
            <p>SUPRA India</p>
            <p>Formula Bharat</p>
          </div>
        </div>
      </div>

      <div className='grid place-content-center w-screen'>
        <div className="container bg-gray-200 md:p-20 w-[95vw] md:h-[44vw] h-[15rem] p-8">
          <NavLink to="/accelerons" className="box box-1" data-text="Accelerons"></NavLink>
          <NavLink to="/autokriti" className="box box-2" data-text="Autokriti"></NavLink>
          <NavLink to="/nitrox" className="box box-3" data-text="Nitrox"></NavLink>
        </div>
      </div>

      <div className=' bg-gray-200 w-[95%] flex flex-col items-center'>

        <h2 className=' pt-8 mt-8 p-2 font-bold text-4xl bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent border-b-4 border-solid border-gray-900 rounded-3xl'>Team Managers</h2>

        <div className='flex items-center justify-around w-full flex-wrap px-12 pb-24'>

          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src={President}></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Vaibhav Dharmani</h2>
              <h4 className=' text-sm ml-4'>President</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/vaibhav-dharmani-aa91a7199/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: dharmani.vaibhav2001@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src={VicePresident}></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Himanshu Khatri</h2>
              <h4 className='text-sm ml-4'>Vice President</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/hk2107/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: hkhatri2107@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src={secy}></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Vinay Saini</h2>
              <h4 className='text-sm ml-4'>Secretary</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/vinay-saini-6a3044241/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: sainivinay013@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src={lisha}></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Lisha Garg</h2>
              <h4 className='text-sm ml-4'>Secretary</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/lisha-garg-61373a211/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: lisha317garg@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>

        </div>
        
        
      </div>

    </div>
  )
}

export default Home