import React from 'react'
import './Accelerons.css'
import teamAccelerons from '../images/TeamAccelerons_FirstDIV.db74d803.webp'
import HeroPhoto from './HeroPhoto'
import AccImg from '../images/carAccelerons.08cc897b.jpeg'
import AccImg1 from '../images/AcceleronsFB1.9cfa97b5.webp'
import AccImg2 from '../images/AcceleronsSupra1.42ee2953.webp'

import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const Accelerons = () => {
  return (
    <div className='w-screen h-full bg-gray-900 flex items-center justify-between flex-col gap-10 overflow-x-hidden'>
      <HeroPhoto img = {teamAccelerons} />

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row-reverse'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src={AccImg} className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>We are <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>Accelerons</span></h2>
          <p className=' font-normal'>
          TEAM ACCELERONS is a student-led engineering team of SAE NIT Kurukshetra. The feeling of speed and precision, the tactical aspects, the way car looks, the way it behaves, that first lap excitement and the intrigues that surround it, are the things that drives the team to DESIGN, BUILD and RACE formula-style cars for the Formula Bharat and SUPRA competitions. From being a first-timer in SUPRA 2014 to standing on top among all NITS in SUPRA 2018, the Team has come a long way, upgrading itself with each passing season.. After all Felipe Massa rightly said, "When you give up your hunger for success you are not racing full heartedly anymore."
          </p>
          <p>Till date, ACCELRONS's F4 has shown its grip in the following competitions:</p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4'>
            <p>SUPRA</p>
            <p>Formula Bharat</p>
          </div>
        </div>
      </div>

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src={AccImg1} className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>Where do we <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>Participate</span></h2>
          <h2 className=' font-extrabold text-3xl p-1 border-b-2 rounded-lg border-solid border-black w-[7rem]'>SUPRA</h2>
          <p className=' font-normal'>
          SUPRA SAEINDIA Student Formula is a national engineering design competition held by the Society of Automotive Engineers Indian(SAEINDIA). The goal is to develop and provide a platform for student engineers to experience build and learn.
          </p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4 p-4'>
            <p>Students gain and develop skills such as <br/> engineering,project management and team <br/> work.Points are earned in a series off <br/> track,"Static" events, and on <br/> track,"Dyanamic" events. The team with the <br/> most points at the end of the competion <br/> wins.</p>
          </div>
        </div>
      </div>

      <div className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-200 p-5 flex-col md:flex-row-reverse'>
        <div className=' md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src={AccImg2} className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className=' font-extrabold text-3xl p-1 border-b-2 rounded-lg border-solid border-black w-[17.4rem] uppercase'>formula bharat</h2>
          <p className=' font-normal'>
          Formula Bharat is an engineering design competitionin which Studentsfrom colleges and universities all over the country, compete with a life-size Formula-style vehicle in areas of engineering design,overall cost,marketability and dynamic performance.
          </p>
          <div className='border-x-2 border-black border-solid rounded-[30px] flex items-center flex-col w-[90%] ml-4 p-4'>
            <p>These student teams are required to build a <br/> new vehicle from scratch year-after-year <br/> and seek sponsorship and donations by <br/> their own means to fund the project</p>
          </div>
        </div>
      </div>

      <div className='w-[95%] flex md:flex-row flex-col justify-evenly flex-wrap overflow-hidden gap-4'>

        <div className='galleryBody md:w-[47%] w-full bg-gray-200  rounded-full'>
          <div className='gallery before:bg-gray-900'>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_39.41c626b4.webp'/>
            <img src="https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_8.0be8eb1b.jpg"/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_24.1edd740d.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_40.42c2ce47.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_9.cff706a6.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_2.84554bb3.JPG'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200 min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center '>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_41.a13b5817.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_10.75e58c77.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_26.ab8673b2.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_42.4f8546a3.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_11.d1baa52c.jpg'/>
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
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_43.edc3e289.webp'/>
            <img src="https://www.saenitkurukshetra.in/static/media/Nitroxgallery_10.7158f601.jpg"/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_27.2ab71909.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_12.5920c174.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_28.97b48a8d.JPG'/>
          </div>  
        </div>

        <div className='galleryBody md:w-[47%] w-full bg-gray-200  rounded-full'>
          <div className='gallery before:bg-gray-900'>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_44.fedd67e4.webp'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_13.25cbf116.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_14.d7a65f8d.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_3.b00e0dfa.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_15.1236db87.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_31.d584fc12.JPG'/>
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-200  min-h-[55vh] rounded-lg'>
          <div className='pic-ctn flex justify-center'>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_45.bee1338b.webp'/>
            <img src="https://www.saenitkurukshetra.in/static/media/Nitroxgallery_10.7158f601.jpg"/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_16.c6809be0.jpg'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_32.b1b07491.JPG'/>
            <img src='https://www.saenitkurukshetra.in/static/media/AcceleronsGallery_17.5a54259c.jpg'/>
          </div>  
        </div>

      </div>

      <div className=' bg-gray-200 w-[95%] flex flex-col items-center'>

        <h2 className=' pt-8 mt-8 p-2 font-bold text-4xl bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent border-b-4 border-solid border-gray-900 rounded-3xl'>Team Managers</h2>

        <div className='flex items-center justify-around w-full flex-wrap px-12 pb-24'>

          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src='https://www.saenitkurukshetra.in/static/media/Yasharora.d6916acd.jpg'></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Yash Arora</h2>
              <h4 className=' text-sm ml-4'>Captain</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/yash-arora-0b2027215/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: yasharora1808@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src='https://www.saenitkurukshetra.in/static/media/Bhupeksh.7df9baf5.jpg'></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Bhupeksh</h2>
              <h4 className='text-sm ml-4'>Vice-Captain</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/bhupeksh-kaushik-360424222/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: kaushikbhupeksh@gmail.com">
                  <FaEnvelope style={{height:"20px"}}/>
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src='https://www.saenitkurukshetra.in/static/media/man.b3e9680f.png'></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2>Manikya</h2>
              <h4 className='text-sm ml-4'>EV-Head</h4>
              <div className='flex pr-16'>
                <NavLink to="https://www.linkedin.com/in/10manikya/"  target='_blank'>
                  <FaLinkedin style={{height:"20px"}}/>
                </NavLink>
                <NavLink to="mailto: NA@gmail.com">
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

export default Accelerons