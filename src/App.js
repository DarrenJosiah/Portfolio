import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Tech from './components/Tech';
import Experience from './components/Experience';
import Works from './components/Works';
import Connect from './components/Connect';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-shareTech sm:m-3 sm:mb-0">
      <Navbar/>
      <Home />
      <Tech />
      <Education />
      <Experience />
      <Works />
      {/* // TODO - ParticleJS */}
      {/* TODO - Parallex scroll effect */}
      {/* TODO - div tilts changes with mouse
        https://framerbook.com/animation/example-animations/26-tracking-the-cursor/
       */}

      <AboutMe />
      <Connect />
      <p className='text-white bg-black font-spaceGrotesk'>DARREN JOSIAH CHUA YU XIAN © 2023</p>
      <div style={{ width: '100%', overflow: 'hidden' }}>
    </div>
    </div>
  );
}

export default App;
