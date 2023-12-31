import { motion } from "framer-motion"
import '../App.css';
// import skills from '../data/skills.json';

const skills = [
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
      "name": "SASS",
      "confidence": 20,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/sass.png"
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
      "name": "jQuery",
      "confidence": 30,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Frontend",
      "iconPath": "/MyImages/Tech/jquery.ico"
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
      "confidenceTailwindCSS": "w-[80%]",
      "type": "Backend",
      "iconPath": "/MyImages/Tech/java.png"
  },
  {
      "name": "Spring Boot",
      "confidence": 20,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Backend",
      "iconPath": "/MyImages/Tech/springboot.png"
  },
  {
      "name": "Python",
      "confidence": 20,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Backend",
      "iconPath": "/MyImages/Tech/python.png"
  },
  {
      "name": "C++",
      "confidence": 20,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Backend",
      "iconPath": "/MyImages/Tech/c++.png"
  },
  {
      "name": "C",
      "confidence": 20,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Backend",
      "iconPath": "/MyImages/Tech/c.png"
  },
  {
      "name": "VBA",
      "confidence": 10,
      "confidenceTailwindCSS": "w-[10%]",
      "type": "Backend",
      "iconPath": "/MyImages/Tech/vba.png"
  },
  {
      "name": "MySQL",
      "confidence": 70,
      "confidenceTailwindCSS": "w-[70%]",
      "type": "Database",
      "iconPath": "/MyImages/Tech/mysql.png"
  },
  {
      "name": "Oracle SQL",
      "confidence": 20,
      "confidenceTailwindCSS": "w-[20%]",
      "type": "Database",
      "iconPath": "/MyImages/Tech/oraclesql.png"
  },
  {
      "name": "Visual Studio Code",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/vscode.png"
  }, 
  {
      "name": "IntelliJ IDEA",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/intellijidea.png"
  }, 
  {
      "name": "Eclipse",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/eclipse.png"
  }, 
  {
      "name": "Git",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/git.png"
  }, 
  {
      "name": "Postman",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/postman.png"
  }, 
  {
      "name": "Swagger UI",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/swaggerui.png"
  }, 
  {
      "name": "Chrome DevTools",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/chromedevtools.png"
  }, 
  {
      "name": "WinSCP",
      "confidence": null,
      "confidenceTailwindCSS": null,
      "type": "Tools",
      "iconPath": "/MyImages/Tech/winscp.png"
  }
]

