import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// My own Tailwind and React version of:
// https://codesandbox.io/s/3hsg6?file=/src/styles.module.css

function SpringParallaxSticky() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    return (
        <div>
            {/* Fixed background */}
            <div className='bg-green-100 absolute top-[0] bottom-[0] right-[0] left-[0] w-[100vw] h-[100vh]' />

            {/* Foreground / Content */}
            <Parallax pages={5}>
                
                {/* 1. */}
                <ParallaxLayer offset={0} speed={0.5} className='flex items-center justify-center'>
                <p>Scroll down</p>
                </ParallaxLayer>
        
                {/* Sticky */}
                <ParallaxLayer sticky={{ start: 1, end: 3 }} className='flex items-center justify-start'>
                <div className={`flex justify-center items-center h-[10rem] w-[25%] text-center rounded-xl bg-pink-100 ms-32`}>
                    <p>I'm a sticky layer</p>
                </div>
                </ParallaxLayer>
        
                {/* 2. */}
                <ParallaxLayer offset={1.5} speed={1.5} className='flex items-center justify-end'>
                <div className={`flex justify-center items-center h-[10rem] w-[25%] text-center rounded-xl bg-purple-100 mr-32`}>
                    <p>I'm not</p>
                </div>
                </ParallaxLayer>
        
                {/* 3. */}
                <ParallaxLayer offset={2.5} speed={1.5} className='flex items-center justify-end'>
                <div className={`flex justify-center items-center h-[10rem] w-[25%] text-center rounded-xl bg-blue-100 mr-32`}>
                    <p>Neither am I</p>
                </div>
                </ParallaxLayer>
            </Parallax>
        </div>
      )
}

export default SpringParallaxSticky