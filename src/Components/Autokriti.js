import React from 'react'
import './Accelerons.css'
import HeroPhoto from './HeroPhoto'
import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import VicePresident from '../images/VicePre.18ad3964.jpg'

const Autokriti = () => {
  return (
    <div className='w-screen h-full bg-gray-900 flex items-center justify-between flex-col gap-10 overflow-x-hidden'>
      <HeroPhoto img = {'https://www.saenitkurukshetra.in/static/media/auto1.6a170391.png'} />

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src='https://www.saenitkurukshetra.in/static/media/AutokritiAboutUs.db8c31fd.jpeg' className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>Who are <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>We</span></h2>
          <p className=' font-normal'>
            Autokriti is north India's largest automobile workshop which began in 2010. Every year loads of students gets enrolled to gain firsthand knowledge of industrial vehicles. The last held physical autokriti in 2019 saw a participation of 700+ candidates. It involves overhauling of a star engine, which varied from a 2 stroke engine of a scooter in Autokriti 1 to 3.6L turbocharged V6 Porsche Cayenne in season 11.0; always in cahoots with technology. And not just the gearheads, but geeks from all branches of technology find here the stuffs of their interest.
          </p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4'>
            <p>
              E- Autokriti is a digital edition of Autokriti, where this <br/> legacy of imparting knowledge continues amid the <br/> current covid crisis. And with many new surprises <br/> awaiting e-autokriti 2.0, we are expecting an even <br/> greater engagement.
            </p>
          </div>
        </div>
      </div>

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-4 bg-gray-200 p-5 flex-col-reverse'>
        <div className=' h-full w-full flex justify-end items-center'>
          <img src='https://www.saenitkurukshetra.in/static/media/autokriti13.864242a0.jpg' className='w-full rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] md:gap-12 gap-6 flex justify-center items-center'>
          <h2 className='font-extrabold text-[3.8vw]'>Check out our <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>events</span></h2>
        </div>
      </div>

      <div className='w-[95%] flex md:flex-row flex-col justify-evenly flex-wrap overflow-hidden gap-4'>

        <div className='galleryBody md:w-[47%] w-full bg-gray-200  rounded-full'>
          <div className='gallery before:bg-gray-900'>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_1.87becbd3.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_16.380f47f8.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_2.f3166697.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_17.c7becea5.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_3.f4e33bd2.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_18.9e20596c.jpg'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200 min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center '>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_4.2c944c1a.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_19.4636b3be.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_5.9dc28a0a.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_20.fb8aceb1.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_6.5767fc47.jpg'/>
          </div>  
        </div>

        <div className='galleryBody md:w-[47%] w-full bg-gray-200  rounded-full'>
          <div className='gallery before:bg-gray-900'>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_21.2c98b985.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_7.53b2abb5.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_22.b7cbd7f0.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_8.d523910e.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_23.b6c8cbdc.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_9.51cf18bb.jpg'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200  min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center'>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_24.99508a64.jpg'/>
            <img src="https://www.saenitkurukshetra.in/static/media/Autokritigallery_27.79434a79.JPG"/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_29.ed86eca7.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_14.c2f9fcad.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Autokritigallery_26.d8a7065e.JPG'/>
          </div>  
        </div>

      </div>

    </div>
  )
}

export default Autokriti