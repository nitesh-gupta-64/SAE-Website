import React from 'react'
import lps from '../images/lps.png'
import aselor from '../images/aselor.png'

const Sponsors = () => {
  return (
    <div className='w-screen h-full bg-gray-900 flex items-center justify-between flex-col gap-10 overflow-x-hidden'>
      
      <div className=' h-full md:w-[90%] w-[95%] flex justify-center items-center gap-4 bg-gray-200 p-5 flex-col-reverse pt-24'>
        <div className=' h-full w-full flex justify-center gap-8 items-center'>
          <img src={lps} className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src={aselor} className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] md:gap-12 gap-6 flex justify-center items-center'>
          <h2 className='font-extrabold text-[3.8vw]'>Current <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>sponsors</span></h2>
        </div>
      </div>

      <div className=' h-full md:w-[90%] w-[95%] flex justify-center items-center gap-4 bg-gray-200 p-5 flex-col-reverse pt-24'>
        <div className=' h-full w-full flex justify-center gap-8 items-center flex-wrap'>
          <img src='https://www.saenitkurukshetra.in/static/media/unbrako.e15548d2.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/saiga_parts.ca3eac9d.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='data:image/png;base64,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' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/Janatics.ddca6c1b.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/NIT_kurukshetra.8c88291b.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/pankaj_potentiometer.45c2fb90.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/skf_sealing.12bdb540.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/hero.edb46c7e.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/honda.23712bbd.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/venus.755035cb.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/republic_motors.33513a97.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/forgify.c05250b2.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/Instapro.d46f8537.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/advanced_robotics.17185ea9.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/altair.7d787e14.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/polyplastics.972448fc.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/CPG.9bd7de8a.jpeg' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/Ricardo.ad0fb435.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='data:image/png;base64,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' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/mh.7a91998e.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/cmsr.dd2f40eb.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/sne.21c25de5.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='data:image/jpeg;base64,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' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
          <img src='https://www.saenitkurukshetra.in/static/media/Suresh_Metals.0495367f.png' className='w-[47%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div className='text-gray-900 md:w-[60%] w-full h-[90%] md:gap-12 gap-6 flex justify-center items-center'>
          <h2 className='font-extrabold text-[3.8vw]'>Previous <span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>sponsors</span></h2>
        </div>
      </div>

    </div>
  )
}

export default Sponsors