import React from 'react'

function Education() {
  return (
    <div className='education-container font-spaceGrotesk h-auto relative'>
      
      {/* Experience */}
      <div>
        {/* Header */}
        <p className='p-8 sticky top-10 text-left h-[10vh] w-[10vw]'>EXPERIENCE</p>
        {/* Avensys Consulting Image */}
        <div className="parallaxAvensys pt-[80vh]"></div>
        {/* Avensys Consulting Description */}
        <div class="bg-gradient-to-r from-rose-500 to-red-500 py-4 px-32">
          <p className="mt-5 mb-1 font-normal text-gray-200 dark:text-gray-400">Sep 2022 - PRESENT</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frontend Developer (Angular)</h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Avensys Consulting</p>
        </div>
      {/* E&Y Frontend Developer */}
      </div>

      {/* Certification */}
      <div>
        {/* Header */}
        <p className='p-8 sticky top-10 text-left h-[10vh] w-[10vw]'>CERTIFICATION</p>
        {/* JFS Image */}
        <div className="parallaxJFS pt-[80vh]"></div>
        {/* JFS Description */}
        <div class="bg-gradient-to-r from-rose-500 to-red-500 py-4 px-32">
          <p className="mt-5 mb-1 font-normal text-gray-200 dark:text-gray-400">Issued Aug 2022</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Development (Java)</h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">2 months course on Java MVC, MySQL, basic Angular and Spring Boot</p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Capstone Project - Developed Car Management System</p>
        </div>
      </div>
     
      {/* Education */}
      <div>
        {/* Header */}
        <p className='p-8 sticky top-10 text-left h-[10vh] w-[10vw]'>EDUCATION</p>
        {/* RMIT Image */}
        <div className="parallaxRMIT pt-[80vh]"></div>
        {/* RMIT Description */}
        <div class="bg-gradient-to-r from-rose-500 to-red-500 py-4 px-32">
          <p className="mt-5 mb-1 font-normal text-gray-200 dark:text-gray-400">2020-2021</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bachelor of Business Management</h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Studied Information System, Statistics, Stakeholders Management, Ethics</p>
        </div>

        {/* SP Image */}
        <div className="parallaxSP pt-[80vh]"></div>
        {/* SP Description */}
        <div class="bg-gradient-to-r from-rose-500 to-red-500 py-4 px-32">
          <p className="mt-5 mb-1 font-normal text-gray-200 dark:text-gray-400">2014-2017</p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Diploma in Computer Engineering</h5>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Developed foundation in C++, C, and Java</p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">3rd Prize in SP Software & Product Design Contest 2016</p>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Invented 'Automated Bookshelf' by utilizing Arduino, Raspberry Pi, MakerBot, and IoT for Final Year Project</p>
        </div>
      </div>
     
      {/* CONFETTI  */}
      {/* Middle of screen has a gif? */}
      {/* Frame motion has a joystick? */}

    </div>
  )
}

export default Education