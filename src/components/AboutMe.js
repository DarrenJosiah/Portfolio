import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function AboutMe() {
  return (
    <div className='about-me-container h-auto font-spaceGrotesk'>
      
      {/* Headings */}
      <p className='p-8'>ABOUT THE DEVELOPER</p>

      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: '/MyImages/portrait.jpeg', speed: -15 }]}
          className="aspect-[2/1]"
        />
      </ParallaxProvider>
      
      {/* Description */}
      <div className='mt-8 mx-24'>
        <div className='p-4'>Darren has 1 year of working experience as a Frontend Developer, who enjoys solving real world challenges and embracing technological innovations.</div>
        <div className='p-4'>He keeps his mind active by learning advanced Spanish and intermediate Japanese on a daily basis.</div>
        <div className='p-4'>
          As a creative individual,
          Darren engages in different domains during his free time.
          He is active in sports (running, inline-skating, skateboarding, kayaking, fencing),
          dance (breakdance, hip-hop, kpop, tricking/flips),  
          playing musical instruments (piano, guitar, ukulele, bass, drums), 
          and photography and videography editing.
        </div>
        <div className='p-4 pb-20'>
          The developer has an interest in Animes, Kpop, Studio Ghibli, Cars, Games, Samoyeds and British Shorthair Tabbies
        </div>
      </div>
    </div>
  )
}