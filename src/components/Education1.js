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
        
      </div>
    </div>
  )
}

export default Education