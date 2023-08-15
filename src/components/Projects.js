import React from 'react'
import { Tilt } from 'react-tilt'
import Particle from './Particle';
import CustomTilt from './CustomTilt';

import kanbanAppIcon from './MyImages/AppIcon/kanban.ico';

export const projectsJson = [
  {
      "title": "BLUETICKS",
      "description": 'Fullstack React + Django application using CRUD with validations utilising Firebase. Developed in 7 days for an interview.',
      "tags": [
        "React",
        "Python",
        "Django",
        "Firebase"
      ],
      "estimatedCreationDate": "07/04/2023",
      "estimatedCreationDuration": "7 days",
      "link": "https://blueticks.onrender.com/",
  },
  {
      "title": "JIMI-AI",
      "description": "Coded along with JavaScript Mastery on YouTube. Generate AI image through MERN stack with OpenAI API.",
      "tags": [
        "MERN Stack",
        "Tailwind",
        "Vite",
        "Cloudinary"
      ],
      "estimatedCreationDate": "12/05/2023",
      "estimatedCreationDuration": "2 days",
      "link": "https://jimi-ai-frontend.onrender.com/",
  },
  {
      "title": "Inventory Sheep",
      "description": "Inventory Management System project was created for personal use. Not completed yet.",
      "tags": [
        "Angular",
        "Bootstrap",
      ],
      "estimatedCreationDate": "06/05/2023",
      "estimatedCreationDuration": "12 hours",
      "link": "https://inventory-sheep.vercel.app/",
  },
  {
      "title": "3D Polar Bear",
      "description": "React using Three.js, code guidance from Irradiance YouTube channel.",
      "tags": [
        "React",
        "Three.js",
      ],
      "estimatedCreationDate": "28/04/2023",
      "estimatedCreationDuration": "8 hours",
      "link": "https://react3d-pzz8.onrender.com/"
  },
  {
      "title": "KANBAN",
      "description": "Drag and Drop functionality utilising CRUD with localStorage.",
      "tags": [
        "React",
        "Tailwind",
      ],
      "estimatedCreationDate": "08/04/2023",
      "estimatedCreationDuration": "3 weeks",
      "link": "https://kanban-e5mn.onrender.com/",
      "appIcon" : kanbanAppIcon
  },
  {
      "title": "Stocks Jaeger",
      "description": "Picking up React + Tailwind, app to track Crypto, ETFs and Forex for personal use.",
      "tags": [
        "React",
        "Tailwind",
      ],
      "estimatedCreationDate": "11/03/2023",
      "estimatedCreationDuration": "3 weeks",
      "link": "https://stocksjaeger.onrender.com/"
  },
  {
      "title": "Zangyo Anime",
      "description": "Anime library using AnimeAPI deployed to Firebase Hosting site instead of GitHub.",
      "tags": [
        "Angular",
        "Bootstrap",
        "Firebase",
      ],
      "estimatedCreationDate": "08/02/2023",
      "estimatedCreationDuration": "3 weeks",
      "link": "https://zangyoanime.web.app/"
  },
  {
    "title": "Weather App",
    "description": "Code along with YouTube, search current Weather by city.",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    "estimatedCreationDate": "01/02/2022????????",
    "estimatedCreationDuration": "3 day",
    "link": "https://weather-36016.web.app/"
},
  {
      "title": "DontPayAlsoCan",
      "description": "Calculate 8% GST and 10% service charge for Singaporeans.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      "estimatedCreationDate": "04/01/2023",
      "estimatedCreationDuration": "1 day",
      "link": "https://darrenjosiah.github.io/DontPayAlsoCan/"
  },
  {
      "title": "Darren's Portfolio Website 2022",
      "description": "Celebrating 3 months of Frontend Development.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      "estimatedCreationDate": "03/11/2022",
      "estimatedCreationDuration": "3 weeks",
      "link": "https://darrenjosiah2022.onrender.com/"
  },
  {
      "title": "Minimalist Calculator",
      "description": "Simple calculator inspired by YouTube",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      "estimatedCreationDate": "30/08/2022",
      "estimatedCreationDuration": "2 days",
      "link": "https://darrenjosiah.github.io/MinimalistCalculator/"
  },
  {
      "title": "Genuine Convos",
      "description": "Ice breaker game with a library of genuine questions.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      "estimatedCreationDate": "20/08/2022",
      "estimatedCreationDuration": "3 days",
      "link": "https://darrenjosiah.github.io/GenuineConvos/"
  }
]

export default function Projects() {

  return (
    <div className='font-trispace from-gray-700 to-gray-900 bg-gradient-to-r text-green-400 h-auto pb-32' id='projects'>

      <p className='p-8'> &lt;PERSONAL PROJECTS /&gt;<span className='blink'>|</span></p>
      
      {/* Cards */}
      <div className='flex flex-wrap justify-evenly items-start mx-8 sm:mx-0'>
        { projectsJson.map((project) => {
          return (
            <CustomTilt
              projectTitle={project.title}
              projectDescription={project.description}
              projectTags={project.tags}
              projectAppIcon={project.appIcon}
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
