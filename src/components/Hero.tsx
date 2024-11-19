import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-cover'
    style={{backgroundSize: "20%", backgroundPosition: "left 40px top 90px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-100px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[30px] sm:text-[50px] font-bold leading-tight flex justify-center'>
          <div>
          <p data-aos="zoom-in-up">I am </p>
          <p data-aos="zoom-in-up">Azra</p>
          <p data-aos="zoom-in-up">Shafi Ullah</p>
        
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

