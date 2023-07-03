import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

function Education() {

  // Tracking Cursor
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [20, -20]);
  const rotateY = useTransform(x, [0, 400], [-20, 20]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }


  // TODO - Add animations (fly in) when scroll

  const [ upDownNumber, setUpDownNumber] = useState(3.5)
  const [ leftRightNumber, setLeftRightNumber] = useState(3.5)

  useEffect(() => {
    window.addEventListener('keydown', detectKeyDown)
    
    return () => {
      window.removeEventListener("keydown", detectKeyDown);
    };
  }, [])

  // Function
  const detectKeyDown = (e) => {
    let userInteraction = e.key.toLowerCase();
    
    // Handling Arrow Keys
    // if (e.keyCode === 38) {
    //   userInteraction = 'w'
    // }

    switch (userInteraction) {
      case 'w':
        setUpDownNumber(prevNumber => prevNumber - 1)
        break;
        case 's':
        setUpDownNumber(prevNumber => prevNumber + 1)
        break;
      case 'a':
        setLeftRightNumber(prevNumber => prevNumber - 1)
        break;
        case 'd':
        setLeftRightNumber(prevNumber => prevNumber + 1)
        break;
    }
  }

  return (
    <div className='education-container font-spaceGrotesk h-auto relative'>
      <p className='text-xl p-8'>EDUCATION</p>

      {/* Cat GIF */}
      <p className='text-7xl absolute z-10' style={{ top: `${upDownNumber}rem`, left: `${leftRightNumber}rem` }}>
        <img src='/MyImages/cat.gif' alt='cat' className='h-[9vh]'/>
      </p>

      {/* Buttons */}
      <div className="absolute bottom-2 right-2 z-0 opacity-50 rounded-full bg-gray-800 h-[8rem] w-[8rem]">
        {/* Left button */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </span>
        </button>
        {/* Right button */}
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </span>
        </button>
        {/* Up button */}
        <button type="button" className="rotate-90 absolute bottom-8 right-7 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </span>
        </button>
        {/* Down button */}
        <button type="button" className="rotate-90 absolute top-8 right-7 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className='flex flex-row justify-evenly h-auto place-items-center place-content-center'
        style={{ perspective: 1000 }}
        onMouseMove={ handleMouse }
      >
        {/* Diploma */}
        <motion.div className="bg-white max-w-xs rounded-xl overflow-hidden shadow-xl"
          style={{ rotateX: rotateX, rotateY: rotateY }}
        >
          <div className="flex flex-col justify-between p-4">
            
            {/* Picture */}
            <img src='/MyImages/sp.png' alt='sp' title='SINGAPORE POLYTECHNIC' className='w-14 object-cover'/>
            
            {/* Description */}
            <p className="mt-5 mb-1 font-normal text-gray-700 dark:text-gray-400">2014-2017</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Diploma in Computer Engineering</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed foundation in C++, C, and Java</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">3rd Prize in SP Software & Product Design Contest 2016</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Invented 'Automated Bookshelf' by utilizing Arduino, Raspberry Pi, MakerBot, and IoT for Final Year Project</p>
          </div>
        </motion.div>
        
        {/* Degree */}
        <motion.div className="bg-white max-w-xs rounded-xl overflow-hidden shadow-xl"
          style={{ rotateX: rotateX, rotateY: rotateY }}
          >
          <div className="flex flex-col justify-between p-4">
            
            {/* Picture */}
            <img src='/MyImages/rmit.png' alt='rmit' title='ROYAL MELBOURNE INSTITUTE OF TECHNOLOGY' className='w-14 object-cover'/>

            {/* Description */}
            <p className="mt-5 mb-1 font-normal text-gray-700 dark:text-gray-400">2020-2021</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bachelor of Business Management</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Studied Information System, Statistics, Stakeholders Management, Ethics</p>
          </div>
        </motion.div>
      </div>
      
      <p className='text-xl p-8'>CERTIFICATION</p>
      
     
      {/* Course */}
      <div className='flex flex-row justify-evenly pb-12'>
          <div className="bg-white max-w-xs rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col justify-between p-4">

              {/* Picture */}
              <img src='/MyImages/avensys.jpeg' alt='avensys' title='AVENSYS CONSULTING' className='w-14 h-5 object-cover'/>
              
              {/* Description */}
              <p className="mt-5 mb-1 font-normal text-gray-700 dark:text-gray-400">Issued Aug 2022</p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Development (Java)</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">2 months course on Java MVC, MySQL, basic Angular and Spring Boot</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Capstone Project - Developed Car Management System</p>
            </div>

            {/* Cert Picture */}
            <img src='/MyImages/certificate.png' alt='certificate' title='ROYAL MELBOURNE INSTITUTE OF TECHNOLOGY' className='h-auto pointer-events-none'/>
          </div> 
      </div>

      {/* Experience */}
      Avensys Consulting - Frontend Developer (Angular) | 1 Year Contract
      E&Y Frontend Developer
    </div>
  )
}

export default Education