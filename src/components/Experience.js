import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import avensys from './MyImages/avensys.svg'
import certificate from './MyImages/certificate.png'
import rmit from './MyImages/rmit.png'
import sp from './MyImages/sp.png'
import polar from './MyImages/polar.jpg'

import styles from '.././App.css';
import Particle from './Particles';

// TODO - E&Y Frontend Developer

   {/* CONFETTI  */}
      {/* Middle of screen has a gif? */}
      {/* Frame motion has a joystick? */}

export default function Experience() {
  return (
    <div className='experience-container h-[100vh]'>
      {/* Fixed background */}
      <div className='experience-container font-spaceGrotesk absolute w-[100vw] h-[100vh]'/>

      {/* Foreground / Content */}
      <Parallax pages={10}>
          
          {/* Page 0 - Experience */}
          <ParallaxLayer sticky={{ start: 0, end: 0.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>EXPERIENCE</p>
            </div>
          </ParallaxLayer>

    {/* //     <ParallaxLayer offset={0} speed={0.05} sticky={{ start: 0, end: 0 }}> */}
    {/* //       <p className='p-8 top-10 text-left'>EXPERIENCE</p> */}
    {/* //     </ParallaxLayer> */}

          {/* Page 0 - Spaceship */}
          <ParallaxLayer offset={0} speed={0.5} className='flex items-center justify-center ms-24'>
            <p className='text-7xl -rotate-45'>🚀</p>
          </ParallaxLayer>
  

          {/* Page 1 - Sticky - Avensys Consulting Description */}
          <ParallaxLayer sticky={{ start: 1, end: 1.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">SEP 2022 - AUG 2023</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Frontend Developer (Angular)</h5>
                <p className="mb-3 font-normal text-gray-300">Avensys Consulting</p>
                <p className="mb-3 font-normal text-gray-300">1 Year Contract</p>
            </div>
          </ParallaxLayer>

          {/* Page 1 - Sticky - Avensys Consulting Image */}
          <ParallaxLayer sticky={{ start: 1.4, end: 1.7 }} className='flex items-center justify-end'>
              <img src={avensys} className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
  





         
          {/* Page 2 - Certification */}
          <ParallaxLayer sticky={{ start: 3, end: 3.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>CERTIFICATION</p>
            </div>
          </ParallaxLayer>

          {/* Page 2 - Studying */}
          <ParallaxLayer offset={3.2} speed={0.5} className='flex items-center justify-center ms-28'>
            <p className='text-7xl rotate-90'>👨🏻‍💻</p>
          </ParallaxLayer>
  

          {/* Page 4 - Sticky - JFS Description */}
          <ParallaxLayer sticky={{ start: 4, end: 4.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">ISSUED AUG 2022</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Full Stack Development (Java)</h5>
                <p className="mb-3 font-normal text-gray-300">2 months course on Java MVC, MySQL, basic Angular and Spring Boot</p>
                <p className="mb-3 font-normal text-gray-300">Capstone Project - Developed Car Management System</p>
            </div>
          </ParallaxLayer>

          {/* Page 4 - Sticky - JFS Image */}
          <ParallaxLayer sticky={{ start: 4.4, end: 4.7 }} className='flex items-center justify-end'>
              <img src={certificate} className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>







          {/* Page 6 - Experience */}
          <ParallaxLayer sticky={{ start: 6, end: 6.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>EDUCATION</p>
            </div>
          </ParallaxLayer>

          {/* Page 6 - Graduation Hat */}
          <ParallaxLayer offset={6.2} speed={0.5} className='flex items-center justify-center ms-28'>
            <p className='text-7xl rotate-45'>🎓</p>
          </ParallaxLayer>
  

          {/* Page 8 - Sticky - RMIT Description */}
          <ParallaxLayer sticky={{ start: 7, end: 7.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">2020-2021</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Bachelor of Business Management</h5>
                <p className="mb-3 font-normal text-gray-300">Studied Information System, Statistics, Stakeholders Management, Ethics</p>
            </div>
          </ParallaxLayer>

          {/* Page 8 - Sticky - RMIT Image */}
          <ParallaxLayer sticky={{ start: 7.4, end: 7.7 }} className='flex items-center justify-end'>
              <img src={rmit} className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
          
          {/* Page 9 - Sticky - SP Description */}
          <ParallaxLayer sticky={{ start: 8.1, end: 8.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">2014-2017</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Diploma in Computer Engineering</h5>
                <p className="mb-3 font-normal text-gray-300">Developed foundation in C++, C, and Java</p>
                <p className="mb-3 font-normal text-gray-300">3rd Prize in SP Software & Product Design Contest 2016</p>
                <p className="mb-3 font-normal text-gray-300">Invented 'Automated Bookshelf' by utilizing Arduino, Raspberry Pi, MakerBot, and IoT for Final Year Project</p>
            </div>
          </ParallaxLayer>

          {/* Page 9 - Sticky - SP Image */}
          <ParallaxLayer sticky={{ start: 8.4, end: 8.7 }} className='flex items-center justify-end'>
              <img src={sp} className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
      </Parallax>
    </div>
  )
}