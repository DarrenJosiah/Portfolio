import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Tech from './components/Tech';
import Works from './components/Works';
import Connect from './components/Connect';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Play from './components/Play';

function App() {
  return (
    <div className="App font-shareTech w-[100vw]">
      <Play />
      {/* <Navbar/> */}
      {/* <Home /> */}
      {/* <Tech /> */}
      <Education />
      {/* <Works /> */}
      {/* // TODO - ParticleJS */}
      {/* TODO - Parallex scroll effect */}
      {/* TODO - div tilts changes with mouse
        https://framerbook.com/animation/example-animations/26-tracking-the-cursor/
       */}

      {/* <AboutMe /> */}
      {/* <Connect /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
