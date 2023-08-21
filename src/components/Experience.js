import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CustomExperienceCard from './CustomExperienceCard'
import Spline from '@splinetool/react-spline';

export default function Experience() {
  return (
    <div className='experience-container h-[100vh]' id='experience'>
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

          {/* Page 0 - Rocket */}
          <ParallaxLayer offset={0} speed={0.5} className='flex items-center justify-center ms-24'>
            {/* <p className='text-7xl -rotate-45'>🚀</p> */}
            <Spline className='ms-10 sm:ms-24' scene="https://prod.spline.design/xoUr7qoY48j3Nnag/scene.splinecode" />
          </ParallaxLayer>
  
          {/* Page 1 - Sticky - Ernst & Young Description */}
          <ParallaxLayer sticky={{ start: 1, end: 1.7 }} className='flex items-center justify-start'>
            <CustomExperienceCard 
              title='Frontend Developer'
              organisation='Ernst & Young'
              date='SEP 2023'
            />
          </ParallaxLayer>

          {/* Page 1 - Sticky - Ernst & Young Image */}
          <ParallaxLayer sticky={{ start: 1.4, end: 1.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/ey.png' className='h-fill w-[15%] mr-12 sm:mr-12 md:mr-12 lg:mr-32'></img>
          </ParallaxLayer>
          
          {/* Page 2 - Sticky - Avensys Consulting Description */}
          <ParallaxLayer sticky={{ start: 2, end: 2.7 }} className='flex items-center justify-start'>
            <CustomExperienceCard 
                title='Frontend Developer (Angular)'
                organisation='Avensys Consulting'
                date='SEP 2022 - AUG 2023'
                description1='1 Year Contract'
              />
          </ParallaxLayer>

          {/* Page 2 - Sticky - Avensys Consulting Image */}
          <ParallaxLayer sticky={{ start: 2.4, end: 2.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/avensys.svg' className='h-fill w-[25%] mr-8 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
  
          {/* Page 3 - Certification */}
          <ParallaxLayer sticky={{ start: 4, end: 4.7 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>CERTIFICATION</p>
            </div>
          </ParallaxLayer>

          {/* Page 3 - Studying */}
          <ParallaxLayer offset={4.2} speed={0.5} className='flex items-center justify-center ms-28'>
            {/* <p className='text-7xl rotate-90'>👨🏻‍💻</p> */}
            <Spline className='ms-6 sm:ms-24' scene="https://prod.spline.design/66FwbbgkPvgY2i8L/scene.splinecode" />
          </ParallaxLayer>
  
          {/* Page 5 - Sticky - JFS Description */}
          <ParallaxLayer sticky={{ start: 5, end: 5.7 }} className='flex items-center justify-start'>
            <CustomExperienceCard 
              title='Full Stack Development (Java)'
              date='ISSUED AUG 2022'
              description1='2 months course on Java MVC, MySQL, basic Angular and Spring Boot'
              description2='Capstone Project - Developed Car Management System'
            />
          </ParallaxLayer>

          {/* Page 5 - Sticky - JFS Image */}
          <ParallaxLayer sticky={{ start: 5.4, end: 5.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/certificate.png' className='h-fill w-[25%] mr-8 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>

          {/* Page 7 - Experience */}
          <ParallaxLayer sticky={{ start: 7, end: 7.8 }} className='flex items-center justify-center'>
            <div className={`flex justify-center items-center text-center rounded-xl`}>
              <p className='text-2xl'>EDUCATION</p>
            </div>
          </ParallaxLayer>

          {/* Page 7 - Graduation Hat */}
          <ParallaxLayer offset={7.2} speed={0.5} className='flex items-center justify-center ms-28'>
            {/* <p className='text-7xl rotate-45'>🎓</p> */}
            <Spline className='ms-4 sm:ms-24' scene="https://prod.spline.design/dfhiLeKnWu3Dy1rn/scene.splinecode" />
          </ParallaxLayer>
  
          {/* Page 9 - Sticky - RMIT Description */}
          <ParallaxLayer sticky={{ start: 8, end: 8.7 }} className='flex items-center justify-start'>
            <CustomExperienceCard 
              title='Bachelor of Business Management'
              date='2020-2021'
              description1='Studied Information System, Statistics, Stakeholders Management, Ethics'
            />
          </ParallaxLayer>

          {/* Page 9 - Sticky - RMIT Image */}
          <ParallaxLayer sticky={{ start: 8.4, end: 8.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/rmit.png' className='h-fill w-[25%] mr-8 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>
          
          {/* Page 10 - Sticky - SP Description */}
          <ParallaxLayer sticky={{ start: 9.2, end: 9.7 }} className='flex items-center justify-start'>
            <CustomExperienceCard 
              title='Diploma in Computer Engineering'
              date='2014-2017'
              description1='Developed foundation in C++, C, and Java'
              description2='3rd Prize in SP Software & Product Design Contest 2016'
              description3="Invented 'Automated Bookshelf' by utilizing Arduino, Raspberry Pi, MakerBot, and IoT for Final Year Project"
            />
          </ParallaxLayer>

          {/* Page 10 - Sticky - SP Image */}
          <ParallaxLayer sticky={{ start: 9.4, end: 9.7 }} className='flex items-center justify-end'>
              <img src='/MyImages/Experience/sp.png' className='h-fill w-[25%] mr-6 sm:mr-8 md:mr-8 lg:mr-32'></img>
          </ParallaxLayer>

          {/* Page 11 - Spline */}
          {/* <ParallaxLayer sticky={{ start: 10, end: 11 }} className='flex items-center justify-end'> */}
            {/* Objects: https://app.spline.design/library */}
            {/* <Spline scene="https://prod.spline.design/ZW2z8ZdLvLcae643/scene.splinecode" /> */}
          {/* </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}