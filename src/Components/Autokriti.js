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
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_90.5c6fe744.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_8.79a0bf06.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_20.e250be25.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_9.7fbdf79e.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_21.9e75b0bb.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_91.7ace3f47.webp'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200 min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center '>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_10.7158f601.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_23.7b6cfc13.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_92.ee9294aa.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_11.25957150.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_25.b4aab646.jpg'/>
          </div>  
        </div>

        <div className='galleryBody md:w-[47%] w-full bg-gray-200  rounded-full'>
          <div className='gallery before:bg-gray-900'>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_5.892e103f.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_6.7e55e36b.png'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_7.0be8eb1b.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_23.d46b9b05.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_38.9d713e69.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_20.5920c174.jpg'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200  min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center'>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_93.4f06ef41.webp'/>
            <img src="https://www.saenitkurukshetra.in/static/media/Nitroxgallery_13.bd84e446.jpg"/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_26.3a8f6272.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_12.52093cd3.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_36.2a566113.jpg'/>
          </div>  
        </div>

        <div className='galleryBody md:w-[47%] w-full bg-gray-200  rounded-full'>
          <div className='gallery before:bg-gray-900'>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_94.6d17fc85.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_11.25957150.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_61.e4ee2da6.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_95.8182de2e.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_21.9e75b0bb.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_1.751447d7.jpg'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200  min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center'>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_2.c5dfe1d3.JPG'/>
            <img src="https://www.saenitkurukshetra.in/static/media/Nitroxgallery_25.b4aab646.jpg"/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_6.9130a144.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_8.79a0bf06.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/Nitroxgallery_62.eb10cbce.JPG'/>
          </div>  
        </div>

      </div>
      
    </div>
  )
}

export default Autokriti