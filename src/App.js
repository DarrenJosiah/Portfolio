import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
// import Education1 from './components/Education1';
import Tech from './components/Tech';
import Works from './components/Works';
import Connect from './components/Connect';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Play from './components/Play';
import SpringParallaxSticky from './components/SpringParallaxSticky';

function App() {
  return (
    <div className="App font-shareTech w-[100vw]">

      <Navbar/>
      <Home />
      <Tech />
      {/* <SpringParallaxSticky /> */}
      <Play />
      {/* <Education1 /> this has perspective */}
      {/* <Education /> */}
      <Works />
      {/* // TODO - ParticleJS */}
      {/* TODO - Parallex scroll effect */}
      {/* TODO - div tilts changes with mouse
        https://framerbook.com/animation/example-animations/26-tracking-the-cursor/
       */}

      <AboutMe />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