export default function Tech() {
    
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
    <div className='tech-container font-spaceGrotesk pb-5' id='tech'>
      <p className='p-8'>TECH</p>
     
      {/* FRONT-END - Title */}
      <motion.div
        variants={sentence}
        initial='hidden'
        whileInView='visible'
        className='text-2xl p-8'
      >
        {'FRONT-END'.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index}
              variants={letter}
            >{char}</motion.span>
          )
        })}
      </motion.div>
      {/* FRONT-END - Cards */}
      <div className='flex flex-row flex-wrap justify-center mb-28'>
      { skills.map((item, index) => {
        return ( item.type === 'Frontend' &&
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition= {{ duration: 0.1 + index/15 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon */}
            <img className='float-right h-[6vh] w-auto' src={item.iconPath}/>
            
            {/* Card */}
            <div className='shadow-2xl shadow-slate-600 max-w-sm bg-purple-700 p-5 rounded-xl m-3 w-[38vw] sm:w-[20vw]'>
              
              {/* Name */}  
              <div className="text-left mb-1 text-base text-sm sm:font-medium text-gray-100">
                <motion.div
                  variants={sentence}
                  initial='hidden'
                  whileInView='visible'
                  className='flex no-wrap'
                >
                  {  item.name .split('').map((char, index) => {
                    return (
                      <motion.span
                        key={char + '-' + index}
                        variants={letter}
                      >{char}</motion.span>
                    )
                  })}
                </motion.div>
              </div>
              
              {/* Bar */}
              <div className="mb-5 w-full bg-purple-300 rounded-full h-2.5">
                {/* <div className='bg-purple-100 h-2.5 rounded-full w-[25%]'></div> */}
                <div className={`bg-gray-900 h-2.5 rounded-full ${ item.confidenceTailwindCSS }`}></div>
              </div>
            </div>
          </motion.div>
        )
      }) }
      </div>

      {/* BACK-END - Title */}
      <motion.div
        variants={sentence}
        initial='hidden'
        whileInView='visible'
        className='text-2xl p-8'
      >
        {'BACK-END'.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index}
              variants={letter}
            >{char}</motion.span>
          )
        })}
      </motion.div>
      {/* BACK-END - Cards */}
      <div className='flex flex-row flex-wrap justify-center mb-28'>
      { skills.map((item, index) => {
        return ( item.type === 'Backend' &&
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition= {{ duration: 0.1 + index/15 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon */}
            <img className='float-right h-[6vh] w-auto' src={item.iconPath}/>
            
            {/* Card */}
            <div className='shadow-2xl shadow-slate-600 max-w-sm bg-purple-700 p-5 rounded-xl m-3 w-[38vw] sm:w-[20vw]'>
              
              {/* Name */}  
              <div className="text-left mb-1 text-base text-sm sm:font-medium text-gray-100">
                <motion.div
                  variants={sentence}
                  initial='hidden'
                  whileInView='visible'
                  className='flex no-wrap'
                >
                  {  item.name .split('').map((char, index) => {
                    return (
                      <motion.span
                        key={char + '-' + index}
                        variants={letter}
                      >{char}</motion.span>
                    )
                  })}
                </motion.div>
              </div>
              
              {/* Bar */}
              <div className="mb-5 w-full bg-purple-300 rounded-full h-2.5">
                {/* <div className='bg-purple-100 h-2.5 rounded-full w-[25%]'></div> */}
                <div className={`bg-gray-900 h-2.5 rounded-full ${ item.confidenceTailwindCSS }`}></div>
              </div>
            </div>
          </motion.div>
        )
      }) }
      </div>

      {/* DATABASE - Title */}
       <motion.div
        variants={sentence}
        initial='hidden'
        whileInView='visible'
        className='text-2xl p-8'
      >
        {'DATABASE'.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index}
              variants={letter}
            >{char}</motion.span>
          )
        })}
      </motion.div>
      {/* DATABASE - Cards */}
      <div className='flex flex-row flex-wrap justify-center mb-28'>
      { skills.map((item, index) => {
        return ( item.type === 'Database' &&
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition= {{ duration: 0.1 + index/15  }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon */}
            <img className='float-right h-[6vh] w-auto' src={item.iconPath}/>
            
            {/* Card */}
            <div className='shadow-2xl shadow-slate-600 max-w-sm bg-purple-700 p-5 rounded-xl m-3 w-[38vw] sm:w-[20vw]'>
              
              {/* Name */}  
              <div className="text-left mb-1 text-base text-sm sm:font-medium text-gray-100">
                <motion.div
                  variants={sentence}
                  initial='hidden'
                  whileInView='visible'
                  className='flex no-wrap'

                >
                  {  item.name .split('').map((char, index) => {
                    return (
                      <motion.span
                        key={char + '-' + index}
                        variants={letter}
                      >{char}</motion.span>
                    )
                  })}
                </motion.div>
              </div>
              
              {/* Bar */}
              <div className="mb-5 w-full bg-purple-300 rounded-full h-2.5">
                {/* <div className='bg-purple-100 h-2.5 rounded-full w-[25%]'></div> */}
                <div className={`bg-gray-900 h-2.5 rounded-full ${ item.confidenceTailwindCSS }`}></div>
              </div>
            </div>
          </motion.div>
        )
      }) }
      </div>
 
      {/* TOOLS - Title */}
       <motion.div
        variants={sentence}
        initial='hidden'
        whileInView='visible'
        className='text-2xl p-8'
      >
        {'TOOLS'.split('').map((char, index) => {
          return (
            <motion.span
              key={char + '-' + index}
              variants={letter}
            >{char}</motion.span>
          )
        })}
      </motion.div>
      {/* TOOLS - Cards */}
      <div className='flex flex-row flex-wrap justify-center mb-28'>
      { skills.map((item, index) => {
        return ( item.type === 'Tools' &&
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition= {{ duration: 0.1 + index/15  }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Icon */}
            <img className='float-right h-[6vh] w-auto' src={item.iconPath}/>
            
            {/* Card */}
            <div className='shadow-2xl shadow-slate-600 max-w-sm bg-purple-700 p-5 rounded-xl m-3 w-[38vw] sm:w-[20vw]'>
              
              {/* Name */}  
              <div className="text-left mb-1 text-base text-sm sm:font-medium text-gray-100">
                <motion.div
                  variants={sentence}
                  initial='hidden'
                  whileInView='visible'
                  className='flex no-wrap'

                >
                  {  item.name .split('').map((char, index) => {
                    return (
                      <motion.span
                        key={char + '-' + index}
                        variants={letter}
                      >{char}</motion.span>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )
      }) }
      </div>
    </div>
  )
}