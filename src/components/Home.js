import React from 'react'
import Model from './Model'


function Home() {
  return (
    <div className='mx-3 bg-orange-600 h-[90vh]'>
        {/* 3D model */}
        <Model />

        {/* Description */}
        <div className='w-[25rem] text-gray-50 flex flex-col items-start absolute bottom-20 left-10 sm:left-20'>
          <p className='font-trispace'>Hi, I am</p>
          <p className='text-7xl h-[4.5rem] font-bold authorNameList'>
            <span className='authorName'>Darren Chua</span>
            <span className='authorName'>蔡育贤</span>
            <span className='authorName'>ダーレン</span>
            <span className='authorName'>Darren Chua</span>
          </p>
          <p className='font-trispace text-left'>a Frontend Developer based in Singapore trained in Fullstack</p>
        </div>
    </div>
  )
}

export default Home