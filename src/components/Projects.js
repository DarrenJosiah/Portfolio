import React from 'react'
import { Tilt } from 'react-tilt'

function Projects() {

  return (
    <div className='bg-pink-500 font-spaceGrotesk h-auto pb-32' id='works'>
       <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-white bg-black p-5 rounded-2zl sm:w-[360px] w-full"
        >
          <div className='relatice w-full h-[230px]'>coming soon</div>
        </Tilt>
      
      <p className='p-8'>PERSONAL PROJECTS</p>
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
