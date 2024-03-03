import React from 'react'
import './Accelerons.css'
import teamNitrox from '../images/teamNitrox.webp'
import HeroPhoto from './HeroPhoto'
import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import VicePresident from '../images/VicePre.18ad3964.jpg'

const Nitrox = () => {
  return (
    <div className='w-screen h-full bg-gray-900 flex items-center justify-between flex-col gap-10 overflow-x-hidden'>
      <HeroPhoto img = {teamNitrox} />

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row-reverse'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src='https://www.saenitkurukshetra.in/static/media/Nitrox.f85089f7.jpeg' className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>We are <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>Nitrox</span></h2>
          <p className=' font-normal'>
          TEAM NITROX is a group of junkies with a shared objective to create a fierce beast of an ATV (All-terrain vehicle). The team was founded back in 2010 under SAE NIT KURUKSHETRA. Since its foundation, the team has grown in all aspects, be its technical or competitive. From one of the few teams that design its own CVT to representing the country in BAJA SAE Illinois, the team has repeatedly provided evidence of its exceptional growth.
          </p>
          <p>Till date, NITROX's ATV has shown its grip in the following competitions:</p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4'>
            <p>ATVC</p>
            <p>BAJA</p>
          </div>
        </div>
      </div>

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src='https://www.saenitkurukshetra.in/static/media/NitroxATVC1.16955b64.webp' className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>Where do we <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>Participate</span></h2>
          <h2 className=' font-extrabold text-3xl p-1 border-b-2 rounded-lg border-solid border-black w-[5.4rem] uppercase'>BAJA</h2>
          <p className=' font-normal'>
          Baja SAE is an Collegiate Design Series competition run by the Society Of Automotive Engineers International (SAE INTERNATIONAL) Teams of Students from universities all over the world design and build small off-road cars.
          </p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4 p-4'>
            <p>The goal in Baja SAE racing is to design, <br/> build and race off-road vehicles that can <br/> withstand the harshest elements of rough <br/> terrain. The vehicles used in Baja SAE racing <br/> are often similar in appearance to dune <br/> buggies.</p>
          </div>
        </div>
      </div>

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row-reverse'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src='https://www.saenitkurukshetra.in/static/media/NitroxBAJA1.f64438ef.webp' className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className=' font-extrabold text-3xl p-1 border-b-2 rounded-lg border-solid border-black w-[5.5rem] uppercase'>ATVC</h2>
          <p className=' font-normal'>
          The Third season of Aravalli Terrain Vehicle Championship, powered by infi-league Motorsports is a natioanl championship earnmarking all the techno freaks across the country
          </p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4 p-4'>
            <p>3500+ students. More than a hundred <br/> teams. Bests competing against the best to <br/> build the best dune buggy each year. And <br/> that is Aravalli Team Vehicle Championship <br/> (ATVC) for you. So if you are a competitive <br/> techno freak, now you know where to come!</p>
          </div>
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

      <div className=' bg-gray-200 w-[95%] flex flex-col items-center'>

        <h2 className=' pt-8 mt-8 p-2 font-bold text-4xl bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent border-b-4 border-solid border-gray-900 rounded-3xl'>Team Managers</h2>

        <div className='flex items-center justify-around w-full flex-wrap px-12 pb-24'>

          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src={VicePresident}></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Himanshu Khatri</h2>
              <h4 className='text-sm ml-4'>Captain</h4>
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
              <img src='https://www.saenitkurukshetra.in/static/media/Anmoll.24c79311.jpg'></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Anmol</h2>
              <h4 className='text-sm ml-4'>Vice-Captain</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/anmol-chaudhary-278a22225/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: anmolchaudhary854@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src='https://www.saenitkurukshetra.in/static/media/Parn.a707c0f0.jpg'></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Parv Sarin</h2>
              <h4 className='text-sm ml-4'>EV-Head</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/parv-sarin/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: parvsarin01@gmail.com">
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

export default Nitrox