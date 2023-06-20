import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

// Register item
ChartJS.register(
  ArcElement, Tooltip, Legend
)

export const skillsJson = [
  {
      "name": "HTML",
      "confidence": 90,
      "confidenceTailwindCSS": "w-[90%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/html.png"
  },
  {
      "name": "CSS",
      "confidence": 90,
      "confidenceTailwindCSS": "w-[90%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/css.png"
  },
  {
      "name": "Bootstrap",
      "confidence": 80,
      "confidenceTailwindCSS": "w-[80%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/bootstrap.png"
  },
  {
      "name": "Tailwind",
      "confidence": 80,
      "confidenceTailwindCSS": "w-[80%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/tailwind.png"
  },
  {
      "name": "JavaScript",
      "confidence": 70,
      "confidenceTailwindCSS": "w-[70%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/javascript.png"
  },
  {
      "name": "TypeScript",
      "confidence": 70,
      "confidenceTailwindCSS": "w-[70%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/typescript.png"
  },
  {
      "name": "Angular",
      "confidence": 70,
      "confidenceTailwindCSS": "w-[70%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/angular.png"
  },
  {
      "name": "React",
      "confidence": 40,
      "confidenceTailwindCSS": "w-[40%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/react.png"
  },
  {
      "name": "Django",
      "confidence": 10,
      "confidenceTailwindCSS": "w-[10%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/django.png"
  },
  {
      "name": "Java",
      "confidence": 80,
      "type": "Backend"
  },
  {
      "name": "Spring Boot",
      "confidence": 20,
      "type": "Backend"
  },
  {
      "name": "Python",
      "confidence": 30,
      "type": "Backend"
  },
  {
      "name": "C++",
      "confidence": 20,
      "type": "Backend"
  },
  {
      "name": "C",
      "confidence": 20,
      "type": "Backend"
  },
  {
      "name": "VBA",
      "confidence": 10,
      "type": "Backend"
  },
  {
      "name": "MySQL",
      "confidence": 70,
      "type": "Database"
  },
  {
      "name": "Oracle SQL",
      "confidence": 20,
      "type": "Database"
  }
]

function Tech() {

    // TODO - ParticleJS
    // Framer
    // https://www.framer.com/motion/scroll-animations/
    // Inspiration https://transforms.framer.wiki/

  const data = {
    labels: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript'],
    datasets: [{
      data: [95,5],
      backgroundColor: ['#EA580C', '#F8FAFC'],
      borderColor: ['#EA580C', 'black'],
    }]
  }

  return (
    <div className='bg-slate-50 font-trispace h-[90vh]'>
      <p className='font-trispace p-8'>TECH</p>
      
      <p className='font-trispace text-xl font-bold p-8'>FRONT-END</p>
      <div className='flex flex-row flex-wrap justify-evenly'>
      {/* Frontend Cards */}
      { skillsJson.map(item => {
        return ( item.type === 'Frontend' &&
          <div className=''>
            {/* Icon */}
            <img className='float-right h-[7vh] w-auto' src={item.iconPath}/>
            
            {/* Card */}
            <div className='shadow-2xl shadow-slate-600 max-w-sm bg-purple-700 p-5 rounded-xl m-3 w-[20vw]'>
              
              {/* Name */}  
              <div className="text-left mb-1 text-base font-medium text-gray-100 dark:text-purple-500">
                { item.name }
              </div>
              
              {/* Bar */}
              <div className="mb-5 w-full bg-purple-300 rounded-full h-2.5 dark:bg-gray-700">
                {/* <div className='bg-purple-100 h-2.5 rounded-full dark:bg-purple-500 w-[25%]'></div> */}
                <div className={`bg-gray-900 h-2.5 rounded-full dark:bg-purple-500 ${ item.confidenceTailwindCSS }`}></div>
              </div>
            </div>
          </div>
        )
      }) }
      </div>
      
      <div className='flex flex-row justify-evenly items-center'>
        {/* <div className=''>
          <Doughnut data={data}></Doughnut>
        </div> */}

          {/* Card */}
          {/* <a className="mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FRONT-END</h5>
              <div className='font-normal text-gray-700 dark:text-gray-400'>

             
                  
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
                <p>Tailwind</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Angular</p>
                <p>React</p>
              </div>
          </a> */}
          {/* Card */}
          {/* <a className="mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BACK-END</h5>
              <div className='font-normal text-gray-700 dark:text-gray-400'>
                <p>Java</p>
                <p>Spring Boot</p>
                <p>Python</p>
                <p>C++</p>
                <p>C</p>
              </div>
          </a> */}
          {/* Card */}
          {/* <a className="mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DATABASE</h5>
              <div className='font-normal text-gray-700 dark:text-gray-400'>
                <p>MySQL</p>
                <p>Oracle SQL Developer</p>
              </div>
          </a> */}
        <div>
          
        </div>
      
        
        {/* https://www.chartjs.org/docs/latest/getting-started/ */}
        {/* Parallax scrolling */}
      </div>
    </div>
  )
}

export default Tech