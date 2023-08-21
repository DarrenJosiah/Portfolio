import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

export default function AboutMe() {
  return (
    <div className='about-me-container h-auto font-spaceGrotesk' id='aboutme'>
      
      {/* Headings */}
      <p className='p-8'>ABOUT THE DEVELOPER</p>
      
      <div className='sm:px-[20vw] md:px-[25vw] lg:px-[30vw] xl:px-[35vw]'>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: '/MyImages/AboutMe/portrait.jpeg', speed: -15 }]}
            className="aspect-[2/1]"
          />
        </ParallaxProvider>
      </div>
      
      {/* Description */}
      <div className='mt-8 mx-10 sm:mx-20 md:mx-30 lg:mx-40 text-sm'>
        <div className='p-4'>Darren has 1 year of working experience as a Frontend Developer, who enjoys solving real world challenges and embracing technological innovations.</div>
        <div className='p-4'>He keeps his mind active by learning advanced Spanish and intermediate Japanese on a daily basis.</div>
        <div className='p-4'>
          As a creative individual,
          Darren engages in various activities across different domains during his free time.
          He actively participates in sports (running, inline-skating, skateboarding, kayaking, fencing),
          dance (breakdance, hip-hop, kpop, tricking/flips),  
          playing musical instruments (piano, guitar, ukulele, bass, drums), 
          and photography and videography editing.
        </div>
        <div className='p-4 pb-20'>
          Also, the developer shares interest in Kpop, Anime, Studio Ghibli, Cars, Games, furry friends like Alpacas, Samoyeds and British Shorthair Tabbies
        </div>
      </div>
    </div>
  )
}