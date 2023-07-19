import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import avensys from './MyImages/avensys.svg'
import polar from './MyImages/polar.jpg'

import styles from '.././App.css';

// Framer Motion doesn't have my parallax function
// maybe react React Spring Parallax has it


// To try: React scroll parallax
// https://react-scroll-parallax.damnthat.tv/docs/examples/banners

function Play() {
  return (
    <div>
  
    
      {/* Fixed background */}
      <div className='education-container font-spaceGrotesk absolute w-[100vw] h-[100vh]'/>

      {/* Foreground / Content */}
      <Parallax pages={5}>
          
          {/* Sticky */}
          <ParallaxLayer sticky={{ start: 0, end: 0.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p>EXPERIENCE</p>
            </div>
          </ParallaxLayer>

    {/* //     <ParallaxLayer offset={0} speed={0.05} sticky={{ start: 0, end: 0 }}> */}
    {/* //       <p className='p-8 top-10 text-left'>EXPERIENCE</p> */}
    {/* //     </ParallaxLayer> */}

          {/* 1. */}
          <ParallaxLayer offset={0} speed={0.5} className='flex items-center justify-center ms-24'>
            <p className='text-7xl -rotate-45'>🚀</p>
          </ParallaxLayer>
  

          {/* Sticky - Avensys Consulting Description */}
          <ParallaxLayer sticky={{ start: 1, end: 1.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[10rem] w-[50vw] text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">SEP 2022 - AUG 2023</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Frontend Developer (Angular)</h5>
                <p className="mb-3 font-normal text-gray-300">Avensys Consulting</p>
            </div>
          </ParallaxLayer>

          {/* Sticky - Avensys Consulting Image */}
          <ParallaxLayer sticky={{ start: 1.2, end: 1.7 }} className='flex items-center justify-end'>
              <img src={avensys} className='h-[10rem] w-[25%] mr-12 sm:mr-32'></img>
          </ParallaxLayer>
  
          {/* 2. */}
          <ParallaxLayer offset={1.5} speed={1.5} className='flex items-center justify-end'>
            <div className={`flex justify-center items-center h-[10rem] w-[25%] text-center rounded-xl bg-purple-100 mr-32`}>
              <p>I'm not</p>
            </div>
          </ParallaxLayer>
  
          {/* 3. */}
          <ParallaxLayer offset={2.5} speed={1.5} className='flex items-center justify-end'>
            <div className={`flex justify-center items-center h-[10rem] w-[25%] text-center rounded-xl bg-blue-100 mr-32`}>
              <p>Neither am I</p>
            </div>
          </ParallaxLayer>
      </Parallax>
    </div>

        // <ParallaxProvider>
      //   <ParallaxBanner
      //     layers={[{ image: './MyImages/avensys.svg', speed: -15 }]}
      //     className="aspect-[2/1]"
      //   />
      // </ParallaxProvider> 







    // <div>
    //   <Parallax pages={2} className='education-container'>

    //     {/* Experience */}
    //     {/* Avensys Consulting - Header */}
    //     <ParallaxLayer offset={0} speed={0.05} sticky={{ start: 0, end: 0 }}>
    //       <p className='p-8 top-10 text-left'>EXPERIENCE</p>
    //     </ParallaxLayer>

    //     {/* Page 1 Background (Must be before Content) */}
    //     <ParallaxLayer offset={0.1} speed={0} sticky={{ start: 0, end: 0 }} // Factor 2 = spanning 2 pages
    //       style={{
    //         backgroundImage: `url(${avensys})`,
    //         backgroundSize: '32vh',
    //         backgroundPosition: '50% 20%'
    //       }}
    //        />

    //     {/* Sticky Image */}
    //     <ParallaxLayer offset={0.8} sticky={{ start: 0, end: 2}}>
    //       <div className='flex flex-wrap justify-center'>
    //         <img src={avensys} className='h-[12vh]' />
    //       </div>
    //     </ParallaxLayer>
  )
}

export default Play