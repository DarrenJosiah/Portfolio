import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Experience() {
  return (
    <div className='experience-container h-[100vh]'>
      {/* Fixed background */}
      <div className='experience-container font-spaceGrotesk absolute w-[100vw] h-[100vh]'/>

      {/* Foreground / Content */}
      <Parallax pages={11}>
          
          {/* Page 0 - Experience */}
          <ParallaxLayer sticky={{ start: 0, end: 0.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>EXPERIENCE</p>
            </div>
          </ParallaxLayer>

    {/* //     <ParallaxLayer offset={0} speed={0.05} sticky={{ start: 0, end: 0 }}> */}
    {/* //       <p className='p-8 top-10 text-left'>EXPERIENCE</p> */}
    {/* //     </ParallaxLayer> */}

          {/* Page 0 - Spaceship */}
          <ParallaxLayer offset={0} speed={0.5} className='flex items-center justify-center ms-24'>
            <p className='text-7xl -rotate-45'>🚀</p>
          </ParallaxLayer>
  

          {/* Page 1 - Sticky - Ernst & Young Description */}
          <ParallaxLayer sticky={{ start: 1, end: 1.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">SEP 2023</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Frontend Developer</h5>
                <p className="mb-3 font-normal text-gray-300">Ernst & Young</p>
            </div>
          </ParallaxLayer>

          {/* Page 1 - Sticky - Ernst & Young Image */}
          <ParallaxLayer sticky={{ start: 1.4, end: 1.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/ey.png' className='h-fill w-[15%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
          
          {/* Page 2 - Sticky - Avensys Consulting Description */}
          <ParallaxLayer sticky={{ start: 2, end: 2.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">SEP 2022 - AUG 2023</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Frontend Developer (Angular)</h5>
                <p className="mb-3 font-normal text-gray-300">Avensys Consulting</p>
                <p className="mb-3 font-normal text-gray-300">1 Year Contract</p>
            </div>
          </ParallaxLayer>

          {/* Page 2 - Sticky - Avensys Consulting Image */}
          <ParallaxLayer sticky={{ start: 2.4, end: 2.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/avensys.svg' className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
  





         
          {/* Page 3 - Certification */}
          <ParallaxLayer sticky={{ start: 4, end: 4.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>CERTIFICATION</p>
            </div>
          </ParallaxLayer>

          {/* Page 3 - Studying */}
          <ParallaxLayer offset={4.2} speed={0.5} className='flex items-center justify-center ms-28'>
            <p className='text-7xl rotate-90'>👨🏻‍💻</p>
          </ParallaxLayer>
  

          {/* Page 5 - Sticky - JFS Description */}
          <ParallaxLayer sticky={{ start: 5, end: 5.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">ISSUED AUG 2022</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Full Stack Development (Java)</h5>
                <p className="mb-3 font-normal text-gray-300">2 months course on Java MVC, MySQL, basic Angular and Spring Boot</p>
                <p className="mb-3 font-normal text-gray-300">Capstone Project - Developed Car Management System</p>
            </div>
          </ParallaxLayer>

          {/* Page 5 - Sticky - JFS Image */}
          <ParallaxLayer sticky={{ start: 5.4, end: 5.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/certificate.png' className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>







          {/* Page 7 - Experience */}
          <ParallaxLayer sticky={{ start: 7, end: 7.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>EDUCATION</p>
            </div>
          </ParallaxLayer>

          {/* Page 7 - Graduation Hat */}
          <ParallaxLayer offset={7.2} speed={0.5} className='flex items-center justify-center ms-28'>
            <p className='text-7xl rotate-45'>🎓</p>
          </ParallaxLayer>
  

          {/* Page 9 - Sticky - RMIT Description */}
          <ParallaxLayer sticky={{ start: 8, end: 8.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">2020-2021</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Bachelor of Business Management</h5>
                <p className="mb-3 font-normal text-gray-300">Studied Information System, Statistics, Stakeholders Management, Ethics</p>
            </div>
          </ParallaxLayer>

          {/* Page 9 - Sticky - RMIT Image */}
          <ParallaxLayer sticky={{ start: 8.4, end: 8.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/rmit.png' className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
          
          {/* Page 10 - Sticky - SP Description */}
          <ParallaxLayer sticky={{ start: 9.1, end: 9.7 }} className='flex items-center justify-start'>
            <div className={`flex flex-col justify-center items-center h-[auto] w-[50vw] p-4 sm:p-0 text-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 ms-12 sm:ms-32 shadow-2xl shadow-slate-600`}>
                <p className="mt-5 mb-1 font-normal text-gray-300">2014-2017</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">Diploma in Computer Engineering</h5>
                <p className="mb-3 font-normal text-gray-300">Developed foundation in C++, C, and Java</p>
                <p className="mb-3 font-normal text-gray-300">3rd Prize in SP Software & Product Design Contest 2016</p>
                <p className="mb-3 font-normal text-gray-300">Invented 'Automated Bookshelf' by utilizing Arduino, Raspberry Pi, MakerBot, and IoT for Final Year Project</p>
            </div>
          </ParallaxLayer>

          {/* Page 10 - Sticky - SP Image */}
          <ParallaxLayer sticky={{ start: 9.4, end: 9.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/sp.png' className='h-fill w-[25%] mr-12 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
      </Parallax>
    </div>
  )
}