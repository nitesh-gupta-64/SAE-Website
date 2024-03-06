import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomePage from '../images/HomePage.webp'
import HeroPhoto from './HeroPhoto'
import AccImg from '../images/Accelerons.jpeg'
import { NavLink } from 'react-router-dom'
import President from '../images/President.6558e3b8.jpg'
import VicePresident from '../images/VicePre.18ad3964.jpg'
import secy from '../images/secyy.71e6c715.jpg'
import lisha from '../images/lisha.900452bb.jpg'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import bgvideo from '../videos/bgvideo.MP4'
import saeLogo from '../images/saeLogo.png'
import { useEffect, useRef } from 'react'
import { Power3 } from 'gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import baja from '../images/baja.png'
import atvc from '../images/atvc.jpg'
import supra from '../images/supra.png'
import formula from '../images/formula.png'

const Home = () => {

  function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

  const images = importAll(require.context('../images/visualArchive', false, /\.jpg/));


  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from(
      "#sae",
      {
        duration: 1,
        x:-1000,
        opacity: 0,
        ease: Power3.easeOut
      }
    ).delay(.6)
    gsap.to(
      "#sae",
      {
        duration: 1,
        x:0,
        opacity: 1,
        ease: Power3.easeOut
      }
    ).delay(.6)

    gsap.from(
      "#nitkkr",
      {
        duration: 1,
        x:1000,
        opacity: 0,
        ease: Power3.easeOut
      }
    ).delay(.6)
    gsap.to(
      "#nitkkr",
      {
        duration: 1,
        x:0,
        opacity: 1,
        ease: Power3.easeOut
      }
    ).delay(.6)

    gsap.from(
      "#herobg",
      {
        duration: 1,
        y:1000,
        opacity: 0,
        ease: Power3.easeOut
      }
    )
    gsap.to(
      "#herobg",
      {
        duration: 1,
        y:0,
        opacity: 0.7,
        ease: Power3.easeOut
      }
    )

    gsap.to("#sae", {
      scrollTrigger: {
        trigger: "#sae",
        toggleActions: "restart none restart none",
      },
      duration: 1.5,
      x:0,
      opacity: 1,
      ease: Power3.easeOut,
    })

    gsap.to("#nitkkr", {
      scrollTrigger: {
        trigger: "#nitkkr",
        toggleActions: "restart none restart none",
      },
      duration: 1.5,
      x:0,
      opacity: 1,
      ease: Power3.easeOut,
    })

    gsap.to("#weimg", {
      scrollTrigger: {
        trigger: "#weimg",
        toggleActions: "restart none restart none",
      },
      duration: 1.5,
      x:0,
      opacity: 1,
      ease: Power3.easeOut,
    })

    gsap.to("#wedesc", {
      scrollTrigger: {
        trigger: "#wedesc",
        toggleActions: "restart none restart none",
      },
      duration: 1.5,
      x:0,
      opacity: 1,
      ease: Power3.easeOut,
    })

    gsap.to(".aan", {
      scrollTrigger: {
        trigger: ".aan",
        toggleActions: "restart pause resume reset",
      },
      duration: 3,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
    gsap.to(".aan1", {
      scrollTrigger: {
        trigger: ".aan1",
        toggleActions: "restart pause resume reset",
      },
      duration: 3,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
    gsap.to(".aan2", {
      scrollTrigger: {
        trigger: ".aan2",
        toggleActions: "restart pause resume reset",
      },
      duration: 4,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
    gsap.to(".aan3", {
      scrollTrigger: {
        trigger: ".aan3",
        toggleActions: "restart pause resume reset",
      },
      duration: 3,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
    gsap.to(".aan4", {
      scrollTrigger: {
        trigger: ".aan4",
        toggleActions: "restart pause resume reset",
      },
      duration: 3,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
    gsap.to(".aan5", {
      scrollTrigger: {
        trigger: ".aan5",
        toggleActions: "restart pause resume reset",
      },
      duration: 3,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
    gsap.to(".aan6", {
      scrollTrigger: {
        trigger: ".aan6",
        toggleActions: "restart pause resume reset",
      },
      duration: 3,
      y:0,
      opacity: 1,
      ease: Power3.easeOut,
    })
  
  }, [])




  return (
    <div className='w-screen h-full bg-gray-900 flex items-center justify-between flex-col gap-10 overflow-hidden'>

      {/* <HeroPhoto img={HomePage}/> */}

      {/* <div className='flex w-screen h-screen lg:flex-row flex-col'>

        <div className='lg:w-[50%] w-full lg:h-full h-[50%] bg-gradient-to-bl from-gray-900 via-gray-900 to-black relative z-[5] flex justify-center items-start pt-16'>
        <h2 className='font-bold text-6xl text-white'><span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>Nitrox</span></h2>
          <img src={homeNitrox} className='absolute bottom-0 left-[10%] z-[1] h-[27vh] lg:h-[55vh]'/>
          <div className=' bg-white w-full h-[0.5px] absolute z-0 bottom-[25%] lg:flex hidden'></div>
          <h1 className='absolute top-[45%] right-[-16%] font-["Anta"] text-9xl text-gray-300 lg:flex hidden'>SAE</h1>
        </div>

        <div className='h-[50%] w-full lg:h-full bg-gradient-to-br from-gray-900 via-gray-900 to-black lg:w-[50%] relative flex justify-center items-end'>
          <img src={homeAcc1} className=' absolute z-[2] left-[5%] top-[10%] h-[18vh] lg:h-[34vh]'/>
          <div className=' bg-white w-full h-[0.5px] absolute z-0 top-[32%] lg:flex hidden'></div>
          <h2 className='font-bold text-5xl text-white'><span className='bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent uppercase'>Accelerons</span></h2>
        </div>

      </div> */}



      <div id='herovid' className=' w-screen h-screen relative flex justify-center items-center bg-gray-300'>

        <video autoPlay loop muted playsInline className='w-full h-[100vh] object-cover absolute top-0 left-0'>
          <source src={bgvideo}/>
        </video>

        <div id='herobg' className='front w-full h-[65vh] bg-gray-900 opacity-70 rounded-tr-full rounded-bl-full flex flex-col justify-center items-center pb-4 gap-6'>
          {/* <img  src={saeLogo}  className='md:w-[30%] w-[60%]'/> */}
          <h1 id='sae' className='font-[ANTA] text-4xl md:text-6xl lg:text-9xl text-gray-200 uppercase rounded-tr-full rounded-bl-full pl-16 pr-8 mr-8'>SAE</h1>
          <h2 id='nitkkr' className='font-[ANTA] text-2xl md:text-4xl lg:text-7xl text-gray-200 uppercase rounded-tr-full rounded-bl-full pl-10 pr-5 mr-5'>nit Kurukshetra</h2>
        </div>

      </div>




      <div id='weare' className=' h-full md:w-[70%] w-[90%] flex justify-center items-center gap-20 bg-gray-900 p-5 flex-col md:flex-row'>
        <div id='weimg' className=' translate-x-[-100px] opacity-0 md:h-[80vh] h-full md:w-[50%] w-full flex justify-end items-center'>
          <img src={AccImg} className='w-full md:h-[20vw] h-[40%] rounded-md shadow-[10px_10px_10px_0px_#1a202c]'/>
        </div>
        <div id='wedesc' className='translate-x-[100px] opacity-0 text-gray-200 md:w-[60%] w-full h-[90%] flex flex-col md:gap-12 gap-6 justify-start'>
          <h2 className='font-bold text-2xl'>Who are <span className='bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent'>We?</span></h2>
          <p className=' font-normal'>
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
          </p>
          
        </div>
      </div>



      <div className='aan6 h-full w-screen flex flex-col justify-evenly items-center gap-8 opacity-0 translate-y-52'>

      <div className='flex flex-col gap-8 w-full items-center'>
        <h2 className='font-bold text-2xl md:text-4xl text-gray-200 ml-8'>We bring our skills to many <span className='bg-gradient-to-r from-gray-200 to-gray-700 bg-clip-text text-transparent uppercase'>competitions</span></h2>
        <div className='border-x-2 border-gray-200 border-solid rounded-[30px] text-gray-200 flex items-center flex-col w-[60%] ml-4'>
          <p>Baja SAE India</p>
          <p>ATVC</p>
          <p>SUPRA India</p>
          <p>Formula Bharat</p>
        </div>
      </div>

        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={baja} className=' hover:opacity-70' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={atvc} className=' hover:opacity-70' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={supra} className=' hover:opacity-70' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={formula}  className=' hover:opacity-70'/>
          </SwiperSlide>
        </Swiper>
      </div>





      <div className='md:grid place-content-center w-screen aan translate-y-24 opacity-0 hidden'>
        <div className="container bg-gray-900 md:p-20 w-[95vw] md:h-[44vw] h-[15rem] p-8">
          <NavLink to="/accelerons" className="box box-1" data-text="Accelerons"></NavLink>
          <NavLink to="/autokriti" className="box box-2" data-text="Autokriti"></NavLink>
          <NavLink to="/nitrox" className="box box-3" data-text="Nitrox"></NavLink>
        </div>
      </div>



      <div className='w-[95%] flex md:flex-row flex-col flex-wrap overflow-hidden'>

        <div className=' w-full flex justify-center mt-8'>
        <h2 className='font-bold text-4xl md:text-5xl text-gray-200'>Visual <span className='bg-gradient-to-r from-gray-200 to-gray-700 bg-clip-text text-transparent uppercase'>archive</span></h2>
        </div>

        <div className='galleryBody md:w-[47%] w-full bg-gray-900 rounded-full aan1 translate-y-24 opacity-0'>
          <div className='gallery md:before:bg-gray-300'>
            <img src={images['11.jpg']} />
            <img src={images['1.jpg']} />
            <img src={images['2.jpg']} />
            <img src={images['3.jpg']} />
            <img src={images['4.jpg']} />
            <img src={images['5.jpg']} />
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-900 min-h-[55vh] rounded-lg aan3 translate-y-24 opacity-0'>
          <div className='pic-ctn flex justify-center '>
            <img src={images['6.jpg']} />
            <img src={images['7.jpg']} />
            <img src={images['8.jpg']} />
            <img src={images['9.jpg']} />
            <img src={images['10.jpg']} />
          </div>  
        </div>

        <div className='galleryBody md:w-[47%] w-full bg-gray-900 rounded-full aan4 translate-y-24 opacity-0'>
          <div className='gallery md:before:bg-gray-300'>
            <img src={images['12.jpg']} />
            <img src={images['13.jpg']} />
            <img src={images['14.jpg']} />
            <img src={images['15.jpg']} />
            <img src={images['16.jpg']} />
            <img src={images['17.jpg']} />
          </div>  
        </div>

        <div className='md:w-[47%] w-full bg-gray-900  min-h-[55vh] rounded-lg aan5 translate-y-24 opacity-0'>
          <div className='pic-ctn flex justify-center'>
            <img src={images['18.jpg']} />
            <img src={images['19.jpg']} />
            <img src={images['20.jpg']} />
            <img src={images['21.jpg']} />
            <img src={images['22.jpg']} />
          </div>  
        </div>

      </div>




      <div className=' bg-gray-900 w-[95%] flex flex-col items-center aan2 translate-y-48 opacity-0'>

        <h2 className=' pt-8 mt-8 p-2 font-bold text-4xl bg-gradient-to-r from-gray-200 to-gray-700 bg-clip-text text-transparent border-b-4 border-solid border-gray-300 rounded-3xl'>Team Managers</h2>

        <div className='flex items-center justify-around w-full flex-wrap px-12 pb-24'>

          <div className="infocardContainer bg-gradient-to-r from-gray-400 to-gray-900">
            <div id="main" className=' border-gray-500 border-[10px] border-solid '>
              <img src={President}></img>
            </div>
            <div id="textbois" className='flex flex-col justify-evenly'>
              <h2 className=' mr-4'>Vaibhav Dharmani</h2>
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
              <h2 className=' mr-4'>Himanshu Khatri</h2>
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
              <h2 className=' mr-4'>Vinay Saini</h2>
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
              <h2 className=' mr-4'>Lisha Garg</h2>
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