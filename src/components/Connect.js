import React from 'react'
import { motion } from "framer-motion"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Connect() {
  // Drawing animation
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  // Text animation
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.07,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    // sm:flex-row = other than sm devices
    <div className='tech-container font-spaceGrotesk h-auto pb-5 flex flex-row items-center'>
    
      {/* Title */}
      <motion.div
        variants={sentence}
        initial='hidden'
        whileInView='visible'
        className='text-lg md:text-2xl  p-16 w-1/2 text-center'
      >
        {'CONNECT WITH ME'.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index}
              variants={letter}
            >{char}</motion.span>
          )
        })}
      </motion.div>

      <div className='flex flex-row w-1/2 items-center'>
        {/* Drawing animation */}
        <div className='w-1/2'>
          <motion.svg
            viewBox="0 0 600 600"
            initial="hidden"
            whileInView="visible"
          >
          <motion.line
              x1="220"
              y1="230"
              x2="360"
              y2="370"
              stroke="#000"
              custom={1}
              variants={draw}
            />
          <motion.line
              x1="220"
              y1="370"
              x2="360"
              y2="230"
              stroke="#000"
              custom={2}
              variants={draw}
            />
          </motion.svg>
        </div>
        
        {/* Connect Icons */}
        <div className='md:text-4xl w-1/2 text-start'>

          {/* Github */}
          <motion.div
              initial={{ opacity: 0, x: 100, y: -30 }}
              whileInView={{ opacity: 1, x: 0,  y: 0 }}
              transition= {{ duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='flex flex-nowrap items-center'
            >
            <FontAwesomeIcon icon={faGithub} className='mx-2' />
            <span className='sm:text-lg font-light'>
              <a href="https://github.com/DarrenJosiah/" target="_blank" className='underlining ms-2 hover:font-medium'>GITHUB</a>
            </span>
          </motion.div>
          
          {/* Linkedin */}
          <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition= {{ duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='flex flex-nowrap items-center'
            >
            <FontAwesomeIcon icon={faLinkedin} className='mx-2' />
            <span className='sm:text-lg font-light'>
              <a href="https://www.linkedin.com/in/darren-chua-yu-xian/" target="_blank" className='underlining ms-2 hover:font-medium'>LINKEDIN</a>
            </span>
          </motion.div>
          
          {/* Email */}
          <motion.div
              initial={{ opacity: 0, x: 100, y: 30 }}
              whileInView={{ opacity: 1, x: 0,  y: 0 }}
              transition= {{ duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className='flex flex-nowrap items-center'
            >
            <FontAwesomeIcon icon={faEnvelope} className='mx-2' />
            <span className='sm:text-lg font-light'>
              <a href="mailto:darrenjosiah@gmail.com?subject=Interest To Connect&body=Hi Darren!" target="_blank" className='underlining ms-2 hover:font-medium'>EMAIL</a>
            </span>
          </motion.div>
        
        </div>
      </div>
    </div>
  )
}

export default Connect