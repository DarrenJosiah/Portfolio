import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
// import skillsJson  from '../skills.json'

// Register item
ChartJS.register(
  ArcElement, Tooltip, Legend
)

export const skillsJson = [
  {
      "name": "HTML",
      "confidence": "95%",
      "type": "Frontend"
  },
  {
      "name": "CSS",
      "confidence": "90%",
      "type": "Frontend"
  },
  {
      "name": "Bootstrap",
      "confidence": "80%",
      "type": "Frontend"
  },
  {
      "name": "Tailwind",
      "confidence": "80%",
      "type": "Frontend"
  },
  {
      "name": "JavaScript",
      "confidence": "70%",
      "type": "Frontend"
  },
  {
      "name": "TypeScript",
      "confidence": "70%",
      "type": "Frontend"
  },
  {
      "name": "Angular",
      "confidence": "70%",
      "type": "Frontend"
  },
  {
      "name": "React",
      "confidence": "40%",
      "type": "Frontend"
  },
  {
      "name": "Django",
      "confidence": "10%",
      "type": "Frontend"
  },
  {
      "name": "Java",
      "confidence": "80%",
      "type": "Backend"
  },
  {
      "name": "Spring Boot",
      "confidence": "20%",
      "type": "Backend"
  },
  {
      "name": "Python",
      "confidence": "30%",
      "type": "Backend"
  },
  {
      "name": "C++",
      "confidence": "20%",
      "type": "Backend"
  },
  {
      "name": "C",
      "confidence": "20%",
      "type": "Backend"
  },
  {
      "name": "VBA",
      "confidence": "10%",
      "type": "Backend"
  },
  {
      "name": "MySQL",
      "confidence": "70%",
      "type": "Database"
  },
  {
      "name": "Oracle SQL",
      "confidence": "20%",
      "type": "Database"
  }
]

function Tech() {

  const data = {
    labels: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript'],
    datasets: [{
      data: [95,5],
      backgroundColor: ['#EA580C', '#F8FAFC'],
      borderColor: ['#EA580C', 'black'],
    }]
  }

  // TODO, come back, set up a JSON file, and populate tech list
  const [myVariable, setMyVariable] = useState('95%');
  
  return (
    <div className='bg-slate-50 font-trispace h-[90vh]'>
      <p className='font-trispace text-xl p-8'>TECH</p>
      

      {/* Frontend Cards */}
      { skillsJson.map(item => {
        return ( item.type === 'Frontend' &&
          <div className='max-w-fit bg-gray-100 p-5 rounded-xl m-3'>
            {/* Name */}
            <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
              { item.name }
            </div>
            {/* Bar */}
            <div className="mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className={`bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-[${item.confidence}]`}></div>
            </div>
            {/* Type */}
            <div className="font-xs text-gray-700 dark:text-gray-500">
              { item.type } | { item.confidence } 
            </div>
          </div>
        )
      }) }
      
      <div className='flex justify-evenly items-center'>
        {/* <div className=''>
          <Doughnut data={data}></Doughnut>
        </div> */}

        <div>
          {/* Card */}
          <a className="mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
          </a>
          {/* Card */}
          <a className="mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BACK-END</h5>
              <div className='font-normal text-gray-700 dark:text-gray-400'>
                <p>Java</p>
                <p>Spring Boot</p>
                <p>Python</p>
                <p>C++</p>
                <p>C</p>
              </div>
          </a>
          {/* Card */}
          <a className="mb-3 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DATABASE</h5>
              <div className='font-normal text-gray-700 dark:text-gray-400'>
                <p>MySQL</p>
                <p>Oracle SQL Developer</p>
              </div>
          </a>
        </div>
      
        
        {/* https://www.chartjs.org/docs/latest/getting-started/ */}
        {/* Parallax scrolling */}
      </div>
    </div>
  )
}

export default Tech