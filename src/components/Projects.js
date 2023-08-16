import CustomTilt from './CustomTilt';
import projects from '../data/projects.json';

// import kanbanAppIcon from './MyImages/Icon/kanban.ico';

// TODO 
// SPLINE
// https://viewer.spline.design/

export default function Projects() {
  return (
    <div className='font-trispace from-gray-700 to-gray-900 bg-gradient-to-r text-green-400 h-auto pb-32' id='projects'>

      <p className='p-8'> &lt;PERSONAL PROJECTS /&gt;<span className='blink'>|</span></p>
      
      {/* Cards */}
      <div className='flex flex-wrap justify-evenly items-start mx-8 sm:mx-0'>
        {  projects.map((project) => {
          return (
            <CustomTilt
              projectTitle={project.title}
              projectDescription={project.description}
              projectTags={project.tags}
              // projectAppIcon={project.appIcon}
            />
          )
        }) }
      </div>

      {/* 
        Duration? Est of completion
        Chart?
      */}


      {/* <Particle></Particle> */}


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
