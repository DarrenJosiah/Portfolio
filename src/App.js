import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Education1 from './components/Education1';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Connect from './components/Connect';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App font-shareTech w-[100vw] overflow-x-hidden">
      <Navbar/>
      <Home />
      <Tech />
      <Experience />
      {/* <AboutMe /> maybe remove it */}
      {/* <Projects /> */}
      <Connect />
      <Footer />

    {/* <Education1 /> this has perspective */}
      {/* https://framerbook.com/animation/example-animations/26-tracking-the-cursor/ */}
      {/* // TODO - ParticleJS */}
    </div>


    // <div className="App font-shareTech h-screen overflow-y-scroll snap-proximity snap-y">
    //   <section className='h-auto snap-start'>
    //     <Navbar/>
    //     <Home />
    //   </section>
     
    //   <section className='h-auto snap-start'>
    //     <Tech/>
    //   </section>
    //   <section className='h-auto snap-start'>
    //     <Experience/>
    //   </section>
    //   <section className='h-auto snap-start'>
    //     {/* <AboutMe /> */}
    //     <Connect />
    //     <Footer />
    //   </section>
    // </div>
  );
}