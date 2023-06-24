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

function App() {
  return (
    <div className="App font-shareTech m-3">
      <Navbar/>
      <Home />
      <Tech />
      <Education />
      <Experience />
      {/* <Works /> */}
      {/* // TODO - ParticleJS */}
      {/* TODO - Parallex scroll effect */}
      <AboutMe />
      <Connect />
    </div>
  );
}

export default App;
