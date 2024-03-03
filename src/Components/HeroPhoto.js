import React from 'react'

const HeroPhoto = (props) => {

    const img = props.img;

  return (
    <div className=' w-[97%] flex items-center justify-center'>
        <img src={img} className='object-fill w-full h-[50vh] md:h-full'/>
    </div>
  )
}

export default HeroPhoto