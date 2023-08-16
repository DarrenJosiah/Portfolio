import React from 'react'
import Particle from './Particle'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function AboutMe() {
  return (

    // TODO Particles JS

    <div className='about-me-container h-auto font-spaceGrotesk'>

      <p className='p-8'>ABOUT THE DEVELOPER</p>

      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: './MyImages/casual.jpeg', speed: -15 }]}
          className="aspect-[2/1]"
        />
      </ParallaxProvider>
      
      {/* Description */}
      <div className='p-4 px-24'>Darren has 1 year of working experience as a Frontend Developer, who enjoys solving real world challenges and embracing technological innovations.</div>
      <div className='p-4 px-24'>He keeps his mind active by learning advanced Spanish and intermediate Japanese daily.</div>
      <div className='p-4 px-24'>
        As a creative individual,
        Darren engages in different domains during his free time.
        He is active in sports (running, inline-skating, skateboarding, kayaking, fencing),
        dance (breakdance, hip-hop, kpop, tricking/flips),  
        playing musical instruments (piano, guitar, ukulele, bass, drum), 
        and photography, videography editing.
      </div>
      <div className='p-4 px-24 pb-8'>
        The developer has interest in Animes, Kpop, Studio Ghibli, Cars, Games, Samoyeds and British Shorthair Tabbies
      </div>
    </div>
  )
}