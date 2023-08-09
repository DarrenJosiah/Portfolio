import React from 'react'
import { Tilt } from 'react-tilt'
import Particle from './Particle';
import CustomTilt from './CustomTilt';


function Projects() {

  return (
    <div className='font-trispace from-gray-700 to-gray-900 bg-gradient-to-r text-green-400 h-auto pb-32' id='projects'>

      <p className='p-8'> &lt;PERSONAL PROJECTS /&gt;<span className='blink'>|</span></p>

      <div className='flex justify-evenly'>
        <CustomTilt
          projectTitle='BLUETICKS'
          projectDescription='Fullstack React + Django application using CRUD with validations utilising Firebase.'
          projectTags='[React, Django, Firebase]'
        />

        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="opacity-70 hover:opacity-100 cursor-crosshair bg-gray-500 text-white p-5 rounded-2xl sm:w-[360px] w-full shadow-xl shadow-black hover:text-green-400 hover:shadow-xl hover:shadow-green-400"
        >
          <div className='relative w-full mb-4 text-2xl'>
            BLUETICKS
          </div>
          <p>Fullstack React + Django application using CRUD with validations utilising Firebase.</p>
          <div class="pt-7">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span> 
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Django</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
          </div>
          {/* <a href='http://blueticks.onrender.com/' target="_blank">blueticks.onrender.com/</a> */}
        </Tilt>
      </div>

      <Particle></Particle>


        {/* Table */}
          {/* Sorting function */}
          {/* Columns of table:

            Name
            Est duration 
            Frameworks used

          */}
        {/* Preview */}
        {/* Snapshot of Github commits? */}
        {/* Pie chart? */}
    </div>

    // paste github contribution chart?
  )
}

export default Projects

//   {/* Down Navigate Button */}
{/* <motion.div
className="absolute bottom-6 right-5 rounded-xl bg-gray-100 bg-opacity-60"
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
<HashLink to='#tech' smooth>
<a className='text-black hover:font-medium text-[2rem]'>
  <FontAwesomeIcon icon={faSquareCaretDown} className='mx-2' />
</a>
</HashLink>
</motion.div> */}

// import { motion } from "framer-motion";
// import { HashLink } from 'react-router-hash-link';

// // FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
