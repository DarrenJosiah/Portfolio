import Model from './Model'

export default function Home() {
  return (
    <div className='mx-3 bg-orange-600 h-[90vh]'>
        {/* 3D Model */}
        <Model />

        {/* Description */}
        <div className='w-[25rem] text-gray-50 flex flex-col items-start relative bottom-[11.5rem] left-[2rem] sm:left-[4.5rem]'>
          <p className='font-trispace'>Hi, I am</p>
          <p className='text-6xl sm:text-7xl h-[4.5rem] font-bold authorNameList'>
            <span className='authorName'>Darren Chua</span>
            <span className='authorName'>蔡育贤</span>
            <span className='authorName'>ダーレン</span>
            <span className='authorName'>Darren Chua</span>
          </p>
          <p className='font-trispace text-left w-[80vw] sm:w-auto'>a Frontend Developer based in Singapore trained in Fullstack</p>
        </div>
    </div>
  )
}